     H Nomain

      ************************************
      * Module: ukgdrvr
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgdrvr_h

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
      * Convert PunchReqDS to buffer
      ************************************
     PPunchReqDSToBuf  B                   Export

     DPunchReqDSToBuf  PI
     DDataStruct                           LikeDS(PunchReqDS)
     D                                     Const
     DBuffer                         68A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:8) = %char(DataStruct.where.employee.id);
       BufPtr += 8;
       %subst(CharBuf:1:16) = DataStruct.where.dateRange.startDate;
       BufPtr += 16;
       %subst(CharBuf:1:16) = DataStruct.where.dateRange.EndDate;
       BufPtr += 16;
       for k = 1 to 1;
       %subst(CharBuf:1:8) = %char(DataStruct.do.punches.added(k).employee.id);
       BufPtr += 8;
       %subst(CharBuf:1:19) = DataStruct.do.punches.added(k).punchDtm;
       BufPtr += 19;
       endfor;
       %subst(CharBuf:1:1) = DataStruct.do.onlyValidate;
       BufPtr += 1;

       return ;

     PPunchReqDSToBuf  E
