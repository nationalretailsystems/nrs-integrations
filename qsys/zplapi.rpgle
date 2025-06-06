     H Nomain

      ************************************
      * Module: zplapi
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include zplapi_h

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
      * Convert ZplReq to buffer
      ************************************
     PZplReqToBuf      B                   Export

     DZplReqToBuf      PI
     DDataStruct                           LikeDS(ZplReq)
     D                                     Const
     DBuffer                       3105A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:3000) = DataStruct.zpl;
       BufPtr += 3000;
       %subst(CharBuf:1:100) = DataStruct.filename;
       BufPtr += 100;
       %subst(CharBuf:1:2) = DataStruct.dpmm;
       BufPtr += 2;
       %subst(CharBuf:1:3) = DataStruct.labelsize;
       BufPtr += 3;

       return ;

     PZplReqToBuf      E
