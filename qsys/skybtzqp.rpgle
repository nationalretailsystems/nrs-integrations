     H Nomain

      ************************************
      * Module: skybtzqp
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include skybtzqp_h

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
      * Convert GetTrlPos to buffer
      ************************************
     PGetTrlPosToBuf   B                   Export

     DGetTrlPosToBuf   PI
     DDataStruct                           LikeDS(GetTrlPos)
     D                                     Const
     DBuffer                         20A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:20) = DataStruct.assetid;
       BufPtr += 20;

       return ;

     PGetTrlPosToBuf   E

      ************************************
      * Convert buffer to TrlRtnDta
      ************************************
     PBufToTrlRtnDta   B                   Export

     DBufToTrlRtnDta   PI
     DBuffer                       1585A
     DDataStruct                           LikeDS(TrlRtnDta)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.skybitz.error = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.skybitz.gls.mtsn = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.skybitz.gls.asset.assetid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.asset.assettype = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.skybitz.gls.asset.owner = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.skybitz.gls.asset.note = %subst(CharBuf:1:30);
       BufPtr += 30;
       for i = 1 to 10;
       DataStruct.skybitz.gls.asset.groups.groupname(i) = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;
       DataStruct.skybitz.gls.msgtype = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.skybitz.gls.binary.inputname = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.skybitz.gls.binary.inputid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.binary.inputval = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.binary.inputstate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.extpwr = %subst(CharBuf:1:1);
       BufPtr += 1;
       for i = 1 to 10;
       DataStruct.skybitz.gls.serial(i).serialtype = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.skybitz.gls.serial(i).serialid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.serial(i).serialname = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.skybitz.gls.serial(i).serialdata = %subst(CharBuf:1:20);
       BufPtr += 20;
       endfor;
       DataStruct.skybitz.gls.latitude = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.skybitz.gls.longitude = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.skybitz.gls.speed = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.skybitz.gls.heading = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.skybitz.gls.headingdegrees = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.battery = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.time = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.skybitz.gls.quality = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.landmark.geoname = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.skybitz.gls.landmark.locationid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.landmark.city = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.skybitz.gls.landmark.state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.skybitz.gls.landmark.country = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.skybitz.gls.landmark.postal = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.landmark.distance = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.skybitz.gls.landmark.direction = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.skybitz.gls.landmark.geotypename = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.skybitz.gls.landmark.geoshape = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.skybitz.gls.address.street = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.skybitz.gls.address.city = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.skybitz.gls.address.state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.skybitz.gls.address.country = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.skybitz.gls.address.postal = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.skyfence.skyfencestatus = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.idle.idlestatus = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.idle.idleduration = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.idle.idlegap = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.epmflag = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.skybitz.gls.messagercvtime = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.skybitz.gls.devicetype = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.error = %subst(CharBuf:1:1);
       BufPtr += 1;

       return ;

     PBufToTrlRtnDta   E
