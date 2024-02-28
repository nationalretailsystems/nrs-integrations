     H Nomain

      ************************************
      * Module: hrsdupld
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include hrsdupld_h

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
      * Convert uprequest to buffer
      ************************************
     PuprequestToBuf   B                   Export

     DuprequestToBuf   PI
     DDataStruct                           LikeDS(uprequest)
     D                                     Const
     DBuffer                        200A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:100) = DataStruct.filename;
       BufPtr += 100;
       %subst(CharBuf:1:100) = DataStruct.location;
       BufPtr += 100;

       return ;

     PuprequestToBuf   E

      ************************************
      * Convert buffer to upresults
      ************************************
     PBufToupresults   B                   Export

     DBufToupresults   PI
     DBuffer                        150A
     DDataStruct                           LikeDS(upresults)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.filename = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.file_id = %subst(CharBuf:1:100);
       BufPtr += 100;

       return ;

     PBufToupresults   E
