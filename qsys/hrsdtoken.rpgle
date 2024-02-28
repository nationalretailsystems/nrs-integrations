     H Nomain

      ************************************
      * Module: hrsdtoken
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include hrsdtokn_h

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
      * Convert buffer to TokResults
      ************************************
     PBufToTokResults  B                   Export

     DBufToTokResults  PI
     DBuffer                       1018A
     DDataStruct                           LikeDS(TokResults)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.access_token = %subst(CharBuf:1:1000);
       BufPtr += 1000;
       DataStruct.token_type = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.expires_in = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;

       return ;

     PBufToTokResults  E
