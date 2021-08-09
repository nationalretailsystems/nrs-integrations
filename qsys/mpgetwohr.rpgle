     H Nomain

      ************************************
      * Module: mpgetwohr
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgetwoh_h

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
      * Convert buffer to ResWoHrs
      ************************************
     PBufToResWoHrs    B                   Export

     DBufToResWoHrs    PI
     DBuffer                        169A
     DDataStruct                           LikeDS(ResWoHrs)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.wkOrdLaborKey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.workOrderKey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.contactKey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.contactId = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.laborDate = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.laborHours = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.laborRate = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.laborBudgetId = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.serviceId = %subst(CharBuf:1:25);
       BufPtr += 25;

       return ;

     PBufToResWoHrs    E

      ************************************
      * Convert ReqWoHours to buffer
      ************************************
     PReqWoHoursToBuf  B                   Export

     DReqWoHoursToBuf  PI
     DDataStruct                           LikeDS(ReqWoHours)
     D                                     Const
     DBuffer                         11A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.id);
       BufPtr += 11;

       return ;

     PReqWoHoursToBuf  E
