**free                                                                         
                                                                               
// pinc checkout api                                                           
//                                                                             
// Mike Corbo                                                                  
// 01/05/21                                                                    
//                                                                             
// In order to be able to call the included modules, must be compiled as follow
//                                                                             
// CRTSQLRPGI OBJ(PINC_API/CHECKOUTX)                                          
//           SRCSTMF('/QOpenSys/opt/eradani/nrs-poc/qsys/checkoutX.sqlrpgle')  
//           OBJTYPE(*MODULE)                                                  
//                                                                             
//  CRTPGM PGM(PINC_API/CHECKOUTX) BNDSRVPGM((PINC_API/PINCMODS)               
//  CRTPGM PGM(PINC_API/CHECKOUTX) BNDSRVPGM((PINC_API/PINCMODS)       
//            (ECNCTAPP/ECCTMPGEN) (ECNCT/ECNCTC))                     
//                                                                     
                                                                       
ctl-opt; //  BNDDIR('YAJL72/YAJL');                                    
                                                                       
dcl-f pincfacl01 keyed usage(*input) extfile('PINC_API/PINCFACL01');   
                                                                       
dcl-pr checkout extpgm('CHECKOUTX');                                   
   *n likeds(yard_ds);                                                 
END-PR;                                                                
dcl-pi checkout;                                                       
   FileData likeds(yard_ds);                                           
END-PI;                                                                
                                                                           
dcl-ds yard_ds extname('YDFILE3/YARDLG');                                  
END-DS;                                                                    
                                                                           
dcl-pr  convertpincdate char(26);                                          
   *n timestamp(0);                                                        
END-PR;                                                                    
dcl-pr  LookupRFID char(24);                                               
   *n char(6);                                                             
END-PR;                                                                    
                                                                           
// Include EccSndReq & EccRcvReq prototypes                                
/include /QOpenSys/opt/eradani/nrs-poc/qsys/ecnctc.rpgleinc                
                                                                           
                                                                         
// Include data structs and buffer conversion prototypes                 
/include /QOpenSys/opt/eradani/nrs-poc/qsys/pncchkout_h.rpgleinc         
                                                                         
dcl-ds checkout_ds likeds(CheckoutDS);                                   
dcl-ds eccresult_ds likeds(EccResult);                                   
                                                                         
dcl-s command char(32);                                                  
dcl-s datalen packed(5);                                                 
dcl-s databuf char(1024);                                                
dcl-s waittm packed(5) inz(10);                                          
dcl-s reqkey char(6);                                                    
dcl-s eod ind;                                                           
dcl-s eoa ind;                                                           
dcl-s nodata ind;                                                        
                                                
                                                                  
//// json array for call                                          
//dcl-ds checkout_ds qualified;                                   
//  event varchar(50) inz('yardhound.import_events.checkout');    
//  time char(25);  //timestamp                                   
//  version char(3) inz('1.3');                                   
//  campus char(6) inz('NRSNBR');                                 
//  dcl-ds data;                                                  
//    dcl-ds asset;                                               
//      checked_out char(25); //timestamp                         
//      asset_type varchar(25);                                   
//      rfid_tag varchar(25);                                     
//      site_code varchar(25);                                    
//      SCAC char(4);                                             
//      SCAC char(4);                                                           
//      name_SCAC varchar(50) inz('Trailer SCAC');                              
//      trailer varchar(25);                                                    
//      name_trailer varchar(50) inz('Trailer #');    // rename json field to pi
//      container_number varchar(25);                                           
//      load_status varchar(25);                                                
//      movement_type varchar(25);                                              
//      outbound_seal varchar(25);                                              
//    END-DS;                                                                   
//  END-DS;                                                                     
//END-DS;                                                                       
                                                                                
dcl-s currentstmp timestamp(0);                                                 
dcl-s checkinstmp timestamp(0);                                                 
                                                                                
                                                                               
// array for data que                                                          
dcl-ds dataque_data qualified;                                                 
   api_name char(25) inz('checkout');                                          
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
                                                                               
// process ADD records from YARDLG (trigger program)                           
  clear checkout_ds;                                                           
//  checkout_ds.name_trailer = 'Trailer #';                                    
//  checkout_ds.name_SCAC = 'Trailer SCAC';                                    
checkout_ds.msg_grp_id = 'checkout';                                           
checkout_ds.campus = cmpus;                                                    
checkout_ds.version = '1.3';                                                   
checkout_ds.site_code = sitecd;                                                
  // get current timestamp for api record and convert to pinc format           
currentstmp = %timestamp(*SYS:0);                                              
                                             
checkout_ds.time = convertpincdate(currentstmp);                              
checkout_ds.campus = cmpus;                                                   
// outbound timestamp is current time that records was deleted                
checkout_ds.checked_out = convertpincdate(currentstmp);                       
       select;                                                                
         when etypey = 'C';                                                   
           checkout_ds.asset_type = 'Container';                              
           checkout_ds.container_num = %trim(carrcy) + %trim(equipy);         
         when etypey = 'T';                                                   
           checkout_ds.asset_type = 'Trailer';                                
           checkout_ds.scac = carrcy;                                         
           checkout_ds.trailer = equipy;                                      
         when etypey = 'R';                                                   
          checkout_ds.asset_type = 'Railbox';                                 
                                    
           checkout_ds.scac = carrcy;                                          
           checkout_ds.trailer = equipy;                                       
       ENDSL;                                                                  
       checkout_ds.rfid_tag = lookuprfid(rftagy);                              
       if checkout_ds.rfid_tag = 'ERROR';                                      
         checkout_ds.rfid_tag = *blanks;                                       
       ENDIF;                                                                  
       select;                                                                 
         when instsy = 'LD';                                                   
           checkout_ds.load_status = 'Loaded';                                 
           checkout_ds.movement_type = 'Inbound';                              
         when instsy = 'MT';                                                   
           checkout_ds.load_status = 'Empty';                                  
           checkout_ds.movement_type = 'Outbound';                             
                             
         other;                                                               
           checkout_ds.load_status = 'Loaded';                                
           checkout_ds.movement_type = 'Inbound';                             
       ENDSL;                                                                 
     if seal1y <> *blanks;                                                    
       checkout_ds.outbound_seal = seal1y;                                    
     endif;                                                                   
                                                                              
     // Send data structure to JavaScript                                     
     command = 'pinc.checkout';                                               
     datalen = CheckoutDSLen;                                                 
     CheckoutDSToBuf(checkout_ds:databuf);                                    
                                                                              
      // Send request                                                         
      // Send request                                                         
      reqkey = '0';   // per aaron 4/13/21                                    
      EccSndReq(command:datalen:databuf:reqkey);                              
                                                                              
      datalen = EccResultLen;                                                 
      databuf = '';                                                           
      EccRcvRes(waittm:reqkey:eod:eoa:nodata:datalen:databuf);                
                                                                              
      if (eod and eoa and nodata);                                            
        dsply ('Timeout Waiting On Response: ' + reqkey);                     
        Return;                                                               
      ENDIF;                                                                  
                                                                              
                                                                              
      // Check the result                                                     
      // Check the result                                                       
      BufToEccResult(databuf:eccresult_ds);                                     
                                                                                
      if eccresult_ds.MsgId <> 'ECC0000';                                       
        dsply 'Failure calling command pinc.checkout' ;                         
        Return;                                                                 
      ENDIF;                                                                    
                                                                                
    // convert data structure to json array                                     
//     DATA-GEN checkout_ds %DATA( dataque_data.json_data : 'renameprefix=name_'
//         %gen('YAJL72/YAJLDTAGEN');                                           
     //DATA-GEN checkout_ds %DATA( dataque_data.json_data )                     
     //    %gen('YAJL72/YAJLDTAGEN');                                           
                                                                                
    // write json to dataq  for api call                                        
    // write json to dataq  for api call                                        
//    exec sql call qsys2.send_data_queue(:dataque_data.data,'PINCAPIOUT','PINC_
                                                                                
//    Exec sql fetch from C1 into :yardlg_ds;                                   
//  ENDDO;                                                                      
//  EXEC SQL close c1;                                                          
                                                                                
*inlr = *on;                                                                    
