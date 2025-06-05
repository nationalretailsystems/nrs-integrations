     H Nomain

      ************************************
      * Module: ddgetct
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ddgetct_h

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
      * Convert ReqDDGet to buffer
      ************************************
     PReqDDGetToBuf    B                   Export

     DReqDDGetToBuf    PI
     DDataStruct                           LikeDS(ReqDDGet)
     D                                     Const
     DBuffer                         18A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:11) = DataStruct.container;
       BufPtr += 11;
       %subst(CharBuf:1:7) = %char(DataStruct.pagenum);
       BufPtr += 7;

       return ;

     PReqDDGetToBuf    E

      ************************************
      * Convert buffer to ResDDGet
      ************************************
     PBufToResDDGet    B                   Export

     DBufToResDDGet    PI
     DBuffer                      27261A
     DDataStruct                           LikeDS(ResDDGet)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       for i = 1 to 1;
       DataStruct.unwatched_containers(i) = %subst(CharBuf:1:6);
       BufPtr += 6;
       endfor;
       for i = 1 to 15;
       DataStruct.containers(i).contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).shipline = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.containers(i).conttype = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.containers(i).customer.name = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).customer.id = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       for j = 1 to 1;
       DataStruct.containers(i).pier_pass.terminals(j) = %subst(CharBuf:1:7);
       BufPtr += 7;
       endfor;
       DataStruct.containers(i).pier_pass.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).pier_pass.clmothcpy = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).pier_pass.fee_paid = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).pier_pass.has_hold = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).pier_pass.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       for j = 1 to 1;
       DataStruct.containers(i).cltrkfee.terminals(j) = %subst(CharBuf:1:7);
       BufPtr += 7;
       endfor;
       DataStruct.containers(i).cltrkfee.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).cltrkfee.clmothcpy = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).cltrkfee.fee_paid = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).cltrkfee.has_hold = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).cltrkfee.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstat.terminal = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).impstat.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).impstat.lastfree = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).impstat.masterbl = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).impstat.shipline = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.containers(i).impstat.conttype = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.containers(i).impstat.vessel = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).impstat.location = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).impstat.plocat = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).impstat.termblok = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).impstat.trmblkak = %subst(CharBuf:1:3);
       BufPtr += 3;
       for j = 1 to 2;
       DataStruct.containers(i).impstat.holds(j) = %subst(CharBuf:1:14);
       BufPtr += 14;
       endfor;
       DataStruct.containers(i).impstat.demurfee = %dec(%subst(CharBuf:1:7):5:2);
       BufPtr += 7;
       DataStruct.containers(i).impstat.apptrdy = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstat.pickrdy = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstat.wheeled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstat.closarea = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstat.outgttm = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).impstat.dischtm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstat.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstat.pshipline = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.containers(i).impstat.pconttype = %subst(CharBuf:1:5);
       BufPtr += 5;
       for j = 1 to 1;
       DataStruct.containers(i).impstat.prsdholds(j).type = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.containers(i).impstat.prsdholds(j).raw_type = %subst(CharBuf:1:6);
       BufPtr += 6;
       endfor;
       DataStruct.containers(i).impstat.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).impstat.cycle_id = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       DataStruct.containers(i).impstat.lstobs = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstat.lstchk = %subst(CharBuf:1:26);
       BufPtr += 26;
       for j = 1 to 1;
       DataStruct.containers(i).impstats(j).terminal = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).impstats(j).contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).impstats(j).lastfree = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).impstats(j).masterbl = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).impstats(j).shipline = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.containers(i).impstats(j).conttype = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.containers(i).impstats(j).vessel = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).impstats(j).location = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).impstats(j).plocat = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).impstats(j).termblok = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).impstats(j).trmblkak = %subst(CharBuf:1:3);
       BufPtr += 3;
       for k = 1 to 2;
       DataStruct.containers(i).impstats(j).holds(k) = %subst(CharBuf:1:14);
       BufPtr += 14;
       endfor;
       DataStruct.containers(i).impstats(j).demurfee = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.containers(i).impstats(j).apptrdy = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstats(j).pickrdy = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstats(j).wheeled = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstats(j).closarea = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).impstats(j).outgttm = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).impstats(j).dischtm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstats(j).observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstats(j).pshipline = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.containers(i).impstats(j).pconttype = %subst(CharBuf:1:5);
       BufPtr += 5;
       for k = 1 to 1;
       DataStruct.containers(i).impstats(j).prsdholds(k).type = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.containers(i).impstats(j).prsdholds(k).raw_type = %subst(CharBuf:1:6);
       BufPtr += 6;
       endfor;
       DataStruct.containers(i).impstats(j).id = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       DataStruct.containers(i).impstats(j).cycle_id = %dec(%subst(CharBuf:1:9):7:0);
       BufPtr += 9;
       DataStruct.containers(i).impstats(j).lstobs = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impstats(j).lstchk = %subst(CharBuf:1:26);
       BufPtr += 26;
       endfor;
       DataStruct.containers(i).lateappt.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).lateappt.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).lateappt.loaded = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).lateappt.status = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.containers(i).lateappt.direction = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).lateappt.windstrt = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).lateappt.window_end = %subst(CharBuf:1:26);
       BufPtr += 26;
       for j = 1 to 1;
       DataStruct.containers(i).lateappt.linkappts(j).termref = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.containers(i).lateappt.linkappts(j).contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       endfor;
       DataStruct.containers(i).lateappt.terminal = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).lateappt.termref = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.containers(i).lateappt.dsptrmref = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).lateappt.trklicplt = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).lateappt.truck_id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).lateappt.termblok = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).lateappt.reqby.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).lateappt.reqby.first_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).lateappt.reqby.last_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).lateappt.reschby.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).lateappt.reschby.first_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).lateappt.reschby.last_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).lateappt.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).lateappt.lstobs = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).lateappt.crtterm = %subst(CharBuf:1:26);
       BufPtr += 26;
       for j = 1 to 1;
       DataStruct.containers(i).othapptcnt(j).status = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.containers(i).othapptcnt(j).count = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       endfor;
       DataStruct.containers(i).linimpstat.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).linimpstat.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).linimpstat.status = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).linimpstat.pstatus = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.containers(i).linimpstat.terminal = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).linimpstat.lastfree = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).linimpstat.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).linimpstat.lstobs = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).linimpstat.pshipline = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.containers(i).linimpstat.pconttype = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.containers(i).ibgatetrn.terminal = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).ibgatetrn.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).ibgatetrn.chasnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).ibgatetrn.time = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).ibgatetrn.loaded = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).ibgatetrn.direction = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).ibgatetrn.dlicnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).ibgatetrn.trefnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).ibgatetrn.trklicplt = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).ibgatetrn.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).obgatetrn.terminal = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).obgatetrn.contnumb = %subst(CharBuf:1:11);
       BufPtr += 11;
       DataStruct.containers(i).obgatetrn.chasnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).obgatetrn.time = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).obgatetrn.loaded = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).obgatetrn.direction = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.containers(i).obgatetrn.dlicnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).obgatetrn.trefnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).obgatetrn.trklicplt = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).obgatetrn.observed = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).cyclestt = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).nextappt.windstrt = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.containers(i).nextappt.observed = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).nextappt.hasavail = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).master_bl = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).tmsref = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.containers(i).adduser.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).adduser.first_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).adduser.last_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       for j = 1 to 1;
       DataStruct.containers(i).assuser(j).id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).assuser(j).first_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).assuser(j).last_name = %subst(CharBuf:1:15);
       BufPtr += 15;
       endfor;
       DataStruct.containers(i).autobook = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.containers(i).autobookst = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.containers(i).lstreltrm = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.containers(i).watchtm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).dischtm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impappttm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).impoutgtm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).mtappttm = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).mtigtime = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.containers(i).lastfree = %subst(CharBuf:1:10);
       BufPtr += 10;
       for j = 1 to 1;
       DataStruct.containers(i).tags(j) = %subst(CharBuf:1:6);
       BufPtr += 6;
       endfor;
       DataStruct.containers(i).vessel = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).matchvess.name = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.containers(i).matchvess.id = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       DataStruct.containers(i).matchvess.imo_number = %dec(%subst(CharBuf:1:10):8:0);
       BufPtr += 10;
       endfor;

       return ;

     PBufToResDDGet    E
