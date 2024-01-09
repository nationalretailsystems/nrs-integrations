     H Nomain EXPROPTS(*ALWBLANKNUM)  

      ************************************
      * Module: ukgtotals
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgtotal_h

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
      * Convert TotalsReq to buffer
      ************************************
     PTotalsReqToBuf   B                   Export

     DTotalsReqToBuf   PI
     DDataStruct                           LikeDS(TotalsReq)
     D                                     Const
     DBuffer                         26A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.employeer;
       BufPtr += 6;
       %subst(CharBuf:1:10) = DataStruct.startDater;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.endDater;
       BufPtr += 10;

       return ;

     PTotalsReqToBuf   E

      ************************************
      * Convert buffer to TotalsRes
      ************************************
     PBufToTotalsRes   B                   Export

     DBufToTotalsRes   PI
     DBuffer                      16220A
     DDataStruct                           LikeDS(TotalsRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.startDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.endDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       for i = 1 to 2;
       DataStruct.totals(i).empcontext.employee.id = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       DataStruct.totals(i).empcontext.employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.totals(i).empcontext.employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.totals(i).empcontext.timezone.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.totals(i).empcontext.timezone.qualifier = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.totals(i).empcontext.timezone.name = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.totals(i).totalContext.totalType = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.totals(i).totalContext.ttlaggtype = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.totals(i).totalContext.ttlgrpbytyp = %subst(CharBuf:1:3);
       BufPtr += 3;
       for j = 1 to 20;
       DataStruct.totals(i).aggtotals(j).amountType = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.totals(i).aggtotals(j).wagesCurrency.amount = %dec(%subst(CharBuf:1:9):7:2);
       BufPtr += 9;
       DataStruct.totals(i).aggtotals(j).wagesCurrency.currencyCode = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.totals(i).aggtotals(j).employee.id = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       DataStruct.totals(i).aggtotals(j).employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.totals(i).aggtotals(j).employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.totals(i).aggtotals(j).location.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.totals(i).aggtotals(j).location.qualifier = %subst(CharBuf:1:75);
       BufPtr += 75;
       DataStruct.totals(i).aggtotals(j).location.name = %subst(CharBuf:1:75);
       BufPtr += 75;
       DataStruct.totals(i).aggtotals(j).job.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.totals(i).aggtotals(j).job.qualifier = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.totals(i).aggtotals(j).job.name = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.totals(i).aggtotals(j).laborCategory.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.totals(i).aggtotals(j).laborCategory.qualifier = %subst(CharBuf:1:35);
       BufPtr += 35;
       DataStruct.totals(i).aggtotals(j).laborCategory.name = %subst(CharBuf:1:35);
       BufPtr += 35;
       DataStruct.totals(i).aggtotals(j).payCode.id = %dec(%subst(CharBuf:1:13):11:0);
       BufPtr += 13;
       DataStruct.totals(i).aggtotals(j).payCode.qualifier = %subst(CharBuf:1:35);
       BufPtr += 35;
       DataStruct.totals(i).aggtotals(j).payCode.name = %subst(CharBuf:1:35);
       BufPtr += 35;
       DataStruct.totals(i).aggtotals(j).amount = %dec(%subst(CharBuf:1:12):10:5);
       BufPtr += 12;
       DataStruct.totals(i).aggtotals(j).wages = %dec(%subst(CharBuf:1:9):7:2);
       BufPtr += 9;
       DataStruct.totals(i).aggtotals(j).jobTransfer = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.totals(i).aggtotals(j).labcatxfer = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.totals(i).aggtotals(j).timeItemType.timeItemType = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.totals(i).aggtotals(j).appbymgr = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       endfor;

       return ;

     PBufToTotalsRes   E
