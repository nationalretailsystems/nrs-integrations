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
       DataStruct.Slots(i).PhysicalNumber = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.Slots(i).LogicalNumber = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.Slots(i).Module = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).LogicalLibrary = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).Mailslot = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).Cartridge = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).Barcode = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.Slots(i).CartridgeType = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.Slots(i).CartridgeSubType = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).CartridgeGeneration = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Slots(i).CartridgeEncrypted = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).Access = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.Slots(i).Blocked = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       for i = 1 to 2;
       DataStruct.Drives(i).PhysicalNumber = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.Drives(i).LogicalNumber = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Drives(i).Module = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Drives(i).LogicalLibrary = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.Drives(i).Barcode = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.Drives(i).Vendor = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.Drives(i).Product = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.Drives(i).FWRevision = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.Drives(i).SerialNumber = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;

       return ;

     PBufToTapeInvRes  E
