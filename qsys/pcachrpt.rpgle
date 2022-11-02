     H Nomain EXPROPTS(*ALWBLANKNUM)  

      ************************************
      * Module: pcachrpt
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pcachrpt_h

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
      * Convert PCReqRpt to buffer
      ************************************
     PPCReqRptToBuf    B                   Export

     DPCReqRptToBuf    PI
     DDataStruct                           LikeDS(PCReqRpt)
     D                                     Const
     DBuffer                         95A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:10) = DataStruct.brclientid;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.startdate;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.enddate;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.clientid;
       BufPtr += 10;
       %subst(CharBuf:1:25) = DataStruct.rptactname;
       BufPtr += 25;
       %subst(CharBuf:1:20) = DataStruct.type;
       BufPtr += 20;
       %subst(CharBuf:1:10) = DataStruct.acctname;
       BufPtr += 10;

       return ;

     PPCReqRptToBuf    E

      ************************************
      * Convert buffer to PCRcvRpt
      ************************************
     PBufToPCRcvRpt    B                   Export

     DBufToPCRcvRpt    PI
     DBuffer                      24798A
     DDataStruct                           LikeDS(PCRcvRpt)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 25;
       DataStruct.recordset(i).account = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.recordset(i).transid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.recordset(i).payor = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).payee = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).category = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.recordset(i).transtype = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.recordset(i).number = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.recordset(i).debitcredit = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.recordset(i).debitamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.recordset(i).creditamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.recordset(i).payorbtch = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.recordset(i).payordate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.recordset(i).payeebatch = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.recordset(i).payeedate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.recordset(i).payorid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.recordset(i).payeeid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.recordset(i).custrefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).shiprefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).parent = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).approvaldate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.recordset(i).appbyuser = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).currency = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.recordset(i).payerid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.recordset(i).vendorid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.recordset(i).payrefnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.recordset(i).origin = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).destination = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).payerintnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).payerfilenum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).payervouch = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).payerprodnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).payerinvnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.recordset(i).bollink = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;
       DataStruct.overall.count = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.overall.debitamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.overall.creditamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.payor.batch = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.payor.amount = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;

       return ;

     PBufToPCRcvRpt    E
