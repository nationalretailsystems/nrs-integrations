     H Nomain

      ************************************
      * Module: t4300mov
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include t4300mov_h

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
      * Convert TapeMovReq to buffer
      ************************************
     PTapeMovReqToBuf  B                   Export

     DTapeMovReqToBuf  PI
     DDataStruct                           LikeDS(TapeMovReq)
     D                                     Const
     DBuffer                         18A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:5) = DataStruct.srctype;
       BufPtr += 5;
       %subst(CharBuf:1:4) = DataStruct.srcaddr;
       BufPtr += 4;
       %subst(CharBuf:1:5) = DataStruct.desttype;
       BufPtr += 5;
       %subst(CharBuf:1:4) = DataStruct.destaddr;
       BufPtr += 4;

       return ;

     PTapeMovReqToBuf  E

      ************************************
      * Convert buffer to TapeMovRes
      ************************************
     PBufToTapeMovRes  B                   Export

     DBufToTapeMovRes  PI
     DBuffer                        203A
     DDataStruct                           LikeDS(TapeMovRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.status = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.code = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.message = %subst(CharBuf:1:100);
       BufPtr += 100;

       return ;

     PBufToTapeMovRes  E
