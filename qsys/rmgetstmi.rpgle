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
      * Convert ReqStMiles to buffer
      ************************************
     PReqStMilesToBuf  B                   Export

     DReqStMilesToBuf  PI
     DDataStruct                           LikeDS(ReqStMiles)
     D                                     Const
     DBuffer                        142A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:100) = DataStruct.accessToken;
       BufPtr += 100;
       %subst(CharBuf:1:10) = DataStruct.companyCode;
       BufPtr += 10;
       %subst(CharBuf:1:10) = %char(DataStruct.logDate:*ISO);
       BufPtr += 10;
       %subst(CharBuf:1:11) = %char(DataStruct.startIndex);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.size);
       BufPtr += 11;

       return ;

     PReqStMilesToBuf  E

      ************************************
      * Convert buffer to RtnStMiles
      ************************************
     PBufToRtnStMiles  B                   Export

     DBufToRtnStMiles  PI
     DBuffer                       1003A
     DDataStruct                           LikeDS(RtnStMiles)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.index = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.drvrlogid = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.tractornum = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.devicesn = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.fuelused = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.fueltype = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.distance = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.manualmi = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.state = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.entodread = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.exodread = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.country = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.sttintm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.sttouttm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.logdate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.offSet = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.oanbr = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.sttinlat = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.sttinlng = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.sttoutlat = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.sttoutlng = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.sttinadd = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.sttoutadd = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.vin = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.dotnbt = %subst(CharBuf:1:50);
       BufPtr += 50;

       return ;

     PBufToRtnStMiles  E

      ************************************
      * Convert buffer to RtnRespons
      ************************************
     PBufToRtnRespons  B                   Export

     DBufToRtnRespons  PI
     DBuffer                        221A
     DDataStruct                           LikeDS(RtnRespons)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.response.code = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.response.type = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.response.message = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.isDST = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;

       return ;

     PBufToRtnRespons  E
