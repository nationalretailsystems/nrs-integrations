     H Nomain

      ************************************
      * Module: lytxveh1
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include lytxveh1_h

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
      * Convert VehReq to buffer
      ************************************
     PVehReqToBuf      B                   Export

     DVehReqToBuf      PI
     DDataStruct                           LikeDS(VehReq)
     D                                     Const
     DBuffer                         10A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:10) = DataStruct.vehicle;
       BufPtr += 10;

       return ;

     PVehReqToBuf      E

      ************************************
      * Convert buffer to VehRes
      ************************************
     PBufToVehRes      B                   Export

     DBufToVehRes      PI
     DBuffer                        283A
     DDataStruct                           LikeDS(VehRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 1;
       DataStruct.vehicles(i).id = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.vehicles(i).name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.vehicles(i).type = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.vehicles(i).status = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.vehicles(i).licplate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.vehicles(i).countrySubdivision = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.vehicles(i).lastConnected = %subst(CharBuf:1:28);
       BufPtr += 28;
       DataStruct.vehicles(i).driverId = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.vehicles(i).groupId = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.vehicles(i).vin = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.vehicles(i).seatbeltType = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.vehicles(i).make = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.vehicles(i).model = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.vehicles(i).year = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.vehicles(i).deviceId = %subst(CharBuf:1:36);
       BufPtr += 36;
       endfor;
       DataStruct.totalResults = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;

       return ;

     PBufToVehRes      E
