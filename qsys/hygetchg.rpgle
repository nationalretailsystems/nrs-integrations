     H Nomain

      ************************************
      * Module: hygetchg
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include hygetchg_h

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
      * Convert HyRequest to buffer
      ************************************
     PHyRequestToBuf   B                   Export

     DHyRequestToBuf   PI
     DDataStruct                           LikeDS(HyRequest)
     D                                     Const
     DBuffer                         16A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:8) = DataStruct.startdate;
       BufPtr += 8;
       %subst(CharBuf:1:8) = DataStruct.enddate;
       BufPtr += 8;

       return ;

     PHyRequestToBuf   E
