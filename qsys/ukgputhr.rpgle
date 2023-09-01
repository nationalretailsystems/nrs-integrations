     H Nomain

      ************************************
      * Module: ukgputhr
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgputhr_h

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
      * Convert FormatName to buffer
      ************************************
     PFormatNameToBuf  B                   Export

     DFormatNameToBuf  PI
     DDataStruct                           LikeDS(FormatName)
     D                                     Const
     DBuffer                         98A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:7) = %char(DataStruct.where.employee.id);
       BufPtr += 7;
       %subst(CharBuf:1:23) = DataStruct.where.dateRange.startDate;
       BufPtr += 23;
       %subst(CharBuf:1:23) = DataStruct.where.dateRange.endDate;
       BufPtr += 23;
       %subst(CharBuf:1:7) = %char(DataStruct.do.hoursWorked.added.employee.id);
       BufPtr += 7;
       %subst(CharBuf:1:7) = %char(DataStruct.do.hoursWorked.added.durationInHours);
       BufPtr += 7;
       %subst(CharBuf:1:23) = DataStruct.do.hoursWorked.added.startDateTime;
       BufPtr += 23;
       %subst(CharBuf:1:7) = %char(DataStruct.do.hoursWorked.added.id);
       BufPtr += 7;
       %subst(CharBuf:1:1) = DataStruct.do.onlyValidate;
       BufPtr += 1;

       return ;

     PFormatNameToBuf  E
