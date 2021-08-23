     H Nomain

      ************************************
      * Module: pncchkot
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pncchkot_h

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
      * Convert CheckotDS to buffer
      ************************************
     PCheckotDSToBuf   B                   Export

     DCheckotDSToBuf   PI
     DDataStruct                           LikeDS(CheckotDS)
     D                                     Const
     DBuffer                        285A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:25) = DataStruct.msg_grp_id;
       BufPtr += 25;
       %subst(CharBuf:1:6) = DataStruct.campus;
       BufPtr += 6;
       %subst(CharBuf:1:25) = DataStruct.data.asset.checked_out;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.asset_type;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.rfid_tag;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.site_code;
       BufPtr += 25;
       %subst(CharBuf:1:4) = DataStruct.data.asset.scac;
       BufPtr += 4;
       %subst(CharBuf:1:25) = DataStruct.data.asset.trailer;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.container_num;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.movement_type;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.load_status;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.movement_type;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.outbound_seal;
       BufPtr += 25;

       return ;

     PCheckotDSToBuf   E
