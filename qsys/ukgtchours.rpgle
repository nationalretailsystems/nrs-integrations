     H Nomain

      ************************************
      * Module: ukgtchours
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukghours_h

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
      * Convert HoursReq to buffer
      ************************************
     PHoursReqToBuf    B                   Export

     DHoursReqToBuf    PI
     DDataStruct                           LikeDS(HoursReq)
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

     PHoursReqToBuf    E

      ************************************
      * Convert buffer to FormatName
      ************************************
     PBufToFormatName  B                   Export

     DBufToFormatName  PI
     DBuffer                       4766A
     DDataStruct                           LikeDS(FormatName)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.startDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.endDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       for i = 1 to 12;
       DataStruct.punches(i).id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.punches(i).employee.id = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
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
       DataStruct.punches(i).timeZone.qualifier = %subst(CharBuf:1:39);
       BufPtr += 39;
       DataStruct.punches(i).timeZone.name = %subst(CharBuf:1:39);
       BufPtr += 39;
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
       DataStruct.punches(i).dataSource.qualifier = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.punches(i).dataSource.displayName = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).dataSource.funcareanm = %subst(CharBuf:1:37);
       BufPtr += 37;
       DataStruct.punches(i).dataSource.name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.punches(i).exceptions = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).commentsNotes = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.punches(i).isPhantom = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).isScheduled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).updatedOnDtm = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).geoLocation.locationId = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.punches(i).geoLocation.accuracy = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       DataStruct.punches(i).geoLocation.outsidegeofence = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).geoLocation.updateTime = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.punches(i).geoLocation.geofencemethod = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.punches(i).geoLocation.unverified = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).validateasts = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).attestpunchedit = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).markrereviewed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).editable = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).cancelDeduct = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).fromphantomed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.punches(i).exceptresolved = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;

       return ;

     PBufToFormatName  E
