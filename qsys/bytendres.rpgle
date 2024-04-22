     H Nomain

      ************************************
      * Module: bytendres
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include bytendres

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
      * Convert buffer to TenderRes
      ************************************
     PBufToTenderRes   B                   Export

     DBufToTenderRes   PI
     DBuffer                        155A
     DDataStruct                           LikeDS(TenderRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.respstat = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.apiHeader.custcode = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.apiHeader.provcustcd = %subst(CharBuf:1:25);
       BufPtr += 25;
       for i = 1 to 1;
       DataStruct.apiHeader.provdercd(i) = %subst(CharBuf:1:17);
       BufPtr += 17;
       endfor;
       DataStruct.apiHeader.messagid = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.apiHeader.compcode = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.apiHeader.contcompcd = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.apiHeader.timestamp = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.apiHeader.provstring = %subst(CharBuf:1:19);
       BufPtr += 19;

       return ;

     PBufToTenderRes   E
