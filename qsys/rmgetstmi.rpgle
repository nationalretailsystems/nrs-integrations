     H Nomain

      ************************************
      * Module: rmgetstmi
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include rmgetstm_h

      ************************************
      * Global variables
      ************************************
     DBufPtr           S               *
     DCharBuf          S          64512A   Based(BufPtr)
     Di                S             10U 0
     Dj                S             10U 0
     Dk                S             10U 0
     Dl                S             10U 0

      ************************************
      * Convert ReqStateMiles to buffer
      ************************************
     PReqStateMilesToBuf  B                   Export

     DReqStateMilesToBuf  PI
     DDataStruct                           LikeDS(ReqStateMiles)
     D                                     Const
     DBuffer                        142A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:100) = DataStruct.accesstoken;
       BufPtr += 100;
       %subst(CharBuf:1:10) = DataStruct.companyCode;
       BufPtr += 10;
       %subst(CharBuf:1:10) = %char(DataStruct.fromDate:*ISO);
       BufPtr += 10;
       %subst(CharBuf:1:11) = %char(DataStruct.startIndex);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.size);
       BufPtr += 11;

       return ;

     PReqStateMilesToBuf  E

      ************************************
      * Convert buffer to RtnStateMilesDS
      ************************************
     PBufToRtnStateMilesDS  B                   Export

     DBufToRtnStateMilesDS  PI
     DBuffer                       1371A
     DDataStruct                           LikeDS(RtnStateMilesDS)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.stateMileage.index = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.stateMileage.drvrlogid = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.stateMileage.tractornum = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.stateMileage.devicesn = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.stateMileage.fuelused = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.stateMileage.fueltype = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.stateMileage.distance = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.stateMileage.manualmi = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.stateMileage.state = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.stateMileage.entodread = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.stateMileage.exodread = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.stateMileage.country = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.stateMileage.sttintm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.stateMileage.sttouttm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.stateMileage.logdate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.stateMileage.offSet = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.stateMileage.oanbr = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.stateMileage.sttinlat = %dec(%subst(CharBuf:1:52):50:14);
       BufPtr += 52;
       DataStruct.stateMileage.sttinlng = %dec(%subst(CharBuf:1:52):50:14);
       BufPtr += 52;
       DataStruct.stateMileage.sttoutlat = %dec(%subst(CharBuf:1:52):50:14);
       BufPtr += 52;
       DataStruct.stateMileage.sttoutlng = %dec(%subst(CharBuf:1:52):50:14);
       BufPtr += 52;
       DataStruct.stateMileage.sttinadd = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.stateMileage.sttoutadd = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.stateMileage.vin = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.stateMileage.dotnbt = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.response.code = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.response.type = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.response.message = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.isDST = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;

       return ;

     PBufToRtnStateMilesDS  E
