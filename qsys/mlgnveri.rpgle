     H Nomain

      ************************************
      * Module: mlgnveri
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mlgnveri_h

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
      * Convert MgReqData to buffer
      ************************************
     PMgReqDataToBuf   B                   Export

     DMgReqDataToBuf   PI
     DDataStruct                           LikeDS(MgReqData)
     D                                     Const
     DBuffer                        102A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:100) = DataStruct.address;
       BufPtr += 100;
       %subst(CharBuf:1:1) = DataStruct.mbxver;
       BufPtr += 1;
       %subst(CharBuf:1:1) = DataStruct.provlokup;
       BufPtr += 1;

       return ;

     PMgReqDataToBuf   E

      ************************************
      * Convert buffer to MgResData
      ************************************
     PBufToMgResData   B                   Export

     DBufToMgResData   PI
     DBuffer                        402A
     DDataStruct                           LikeDS(MgResData)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.address = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.dispadd = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.roleadd = %subst(CharBuf:1:1);
       BufPtr += 1;
       for i = 1 to 10;
       DataStruct.reason(i) = %subst(CharBuf:1:25);
       BufPtr += 25;
       endfor;
       DataStruct.result = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.risk = %subst(CharBuf:1:25);
       BufPtr += 25;

       return ;

     PBufToMgResData   E
