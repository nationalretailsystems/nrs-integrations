     H Nomain

      ************************************
      * Module: mpgeteqip
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgeteq_h

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
     DBuffer                        256A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:256) = DataStruct.filename;
       BufPtr += 256;

       return ;

     PReqAssetChgToBuf  E

      ************************************
      * Convert buffer to AssetChgDS
      ************************************
     PBufToAssetChgDS  B                   Export

     DBufToAssetChgDS  PI
     DBuffer                       7585A
     DDataStruct                           LikeDS(AssetChgDS)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.assetkey = %dec(%subst(CharBuf:1:11):9:0);
       BufPtr += 11;
       DataStruct.entname = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.pasassid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.descript = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.groupkey = %dec(%subst(CharBuf:1:11):9:0);
       BufPtr += 11;
       DataStruct.groupid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.catid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.typeid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.budgrpid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.statusid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.barcode = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.manufac = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.model = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.srlnumb = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.customer = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.custkey = %dec(%subst(CharBuf:1:11):9:0);
       BufPtr += 11;
       DataStruct.purchdate = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.purchcost = %dec(%subst(CharBuf:1:17):15:2);
       BufPtr += 17;
       for i = 1 to 100;
       DataStruct.customFields(i).key = %dec(%subst(CharBuf:1:11):9:0);
       BufPtr += 11;
       DataStruct.customFields(i).custfldky = %dec(%subst(CharBuf:1:11):9:0);
       BufPtr += 11;
       DataStruct.customFields(i).custfldnam = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.customFields(i).cstfldval = %subst(CharBuf:1:25);
       BufPtr += 25;
       endfor;

       return ;

     PBufToAssetChgDS  E
