     H Nomain

      ************************************
      * Module: p44stsupd
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include p44stsup_h

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
      * Convert P44SndRpt to buffer
      ************************************
     PP44SndRptToBuf   B                   Export

     DP44SndRptToBuf   PI
     DDataStruct                           LikeDS(P44SndRpt)
     D                                     Const
     DBuffer                        148A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       for i = 1 to 2;
       %subst(CharBuf:1:10) = DataStruct.shipids(i).type;
       BufPtr += 10;
       %subst(CharBuf:1:20) = DataStruct.shipids(i).value;
       BufPtr += 20;
       endfor;
       %subst(CharBuf:1:22) = %char(DataStruct.latitude);
       BufPtr += 22;
       %subst(CharBuf:1:22) = %char(DataStruct.longitude);
       BufPtr += 22;
       %subst(CharBuf:1:19) = DataStruct.utcstamp;
       BufPtr += 19;
       %subst(CharBuf:1:25) = DataStruct.customerid;
       BufPtr += 25;

       return ;

     PP44SndRptToBuf   E

      ************************************
      * Convert buffer to P44RcvRpt
      ************************************
     PBufToP44RcvRpt   B                   Export

     DBufToP44RcvRpt   PI
     DBuffer                         10A
     DDataStruct                           LikeDS(P44RcvRpt)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.status = %subst(CharBuf:1:10);
       BufPtr += 10;

       return ;

     PBufToP44RcvRpt   E
