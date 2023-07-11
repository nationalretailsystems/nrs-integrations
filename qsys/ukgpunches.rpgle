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
     DBuffer                         26A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.employee;
       BufPtr += 6;
       %subst(CharBuf:1:10) = DataStruct.startdate;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.enddate;
       BufPtr += 10;

       return ;

     PPunchReqToBuf    E

      ************************************
      * Convert buffer to PunchRes
      ************************************
     PBufToPunchRes    B                   Export

     DBufToPunchRes    PI
     DBuffer                      11378A
     DDataStruct                           LikeDS(PunchRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.startDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.endDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       for i = 1 to 20;
       DataStruct.punches(i).id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches(i).employee.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches(i).employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches(i).employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches(i).punchDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).roundedPunchDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).timeZone.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches(i).timeZone.qualifier = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.punches(i).timeZone.name = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.punches(i).enteredOnDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).hasComments = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).editByType.id = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.punches(i).editByType.qualifier = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.punches(i).editByType.name = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.punches(i).dataSource.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches(i).dataSource.qualifier = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.punches(i).dataSource.displayName = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.punches(i).dataSource.funcareanm = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.punches(i).dataSource.name = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.punches(i).typeOverride.id = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches(i).typeOverride.qualifier = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.punches(i).typeOverride.typeOverrideId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches(i).typeOverride.description = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.punches(i).typeOverride.name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.punches(i).exceptions.employee.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches(i).exceptions.employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches(i).exceptions.employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.punches(i).exceptions.startDateTime = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).exceptions.endDateTime = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).exceptions.applyDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).exceptions.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches(i).exceptions.endTimeZone.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches(i).exceptions.exceptionType.id = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches(i).exceptions.exceptionType.name = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches(i).exceptions.exceptionType.description = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.punches(i).exceptions.exceptionType.displayName = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.punches(i).exceptions.exceptionType.category = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).exceptions.orgJob.id = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.punches(i).exceptions.overlimithrs = %dec(%subst(CharBuf:1:5):3:2);
       BufPtr += 5;
       DataStruct.punches(i).exceptions.startTimeZone.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches(i).exceptions.violationhrs = %dec(%subst(CharBuf:1:5):3:2);
       BufPtr += 5;
       DataStruct.punches(i).exceptions.workRule.id = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.punches(i).exceptions.workRule.qualifier = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.punches(i).exceptions.workRule.name = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.punches(i).exceptions.punchEvent.id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.punches(i).exceptions.excusedAbs = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptions.unexcusedAbs = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptions.missingtmsts.id = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches(i).exceptions.missingtmsts.displayName = %subst(CharBuf:1:14);
       BufPtr += 14;
       DataStruct.punches(i).exceptions.justifications = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).exceptions.justifiedTimes = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).exceptions.transfer = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptions.eventDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).exceptions.startException = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptions.endException = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptions.reviewed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).isPhantom = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).isScheduled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).updatedOnDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).validasts = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).atttestasts = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).markrelexcp = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).editable = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).cancelDeduct = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).fromphantom = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptresolv = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;

       return ;

     PBufToPunchRes    E
