     H Nomain

      ************************************
      * Module: lytxdrvs
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include lytxdrvs_h

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
      * Convert DrvsReq to buffer
      ************************************
     PDrvsReqToBuf     B                   Export

     DDrvsReqToBuf     PI
     DDataStruct                           LikeDS(DrvsReq)
     D                                     Const
     DBuffer                          6A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.drivername;
       BufPtr += 6;

       return ;

     PDrvsReqToBuf     E

      ************************************
      * Convert buffer to DrvsRes
      ************************************
     PBufToDrvsRes     B                   Export

     DBufToDrvsRes     PI
     DBuffer                         30A
     DDataStruct                           LikeDS(DrvsRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.driverid = %subst(CharBuf:1:30);
       BufPtr += 30;

       return ;

     PBufToDrvsRes     E
