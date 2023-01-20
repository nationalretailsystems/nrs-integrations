     H Nomain

      ************************************
      * Module: pcgettrns
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include pcgettrs_h

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
      * Convert PCReqTrns to buffer
      ************************************
     PPCReqTrnsToBuf   B                   Export

     DPCReqTrnsToBuf   PI
     DDataStruct                           LikeDS(PCReqTrns)
     D                                     Const
     DBuffer                         22A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.page);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.count);
       BufPtr += 11;

       return ;

     PPCReqTrnsToBuf   E

      ************************************
      * Convert buffer to PCRcvTrns
      ************************************
     PBufToPCRcvTrns   B                   Export

     DBufToPCRcvTrns   PI
     DBuffer                      24541A
     DDataStruct                           LikeDS(PCRcvTrns)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.result.msg = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.result.code = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       for i = 1 to 30;
       DataStruct.data(i).transid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).payerid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).payerclntid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).payername = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data(i).vendorid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).vndclientid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).vendorname = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data(i).number = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data(i).departdate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data(i).arrivaldate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data(i).payduedate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data(i).approvaldate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data(i).hasarrived = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.data(i).total = %dec(%subst(CharBuf:1:17):15:5);
       BufPtr += 17;
       DataStruct.data(i).directionid = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.data(i).bollink = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).direction = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).creatdate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data(i).lastmoddate = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.data(i).crtuserid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).moduserid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).shiprefnum = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data(i).custrefnum = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data(i).partialpay = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).disprsnresp = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).subcat = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).extsysid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).externalid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).parent = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data(i).batchid = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).notes = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.data(i).valofgoods = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).status = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).statusid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).type = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data(i).payduedtdiff = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.data(i).paymethod = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).payerrefnum = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).vendorrefnum = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).payrintnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).payrfilenum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).payrvchrnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).payrprdnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).payrincnum = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data(i).nachaid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.data(i).pcbatchid = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.data(i).procdate = %subst(CharBuf:1:24);
       BufPtr += 24;
       endfor;

       return ;

     PBufToPCRcvTrns   E
