     H Nomain

      ************************************
      * Module: drvordr
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include drvordr_h

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
     DBuffer                       7107A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       for i = 1 to 1;
       %subst(CharBuf:1:5) = DataStruct.drivers(i);
       BufPtr += 5;
       endfor;
       %subst(CharBuf:1:18) = %char(DataStruct.id);
       BufPtr += 18;
       %subst(CharBuf:1:7) = DataStruct.external_id;
       BufPtr += 7;
       %subst(CharBuf:1:7) = DataStruct.external_id_alias;
       BufPtr += 7;
       %subst(CharBuf:1:10) = DataStruct.preplan_external_id;
       BufPtr += 10;
       %subst(CharBuf:1:6) = DataStruct.status;
       BufPtr += 6;
       %subst(CharBuf:1:1) = DataStruct.sequence;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.shipment_details.hazmat;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.shipment_details.high_value;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.shipment_details.temperature_controlled;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.shipment_details.total_distance.value;
       BufPtr += 1;
       %subst(CharBuf:1:2) = DataStruct.shipment_details.total_distance.unit_of_measure;
       BufPtr += 2;
       %subst(CharBuf:1:4) = DataStruct.shipment_details.line_of_business;
       BufPtr += 4;
       %subst(CharBuf:1:20) = DataStruct.shipment_details.master_bill_of_lading;
       BufPtr += 20;
       for j = 1 to 4;

       endfor;
       %subst(CharBuf:1:5) = DataStruct.shipment_details.truck_profile;
       BufPtr += 5;
       %subst(CharBuf:1:25) = DataStruct.received_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.reviewed_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.updated_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.modified_at;
       BufPtr += 25;
       for i = 1 to 3;
       %subst(CharBuf:1:7) = DataStruct.remarks(i).label;
       BufPtr += 7;
       %subst(CharBuf:1:29) = DataStruct.remarks(i).value;
       BufPtr += 29;
       %subst(CharBuf:1:3) = %char(DataStruct.remarks(i).order);
       BufPtr += 3;
       endfor;
       %subst(CharBuf:1:1) = DataStruct.prompts.eta;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.prompts.fuel;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.prompts.eta_change_available;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.prompts.update_fuel_available;
       BufPtr += 1;
       for i = 1 to 9;
       %subst(CharBuf:1:6) = DataStruct.meta(i).asset.external_id;
       BufPtr += 6;
       %subst(CharBuf:1:10) = DataStruct.meta(i).asset.type;
       BufPtr += 10;
       %subst(CharBuf:1:17) = DataStruct.meta(i).asset.vin;
       BufPtr += 17;
       %subst(CharBuf:1:5) = %char(DataStruct.meta(i).fuel_level);
       BufPtr += 5;
       %subst(CharBuf:1:11) = %char(DataStruct.meta(i).location.latitude);
       BufPtr += 11;
       %subst(CharBuf:1:19) = %char(DataStruct.meta(i).location.longitude);
       BufPtr += 19;
       %subst(CharBuf:1:10) = %char(DataStruct.meta(i).odometer);
       BufPtr += 10;
       %subst(CharBuf:1:25) = DataStruct.meta(i).timestamp;
       BufPtr += 25;
       endfor;
       for i = 1 to 4;

       endfor;
       for i = 1 to 4;
       %subst(CharBuf:1:8) = DataStruct.external_data(i).label;
       BufPtr += 8;
       %subst(CharBuf:1:5) = DataStruct.external_data(i).value;
       BufPtr += 5;
       %subst(CharBuf:1:3) = %char(DataStruct.external_data(i).order);
       BufPtr += 3;
       %subst(CharBuf:1:1) = DataStruct.external_data(i).isLabel;
       BufPtr += 1;
       endfor;
       for i = 1 to 4;
       %subst(CharBuf:1:18) = %char(DataStruct.steps(i).id);
       BufPtr += 18;
       %subst(CharBuf:1:17) = DataStruct.steps(i).external_id;
       BufPtr += 17;
       %subst(CharBuf:1:12) = DataStruct.steps(i).name;
       BufPtr += 12;
       %subst(CharBuf:1:1) = DataStruct.steps(i).is_disabled;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.steps(i).is_skippable;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.steps(i).is_skipped;
       BufPtr += 1;
       %subst(CharBuf:1:5) = DataStruct.steps(i).skip_reason;
       BufPtr += 5;
       %subst(CharBuf:1:1) = DataStruct.steps(i).is_bypassable;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.steps(i).is_bypassed;
       BufPtr += 1;
       %subst(CharBuf:1:5) = DataStruct.steps(i).bypass_reason;
       BufPtr += 5;
       %subst(CharBuf:1:1) = DataStruct.steps(i).is_reorderable;
       BufPtr += 1;
       %subst(CharBuf:1:5) = DataStruct.steps(i).reorder_reason;
       BufPtr += 5;
       %subst(CharBuf:1:1) = DataStruct.steps(i).completed;
       BufPtr += 1;
       %subst(CharBuf:1:25) = DataStruct.steps(i).completed_at;
       BufPtr += 25;
       %subst(CharBuf:1:4) = DataStruct.steps(i).type;
       BufPtr += 4;
       %subst(CharBuf:1:3) = %char(DataStruct.steps(i).order);
       BufPtr += 3;
       %subst(CharBuf:1:15) = DataStruct.steps(i).location_external_id;
       BufPtr += 15;
       %subst(CharBuf:1:5) = DataStruct.steps(i).route_leg_external_id;
       BufPtr += 5;
       %subst(CharBuf:1:5) = DataStruct.steps(i).customer_external_id;
       BufPtr += 5;
       %subst(CharBuf:1:25) = DataStruct.steps(i).appointment.start_time;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).appointment.ready_time;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).appointment.late_time;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).appointment.end_time;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).eta;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).updated_at;
       BufPtr += 25;
       for k = 1 to 3;
       %subst(CharBuf:1:18) = %char(DataStruct.steps(i).tasks(k).id);
       BufPtr += 18;
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
       %subst(CharBuf:1:5) = DataStruct.steps(i).tasks(k).completed_by;
       BufPtr += 5;
       %subst(CharBuf:1:18) = DataStruct.steps(i).tasks(k).completion_type;
       BufPtr += 18;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).created_at;
       BufPtr += 25;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).updated_at;
       BufPtr += 25;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).external_data.is_prompt_repeats;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).external_data.is_allow_repeats;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).external_data.is_required;
       BufPtr += 1;
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
       %subst(CharBuf:1:7) = DataStruct.steps(i).tasks(k).fields.Order#;
       BufPtr += 7;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).fields.Tyepe;
       BufPtr += 1;
       %subst(CharBuf:1:4) = DataStruct.steps(i).tasks(k).fields.PCS;
       BufPtr += 4;
       %subst(CharBuf:1:5) = DataStruct.steps(i).tasks(k).fields.WGT;
       BufPtr += 5;
       %subst(CharBuf:1:7) = DataStruct.steps(i).tasks(k).fields.TRIP;
       BufPtr += 7;
       %subst(CharBuf:1:25) = DataStruct.steps(i).tasks(k).fields.Comment;
       BufPtr += 25;
       %subst(CharBuf:1:1) = DataStruct.steps(i).tasks(k).fields.DSP;
       BufPtr += 1;
       %subst(CharBuf:1:6) = DataStruct.steps(i).tasks(k).fields.Unit;
       BufPtr += 6;
       %subst(CharBuf:1:10) = DataStruct.steps(i).tasks(k).fields.hiddenLatitude;
       BufPtr += 10;
       %subst(CharBuf:1:11) = DataStruct.steps(i).tasks(k).fields.hiddenLongitude;
       BufPtr += 11;
       %subst(CharBuf:1:15) = DataStruct.steps(i).tasks(k).fields.locname;
       BufPtr += 15;
       %subst(CharBuf:1:18) = DataStruct.steps(i).tasks(k).fields.address;
       BufPtr += 18;
       %subst(CharBuf:1:12) = DataStruct.steps(i).tasks(k).fields.city;
       BufPtr += 12;
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
       %subst(CharBuf:1:1) = DataStruct.is_declinable;
       BufPtr += 1;

       return ;

     PFormatNameToBuf  E
