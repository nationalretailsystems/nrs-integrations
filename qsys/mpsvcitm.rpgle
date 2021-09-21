     H Nomain

      ************************************
      * Module: mpsvcitm
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include mpsvcit_h

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
      * Convert ReqSvcCd to buffer
      ************************************
     PReqSvcCdToBuf    B                   Export

     DReqSvcCdToBuf    PI
     DDataStruct                           LikeDS(ReqSvcCd)
     D                                     Const
     DBuffer                         25A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:25) = DataStruct.svccode;
       BufPtr += 25;

       return ;

     PReqSvcCdToBuf    E

      ************************************
      * Convert buffer to ResSvcCd
      ************************************
     PBufToResSvcCd    B                   Export

     DBufToResSvcCd    PI
     DBuffer                       1199A
     DDataStruct                           LikeDS(ResSvcCd)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.svckey = %int(%subst(CharBuf:1:6));
       BufPtr += 6;
       DataStruct.svccode = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.svcdesc = %subst(CharBuf:1:1000);
       BufPtr += 1000;
       DataStruct.svcclass = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.esthours = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.estlabrat = %float(%subst(CharBuf:1:14));
       BufPtr += 14;
       DataStruct.active = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.labrsrc = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.labrprc = %float(%subst(CharBuf:1:14));
       BufPtr += 14;

       return ;

     PBufToResSvcCd    E
