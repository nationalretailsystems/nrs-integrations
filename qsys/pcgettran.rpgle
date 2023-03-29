     H Nomain

      ************************************
      * Module: pcgettran
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pcgettrn_h

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
      * Convert PCReqTrn to buffer
      ************************************
     PPCReqTrnToBuf    B                   Export

     DPCReqTrnToBuf    PI
     DDataStruct                           LikeDS(PCReqTrn)
     D                                     Const
     DBuffer                         11A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.transid);
       BufPtr += 11;

       return ;

     PPCReqTrnToBuf    E

      ************************************
      * Convert buffer to PCRcvTrn
      ************************************
     PBufToPCRcvTrn    B                   Export

     DBufToPCRcvTrn    PI
     DBuffer                       1703A
     DDataStruct                           LikeDS(PCRcvTrn)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.result.msg = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.result.code = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.data.transid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.payerid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.payerclntid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.payername = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.vendorid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.vndclientid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.vendorname = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.number = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.departdate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data.arrivaldate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data.payduedate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data.approvaldate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data.hasarrived = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.data.total = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.data.directionid = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.data.bollink = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.direction = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.creatdate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data.lastmoddate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data.crtuserid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.crtusername = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.moduserid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.cmodusername = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.shiprefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.custrefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.partialpay = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.disprsnresp = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.subcat = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.extsysid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.externalid = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.parent = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.batchid = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.notes = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.valofgoods = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.status = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.statusid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.type = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payduedtdiff = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.directcode = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.vendorreg = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.vendorcurr = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.payerreg = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payercurr = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.isregmerch = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.data.paymethod = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data.modbyusradr = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.data.payerrefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.vendorrefnum = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.originid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.payercurrid = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.vendcuirrid = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.currexchrat = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.data.vendttlamt = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.data.apprusrid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data.apprusrname = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data.payrintnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payrfilenum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payrvchrnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payrprdnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.payrincnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.origin = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.destination = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.placeofrcp = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data.placeofdelv = %subst(CharBuf:1:25);
       BufPtr += 25;

       return ;

     PBufToPCRcvTrn    E
