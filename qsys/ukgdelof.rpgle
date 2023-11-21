     H Nomain

      ************************************
      * Module: ukgdelof
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgdelof_h

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
      * Convert DelSOReq to buffer
      ************************************
     PDelSOReqToBuf    B                   Export

     DDelSOReqToBuf    PI
     DDataStruct                           LikeDS(DelSOReq)
     D                                     Const
     DBuffer                         28A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:8) = %char(DataStruct.id);
       BufPtr += 8;
       %subst(CharBuf:1:10) = %char(DataStruct.start_date:*ISO);
       BufPtr += 10;
       %subst(CharBuf:1:10) = %char(DataStruct.end_date:*ISO);
       BufPtr += 10;

       return ;

     PDelSOReqToBuf    E
