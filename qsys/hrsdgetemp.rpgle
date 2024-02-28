     H Nomain

      ************************************
      * Module: hrsdgetemp
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include hrsdgete_h

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
      * Convert EmpRequest to buffer
      ************************************
     PEmpRequestToBuf  B                   Export

     DEmpRequestToBuf  PI
     DDataStruct                           LikeDS(EmpRequest)
     D                                     Const
     DBuffer                          6A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.employee;
       BufPtr += 6;

       return ;

     PEmpRequestToBuf  E

      ************************************
      * Convert buffer to EmpResult
      ************************************
     PBufToEmpResult   B                   Export

     DBufToEmpResult   PI
     DBuffer                       1257A
     DDataStruct                           LikeDS(EmpResult)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.id = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.firstname = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.middlename = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.lastname = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.maidenname = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.external_id = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.language = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.email = %subst(CharBuf:1:23);
       BufPtr += 23;
       DataStruct.birth_date = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.address1 = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.address2 = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.address3 = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.zip_code = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.city = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.country = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.state = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.mobile_phone_number = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.status = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.terminated = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.starting_date = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.created_at = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.updated_at = %subst(CharBuf:1:32);
       BufPtr += 32;
       for i = 1 to 1;
       DataStruct.registration_references(i).employee_number = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.registration_references(i).active = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.registration_references(i).departure_date = %subst(CharBuf:1:0);
       BufPtr += 0;
       DataStruct.registration_references(i).organization_id = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.registration_references(i).created_at = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.registration_references(i).updated_at = %subst(CharBuf:1:32);
       BufPtr += 32;
       endfor;
       DataStruct.departure_date = %subst(CharBuf:1:0);
       BufPtr += 0;
       for i = 1 to 50;
       DataStruct.custom_fields(i).code = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.custom_fields(i).value = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.custom_fields(i).label = %subst(CharBuf:1:0);
       BufPtr += 0;
       endfor;

       return ;

     PBufToEmpResult   E
