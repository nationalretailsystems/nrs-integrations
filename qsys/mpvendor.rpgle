     H Nomain

      ************************************
      * Module: mpvendor
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpvendor_h

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
      * Convert ReqVendr to buffer
      ************************************
     PReqVendrToBuf    B                   Export

     DReqVendrToBuf    PI
     DDataStruct                           LikeDS(ReqVendr)
     D                                     Const
     DBuffer                         11A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.contactkey);
       BufPtr += 11;

       return ;

     PReqVendrToBuf    E

      ************************************
      * Convert buffer to ResVendr
      ************************************
     PBufToResVendr    B                   Export

     DBufToResVendr    PI
     DBuffer                        100A
     DDataStruct                           LikeDS(ResVendr)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.vendorNae = %subst(CharBuf:1:100);
       BufPtr += 100;

       return ;

     PBufToResVendr    E
