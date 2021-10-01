     H Nomain

      ************************************
      * Module: boapayment
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include boapaym_h

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
      * Convert payReq to buffer
      ************************************
     PpayReqToBuf      B                   Export

     DpayReqToBuf      PI
     DDataStruct                           LikeDS(payReq)
     D                                     Const
     DBuffer                         80A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:80) = DataStruct.comment;
       BufPtr += 80;

       return ;

     PpayReqToBuf      E

      ************************************
      * Convert buffer to payEvent
      ************************************
     PBufTopayEvent    B                   Export

     DBufTopayEvent    PI
     DBuffer                       4614A
     DDataStruct                           LikeDS(payEvent)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.apivers = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.channel = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.clientkey = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payment.amount = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.data.payment.cvv_nbr = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.confnbr = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.currcode = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.custom_fields.property1 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.custom_fields.property2 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer.address.addcity = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.customer.address.addcntry = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.customer.address.addlin1 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer.address.addlin2 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer.address.addstt = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.data.payment.customer.address.addzip1 = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.customer.address.addzip2 = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.customer.custom_fields.property1 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer.custom_fields.property2 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer.custref = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer.custdob = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.customer.custemail = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer.custfname = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.customer.custgender = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.customer.custhomph = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.customer.custid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.customer.custlastnm = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.customer.custlocal = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.customer.custmidnm = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.customer.custmobil = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.customer.custssn = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.data.payment.customer.custstatus = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer.custurl = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer.custwork = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.custacct.acthldnam = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.custacct.actnbr = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.custacct.address.addcity = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.custacct.address.addcntry = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.custacct.address.addlin1 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.custacct.address.addlin2 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.custacct.address.addstt = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.data.payment.custacct.address.addzip1 = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.custacct.address.addzip2 = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.custacct.currbal = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.custacct.currstbal = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.custacct.custom_fields.property1 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.custacct.custom_fields.property2 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.custacct.cusactref = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payment.custacct.cusactid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.custacct.minpaydue = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.custacct.cusactnik = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.custacct.pastdue = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.custacct.payduedt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.custacct.stmtdt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.custacct.cusactsts = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.custacct.cusacturl = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.settldt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.fee.feeamnt = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.data.payment.fee.feetype = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fee.feeid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.fee.feeurl = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.fundacct.abanbr = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.data.payment.fundacct.acthldnm = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.fundacct.acthldtp = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fundacct.acctnbr = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.fundacct.actsubtp = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fundacct.acttype = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fundacct.achelig = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.fundacct.address.addcity = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.fundacct.address.addcntry = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.fundacct.address.addlin1 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.fundacct.address.addlin2 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.fundacct.address.addstt = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.data.payment.fundacct.address.addzip1 = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.fundacct.address.addzip2 = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.fundacct.atmelig = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.fundacct.cvvnbr = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.fundacct.currcod = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.fundacct.custom_fields.property1 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fundacct.custom_fields.property2 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fundacct.expdate = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.fundacct.fndactid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.fundacct.issname = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.fundacct.nickname = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.fundacct.status = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.fundacct.disptext = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.fundacct.fndacturl = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.payamtid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.payamttyp = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.payamtdt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.payentdt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.payamtmth = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.paynetrsp.pauthcd = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.paynetrsp.pdeclcd = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.paynetrsp.pdeclmsg = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.paynetrsp.prtncd = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.paynetrsp.prtncdds = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.payamtref = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payment.payreqdt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.payrtndt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.payschtyp = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payment.payrtncd = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.payamtsts = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.payamteml = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.payamtcmt = %subst(CharBuf:1:1000);
       BufPtr += 1000;
       DataStruct.data.payment.payamttok = %subst(CharBuf:1:64);
       BufPtr += 64;
       DataStruct.data.payment.payamturl = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.eventid = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.pendhooks = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.sourceid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.srctype = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.eventstamp = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.type = %subst(CharBuf:1:25);
       BufPtr += 25;

       return ;

     PBufTopayEvent    E
