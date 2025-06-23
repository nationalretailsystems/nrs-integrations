     H Nomain

      ************************************
      * Module: drvordr
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include drvordr

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
      * Convert FormatName to buffer
      ************************************
     PFormatNameToBuf  B                   Export

     DFormatNameToBuf  PI
     DDataStruct                           LikeDS(FormatName)
     D                                     Const
     DBuffer                      26015A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       for i = 1 to 1;
       %subst(CharBuf:1:4) = DataStruct.drivers(i);
       BufPtr += 4;
       endfor;
       %subst(CharBuf:1:18) = %char(DataStruct.id);
       BufPtr += 18;
       %subst(CharBuf:1:7) = DataStruct.external_id;
       BufPtr += 7;
       %subst(CharBuf:1:7) = DataStruct.external_id_alias;
       BufPtr += 7;
       %subst(CharBuf:1:6) = DataStruct.status;
       BufPtr += 6;
       %subst(CharBuf:1:1) = DataStruct.sequence;
       BufPtr += 1;
       for i = 1 to 4;
       %subst(CharBuf:1:14) = DataStruct.shipping_documents(i).type;
       BufPtr += 14;
       %subst(CharBuf:1:7) = DataStruct.shipping_documents(i).value;
       BufPtr += 7;
       endfor;
       %subst(CharBuf:1:25) = DataStruct.received_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.reviewed_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.updated_at;
       BufPtr += 25;
       %subst(CharBuf:1:0) = DataStruct.modified_at;
       BufPtr += 0;
       for i = 1 to 20;
       %subst(CharBuf:1:16) = DataStruct.locations(i).external_id;
       BufPtr += 16;
       %subst(CharBuf:1:3) = DataStruct.locations(i).type;
       BufPtr += 3;
       %subst(CharBuf:1:23) = DataStruct.locations(i).name;
       BufPtr += 23;
       %subst(CharBuf:1:25) = DataStruct.locations(i).address;
       BufPtr += 25;
       %subst(CharBuf:1:6) = DataStruct.locations(i).city;
       BufPtr += 6;
       %subst(CharBuf:1:2) = DataStruct.locations(i).state;
       BufPtr += 2;
       %subst(CharBuf:1:2) = DataStruct.locations(i).country_code;
       BufPtr += 2;
       %subst(CharBuf:1:5) = DataStruct.locations(i).postal_code;
       BufPtr += 5;
       %subst(CharBuf:1:10) = %char(DataStruct.locations(i).latitude);
       BufPtr += 10;
       %subst(CharBuf:1:11) = %char(DataStruct.locations(i).longitude);
       BufPtr += 11;
       %subst(CharBuf:1:10) = DataStruct.locations(i).time_zone;
       BufPtr += 10;
       %subst(CharBuf:1:25) = DataStruct.locations(i).created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.locations(i).updated_at;
       BufPtr += 25;
       endfor;
       for i = 1 to 4;
       %subst(CharBuf:1:8) = DataStruct.external_data(i).label;
       BufPtr += 8;
       %subst(CharBuf:1:0) = DataStruct.external_data(i).value;
       BufPtr += 0;
       %subst(CharBuf:1:3) = %char(DataStruct.external_data(i).order);
       BufPtr += 3;
       %subst(CharBuf:1:1) = DataStruct.external_data(i).isLabel;
       BufPtr += 1;
       endfor;
       for i = 1 to 20;
       %subst(CharBuf:1:18) = DataStruct.steps(i).external_id;
       BufPtr += 18;
       %subst(CharBuf:1:23) = DataStruct.steps(i).name;
       BufPtr += 23;
       %subst(CharBuf:1:1) = DataStruct.steps(i).completed;
       BufPtr += 1;
       %subst(CharBuf:1:25) = DataStruct.steps(i).completed_at;
       BufPtr += 25;
       %subst(CharBuf:1:6) = DataStruct.steps(i).type;
       BufPtr += 6;
       %subst(CharBuf:1:3) = %char(DataStruct.steps(i).order);
       BufPtr += 3;
       %subst(CharBuf:1:16) = DataStruct.steps(i).location_external_id;
       BufPtr += 16;
       %subst(CharBuf:1:25) = DataStruct.steps(i).appointment.start_time;
       BufPtr += 25;
       %subst(CharBuf:1:0) = DataStruct.steps(i).appointment.ready_time;
       BufPtr += 0;
       %subst(CharBuf:1:0) = DataStruct.steps(i).appointment.late_time;
       BufPtr += 0;
       %subst(CharBuf:1:0) = DataStruct.steps(i).appointment.end_time;
       BufPtr += 0;
       %subst(CharBuf:1:0) = DataStruct.steps(i).eta;
       BufPtr += 0;
       %subst(CharBuf:1:25) = DataStruct.steps(i).created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).updated_at;
       BufPtr += 25;
       for k = 1 to 3;
       %subst(CharBuf:1:9) = DataStruct.steps(i).tasks(k).external_id;
       BufPtr += 9;
       %subst(CharBuf:1:19) = DataStruct.steps(i).tasks(k).name;
       BufPtr += 19;
       %subst(CharBuf:1:3) = %char(DataStruct.steps(i).tasks(k).order);
       BufPtr += 3;
       %subst(CharBuf:1:19) = DataStruct.steps(i).tasks(k).type;
       BufPtr += 19;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).completed;
       BufPtr += 1;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).completed_at;
       BufPtr += 25;
       %subst(CharBuf:1:4) = DataStruct.steps(i).tasks(k).completed_by;
       BufPtr += 4;
       %subst(CharBuf:1:6) = DataStruct.steps(i).tasks(k).completion_type;
       BufPtr += 6;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).updated_at;
       BufPtr += 25;
       %subst(CharBuf:1:10) = %char(DataStruct.steps(i).tasks(k).external_data.geofence.circle.center.latitude);
       BufPtr += 10;
       %subst(CharBuf:1:11) = %char(DataStruct.steps(i).tasks(k).external_data.geofence.circle.center.longitude);
       BufPtr += 11;
       %subst(CharBuf:1:5) = %char(DataStruct.steps(i).tasks(k).external_data.geofence.circle.radius);
       BufPtr += 5;
       %subst(CharBuf:1:5) = %char(DataStruct.steps(i).tasks(k).external_data.geofence.delay);
       BufPtr += 5;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).external_data.geofence.auto_complete;
       BufPtr += 1;
       %subst(CharBuf:1:5) = DataStruct.steps(i).tasks(k).external_data.geofence.trigger_by;
       BufPtr += 5;
       %subst(CharBuf:1:17) = DataStruct.steps(i).tasks(k).external_data.geofence.message;
       BufPtr += 17;
       %subst(CharBuf:1:7) = DataStruct.steps(i).tasks(k).fields.OrderNum;
       BufPtr += 7;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).fields.Tyepe;
       BufPtr += 1;
       %subst(CharBuf:1:2) = DataStruct.steps(i).tasks(k).fields.PCS;
       BufPtr += 2;
       %subst(CharBuf:1:5) = DataStruct.steps(i).tasks(k).fields.WGT;
       BufPtr += 5;
       %subst(CharBuf:1:7) = DataStruct.steps(i).tasks(k).fields.TRIP;
       BufPtr += 7;
       %subst(CharBuf:1:0) = DataStruct.steps(i).tasks(k).fields.Comment;
       BufPtr += 0;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).fields.DSP;
       BufPtr += 1;
       %subst(CharBuf:1:6) = DataStruct.steps(i).tasks(k).fields.Unit;
       BufPtr += 6;
       %subst(CharBuf:1:9) = DataStruct.steps(i).tasks(k).fields.hiddenLatitude;
       BufPtr += 9;
       %subst(CharBuf:1:9) = DataStruct.steps(i).tasks(k).fields.hiddenLongitude;
       BufPtr += 9;
       %subst(CharBuf:1:16) = DataStruct.steps(i).tasks(k).fields.locname;
       BufPtr += 16;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).fields.address;
       BufPtr += 25;
       %subst(CharBuf:1:6) = DataStruct.steps(i).tasks(k).fields.city;
       BufPtr += 6;
       %subst(CharBuf:1:2) = DataStruct.steps(i).tasks(k).fields.state;
       BufPtr += 2;
       %subst(CharBuf:1:5) = DataStruct.steps(i).tasks(k).fields.zipcode;
       BufPtr += 5;
       %subst(CharBuf:1:8) = DataStruct.steps(i).tasks(k).fields.stopkey;
       BufPtr += 8;
       %subst(CharBuf:1:2) = DataStruct.steps(i).tasks(k).fields.stopseq;
       BufPtr += 2;
       %subst(CharBuf:1:18) = %char(DataStruct.steps(i).tasks(k).fields.user_id);
       BufPtr += 18;
       endfor;
       endfor;

       return ;

     PFormatNameToBuf  E
