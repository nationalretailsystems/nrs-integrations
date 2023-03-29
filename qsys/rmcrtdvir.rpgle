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
      * Convert CertDVIR to buffer
      ************************************
     PCertDVIRToBuf    B                   Export

     DCertDVIRToBuf    PI
     DDataStruct                           LikeDS(CertDVIR)
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

     PCertDVIRToBuf    E

      ************************************
      * Convert buffer to ResDVIR
      ************************************
     PBufToResDVIR     B                   Export

     DBufToResDVIR     PI
     DBuffer                        227A
     DDataStruct                           LikeDS(ResDVIR)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.dvirid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.response.code = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.response.type = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.response.message = %subst(CharBuf:1:200);
       BufPtr += 200;

       return ;

     PBufToResDVIR     E
