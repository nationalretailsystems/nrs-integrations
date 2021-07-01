     H Nomain

      ************************************
      * Module: pncchkin
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pncchkin_h

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
      * Convert CheckinDS to buffer
      ************************************
     PCheckinDSToBuf   B                   Export

     DCheckinDSToBuf   PI
     DDataStruct                           LikeDS(CheckinDS)
     D                                     Const
     DBuffer                        310A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:25) = DataStruct.msg_grp_id;
       BufPtr += 25;
       %subst(CharBuf:1:6) = DataStruct.campus;
       BufPtr += 6;
       %subst(CharBuf:1:25) = DataStruct.checked_in;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.asset_type;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.rfid_tag;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.site_code;
       BufPtr += 25;
       %subst(CharBuf:1:4) = DataStruct.scac;
       BufPtr += 4;
       %subst(CharBuf:1:25) = DataStruct.trailer;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.container_num;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.movement_type;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.load_status;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.customer_code;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.fleet_code;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.tractor_scac;
       BufPtr += 25;

       return ;

     PCheckinDSToBuf   E
