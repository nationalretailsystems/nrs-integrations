     H Nomain

      ************************************
      * Module: rmgetdvir
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include rmgetdvi_h

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
      * Convert ReqDVIR to buffer
      ************************************
     PReqDVIRToBuf     B                   Export

     DReqDVIRToBuf     PI
     DDataStruct                           LikeDS(ReqDVIR)
     D                                     Const
     DBuffer                        142A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:100) = DataStruct.accessToken;
       BufPtr += 100;
       %subst(CharBuf:1:10) = DataStruct.companyCode;
       BufPtr += 10;
       %subst(CharBuf:1:10) = %char(DataStruct.lstmoddt:*ISO);
       BufPtr += 10;
       %subst(CharBuf:1:11) = %char(DataStruct.startIndex);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.size);
       BufPtr += 11;

       return ;

     PReqDVIRToBuf     E

      ************************************
      * Convert buffer to RtnDVIR
      ************************************
     PBufToRtnDVIR     B                   Export

     DBufToRtnDVIR     PI
     DBuffer                       6393A
     DDataStruct                           LikeDS(RtnDVIR)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.index = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.driverid = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.crttmstmp = %int(%subst(CharBuf:1:21));
       BufPtr += 21;
       DataStruct.modtmstmp = %int(%subst(CharBuf:1:21));
       BufPtr += 21;
       DataStruct.timezone = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.tripname = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.drvrcmt = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.tractornbr = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.trailernbr = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.ttltrctdef = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       for i = 1 to 25;
       DataStruct.trctdef(i) = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;
       DataStruct.ttltrltdef = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       for i = 1 to 25;
       DataStruct.trlrDef(i) = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;
       for i = 1 to 10;
       DataStruct.defImages(i) = %subst(CharBuf:1:255);
       BufPtr += 255;
       endfor;
       DataStruct.dvirisdef = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.dviriscert = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.driversig = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.mechanicsig = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.latitude = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.longitude = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.location = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.odometer = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.status = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.lstmoddate = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.dvirisdst = %subst(CharBuf:1:1);
       BufPtr += 1;

       return ;

     PBufToRtnDVIR     E

      ************************************
      * Convert buffer to RtnDVIRRes
      ************************************
     PBufToRtnDVIRRes  B                   Export

     DBufToRtnDVIRRes  PI
     DBuffer                        416A
     DDataStruct                           LikeDS(RtnDVIRRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.response.code = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.response.type = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.response.message = %subst(CharBuf:1:200);
       BufPtr += 200;
       DataStruct.imageurl = %subst(CharBuf:1:200);
       BufPtr += 200;

       return ;

     PBufToRtnDVIRRes  E
