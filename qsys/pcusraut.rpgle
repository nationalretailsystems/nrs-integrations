     H Nomain

      ************************************
      * Module: pcusraut
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pcusraut_h

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
      * Convert PCReqToken to buffer
      ************************************
     PPCReqTokenToBuf  B                   Export

     DPCReqTokenToBuf  PI
     DDataStruct                           LikeDS(PCReqToken)
     D                                     Const
     DBuffer                        100A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:50) = DataStruct.username;
       BufPtr += 50;
       %subst(CharBuf:1:50) = DataStruct.password;
       BufPtr += 50;

       return ;

     PPCReqTokenToBuf  E

      ************************************
      * Convert buffer to PCRcvToken
      ************************************
     PBufToPCRcvToken  B                   Export

     DBufToPCRcvToken  PI
     DBuffer                       2000A
     DDataStruct                           LikeDS(PCRcvToken)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.authorization = %subst(CharBuf:1:2000);
       BufPtr += 2000;

       return ;

     PBufToPCRcvToken  E
