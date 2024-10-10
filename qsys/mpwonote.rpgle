     H Nomain

      ************************************
      * Module: mpwonote
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpwonote_h

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
      * Convert ReqNotes to buffer
      ************************************
     PReqNotesToBuf    B                   Export

     DReqNotesToBuf    PI
     DDataStruct                           LikeDS(ReqNotes)
     D                                     Const
     DBuffer                         11A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = %char(DataStruct.wokey);
       BufPtr += 11;

       return ;

     PReqNotesToBuf    E

      ************************************
      * Convert buffer to ResNotes
      ************************************
     PBufToResNotes    B                   Export

     DBufToResNotes    PI
     DBuffer                       2080A
     DDataStruct                           LikeDS(ResNotes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 10;
       DataStruct.notesdata(i).notekey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.notesdata(i).wonum = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.notesdata(i).wokey2 = %int(%subst(CharBuf:1:11));
       BufPtr += 11;
       DataStruct.notesdata(i).contactid = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.notesdata(i).moddate = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.notesdata(i).note = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.notesdata(i).pvtnote = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.notesdata(i).svckey = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.notesdata(i).svccode = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;

       return ;

     PBufToResNotes    E
