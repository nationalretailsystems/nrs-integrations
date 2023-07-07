     H Nomain

      ************************************
      * Module: ukgdlysumm
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgdlysm_h

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
      * Convert SummaryReq to buffer
      ************************************
     PSummaryReqToBuf  B                   Export

     DSummaryReqToBuf  PI
     DDataStruct                           LikeDS(SummaryReq)
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

     PSummaryReqToBuf  E

      ************************************
      * Convert buffer to SummaryRes
      ************************************
     PBufToSummaryRes  B                   Export

     DBufToSummaryRes  PI
     DBuffer                       2048A
     DDataStruct                           LikeDS(SummaryRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.startDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.endDate = %subst(CharBuf:1:19);
       BufPtr += 19;
       for i = 1 to 10;
       DataStruct.dailyTotalSummary(i).employee.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.dailyTotalSummary(i).employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.dailyTotalSummary(i).employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.dailyTotalSummary(i).applyDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.dailyTotalSummary(i).cumulativeTotal = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.dailyTotalSummary(i).dailytotalamt.HOUR = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       for j = 1 to 2;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).id = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).durationInHours = %dec(%subst(CharBuf:1:5):3:2);
       BufPtr += 5;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).wages = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).wagesCurrency.amount = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).wagesCurrency.currencyCode = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).durationInDays = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).timeItemId = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).amountType = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).employee.id = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).employee.qualifier = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).employee.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).applyDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).fromShift = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.dailyTotalSummary(i).hrsAndCstSum.HOUR(j).totalType = %subst(CharBuf:1:12);
       BufPtr += 12;
       endfor;
       endfor;

       return ;

     PBufToSummaryRes  E
