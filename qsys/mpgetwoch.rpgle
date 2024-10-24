     H Nomain

      ************************************
      * Module: mpgetwoch
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgetwoc_h

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
      * Convert ReqWoChg to buffer
      ************************************
     PReqWoChgToBuf    B                   Export

     DReqWoChgToBuf    PI
     DDataStruct                           LikeDS(ReqWoChg)
     D                                     Const
     DBuffer                         10A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:10) = %char(DataStruct.since:*ISO);
       BufPtr += 10;

       return ;

     PReqWoChgToBuf    E

      ************************************
      * Convert buffer to ResWoChg
      ************************************
     PBufToResWoChg    B                   Export

     DBufToResWoChg    PI
     DBuffer                       5285A
     DDataStruct                           LikeDS(ResWoChg)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.wkordkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.wkordnum = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.entname = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.assetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.wktypeid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.purpose = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.failcode = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.ptyid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.assigned = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.budgetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.statusid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.dtcreate = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.dtcomplete = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.dtdue = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.dtsched = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.dtestcomp = %date(%subst(CharBuf:1:10):*ISO);
       BufPtr += 10;
       DataStruct.customer = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.custkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.requestid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.inspectid = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.invnumb = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.wrkordact = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.partscost = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.laborcost = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.othercost = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.totalcosts = %dec(%subst(CharBuf:1:13):11:2);
       BufPtr += 13;
       DataStruct.schedid = %subst(CharBuf:1:24);
       BufPtr += 24;
       for i = 1 to 50;
       DataStruct.customFields(i).key = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.customFields(i).custfldkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.customFields(i).fldname = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.customFields(i).value = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;

       return ;

     PBufToResWoChg    E
