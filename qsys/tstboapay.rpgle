**free
ctl-opt option(*srcstmt:*nodebugio) debug;


dcl-f QSYSPRT printer(132);

//* Include EccSndReq & EccRcvReq prototypes
/copy ecnctc

//* Include data structs and buffer conversion prototypes
/copy boapaym_h

//*
//* Passed Parameters - Request
//*
dcl-s FullCmd char(32);
dcl-ds MyPayReq likeds(payreq);

//*
//* Passed Parameters - Response
//*
dcl-s Eod ind;
dcl-s Eoa ind;
dcl-s NoData ind;
dcl-ds MyEccResult likeds(eccresult);
dcl-ds MyPayRes likeds(payevent);

//*
//* Passed Parameter - both Request & Response
//*
dcl-s DataLen packed(5);
dcl-s DataBuf char(32767);

//* Local Variables
dcl-s MsgDta char(132);
dcl-s subject char(80);
dcl-s subjectx char(80);
dcl-s attnamex char(100);
dcl-s arcnamex char(100);
dcl-s note1 char(80);
dcl-s note2 char(80);
dcl-s note3 char(80);
dcl-s note4 char(80);
dcl-s note5 char(80);



dcl-ds Psds PSDS qualified;
 MsgId char(7) pos(40);
 ExcpDta char(80) pos(91);
end-ds;

//* Constants
dcl-c Cmd const('boa.payment');
//*
//*****************************************************************
//* Interfaces
//*****************************************************************
//*
dcl-pr TstBoaPay extpgm('TSTBOAPAY');
 *n char(10); // In_Mode
 *n packed(5); // In_WaitTm
 *n char(6); // In_ReqKey
end-pr;
//*
dcl-pi TstBoaPay;
 In_Mode char(10);
 In_WaitTm packed(5);
 In_ReqKey char(6);
end-pi;

//*
dcl-s wcmd varchar(5000);
dcl-pr command extpgm('QCMDEXC');
  *n char(5000) const options(*varsize);
  *n packed(15:5) const;
End-Pr;

dcl-pr Write_Msg1;
 *n like(msgdta) const; // In_MsgDta
end-pr;

     //D* Write_LLRes     PR
    //D*  In_LLDS                            LikeDS(LLRes) Const

dcl-pr Write_EccMsg;
 *n const likeds(eccresult); // In_Message
end-pr;

dcl-pr Write_Excp;
 *n char(32) const; // In_ProcNm
 *n likeds(psds) const; // In_Psds
end-pr;


//*****************************************************************
//* Main Line
//*****************************************************************

  *InLr = *On;

// Assign Data To Variables

  FullCmd = Cmd;
  DataLen = PayReqLen;
  PayReqToBuf(MyPayReq:DataBuf);

// Send request

  Select;
    When In_Mode = '*SNDRCV';
         CallP(e) EccSndReq(FullCmd:DataLen:DataBuf:In_ReqKey);
         if %error;
           Write_Excp('EccSndReq':Psds);
           Return;
         endif;
    When In_Mode = '*RCVONLY';
  Other;
    MsgDta = 'Invalid Mode';
    Write_Msg1(MsgDta);
    Return;
  EndSl;


// Receive response

  DataLen = EccResultLen;
  DataBuf = '';
  CallP(e) EccRcvRes(In_WaitTm:In_ReqKey:Eod:Eoa:NoData:
                     DataLen:DataBuf);
  if %error;
    Write_Excp('EccRcvRes':Psds);
    Return;
  endif;

  If (NoData);
    MsgDta = 'Timeout Waiting On Response: ' + In_ReqKey;
    Write_Msg1(MsgDta);
    Return;
  EndIf;


// Display The Result

  BufToECCResult(DataBuf:MyEccResult);
  Write_EccMsg(MyEccResult);

  if (MyEccResult.MsgId <> 'ECC0000');
    Return;
  endif;

// Receive and display the remaining lines, if any
  DataLen = payEventLen;
  DataBuf = '';
  CallP(e) EccRcvRes(In_WaitTm:In_ReqKey:Eod:Eoa:NoData:
                    DataLen:DataBuf);
  if %error;
    Write_Excp('EccRcvRes':Psds);
    Return;
  endif;

  If (NoData);
    Return;
  Else;
    BufToPayEvent(DataBuf:MypayRes);
 //   Write_LLRes(MyLLRes);

 subject = 'Manualpayment received from ' +

  wcmd = 'EMLFILE TOEMLTYPE(F) EMLADDM(BANKOFAMER)' +
   'TOEMAILADR(EMLADDP) SUBJECT(''' +
   %trim(subjectx) + ''')  STMF(''' + %trim(arcnamex) +
   ''') ATTCHNAME(''' + %trim(attnamex) +
   ''') NOTE1(''' + note1 + ''') NOTE2(''' + note2 +
   ''') NOTE3(''' + note3 + ''') NOTE4(''' +
   note4 + ''') NOTE5(''' + note5 + ''')';
   monitor;
     command(wcmd:%len(wcmd));
   on-error;
   endmon;

  EndIf;

  Return;


//***-----------------------------------------------------------***
//* Procedure Name:   Write_Msg1
//* Purpose.......:   Write Message
//* Returns.......:   None
//* Parameters....:   Message Data
//***-----------------------------------------------------------***
dcl-proc Write_Msg1;

dcl-pi Write_Msg1;
 MsgDta char(132) const;
end-pi;

dcl-ds Text len(132);
 Msg char(132);
end-ds;

Msg = MsgDta;

Write QSysPrt Text;

Return;

end-proc;

//***-----------------------------------------------------------***
//* Procedure Name:   Write_EccMsg
//* Purpose.......:   Write Message
//* Returns.......:   None
//* Parameters....:   EccResult data structure
//***-----------------------------------------------------------***
dcl-proc Write_EccMsg;

dcl-pi Write_EccMsg;
 Message const likeds(eccresult);
end-pi;

dcl-ds Text len(132) qualified;
 TmStmp char(23);
 *n char(3) inz('  ');
 Id char(7);
 *n char(3) inz('  ');
 Desc char(50);
end-ds;


Text.TmStmp = %char(Message.MsgTime);
Text.Id = Message.MsgId;
Text.Desc = Message.MsgDesc;

Write QSysPrt Text;

Return;

end-proc;

//***-----------------------------------------------------------***
//* Procedure Name:   Write_Excp
//* Purpose.......:   Write Exception Message
//* Returns.......:   None
//* Parameters....:   Program Status Data Structure
//***-----------------------------------------------------------***
dcl-proc Write_Excp;

dcl-pi Write_Excp;
 In_ProcNm char(32) const;
 In_Psds likeds(psds) const;
end-pi;

dcl-ds Text len(132);
 MsgId char(7);
 Sep char(1) inz(' ');
 ExcpDta char(80);
end-ds;

MsgDta = 'Error calling ' + In_ProcNm;
Write_Msg1(MsgDta);

MsgId = In_Psds.MsgId;
ExcpDta = In_Psds.ExcpDta;

Write QSysPrt Text;

Return;

end-proc; 