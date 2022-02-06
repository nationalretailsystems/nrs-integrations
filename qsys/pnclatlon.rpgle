     H Nomain

      ************************************
      * Module: pnclatlon
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pnclatln_h

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
      * Convert LLReq to buffer
      ************************************
     PLLReqToBuf       B                   Export

     DLLReqToBuf       PI
     DDataStruct                           LikeDS(LLReq)
     D                                     Const
     DBuffer                         86A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:80) = DataStruct.comment;
       BufPtr += 80;
       %subst(CharBuf:1:6) = DataStruct.facility;
       BufPtr += 6;

       return ;

     PLLReqToBuf       E

      ************************************
      * Convert buffer to LLRes
      ************************************
     PBufToLLRes       B                   Export

     DBufToLLRes       PI
     DBuffer                        604A
     DDataStruct                           LikeDS(LLRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.event = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.time = %subst(CharBuf:1:29);
       BufPtr += 29;
       DataStruct.version = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.campus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.custfaccode = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.event_id = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.reference_id = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.checked_in = %subst(CharBuf:1:29);
       BufPtr += 29;
       DataStruct.data.asset.checked_out = %subst(CharBuf:1:29);
       BufPtr += 29;
       DataStruct.data.asset.updated_on = %subst(CharBuf:1:29);
       BufPtr += 29;
       DataStruct.data.asset.check_in_agent = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.check_out_agent = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.purpose = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.spot_number = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.asset.last_move_time = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.data.asset.movement_type = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.asset.load_status = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.asset.scac = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.asset.trailer = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.container_num = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.fleet_code = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.data.asset.tractor_scac = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.asset.customer_code = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.asset.asset_dimension = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.asset.asset_type = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.asset.site = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.site_code = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.data.asset.asset_visit_id = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.data.asset.is_dock = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.data.asset.latitude = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.longitude = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.asset.rfid_tag = %subst(CharBuf:1:24);
       BufPtr += 24;

       return ;

     PBufToLLRes       E
