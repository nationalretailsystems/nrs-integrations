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
      * Convert OrderReq to buffer
      ************************************
     POrderReqToBuf    B                   Export

     DOrderReqToBuf    PI
     DDataStruct                           LikeDS(OrderReq)
     D                                     Const
     DBuffer                         13A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:7) = DataStruct.order;
       BufPtr += 7;
       %subst(CharBuf:1:6) = DataStruct.drivers;
       BufPtr += 6;

       return ;

     POrderReqToBuf    E

      ************************************
      * Convert buffer to OrderRes
      ************************************
     PBufToOrderRes    B                   Export

     DBufToOrderRes    PI
     DBuffer                       7323A
     DDataStruct                           LikeDS(OrderRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 1;
       DataStruct.drivers(i) = %subst(CharBuf:1:5);
       BufPtr += 5;
       endfor;
       DataStruct.id = %dec(%subst(CharBuf:1:18):16:0);
       BufPtr += 18;
       DataStruct.external_id = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.external_id_alias = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.preplan_external_id = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.status = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.sequence = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.shipment_details.hazmat = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.shipment_details.high_value = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.shipment_details.temperature_controlled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.shipment_details.total_distance.value = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.shipment_details.total_distance.unit_of_measure = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.shipment_details.line_of_business = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.shipment_details.master_bill_of_lading = %subst(CharBuf:1:20);
       BufPtr += 20;
       for i = 1 to 4;
       DataStruct.shipment_details.shipping_documents(i).type = %subst(CharBuf:1:14);
       BufPtr += 14;
       DataStruct.shipment_details.shipping_documents(i).value = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;
       DataStruct.shipment_details.truck_profile = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.received_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.reviewed_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.created_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.updated_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.modified_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       for i = 1 to 3;
       DataStruct.remarks(i).label = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.remarks(i).value = %subst(CharBuf:1:29);
       BufPtr += 29;
       DataStruct.remarks(i).order = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       endfor;
       DataStruct.prompts.eta = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.prompts.fuel = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.prompts.eta_change_available = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.prompts.update_fuel_available = %subst(CharBuf:1:1);
       BufPtr += 1;
       for i = 1 to 9;
       DataStruct.meta(i).asset.external_id = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.meta(i).asset.type = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.meta(i).asset.vin = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.meta(i).fuel_level = %dec(%subst(CharBuf:1:5):3:1);
       BufPtr += 5;
       DataStruct.meta(i).location.latitude = %dec(%subst(CharBuf:1:11):9:7);
       BufPtr += 11;
       DataStruct.meta(i).location.longitude = %dec(%subst(CharBuf:1:19):17:14);
       BufPtr += 19;
       DataStruct.meta(i).odometer = %dec(%subst(CharBuf:1:10):8:2);
       BufPtr += 10;
       DataStruct.meta(i).timestamp = %subst(CharBuf:1:25);
       BufPtr += 25;
       endfor;
       for i = 1 to 4;
       DataStruct.locations(i).latitude = %dec(%subst(CharBuf:1:11):9:7);
       BufPtr += 11;
       DataStruct.locations(i).longitude = %dec(%subst(CharBuf:1:19):17:14);
       BufPtr += 19;
       endfor;
       for i = 1 to 4;
       DataStruct.external_data(i).label = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.external_data(i).value = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.external_data(i).order = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.external_data(i).isLabel = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       for i = 1 to 4;
       DataStruct.steps(i).id = %dec(%subst(CharBuf:1:18):16:0);
       BufPtr += 18;
       DataStruct.steps(i).external_id = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.steps(i).name = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.steps(i).is_disabled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).is_skippable = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).is_skipped = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).skip_reason = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).is_bypassable = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).is_bypassed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).bypass_reason = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).is_reorderable = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).reorder_reason = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).completed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).completed_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).type = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.steps(i).order = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.steps(i).location_external_id = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.steps(i).route_leg_external_id = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).customer_external_id = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).appointment.start_time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).appointment.ready_time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).appointment.late_time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).appointment.end_time = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).eta = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).created_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).updated_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       for j = 1 to 3;
       DataStruct.steps(i).tasks(j).id = %dec(%subst(CharBuf:1:18):16:0);
       BufPtr += 18;
       DataStruct.steps(i).tasks(j).external_id = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.steps(i).tasks(j).name = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.steps(i).tasks(j).order = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.steps(i).tasks(j).type = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.steps(i).tasks(j).completed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).completed_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).completed_by = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).completion_type = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.steps(i).tasks(j).created_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).updated_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).external_data.is_prompt_repeats = 
        %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).external_data.is_allow_repeats = 
        %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).external_data.is_required = 
        %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).external_data.geofence.circle.center.
        latitude = 
        %dec(%subst(CharBuf:1:10):8:6);
       BufPtr += 10;
       DataStruct.steps(i).tasks(j).external_data.geofence.circle.center.
        longitude = 
        %dec(%subst(CharBuf:1:11):9:6);
       BufPtr += 11;
       DataStruct.steps(i).tasks(j).external_data.geofence.circle.radius = 
        %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).external_data.geofence.delay = 
        %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).external_data.geofence.auto_complete = 
        %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).external_data.geofence.trigger_by = 
        %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).external_data.geofence.message = 
        %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.steps(i).tasks(j).fields.OrderNum = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.steps(i).tasks(j).fields.Tyepe = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).fields.PCS = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.steps(i).tasks(j).fields.WGT = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).fields.TRIP = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.steps(i).tasks(j).fields.Comment = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).fields.DSP = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).fields.Unit = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.steps(i).tasks(j).fields.hiddenLatitude = 
        %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.steps(i).tasks(j).fields.hiddenLongitude = 
        %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.steps(i).tasks(j).fields.locname = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.steps(i).tasks(j).fields.address = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.steps(i).tasks(j).fields.city = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.steps(i).tasks(j).fields.state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.steps(i).tasks(j).fields.zipcode = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).fields.stopkey = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.steps(i).tasks(j).fields.stopseq = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.steps(i).tasks(j).fields.user_id = 
        %dec(%subst(CharBuf:1:18):16:0);
       BufPtr += 18;
       endfor;
       endfor;
       DataStruct.is_declinable = %subst(CharBuf:1:1);
       BufPtr += 1;

       return ;

     PBufToOrderRes    E
