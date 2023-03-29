     H Nomain

      ************************************
      * Module: pnclocat
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pnclocat_h

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
      * Convert LocatDS to buffer
      ************************************
     PLocatDSToBuf     B                   Export

     DLocatDSToBuf     PI
     DDataStruct                           LikeDS(LocatDS)
     D                                     Const
     DBuffer                        160A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:25) = DataStruct.msg_grp_id;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.eventid;
       BufPtr += 25;
       %subst(CharBuf:1:6) = DataStruct.campus;
       BufPtr += 6;
       %subst(CharBuf:1:25) = DataStruct.data.asset.asset_type;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.site_code;
       BufPtr += 25;
       %subst(CharBuf:1:4) = DataStruct.data.asset.scac;
       BufPtr += 4;
       %subst(CharBuf:1:25) = DataStruct.data.asset.trailer;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.data.asset.container_num;
       BufPtr += 25;

       return ;

     PLocatDSToBuf     E
