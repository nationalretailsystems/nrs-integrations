     H Nomain

      ************************************
      * Module: hrsdupdoc
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include hrsdupdc_h

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
      * Convert UpldRequest to buffer
      ************************************
     PUpldRequestToBuf  B                   Export

     DUpldRequestToBuf  PI
     DDataStruct                           LikeDS(UpldRequest)
     D                                     Const
     DBuffer                        259A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:12) = DataStruct.empextid;
       BufPtr += 12;
       %subst(CharBuf:1:20) = DataStruct.doctypeid;
       BufPtr += 20;
       %subst(CharBuf:1:50) = DataStruct.title;
       BufPtr += 50;
       %subst(CharBuf:1:24) = DataStruct.date;
       BufPtr += 24;
       for i = 1 to 1;
       %subst(CharBuf:1:3) = DataStruct.organization_ids(i);
       BufPtr += 3;
       endfor;
       %subst(CharBuf:1:50) = DataStruct.uploaded_file.filename;
       BufPtr += 50;
       %subst(CharBuf:1:100) = DataStruct.uploaded_file.file_id;
       BufPtr += 100;

       return ;

     PUpldRequestToBuf  E
