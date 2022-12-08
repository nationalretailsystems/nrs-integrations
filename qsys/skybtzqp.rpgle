     H Nomain

      ************************************
      * Module: skybtzqp
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include skybtzqp_h

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
      * Convert GetTrlPos to buffer
      ************************************
     PGetTrlPosToBuf   B                   Export

     DGetTrlPosToBuf   PI
     DDataStruct                           LikeDS(GetTrlPos)
     D                                     Const
     DBuffer                         20A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:20) = DataStruct.assetid;
       BufPtr += 20;

       return ;

     PGetTrlPosToBuf   E
