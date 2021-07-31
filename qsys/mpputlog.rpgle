     H Nomain

      ************************************
      * Module: mpputlog
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpputlg_h

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
      * Convert ReqAddLog to buffer
      ************************************
     PReqAddLogToBuf   B                   Export

     DReqAddLogToBuf   PI
     DDataStruct                           LikeDS(ReqAddLog)
     D                                     Const
     DBuffer                        217A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:24) = DataStruct.assetid;
       BufPtr += 24;
       %subst(CharBuf:1:10) = %char(DataStruct.postdate:*ISO);
       BufPtr += 10;
       %subst(CharBuf:1:24) = DataStruct.logtype;
       BufPtr += 24;
       %subst(CharBuf:1:13) = %char(DataStruct.logvalue);
       BufPtr += 13;
       %subst(CharBuf:1:1) = DataStruct.ignwarn;
       BufPtr += 1;
       %subst(CharBuf:1:24) = DataStruct.operator;
       BufPtr += 24;
       %subst(CharBuf:1:24) = DataStruct.warehouse;
       BufPtr += 24;
       %subst(CharBuf:1:24) = DataStruct.budget;
       BufPtr += 24;
       %subst(CharBuf:1:13) = %char(DataStruct.cost);
       BufPtr += 13;
       %subst(CharBuf:1:36) = DataStruct.partid;
       BufPtr += 36;
       %subst(CharBuf:1:24) = DataStruct.site;
       BufPtr += 24;

       return ;

     PReqAddLogToBuf   E

      ************************************
      * Convert buffer to AddLogRes
      ************************************
     PBufToAddLogRes   B                   Export

     DBufToAddLogRes   PI
     DBuffer                        237A
     DDataStruct                           LikeDS(AddLogRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.logid = %int(%subst(CharBuf:1:21));
       BufPtr += 21;
       DataStruct.assetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.postdate = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.logtype = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.logvalue = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.operator = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.wareid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.budgetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.cost = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.partid = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.site = %subst(CharBuf:1:24);
       BufPtr += 24;

       return ;

     PBufToAddLogRes   E
