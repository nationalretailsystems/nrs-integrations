     H Nomain

      ************************************
      * Module: skybtzqm
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include skybtzqm_h

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
      * Convert GetTrlMls to buffer
      ************************************
     PGetTrlMlsToBuf   B                   Export

     DGetTrlMlsToBuf   PI
     DDataStruct                           LikeDS(GetTrlMls)
     D                                     Const
     DBuffer                        256A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:256) = DataStruct.filename;
       BufPtr += 256;

       return ;

     PGetTrlMlsToBuf   E
