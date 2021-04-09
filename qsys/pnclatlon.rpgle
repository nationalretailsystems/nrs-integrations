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
     DCharBuf          S            500A   Based(BufPtr)

      ************************************
      * Convert LLReq to buffer
      ************************************
     PLLReqToBuf       B                   Export

     DLLReqToBuf       PI
     DDataStruct                           LikeDS(LLReq)
     D                                     Const
     DBuffer                        500A

       // Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

       // Write fields from DS to buffer
       %subst(CharBuf:1:80) = DataStruct.comment;
       BufPtr += 80;

       return ;

     PLLReqToBuf       E

      ************************************
      * Convert buffer to LLHeadDS
      ************************************
     PBufToLLHeadDS    B                   Export

     DBufToLLHeadDS    PI
     DBuffer                        500A
     DDataStruct                           LikeDS(LLHeadDS)

       // Initialize to begining of buffer
       BufPtr = %addr(Buffer);

       // Read fields from buffer into DS
       DataStruct.event = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.version = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.campus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.custfaccode = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.event_id = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.reference_id = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.checked_in = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.checked_out = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.updated_on = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.check_in_agent = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.check_out_agent = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.purpose = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.spot_number = %subst(CharBuf:1:10);
       BufPtr += 10;

       return ;

     PBufToLLHeadDS    E

      ************************************
      * Convert buffer to LLMoveDS
      ************************************
     PBufToLLMoveDS    B                   Export

     DBufToLLMoveDS    PI
     DBuffer                        500A
     DDataStruct                           LikeDS(LLMoveDS)

       // Initialize to begining of buffer
       BufPtr = %addr(Buffer);

       // Read fields from buffer into DS
       DataStruct.last_move_time = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.movement_type = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.load_status = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.scac = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.trailer = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.container_num = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.fleet_code = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.tractor_scac = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.customer_code = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.asset_dimension = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.asset_type = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.site = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.site_code = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.asset_visit_id = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.is_dock = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.latitude = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.longitude = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.rfid_tag = %subst(CharBuf:1:24);
       BufPtr += 24;

       return ;

     PBufToLLMoveDS    E
