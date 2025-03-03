     H Nomain

      ************************************
      * Module: lytxass1
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include lytxass1_h

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
      * Convert AssignReq to buffer
      ************************************
     PAssignReqToBuf   B                   Export

     DAssignReqToBuf   PI
     DDataStruct                           LikeDS(AssignReq)
     D                                     Const
     DBuffer                         72A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:36) = DataStruct.vehicleId;
       BufPtr += 36;
       %subst(CharBuf:1:36) = DataStruct.driverId;
       BufPtr += 36;

       return ;

     PAssignReqToBuf   E

      ************************************
      * Convert buffer to AssignRes
      ************************************
     PBufToAssignRes   B                   Export

     DBufToAssignRes   PI
     DBuffer                        289A
     DDataStruct                           LikeDS(AssignRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.id = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.type = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.status = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.licplate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.countsub = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.lastconn = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.driverId = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.groupId = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.vin = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.seatbelt = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.make = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.model = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.year = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.deviceId = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.hibernationDelay = %subst(CharBuf:1:13);
       BufPtr += 13;

       return ;

     PBufToAssignRes   E
