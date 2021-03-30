**free

// pinc checkin api
//
// Mike Corbo
// 01/05/21
//
// In order to be able to call the included modules, must be compiled as follows:
//
// CRTSQLRPGI OBJ(PINC_API/CHECKIN) SRCFILE(PINC_API/QRPGLESRC) SRCMBR(CHECKIN) OBJTYPE(*MODULE)
//
// CRTPGM PGM(PINC_API/CHECKIN) BNDSRVPGM((PINC_API/PINCMODS))  or UPDPGM PGM(PINC_API/CHECKIN) MODULE(CHECKIN)
//

ctl-opt BNDDIR('YAJL72/YAJL');

dcl-f pincfacl01 keyed usage(*input) extfile('PINC_API/PINCFACL01');

dcl-pr checkin extpgm('CHECKIN');
   *n likeds(yard_ds);
END-PR;
dcl-pi checkin;
   FileData likeds(yard_ds);
END-PI;

dcl-ds yard_ds extname('YDFILE3/YARD');
END-DS;

// procedure definitions for PINCMODS
dcl-pr  convertpincdate char(26);
   *n timestamp(0);
END-PR;
dcl-pr  LookupRFID char(24);
   *n char(6);
END-PR;

// json array for api parameters
dcl-ds checkin_ds qualified;
  event varchar(50) inz('yardhound.import_events.checkin');
  time char(25);  //timestamp
  version char(3) inz('1.3');
  campus char(6) inz('NRSNBR');       // this is only for NB Yard
  dcl-ds data;
    dcl-ds asset;
      checked_in char(25); //timestamp
      asset_type varchar(25);
      rfid_tag varchar(25);
      site_code varchar(25);
      SCAC char(4);
      name_SCAC varchar(50) inz('Trailer SCAC');    // rename json field to pinc name
      trailer varchar(25);
      name_trailer varchar(50) inz('Trailer #');    // rename json field to pinc name
      container_number varchar(25);
      movement_type varchar(25);
      load_status varchar(25);
      customer_code varchar(25);
      fleet_code varchar(25);
      tractor_scac varchar(25);
    END-DS;
  END-DS;
END-DS;

dcl-s currentstmp timestamp(0);
dcl-s checkinstmp timestamp(0);

// array for data que
dcl-ds dataque_data qualified;
   api_name char(25) inz('checkin');
   json_data char(500);
   data char(1024) pos(1);
END-DS;
dcl-s cmpus char(6);
dcl-s sitecd char(9);

exec sql set option commit = *NONE;

 eval-corr yard_ds = filedata;
// get campus and sitecodes
//exec sql select  pinccampus, pincsitecd into :cmpus, :sitecd
//  from pincfacl where nrsfacl = :filedata.facl#y;
chain facl#y pincfacl01;
cmpus = pinccampus;
sitecd = pincsitecd;
// get current timestamp for api record and convert to pinc format
currentstmp = %timestamp(*SYS:0);
checkin_ds.time = convertpincdate(currentstmp);
checkin_ds.campus = cmpus;

// process ADD records from YARDLG (trigger program)
  clear checkin_ds.data.asset;
  checkin_ds.data.asset.name_SCAC = 'Trailer SCAC';
  checkin_ds.data.asset.name_trailer = 'Trailer #';
  //checkin_ds.data.asset.site_code = 'NRSNBRYRD';
  checkin_ds.data.asset.site_code = sitecd;
  exec sql select timestamp_format((substr(digits(:inbdty),2,6)||digits(:inbtmy)),'yymmddhh24mi',0)
      into :checkinstmp from sysibm.sysdummy1;
  checkin_ds.data.asset.checked_in = convertpincdate(checkinstmp);
       select;
         when etypey = 'C';
           checkin_ds.data.asset.asset_type = 'Container';
           checkin_ds.data.asset.container_number = %trim(carrcy) + %trim(equipy);
         when etypey = 'T';
           checkin_ds.data.asset.asset_type = 'Trailer';
           checkin_ds.data.asset.scac = carrcy;
           checkin_ds.data.asset.trailer = equipy;
         when etypey = 'R';
          checkin_ds.data.asset.asset_type = 'Railbox';
           checkin_ds.data.asset.scac = carrcy;
           checkin_ds.data.asset.trailer = equipy;
       ENDSL;
       checkin_ds.data.asset.rfid_tag = lookuprfid(rftagy);
       if   checkin_ds.data.asset.rfid_tag = 'ERROR';
         checkin_ds.data.asset.rfid_tag = *blanks;
       ENDIF;
       select;
         when instsy = 'LD';
           checkin_ds.data.asset.load_status = 'Loaded';
           checkin_ds.data.asset.movement_type = 'Inbound';
         when instsy = 'MT';
           checkin_ds.data.asset.load_status = 'Empty';
           checkin_ds.data.asset.movement_type = 'Outbound';
         when instsy = 'ST';
           checkin_ds.data.asset.load_status = 'Empty';
           checkin_ds.data.asset.movement_type = 'Storage';
         when instsy = 'HL';
           checkin_ds.data.asset.load_status = 'Empty';
           checkin_ds.data.asset.movement_type = 'Hold';
         when instsy = 'OS';
           checkin_ds.data.asset.load_status = 'Empty';
           checkin_ds.data.asset.movement_type = 'OutOfSerice';
         when instsy = 'FS';
           checkin_ds.data.asset.load_status = 'Empty';
           checkin_ds.data.asset.movement_type = 'ForSale';
         other;
           checkin_ds.data.asset.load_status = 'Loaded';
           checkin_ds.data.asset.movement_type = 'Inbound';
       ENDSL;
     if incusy <> *blanks;
       checkin_ds.data.asset.customer_code = incusy;
     ENDIF;
     if fleety <> *blanks;
       checkin_ds.data.asset.fleet_code = fleety;
     ENDIF;
     if ibcary <> *blanks;
       checkin_ds.data.asset.tractor_scac = ibcary;
     ENDIF;

    // convert data structure to json array
     DATA-GEN checkin_ds %DATA( dataque_data.json_data : 'renameprefix=name_')
         %gen('YAJL72/YAJLDTAGEN');
     //DATA-GEN checkin_ds %DATA( dataque_data.json_data)
     //    %gen('YAJL72/YAJLDTAGEN');

    // write json to dataq  for api call
    exec sql call qsys2.send_data_queue(:dataque_data.data,'PINCAPIOUT','PINC_API');

   exec sql insert into pinc_api.pincapilog
     (lgstamp, lgapiname, lgtrailer, lgscac, lgetype,lgrfid, lgfacl)
     values (:checkinstmp, :carrcy, :equipy, :etypey, :rftagy, :facl#y);
//    Exec sql fetch from C1 into :yardlg_ds;
//  ENDDO;
//  EXEC SQL close c1;

*inlr = *on;





 