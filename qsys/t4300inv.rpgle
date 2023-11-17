     H Nomain

      ************************************
      * Module: t4300inv
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include t4300inv_h

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
      * Convert buffer to TapeInvRes
      ************************************
     PBufToTapeInvRes  B                   Export

     DBufToTapeInvRes  PI
     DBuffer                       1858A
     DDataStruct                           LikeDS(TapeInvRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 40;
       DataStruct.Slots(i).phynum = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.Slots(i).lognum = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.Slots(i).module = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).loglib = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).mailslot = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).cart = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).barcode = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.Slots(i).carttype = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.Slots(i).cartsubt = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).cartgen = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).cartenc = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).Access = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).blocked = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       for i = 1 to 2;
       DataStruct.Drives(i).phynumd = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.Drives(i).lognumd = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Drives(i).moduled = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Drives(i).loglibd = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Drives(i).barcoded = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.Drives(i).vendor = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.Drives(i).product = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.Drives(i).fwrev = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.Drives(i).sernum = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;

       return ;

     PBufToTapeInvRes  E
