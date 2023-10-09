     H Nomain

      ************************************
      * Module: mpgeteq
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgeteqa_h

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
      * Convert ReqAssetChg to buffer
      ************************************
     PReqAssetChgToBuf  B                   Export

     DReqAssetChgToBuf  PI
     DDataStruct                           LikeDS(ReqAssetChg)
     D                                     Const
     DBuffer                         10A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:10) = DataStruct.assetid;
       BufPtr += 10;

       return ;

     PReqAssetChgToBuf  E

      ************************************
      * Convert buffer to ResAssetChg
      ************************************
     PBufToResAssetChg  B                   Export

     DBufToResAssetChg  PI
     DBuffer                      18049A
     DDataStruct                           LikeDS(ResAssetChg)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.assetkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.entname = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.assetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.pasassid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.descript = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.groupkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.groupid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.catid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.typeid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.budgrpid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.budgtid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.statusid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.barcode = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.manufac = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.model = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.srlnumb = %subst(CharBuf:1:32);
       BufPtr += 32;
       DataStruct.customer = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.custkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.purchdate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.purchcost = %dec(%subst(CharBuf:1:17):15:2);
       BufPtr += 17;
       for i = 1 to 100;
       DataStruct.customFields(i).key = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.customFields(i).custfldky = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.customFields(i).custfldnam = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.customFields(i).cstfldval = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.customFields(i).moddate = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.customFields(i).updtype = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;

       return ;

     PBufToResAssetChg  E
