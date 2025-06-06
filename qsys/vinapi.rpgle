     H Nomain

      ************************************
      * Module: vinapi
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include vinapi_h

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
      * Convert VinData to buffer
      ************************************
     PVinDataToBuf     B                   Export

     DVinDataToBuf     PI
     DDataStruct                           LikeDS(VinData)
     D                                     Const
     DBuffer                         23A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:17) = DataStruct.Vin;
       BufPtr += 17;
       %subst(CharBuf:1:6) = %char(DataStruct.Year);
       BufPtr += 6;

       return ;

     PVinDataToBuf     E

      ************************************
      * Convert buffer to VinInfo
      ************************************
     PBufToVinInfo     B                   Export

     DBufToVinInfo     PI
     DBuffer                         75A
     DDataStruct                           LikeDS(VinInfo)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.ElecLvl = %subst(CharBuf:1:35);
       BufPtr += 35;
       DataStruct.FlTypPrim = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.FlTypSec = %subst(CharBuf:1:25);
       BufPtr += 25;

       return ;

     PBufToVinInfo     E
