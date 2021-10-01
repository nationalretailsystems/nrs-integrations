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
      * Convert buffer to paymentEvent
      ************************************
     PBufTopaymentEvent  B                   Export

     DBufTopaymentEvent  PI
     DBuffer                       4614A
     DDataStruct                           LikeDS(paymentEvent)

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
       DataStruct.data.payment.customer_account.acthldnam = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.customer_account.actnbr = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.customer_account.addressDS.addcity = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.customer_account.addressDS.addcntry = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.customer_account.addressDS.addlin1 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer_account.addressDS.addlin2 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.customer_account.addressDS.addstt = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.data.payment.customer_account.addressDS.addzip1 = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.customer_account.addressDS.addzip2 = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.customer_account.currbal = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.customer_account.currstbal = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.customer_account.custom_fields.property1 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer_account.custom_fields.property2 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer_account.cusactref = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payment.customer_account.cusactid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.customer_account.minpaydue = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.customer_account.cusactnik = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.customer_account.pastdue = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.data.payment.customer_account.payduedt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.customer_account.stmtdt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payment.customer_account.cusactsts = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.customer_account.cusacturl = %subst(CharBuf:1:100);
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
       DataStruct.data.payment.funding_account.abanbr = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.data.payment.funding_account.acthldnm = %subst(CharBuf:1:60);
       BufPtr += 60;
       DataStruct.data.payment.funding_account.acthldtp = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.funding_account.acctnbr = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.funding_account.actsubtp = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.funding_account.acttype = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.funding_account.achelig = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.funding_account.address.addcity = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.funding_account.address.addcntry = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.funding_account.address.addlin1 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.funding_account.address.addlin2 = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.funding_account.address.addstt = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.data.payment.funding_account.address.addzip1 = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.funding_account.address.addzip2 = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.funding_account.atmelig = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.funding_account.cvvnbr = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.data.payment.funding_account.currcod = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payment.funding_account.custom_fields.property1 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.funding_account.custom_fields.property2 = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.funding_account.expdate = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.payment.funding_account.fndactid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.funding_account.issname = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.funding_account.nickname = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.data.payment.funding_account.status = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.payment.funding_account.disptext = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.data.payment.funding_account.fndacturl = %subst(CharBuf:1:100);
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
       DataStruct.data.payment.payment_network_response.pauthcd = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.payment_network_response.pdeclcd = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.payment_network_response.pdeclmsg = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payment.payment_network_response.prtncd = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.data.payment.payment_network_response.prtncdds = %subst(CharBuf:1:100);
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

     PBufTopaymentEvent  E
