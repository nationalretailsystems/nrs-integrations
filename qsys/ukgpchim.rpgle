     H Nomain

      ************************************
      * Module: ukgpchim
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgpchim_h

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
      * Convert PunchReqDS to buffer
      ************************************
     PPunchReqDSToBuf  B                   Export

     DPunchReqDSToBuf  PI
     DDataStruct                           LikeDS(PunchReqDS)
     D                                     Const
     DBuffer                        156A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       for i = 1 to 2;
       %subst(CharBuf:1:8) = %char(DataStruct.punches(i).employee.id);
       BufPtr += 8;
       %subst(CharBuf:1:12) = %char(DataStruct.punches(i).punchgeoloc.latitude);
       BufPtr += 12;
       %subst(CharBuf:1:12) = %char(DataStruct.punches(i).punchgeoloc.longitude);
       BufPtr += 12;
       %subst(CharBuf:1:23) = DataStruct.punches(i).enteredOnDtm;
       BufPtr += 23;
       %subst(CharBuf:1:23) = DataStruct.punches(i).punchDtm;
       BufPtr += 23;
       endfor;

       return ;

     PPunchReqDSToBuf  E
