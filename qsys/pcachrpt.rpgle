     H Nomain

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
     DBuffer                      98973A
     DDataStruct                           LikeDS(PCRcvRpt)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 100;
       DataStruct.datas.recordset(i).account = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.datas.recordset(i).transid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.recordset(i).payor = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).payee = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).category = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.datas.recordset(i).transtype = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.datas.recordset(i).number = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.datas.recordset(i).debitcredit = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.datas.recordset(i).debitamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.datas.recordset(i).creditamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.datas.recordset(i).payorbtch = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.recordset(i).payordate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.datas.recordset(i).payeebatch = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.recordset(i).payeedate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.datas.recordset(i).payorid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.datas.recordset(i).payeeid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.datas.recordset(i).custrefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).shiprefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).parent = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).approvaldate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.datas.recordset(i).appbyuser = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).currency = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.datas.recordset(i).payerid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.recordset(i).vendorid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.recordset(i).payrefnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.datas.recordset(i).origin = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).destination = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).payerintnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).payerfilenum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).payervouch = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).payerprodnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).payerinvnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.datas.recordset(i).bollink = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;
       DataStruct.datas.overall.count = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.overall.debitamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.datas.overall.creditamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.datas.payor.batch = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.datas.payor.amount = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;

       return ;

     PBufToPCRcvRpt    E
