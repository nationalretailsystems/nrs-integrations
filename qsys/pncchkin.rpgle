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
     DCharBuf          S            500A   Based(BufPtr)

      ************************************
      * Convert Checkin_ds to buffer
      ************************************
     PCheckin_dsToBuf  B                   Export

     DCheckin_dsToBuf  PI
     DDataStruct                           LikeDS(Checkin_ds)
     D                                     Const
     DBuffer                        500A

       // Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

       // Write fields from DS to buffer
       %subst(CharBuf:1:50) = DataStruct.event;
       BufPtr += 50;
       %subst(CharBuf:1:25) = DataStruct.time;
       BufPtr += 25;
       %subst(CharBuf:1:3) = DataStruct.version;
       BufPtr += 3;
       %subst(CharBuf:1:6) = DataStruct.campus;
       BufPtr += 6;
       %subst(CharBuf:1:50) = DataStruct.event;
       BufPtr += 50;
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

     PCheckin_dsToBuf  E

      ************************************
      * Convert buffer to Result
      ************************************
     PBufToResult      B                   Export

     DBufToResult      PI
     DBuffer                        500A
     DDataStruct                           LikeDS(Result)

       // Initialize to begining of buffer
       BufPtr = %addr(Buffer);

       // Read fields from buffer into DS
       DataStruct.MessageId = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.SequenceNumber = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.RespMetaData = %subst(CharBuf:1:1024);
       BufPtr += 1024;

       return ;

     PBufToResult      E
