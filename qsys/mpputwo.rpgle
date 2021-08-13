     H Nomain

      ************************************
      * Module: mpputwo
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpputwo_h

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
      * Convert ReqAddWo to buffer
      ************************************
     PReqAddWoToBuf    B                   Export

     DReqAddWoToBuf    PI
     DDataStruct                           LikeDS(ReqAddWo)
     D                                     Const
     DBuffer                        267A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:80) = DataStruct.purpose;
       BufPtr += 80;
       %subst(CharBuf:1:11) = %char(DataStruct.entkey);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.assetkey);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.ptykey);
       BufPtr += 11;
       %subst(CharBuf:1:11) = %char(DataStruct.budgetkey);
       BufPtr += 11;
       %subst(CharBuf:1:26) = %char(DataStruct.createdt:*ISO);
       BufPtr += 26;
       %subst(CharBuf:1:26) = %char(DataStruct.datedue:*ISO);
       BufPtr += 26;
       %subst(CharBuf:1:11) = %char(DataStruct.wktypeky);
       BufPtr += 11;
       %subst(CharBuf:1:80) = DataStruct.wrkdesc;
       BufPtr += 80;

       return ;

     PReqAddWoToBuf    E

      ************************************
      * Convert buffer to ResAddWo
      ************************************
     PBufToResAddWo    B                   Export

     DBufToResAddWo    PI
     DBuffer                        816A
     DDataStruct                           LikeDS(ResAddWo)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.type = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.title = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.status = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.traceid = %subst(CharBuf:1:80);
       BufPtr += 80;
       for i = 1 to 5;
       DataStruct.errors(i).keyname = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.errors(i).errdesc = %subst(CharBuf:1:80);
       BufPtr += 80;
       endfor;

       return ;

     PBufToResAddWo    E
