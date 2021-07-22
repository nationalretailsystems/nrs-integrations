**free

// pinc checkin api
//
// Mike Corbo
// 01/05/21
//
// In order to be able to call the included modules, must be compiled as follows:
//
// CRTSQLRPGI OBJ(PINC_API/CHECKINX)                                         
//           SRCSTMF('/QOpenSys/opt/eradani/nrs-poc/qsys/checkinX.sqlrpgle') 
//           OBJTYPE(*MODULE)                                                
//
// CRTPGM PGM(PINC_API/CHECKINX) BNDSRVPGM((PINC_API/PINCMODS))  
//

ctl-opt BNDDIR('YAJL72/YAJL');

dcl-f pincfacl01 keyed usage(*input) extfile('PINC_API/PINCFACL01');

dcl-pr checkin extpgm('CHECKINX');
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

// Include EccSndReq & EccRcvReq prototypes                 
/include /QOpenSys/opt/eradani/nrs-poc/qsys/ecnctc.rpgleinc 

// Include data structs and buffer conversion prototypes       
/include /QOpenSys/opt/eradani/nrs-poc/qsys/pncchkin_h.rpgleinc

dcl-ds checkin_ds likeds(CheckinDS);
dcl-ds eccresult_ds likeds(EccResult);

dcl-s command char(32);
dcl-s datalen packed(5);
dcl-s databuf char(1024);
dcl-s waittm packed(5) inz(10);
dcl-s reqkey char(6);
dcl-s eod ind;
dcl-s eoa ind;
dcl-s nodata ind;

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
chain facl#y pincfacl01;
cmpus = pinccampus;
sitecd = pincsitecd;
// get current timestamp for api record and convert to pinc format

checkin_ds.campus = cmpus;

// process ADD records from YARDLG (trigger program)
  clear checkin_ds;                   
  checkin_ds.msg_grp_id = 'checkin';  
  checkin_ds.campus = cmpus;          
  checkin_ds.version = '1.3';         
  currentstmp = %timestamp(*SYS:0);                    
  checkin_ds.time = convertpincdate(currentstmp);      
  checkin_ds.event = 'yardhound.import_events.checkin';
    // checkin_ds.data.asset.name_SCAC = 'Trailer SCAC';
  // checkin_ds.data.asset.name_trailer = 'Trailer #';

  checkin_ds.data.asset.site_code = sitecd;
  exec sql select timestamp_format((substr(digits(:inbdty),2,6)||digits(:inbtmy)),'yymmddhh24mi',0)
      into :checkinstmp from sysibm.sysdummy1;
	  
  checkin_ds.data.asset.checked_in = convertpincdate(checkinstmp);
       select;
         when etypey = 'C';
           checkin_ds.data.asset.asset_type = 'Container';
           checkin_ds.data.asset.container_num = %trim(carrcy) + %trim(equipy);
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

     // Send data structure to JavaScript
     command = 'pinc.checkin';
     datalen = CheckinDSLen
     CheckinDSToBuf(checkin_ds:databuf);

      // Send request
      EccSndReq(command:datalen:databuf:reqkey);

      datalen = EccResultLen;
      databuf = '';
      EccRcvRes(waittm:reqkey:eod:eoa:nodata:datalen:databuf);

      if (eod and eoa and nodata);
        dsply ('Timeout Waiting On Response: ' + reqkey);
        Return;
      ENDIF;


      // Check the result
      BufToEccResult(databuf:eccresult_ds);

      if eccresult_ds.MsgId <> 'ECC0000';
        dsply 'Failure calling command pinc.checkin'
        Return;
      ENDIF;

    // convert data structure to json array
    // DATA-GEN checkin_ds %DATA( dataque_data.json_data : 'renameprefix=name_')
    //     %gen('YAJL72/YAJLDTAGEN');
     //DATA-GEN checkin_ds %DATA( dataque_data.json_data)
     //    %gen('YAJL72/YAJLDTAGEN');

    // write json to dataq  for api call
    // exec sql call qsys2.send_data_queue(:dataque_data.data,'PINCAPIOUT','PINC_API');

   // exec sql insert into pinc_api.pincapilog
   //   (lgstamp, lgapiname, lgtrailer, lgscac, lgetype,lgrfid, lgfacl)
   //   values (:checkinstmp, :carrcy, :equipy, :etypey, :rftagy, :facl#y);
//    Exec sql fetch from C1 into :yardlg_ds;
//  ENDDO;
//  EXEC SQL close c1;

*inlr = *on;






