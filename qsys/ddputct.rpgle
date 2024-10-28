     H Nomain

      ************************************
      * Module: ddputct
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ddputct_h

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
      * Convert ReqWatch to buffer
      ************************************
     PReqWatchToBuf    B                   Export

     DReqWatchToBuf    PI
     DDataStruct                           LikeDS(ReqWatch)
     D                                     Const
     DBuffer                      24411A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.userid);
       BufPtr += 11;
       for i = 1 to 100;
       %subst(CharBuf:1:11) = DataStruct.containds(i).contnumb;
       BufPtr += 11;
       %subst(CharBuf:1:8) = %char(DataStruct.containds(i).custid);
       BufPtr += 8;
       %subst(CharBuf:1:25) = DataStruct.containds(i).masterbl;
       BufPtr += 25;
       for k = 1 to 10;
       %subst(CharBuf:1:20) = DataStruct.containds(i).tags(k).tag;
       BufPtr += 20;
       endfor;
       endfor;

       return ;

     PReqWatchToBuf    E

      ************************************
      * Convert buffer to ResWatch
      ************************************
     PBufToResWatch    B                   Export

     DBufToResWatch    PI
     DBuffer                      26400A
     DDataStruct                           LikeDS(ResWatch)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 100;
       DataStruct.contnumb(i).contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.contnumb(i).custid = %int(%subst(CharBuf:1:8));
       BufPtr += 8;
       DataStruct.contnumb(i).masterbl = %subst(CharBuf:1:25);
       BufPtr += 25;
       for j = 1 to 10;
       DataStruct.contnumb(i).tags(j).tag = %subst(CharBuf:1:20);
       BufPtr += 20;
       endfor;
       endfor;
       for i = 1 to 100;
       DataStruct.errors(i).error = %subst(CharBuf:1:20);
       BufPtr += 20;
       endfor;

       return ;

     PBufToResWatch    E
