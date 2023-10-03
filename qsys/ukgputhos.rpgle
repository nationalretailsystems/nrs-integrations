     H Nomain

      ************************************
      * Module: ukgputhos
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgputho_h

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
      * Convert puthosReq to buffer
      ************************************
     PputhosReqToBuf   B                   Export

     DputhosReqToBuf   PI
     DDataStruct                           LikeDS(puthosReq)
     D                                     Const
     DBuffer                         95A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:8) = %char(DataStruct.do.payCodeEdits.added.employee.id);
       BufPtr += 8;
       %subst(CharBuf:1:12) = %char(DataStruct.do.payCodeEdits.added.paycode.id);
       BufPtr += 12;
       %subst(CharBuf:1:4) = DataStruct.do.payCodeEdits.added.amountType;
       BufPtr += 4;
       %subst(CharBuf:1:10) = DataStruct.do.payCodeEdits.added.applyDate;
       BufPtr += 10;
       %subst(CharBuf:1:7) = %char(DataStruct.do.payCodeEdits.added.durationInHours);
       BufPtr += 7;
       %subst(CharBuf:1:23) = DataStruct.where.dateRange.endDate;
       BufPtr += 23;
       %subst(CharBuf:1:23) = DataStruct.where.dateRange.startDate;
       BufPtr += 23;
       %subst(CharBuf:1:8) = %char(DataStruct.where.employee.id);
       BufPtr += 8;

       return ;

     PputhosReqToBuf   E
