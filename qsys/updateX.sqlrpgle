**free                                                                          
                                                                                
// pinc update api                                                              
//                                                                              
// Mike Corbo                                                                   
// 01/05/21                                                                     
//                                                                              
// In order to be able to call the included modules, must be compiled as follows
//                                                                              
// CRTSQLRPGI OBJ(PINC_API/UPDATEX)                                             
//           SRCSTMF('/QOpenSys/opt/eradani/nrs-poc/qsys/updateX.sqlrpgle')     
//           OBJTYPE(*MODULE)                                                   
//                                                                              
//  CRTPGM PGM(PINC_API/UPDATEX) BNDSRVPGM((PINC_API/PINCMODS)                  
//  CRTPGM PGM(PINC_API/UPDATEX) BNDSRVPGM((PINC_API/PINCMODS)             
//            (ECNCTAPP/ECCTMPGEN) (ECNCT/ECNCTC))                         
//                                                                         
//                                                                         
ctl-opt;//  BNDDIR('YAJL72/YAJL');                                         
                                                                           
dcl-f pincfacl01 keyed usage(*input) extfile('PINC_API/PINCFACL01');       
                                                                           
dcl-pr updatex extpgm('UPDATEX');                                          
   *n likeds(ywho_ds);                                                     
END-PR;                                                                    
dcl-pi updatex;                                                            
   FileData likeds(ywho_ds);                                               
END-PI;                                                                    
                                                                           
                                                                               
dcl-ds ywho_ds extname('YDFILE3/YWHOLG');                                      
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
/include /QOpenSys/opt/eradani/nrs-poc/qsys/pncupdat_h.rpgleinc         
                                                                        
dcl-ds update_ds likeds(UpdateDS);                                      
dcl-ds eccresult_ds likeds(EccResult);                                  
                                                                        
dcl-s command char(32);                                                 
dcl-s datalen packed(5);                                                
dcl-s databuf char(1024);                                               
dcl-s waittm packed(5) inz(10);                                         
dcl-s reqkey char(6);                                                   
dcl-s eod ind;                                                          
dcl-s eoa ind;                                                          
dcl-s nodata ind;                                                       
dcl-s nodata ind;                                                            
                                                                             
// json array for call                                                       
//dcl-ds update_ds qualified;                                                
//  event char(50) inz('yardhound.import_events.update');                    
//  time char(25);  //timestamp                                              
//  version char(3) inz('1.3');                                              
//  campus char(6) inz('NRSNBR');                                            
//  dcl-ds data;                                                             
//    dcl-ds asset;                                                          
//      site_code char(25);                                                  
//      asset_type char(25);                                                 
//      SCAC char(4);                                                        
//      name_SCAC varchar(50) inz('Trailer SCAC');                           
//      trailer varchar(25);                                                 
//      trailer varchar(25);                                                    
//      name_trailer varchar(50) inz('Trailer #');    // rename json field to pi
//      container_number char(25);                                              
//      load_status char(25);                                                   
//    END-DS;                                                                   
//  END-DS;                                                                     
//END-DS;                                                                       
                                                                                
dcl-s currentstmp timestamp(0);                                                 
dcl-s checkinstmp timestamp(0);                                                 
                                                                                
// array for data que                                                           
dcl-ds dataque_data qualified;                                                  
   api_name char(25) inz('update');                                             
   json_data char(500);                                                         
   json_data char(500);                                              
   data char(1024) pos(1);                                           
END-DS;                                                              
dcl-s etypex char(1);                                                
dcl-s cmpus char(6);                                                 
dcl-s sitecd char(9);                                                
                                                                     
eval-corr ywho_ds = filedata;                                        
// get campus and sitecodes                                          
chain facl#od pincfacl01;                                            
cmpus = pinccampus;                                                  
sitecd = pincsitecd;                                                 
                                                                     
                                                                     
// process ADD records from YARDLG (trigger program)                 
// process ADD records from YARDLG (trigger program)                            
  clear update_ds;                                                              
  update_ds.msg_grp_id = 'update';                                              
  update_ds.version = '1.3';                                                    
  update_ds.event = 'yardhound.import_events.update';                           
//  update_ds.name_SCAC = 'Trailer SCAC';                                       
//  update_ds.name_trailer = 'Trailer #';                                       
  update_ds.site_code = sitecd;                                                 
// get current timestamp for api record and convert to pinc format              
currentstmp = %timestamp(*SYS:0);                                               
update_ds.time = convertpincdate(currentstmp);                                  
update_ds.campus = cmpus;                                                       
                                                                                
  // need to get equipment type from yard file not in YWHO                      
  Exec sql select etypey  into :etypex from yard where carrcy = :CARRCOD and equipy = :EQUIPOD;
       select;                                                                  
         when etypex = 'C';                                                     
           update_ds.asset_type = 'Container';                                  
           update_ds.container_number = %trim(CARRCOD) + %trim(EQUIPOD);        
         when etypex = 'T';                                                     
           update_ds.asset_type = 'Trailer';                                    
           update_ds.scac = CARRCOD;                                            
           update_ds.trailer = EQUIPOD;                                         
         when etypex = 'R';                                                     
           update_ds.asset_type = 'Railbox';                                    
           update_ds.scac = CARRCOD;                                            
           update_ds.trailer= EQUIPOD;                                          
         other;   //not equipment type we report, return                        
           return;                                                              
                                                                                
           return;                                                     
       ENDSL;                                                          
       select;                                                         
         when newstod = 'LD';                                          
           update_ds.load_status = 'Loaded';                           
         when newstod = 'MT';                                          
           update_ds.load_status = 'Empty';                            
         other;                                                        
           update_ds.load_status = 'Unknown';                          
       ENDSL;                                                          
                                                                       
     // Send data structure to JavaScript                              
     command = 'pinc.update';                                          
     datalen = UpdateDSLen;                                            
     UpdateDSToBuf(update_ds:databuf);                                 
     UpdateDSToBuf(update_ds:databuf);                            
                                                                  
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
      BufToEccResult(databuf:eccresult_ds);                                     
                                                                                
      if eccresult_ds.MsgId <> 'ECC0000';                                       
        dsply 'Failure calling command pinc.update' ;                           
        Return;                                                                 
      ENDIF;                                                                    
                                                                                
    // convert data structure to json array                                     
     //DATA-GEN update_ds %DATA( dataque_data.json_data : 'renameprefix=name_') 
     //    %gen('YAJL72/YAJLDTAGEN');                                           
//     DATA-GEN update_ds %DATA( dataque_data.json_data : 'renameprefix=name_') 
//         %gen('YAJL72/YAJLDTAGEN');                                           
//         %gen('YAJL72/YAJLDTAGEN');                                           
                                                                                
    // write json to dataq  for api call                                        
//    exec sql call qsys2.send_data_queue(:dataque_data.data,'PINCAPIOUT','PINC_API);
                                                                                
                                                                                
*inlr = *on;                                                                    