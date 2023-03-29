     H Nomain

      ************************************
      * Module: mpemploy
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpemploy_h

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
      * Convert ReqEmpl to buffer
      ************************************
     PReqEmplToBuf     B                   Export

     DReqEmplToBuf     PI
     DDataStruct                           LikeDS(ReqEmpl)
     D                                     Const
     DBuffer                         11A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.contactkey);
       BufPtr += 11;

       return ;

     PReqEmplToBuf     E

      ************************************
      * Convert buffer to ResEmpl
      ************************************
     PBufToResEmpl     B                   Export

     DBufToResEmpl     PI
     DBuffer                        100A
     DDataStruct                           LikeDS(ResEmpl)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.employeename = %subst(CharBuf:1:100);
       BufPtr += 100;

       return ;

     PBufToResEmpl     E
