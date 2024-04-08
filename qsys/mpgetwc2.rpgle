     H Nomain

      ************************************
      * Module: mpgetwc2
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgetwc2_h

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
      * Convert ReqWo2Chg to buffer
      ************************************
     PReqWo2ChgToBuf   B                   Export

     DReqWo2ChgToBuf   PI
     DDataStruct                           LikeDS(ReqWo2Chg)
     D                                     Const
     DBuffer                        114A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:10) = %char(DataStruct.since:*ISO);
       BufPtr += 10;
       %subst(CharBuf:1:24) = DataStruct.assetid;
       BufPtr += 24;
       %subst(CharBuf:1:80) = DataStruct.purpose;
       BufPtr += 80;

       return ;

     PReqWo2ChgToBuf   E

      ************************************
      * Convert buffer to ResWo2Chg
      ************************************
     PBufToResWo2Chg   B                   Export

     DBufToResWo2Chg   PI
     DBuffer                        196A
     DDataStruct                           LikeDS(ResWo2Chg)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.wkordkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.wkordnum = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.assetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.purpose = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.budgetid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.statusid = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.dtcreate = %timestamp(%subst(CharBuf:1:26):*ISO:6);
       BufPtr += 26;
       DataStruct.dtcomplete = %timestamp(%subst(CharBuf:1:26):*ISO:6);
       BufPtr += 26;

       return ;

     PBufToResWo2Chg   E
