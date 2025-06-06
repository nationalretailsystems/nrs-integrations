     H Option(*srcstmt:*nodebugio)
     H Debug

     FQSYSPRT   O    F  132        Printer

      * Include EccSndReq & EccRcvReq prototypes
      /copy ecnctc

      * Include data structs and buffer conversion prototypes
      /copy pnclatln_h

      *
      * Passed Parameters - Request
      *
     D  FullCmd        S             32A
     D  MyLLReq        DS                  LikeDS(LLReq)

      *
      * Passed Parameters - Response
      *
     D  Eod            S               N
     D  Eoa            S               N
     D  NoData         S               N
     D  MyEccResult    DS                  LikeDS(EccResult)
     D  MyLLRes        DS                  LikeDS(LLRes)

      *
      * Passed Parameter - both Request & Response
      *
     D  DataLen        S              5P 0
     D  DataBuf        S          32767A

      * Local Variables
     D MsgDta          S            132A

     D Psds           SDS                  Qualified
     D MsgId                  40     46A
     D ExcpDta                91    170A

      * Constants
     D Cmd             C                   Const('pinc.latlon')

      *
      *****************************************************************
      * Interfaces
      *****************************************************************
      *
     D TstPncLL        PR                  ExtPgm('TSTPNCLL')
     D  In_Mode                      10A
     D  In_WaitTm                     5P 0
     D  In_ReqKey                     6A
      *
     D TstPncLL        PI
     D  In_Mode                      10A
     D  In_WaitTm                     5P 0
     D  In_ReqKey                     6A

      *
     D Write_Msg1      PR
     D  In_MsgDta                          Like(MsgDta) Const

     D Write_LLRes     PR
     D  In_LLDS                            LikeDS(LLRes) Const

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
         DataLen = LLReqLen;
         LLReqToBuf(MyLLReq:DataBuf);

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

         if (MyEccResult.MsgId <> 'ECC0000');
           Return;
         endif;

      // Receive and display the remaining lines, if any
         DataLen = LLResLen;
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
           BufToLLRes(DataBuf:MyLLRes);
           Write_LLRes(MyLLRes);
         EndIf;

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
      * Procedure Name:   Write_LLRes
      * Purpose.......:   Write LatLon
      * Returns.......:   None
      * Parameters....:   LLHeadDS data structure
      ***-----------------------------------------------------------***
     P Write_LLRes     B

     D Write_LLRes     PI
     D  Data                               LikeDS(LLRes) Const

     D Text1           DS           132
     D  event                        50A
     D                                3A   Inz('  ')
     D  time                         25A
     D                                3A   Inz('  ')
     D  version                       3A
     D                                3A   Inz('  ')
     D  campus                        6A
     D                                3A   Inz('  ')
     D  custfaccode                  25A
     D                                3A   Inz('  ')

     D Text2           DS           132
     D  event_id                     25A
     D                                3A   Inz('  ')
     D  event_type                    2A
     D                                3A   Inz('  ')
     D  event_no                      7A
     D                                3A   Inz('  ')
     D  reference_id                 25A
     D                                3A   Inz('  ')
     D  checked_in                   26A
     D                                3A   Inz('  ')

     D Text3           DS           132
     D  checked_out                  26A
     D                                3A   Inz('  ')
     D  updated_on                   26A
     D                                3A   Inz('  ')
     D  check_in_agent...
     D                               25A
     D                                3A   Inz('  ')
     D  check_out_agent...
     D                               25A

     D Text4           DS           132
     D  purpose                      25A
     D                                3A   Inz('  ')
     D  spot_number                  10A
     D                                3A   Inz('  ')
     D  snyard                        1A
     D                                3A   Inz('  ')
     D  snloctype                     1A
     D                                3A   Inz('  ')
     D  snslotnumber                  3A
     D                                3A   Inz('  ')
     D  yardloc3                      3A
     D                                3A   Inz('  ')
     D  location1                     1A
     D                                3A   Inz('  ')
     D  yardloc5                      5A
     D                                3A   Inz('  ')
     D  last_move_time...
     D                               26A
     D                                3A   Inz('  ')
     D  movement_type                15A
     D                                3A   Inz('  ')
     
     D Text5           DS           132
     D  load_status                  15A
     D                                3A   Inz('  ')
     D  scac                          4A
     D                                3A   Inz('  ')
     D  trailer                      25A
     D                                3A   Inz('  ')
     D  container_num                25A
     D                                3A   Inz('  ')
     D  fleet_code                    6A
     D                                3A   Inz('  ')
     D  tractor_scac                  4A
     D                                3A   Inz('  ')
     D  customer_code                 4A
     D                                3A   Inz('  ')
     D  asset_dimension...
     D                               15A
     D                                3A   Inz('  ')

     D Text6           DS           132
     D  asset_type                   15A
     D                                3A   Inz('  ')
     D  site                         25A
     D                                3A   Inz('  ')
     D  site_code                     9A
     D                                3A   Inz('  ')
     D  asset_visit_id...
     D                                5A
     D                                3A   Inz('  ')
     D  is_dock                       5A
     D                                3A   Inz('  ')
     D  latitude                     15A
     D                                3A   Inz('  ')
     D  longitude                    25A
     D                                3A   Inz('  ')

     D Text7           DS           132
     D  rfid_tag                     24A
     D                                3A   Inz('  ')

       event = Data.event;
       time = Data.time;
       version = Data.version;
       campus = Data.campus;
       custfaccode = Data.custfaccode;
       event_id = Data.event_id;
       event_type = Data.event_type;
       event_no = %char(Data.event_no);
       reference_id = Data.data.asset.reference_id;
       checked_in = Data.data.asset.checked_in;
       checked_out = Data.data.asset.checked_out;
       updated_on = Data.data.asset.updated_on;
       check_in_agent = Data.data.asset.check_in_agent;
       check_out_agent = Data.data.asset.check_out_agent;
       purpose = Data.data.asset.purpose;
       spot_number = Data.data.asset.spot_number;
       snyard = Data.data.asset.snyard;
       snloctype = Data.data.asset.snloctype;
       snslotnumber = Data.data.asset.snslotnumber;
       yardloc3 = Data.data.asset.yardloc3;
       location1 = Data.data.asset.location1;
       yardloc5 = Data.data.asset.yardloc5;
       last_move_time = Data.data.asset.last_move_time;
       movement_type = Data.data.asset.movement_type;
       load_status = Data.data.asset.load_status;
       scac = Data.data.asset.scac;
       trailer = Data.data.asset.trailer;
       container_num = Data.data.asset.container_num;
       fleet_code = Data.data.asset.fleet_code;
       tractor_scac = Data.data.asset.tractor_scac;
       customer_code = Data.data.asset.customer_code;
       asset_dimension = Data.data.asset.asset_dimension;
       asset_type = Data.data.asset.asset_type;
       site = Data.data.asset.site;
       site_code = Data.data.asset.site_code;
       asset_visit_id = %char(Data.data.asset.asset_visit_id);
       is_dock = Data.data.asset.is_dock;
       latitude = Data.data.asset.latitude;
       longitude = Data.data.asset.longitude;
       rfid_tag = Data.data.asset.rfid_tag;


       Write QSysPrt Text1;
       Write QSysPrt Text2;
       Write QSysPrt Text3;
       Write QSysPrt Text4;
       Write QSysPrt Text5;
       Write QSysPrt Text6;
       Write QSysPrt Text7;

       Return;

     P Write_LLRes     E

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
