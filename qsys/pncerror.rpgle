     H Nomain

      ************************************
      * Module: pncerror
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pncerr_h

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
     DBuffer                        180A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:80) = DataStruct.comment;
       BufPtr += 80;
       %subst(CharBuf:1:100) = DataStruct.filename;
       BufPtr += 100;

       return ;

     PLLReqToBuf       E

      ************************************
      * Convert buffer to LLRes
      ************************************
     PBufToLLRes       B                   Export

     DBufToLLRes       PI
     DBuffer                        670A
     DDataStruct                           LikeDS(LLRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.event = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.error = %subst(CharBuf:1:256);
       BufPtr += 256;
       DataStruct.data.message.event = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.message.time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.message.version = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.message.campus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.data.message.data.asset.checked_in = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.data.message.data.asset.checked_out = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.data.message.data.asset.movement_type = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.message.data.asset.load_status = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.message.data.asset.scac = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.message.data.asset.trailer = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.message.data.asset.container_num = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.message.data.asset.fleet_code = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.data.message.data.asset.tractor_scac = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.message.data.asset.customer_code = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.message.data.asset.asset_type = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.message.data.asset.site_code = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.data.message.data.asset.rfid_tag = %subst(CharBuf:1:24);
       BufPtr += 24;

       return ;

     PBufToLLRes       E
