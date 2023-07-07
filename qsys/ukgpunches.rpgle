     H Nomain

      ************************************
      * Module: ukgpunches
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgpunch_h

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
      * Convert PunchReq to buffer
      ************************************
     PPunchReqToBuf    B                   Export

     DPunchReqToBuf    PI
     DDataStruct                           LikeDS(PunchReq)
     D                                     Const
     DBuffer                         16A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.employee;
       BufPtr += 6;
       %subst(CharBuf:1:10) = DataStruct.date;
       BufPtr += 10;

       return ;

     PPunchReqToBuf    E

      ************************************
      * Convert buffer to PunchRes
      ************************************
     PBufToPunchRes    B                   Export

     DBufToPunchRes    PI
     DBuffer                        687A
     DDataStruct                           LikeDS(PunchRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.startDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.endDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches.employee.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches.employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches.employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches.punchDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.roundedPunchDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.timeZone.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches.timeZone.qualifier = %subst(CharBuf:1:39);
       BufPtr += 39;
       DataStruct.punches.timeZone.name = %subst(CharBuf:1:39);
       BufPtr += 39;
       DataStruct.punches.enteredOnDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.hasComments = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.editByType.id = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.punches.editByType.qualifier = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.punches.editByType.name = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.punches.dataSource.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches.dataSource.qualifier = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.punches.dataSource.displayName = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.punches.dataSource.funcareanm = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.punches.dataSource.name = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.punches.typeOverride.id = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches.typeOverride.qualifier = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches.typeOverride.typeOverrideId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches.typeOverride.description = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches.typeOverride.name = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches.exceptions.employee.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches.exceptions.employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches.exceptions.employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches.exceptions.startDateTime = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.exceptions.endDateTime = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.exceptions.applyDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches.exceptions.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches.exceptions.endTimeZone.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches.exceptions.exceptionType.id = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches.exceptions.exceptionType.name = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches.exceptions.exceptionType.description = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.punches.exceptions.exceptionType.displayName = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches.exceptions.exceptionType.category = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.exceptions.orgJob.id = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.punches.exceptions.overlimithrs = %dec(%subst(CharBuf:1:5):3:2);
       BufPtr += 5;
       DataStruct.punches.exceptions.startTimeZone.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches.exceptions.violationhrs = %dec(%subst(CharBuf:1:5):3:2);
       BufPtr += 5;
       DataStruct.punches.exceptions.workRule.id = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.punches.exceptions.workRule.qualifier = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.punches.exceptions.workRule.name = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.punches.exceptions.commentsNotes = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches.exceptions.punchEvent.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches.exceptions.excusedAbs = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.exceptions.unexcusedAbs = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.exceptions.missingtmsts.id = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches.exceptions.missingtmsts.displayName = %subst(CharBuf:1:14);
       BufPtr += 14;
       DataStruct.punches.exceptions.justifications = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches.exceptions.justifiedTimes = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches.exceptions.transfer = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.exceptions.eventDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches.exceptions.startException = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.exceptions.endException = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.exceptions.reviewed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.commentsNotes = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches.isPhantom = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.isScheduled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.updatedOnDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches.validasts = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.atttestasts = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.markrelexcp = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.editable = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.cancelDeduct = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.fromphantom = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches.exceptresolv = %subst(CharBuf:1:1);
       BufPtr += 1;

       return ;

     PBufToPunchRes    E
