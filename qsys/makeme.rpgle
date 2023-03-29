     H Nomain

      ************************************
      * Module: makeme
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include makeme_h

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
      * Convert PwdRequest to buffer
      ************************************
     PPwdRequestToBuf  B                   Export

     DPwdRequestToBuf  PI
     DDataStruct                           LikeDS(PwdRequest)
     D                                     Const
     DBuffer                         55A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:4) = %char(DataStruct.wc);
       BufPtr += 4;
       %subst(CharBuf:1:4) = %char(DataStruct.pc);
       BufPtr += 4;
       %subst(CharBuf:1:1) = DataStruct.sp;
       BufPtr += 1;
       %subst(CharBuf:1:4) = %char(DataStruct.minCh);
       BufPtr += 4;
       %subst(CharBuf:1:4) = %char(DataStruct.maxCh);
       BufPtr += 4;
       %subst(CharBuf:1:15) = DataStruct.whenNum;
       BufPtr += 15;
       %subst(CharBuf:1:4) = %char(DataStruct.nums);
       BufPtr += 4;
       %subst(CharBuf:1:15) = DataStruct.whenUp;
       BufPtr += 15;
       %subst(CharBuf:1:4) = %char(DataStruct.ups);
       BufPtr += 4;

       return ;

     PPwdRequestToBuf  E

      ************************************
      * Convert buffer to PwdResult
      ************************************
     PBufToPwdResult   B                   Export

     DBufToPwdResult   PI
     DBuffer                        550A
     DDataStruct                           LikeDS(PwdResult)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 10;
       DataStruct.data(i).pws = %subst(CharBuf:1:50);
       BufPtr += 50;
       endfor;
       DataStruct.error = %subst(CharBuf:1:50);
       BufPtr += 50;

       return ;

     PBufToPwdResult   E
