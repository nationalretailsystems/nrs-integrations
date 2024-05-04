     H Nomain

      ************************************
      * Module: psdvir
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include psdvir_h

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
      * Convert DVIRReq to buffer
      ************************************
     PDVIRReqToBuf     B                   Export

     DDVIRReqToBuf     PI
     DDataStruct                           LikeDS(DVIRReq)
     D                                     Const
     DBuffer                        116A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:16) = DataStruct.dvirrpt;
       BufPtr += 16;
       %subst(CharBuf:1:100) = DataStruct.filename;
       BufPtr += 100;

       return ;

     PDVIRReqToBuf     E

      ************************************
      * Convert buffer to DVIRRes
      ************************************
     PBufToDVIRRes     B                   Export

     DBufToDVIRRes     PI
     DBuffer                          3A
     DDataStruct                           LikeDS(DVIRRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.return = %subst(CharBuf:1:3);
       BufPtr += 3;

       return ;

     PBufToDVIRRes     E
