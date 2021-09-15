     H Nomain

      ************************************
      * Module: rmcrtdvir
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include rmcrtdvi_h

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
     DBuffer                        201A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:100) = DataStruct.accessToken;
       BufPtr += 100;
       %subst(CharBuf:1:10) = DataStruct.companyCode;
       BufPtr += 10;
       %subst(CharBuf:1:60) = DataStruct.userEmail;
       BufPtr += 60;
       %subst(CharBuf:1:10) = DataStruct.userPassword;
       BufPtr += 10;
       %subst(CharBuf:1:11) = %char(DataStruct.dvirId);
       BufPtr += 11;
       %subst(CharBuf:1:10) = DataStruct.certifiedBy;
       BufPtr += 10;

       return ;

     PReqDVIRToBuf     E

      ************************************
      * Convert buffer to ResDVIR
      ************************************
     PBufToResDVIR     B                   Export

     DBufToResDVIR     PI
     DBuffer                         11A
     DDataStruct                           LikeDS(ResDVIR)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.dvirid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;

       return ;

     PBufToResDVIR     E
