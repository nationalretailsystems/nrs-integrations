     H Option(*srcstmt:*nodebugio)
     H Debug

     FQSYSPRT   O    F  132        Printer

      * Include EccSndReq & EccRcvReq prototypes
      /copy ecnctc

      * Include data structs and buffer conversion prototypes
      /copy pncchkin_h

      *
      * Passed Parameters - Request
      *
     D  FullCmd        S             32A
     D  MyReqData      DS                  LikeDS(CheckinDS)

      *
      * Passed Parameters - Response
      *
     D  Eod            S               N
     D  Eoa            S               N
     D  NoData         S               N
     D  MyEccResult    DS                  LikeDS(EccResult)

      *
      * Passed Parameter - both Request & Response
      *
     D  DataLen        S              5P 0
     D  DataBuf        S           1024A

      * Local Variables
     D MsgDta          S            132A

     D Psds           SDS                  Qualified
     D MsgId                  40     46A
     D ExcpDta                91    170A

      * Constants
     D Cmd             C                   Const('pinc.checkin')

      *
      *****************************************************************
      * Interfaces
      *****************************************************************
      *
     D DspJk           PR                  ExtPgm('TSTPNCCHK')
     D  In_Mode                      10A
     D  In_WaitTm                     5P 0
     D  In_ReqKey                     6A
      *
     D DspJk           PI
     D  In_Mode                      10A
     D  In_WaitTm                     5P 0
     D  In_ReqKey                     6A

      *

     D Write_EccMsg    PR
     D  In_Message                         Const LikeDS(EccResult)

     D Write_Excp      PR
     D  In_ProcNm                    32A   Const
     D  In_Psds                            LikeDs(Psds) Const


      *****************************************************************
      * Main Line
      *****************************************************************

         *InLr = *On;

      // Assign Data To Variables

         FullCmd = Cmd;
         MyReqData.msg_grp_id = 'nrs-test-1';
         MyReqData.campus = '';
         MyReqData.checked_in = '';
         MyReqData.asset_type = '';
         MyReqData.rfid_tag = '';
         MyReqData.site_code = '';
         MyReqData.scac = '';
         MyReqData.trailer = '';
         MyReqData.container_num = '';
         MyReqData.movement_type = '';
         MyReqData.load_status = '';
         MyReqData.customer_code = '';
         MyReqData.fleet_code = '';
         MyReqData.tractor_scac = '';
         DataLen = CheckinDSLen;
         CheckinDSToBuf(MyReqData:DataBuf);

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

         BufToEccResult(DataBuf:MyEccResult);
         Write_EccMsg(MyEccResult);

         Return;

      ***-----------------------------------------------------------***
      * Procedure Name:   Write_Msg1
      * Purpose.......:   Write Message
      * Returns.......:   None
      * Parameters....:   Message Data
      ***-----------------------------------------------------------***
     P Write_Msg1      B

     D Write_Msg1      PI
     D  MsgDta                      132A   Const

     D Text            DS           132
     D  Msg                         132A

       Msg = MsgDta;

       Write QSysPrt Text;

       Return;

     P Write_Msg1      E

      ***-----------------------------------------------------------***
      * Procedure Name:   Write_EccMsg
      * Purpose.......:   Write Message
      * Returns.......:   None
      * Parameters....:   EccResult data structure
      ***-----------------------------------------------------------***
     P Write_EccMsg    B

     D Write_EccMsg    PI
     D  Message                            Const LikeDS(EccResult)

     D Text            DS           132    Qualified
     D  TmStmp                       23A
     D                                3A   Inz('  ')
     D  Id                            7A
     D                                3A   Inz('  ')
     D  Desc                         50A


       Text.TmStmp = %char(Message.MsgTime);
       Text.Id = Message.MsgId;
       Text.Desc = Message.MsgDesc;

       Write QSysPrt Text;

       Return;

     P Write_EccMsg    E

      ***-----------------------------------------------------------***
      * Procedure Name:   Write_Excp
      * Purpose.......:   Write Exception Message
      * Returns.......:   None
      * Parameters....:   Program Status Data Structure
      ***-----------------------------------------------------------***
     P Write_Excp      B

     D Write_Excp      PI
     D  In_ProcNm                    32A   Const
     D  In_Psds                            LikeDs(Psds) Const

     D Text            DS           132
     D  MsgId                         7A
     D  Sep                           1A   Inz(' ')
     D  ExcpDta                      80A

       MsgDta = 'Error calling ' + In_ProcNm;
       Write_Msg1(MsgDta);

       MsgId = In_Psds.MsgId;
       ExcpDta = In_Psds.ExcpDta;

       Write QSysPrt Text;

       Return;

     P Write_Excp      E
