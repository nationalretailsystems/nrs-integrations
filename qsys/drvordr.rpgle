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
      * Convert OrderReqDS to buffer
      ************************************
     POrderReqDSToBuf  B                   Export

     DOrderReqDSToBuf  PI
     DDataStruct                           LikeDS(OrderReqDS)
     D                                     Const
     DBuffer                          6A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.drivers;
       BufPtr += 6;

       return ;

     POrderReqDSToBuf  E

      ************************************
      * Convert buffer to OrderResDS
      ************************************
     PBufToOrderResDS  B                   Export

     DBufToOrderResDS  PI
     DBuffer                      29870A
     DDataStruct                           LikeDS(OrderResDS)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 1;
       DataStruct.drivers(i) = %subst(CharBuf:1:6);
       BufPtr += 6;
       endfor;
       DataStruct.id = %dec(%subst(CharBuf:1:18):16:0);
       BufPtr += 18;
       DataStruct.external_id = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.external_id_alias = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.status = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.sequence = %subst(CharBuf:1:1);
       BufPtr += 1;
       for i = 1 to 4;
       DataStruct.shipping_documents(i).type = %subst(CharBuf:1:14);
       BufPtr += 14;
       DataStruct.shipping_documents(i).value = %subst(CharBuf:1:7);
       BufPtr += 7;
       endfor;
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
       for i = 1 to 20;
       DataStruct.locations(i).external_id = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.locations(i).type = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.locations(i).name = %subst(CharBuf:1:23);
       BufPtr += 23;
       DataStruct.locations(i).address = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.locations(i).city = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.locations(i).state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.locations(i).country_code = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.locations(i).postal_code = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.locations(i).latitude = %dec(%subst(CharBuf:1:10):8:6);
       BufPtr += 10;
       DataStruct.locations(i).longitude = %dec(%subst(CharBuf:1:11):9:6);
       BufPtr += 11;
       DataStruct.locations(i).time_zone = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.locations(i).created_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.locations(i).updated_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       endfor;
       for i = 1 to 4;
       DataStruct.external_data(i).label = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.external_data(i).value = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.external_data(i).order = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.external_data(i).isLabel = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       for i = 1 to 20;
       DataStruct.steps(i).external_id = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.steps(i).name = %subst(CharBuf:1:23);
       BufPtr += 23;
       DataStruct.steps(i).completed = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).completed_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).type = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.steps(i).order = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.steps(i).location_external_id = %subst(CharBuf:1:16);
       BufPtr += 16;
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
       DataStruct.steps(i).tasks(j).completed_by = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.steps(i).tasks(j).completion_type = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.steps(i).tasks(j).created_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).updated_at = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).external_data.geofence.circle.center.latitude = %dec(%subst(CharBuf:1:10):8:6);
       BufPtr += 10;
       DataStruct.steps(i).tasks(j).external_data.geofence.circle.center.longitude = %dec(%subst(CharBuf:1:11):9:6);
       BufPtr += 11;
       DataStruct.steps(i).tasks(j).external_data.geofence.circle.radius = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).external_data.geofence.delay = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).external_data.geofence.auto_complete = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).external_data.geofence.trigger_by = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).external_data.geofence.message = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.steps(i).tasks(j).fields.OrderNum = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.steps(i).tasks(j).fields.Tyepe = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).fields.PCS = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.steps(i).tasks(j).fields.WGT = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).fields.TRIP = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.steps(i).tasks(j).fields.Comment = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.steps(i).tasks(j).fields.DSP = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.steps(i).tasks(j).fields.Unit = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.steps(i).tasks(j).fields.hiddenLatitude = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.steps(i).tasks(j).fields.hiddenLongitude = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.steps(i).tasks(j).fields.locname = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.steps(i).tasks(j).fields.address = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.steps(i).tasks(j).fields.city = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.steps(i).tasks(j).fields.state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.steps(i).tasks(j).fields.zipcode = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.steps(i).tasks(j).fields.stopkey = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.steps(i).tasks(j).fields.stopseq = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.steps(i).tasks(j).fields.user_id = %dec(%subst(CharBuf:1:18):16:0);
       BufPtr += 18;
       endfor;
       endfor;

       return ;

     PBufToOrderResDS  E
