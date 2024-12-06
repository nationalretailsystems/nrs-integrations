     H Nomain

      ************************************
      * Module: mpgetdown
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgetdow_h

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
      * Convert ReqDown to buffer
      ************************************
     PReqDownToBuf     B                   Export

     DReqDownToBuf     PI
     DDataStruct                           LikeDS(ReqDown)
     D                                     Const
     DBuffer                          6A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = %char(DataStruct.skiprecs);
       BufPtr += 6;

       return ;

     PReqDownToBuf     E

      ************************************
      * Convert buffer to ResDown
      ************************************
     PBufToResDown     B                   Export

     DBufToResDown     PI
     DBuffer                      30350A
     DDataStruct                           LikeDS(ResDown)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 50;
       DataStruct.downtime(i).dtlogkey2 = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.downtime(i).assetkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.downtime(i).dtorigin = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.downtime(i).note = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.downtime(i).timedown = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.downtime(i).timeup = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.downtime(i).totaldt = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       for j = 1 to 5;
       DataStruct.downtime(i).dtitems(j).contact = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.downtime(i).dtitems(j).contactkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.downtime(i).dtitems(j).dtlogkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.downtime(i).dtitems(j).dtitemkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       endfor;
       endfor;

       return ;

     PBufToResDown     E
