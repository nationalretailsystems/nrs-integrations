     H Nomain

      ************************************
      * Module: upsval
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include upsval_h

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
      * Convert ReqFmt to buffer
      ************************************
     PReqFmtToBuf      B                   Export

     DReqFmtToBuf      PI
     DDataStruct                           LikeDS(ReqFmt)
     D                                     Const
     DBuffer                        362A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:50) = DataStruct.XAVRequest.addkeyfmt.ConsigneeName;
       BufPtr += 50;
       %subst(CharBuf:1:100) = DataStruct.XAVRequest.addkeyfmt.AddressLine;
       BufPtr += 100;
       %subst(CharBuf:1:30) = DataStruct.XAVRequest.addkeyfmt.poldiv2;
       BufPtr += 30;
       %subst(CharBuf:1:30) = DataStruct.XAVRequest.addkeyfmt.poldiv1;
       BufPtr += 30;
       %subst(CharBuf:1:10) = DataStruct.XAVRequest.addkeyfmt.postcodepl;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.XAVRequest.addkeyfmt.postcodeel;
       BufPtr += 10;
       %subst(CharBuf:1:30) = DataStruct.XAVRequest.addkeyfmt.Urbanization;
       BufPtr += 30;
       %subst(CharBuf:1:100) = DataStruct.XAVRequest.addkeyfmt.Region;
       BufPtr += 100;
       %subst(CharBuf:1:2) = DataStruct.XAVRequest.addkeyfmt.CountryCode;
       BufPtr += 2;

       return ;

     PReqFmtToBuf      E

      ************************************
      * Convert buffer to RespFmt
      ************************************
     PBufToRespFmt     B                   Export

     DBufToRespFmt     PI
     DBuffer                       2058A
     DDataStruct                           LikeDS(RespFmt)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.XAVResponse.Response.ResponseStatus.Code = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.XAVResponse.Response.ResponseStatus.Description = %subst(CharBuf:1:150);
       BufPtr += 150;
       DataStruct.XAVResponse.Response.transref.CustomerContext = %subst(CharBuf:1:88);
       BufPtr += 88;
       DataStruct.XAVResponse.ambaddind = %subst(CharBuf:1:0);
       BufPtr += 0;
       for i = 1 to 5;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.ConsigneeName = %subst(CharBuf:1:50);
       BufPtr += 50;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.AddressLine = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.poldiv2 = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.poldiv1 = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.postcodepl = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.postcodeel = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.Urbanization = %subst(CharBuf:1:30);
       BufPtr += 30;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.Region = %subst(CharBuf:1:100);
       BufPtr += 100;
       DataStruct.XAVResponse.Candidate(i).addkeyfmt.CountryCode = %subst(CharBuf:1:2);
       BufPtr += 2;
       endfor;

       return ;

     PBufToRespFmt     E
