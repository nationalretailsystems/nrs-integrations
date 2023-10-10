     H Nomain

      ************************************
      * Module: mpgeteq
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpgeteqa_h

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
      * Convert ReqAssetCh to buffer
      ************************************
     PReqAssetChToBuf  B                   Export

     DReqAssetChToBuf  PI
     DDataStruct                           LikeDS(ReqAssetCh)
     D                                     Const
     DBuffer                         10A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:10) = DataStruct.assetid;
       BufPtr += 10;

       return ;

     PReqAssetChToBuf  E

      ************************************
      * Convert buffer to ResAssetCh
      ************************************
     PBufToResAssetCh  B                   Export

     DBufToResAssetCh  PI
     DBuffer                         11A
     DDataStruct                           LikeDS(ResAssetCh)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.assetkey = %int(%subst(CharBuf:1:11));
       BufPtr += 11;

       return ;

     PBufToResAssetCh  E
