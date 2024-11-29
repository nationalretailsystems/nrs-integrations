     H Nomain

      ************************************
      * Module: ukgdtard
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgdtard_h

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
      * Convert DataReq to buffer
      ************************************
     PDataReqToBuf     B                   Export

     DDataReqToBuf     PI
     DDataStruct                           LikeDS(DataReq)
     D                                     Const
     DBuffer                       1574A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:3) = %char(DataStruct.from.view);
       BufPtr += 3;
       %subst(CharBuf:1:6) = %char(DataStruct.from.employeeSet.hyperfind.id);
       BufPtr += 6;
       %subst(CharBuf:1:10) = DataStruct.from.employeeSet.dateRange.enddate;
       BufPtr += 10;
       %subst(CharBuf:1:10) = DataStruct.from.employeeSet.dateRange.startdate;
       BufPtr += 10;
       for i = 1 to 20;
       %subst(CharBuf:1:20) = DataStruct.select(i).key;
       BufPtr += 20;
       %subst(CharBuf:1:21) = DataStruct.select(i).alias;
       BufPtr += 21;
       for k = 1 to 1;
       %subst(CharBuf:1:1) = DataStruct.select(i).properties(k).key;
       BufPtr += 1;
       %subst(CharBuf:1:25) = DataStruct.select(i).properties(k).value;
       BufPtr += 25;
       endfor;
       endfor;
       for i = 1 to 1;
       %subst(CharBuf:1:31) = DataStruct.where(i).key;
       BufPtr += 31;
       %subst(CharBuf:1:21) = DataStruct.where(i).alias;
       BufPtr += 21;
       %subst(CharBuf:1:11) = DataStruct.where(i).operator;
       BufPtr += 11;
       %subst(CharBuf:1:5) = DataStruct.where(i).values;
       BufPtr += 5;
       endfor;
       for i = 1 to 3;
       %subst(CharBuf:1:20) = DataStruct.sortby(i).key;
       BufPtr += 20;
       %subst(CharBuf:1:21) = DataStruct.sortby(i).alias;
       BufPtr += 21;
       %subst(CharBuf:1:3) = DataStruct.sortby(i).sortdir;
       BufPtr += 3;
       endfor;
       %subst(CharBuf:1:5) = %char(DataStruct.count);
       BufPtr += 5;

       return ;

     PDataReqToBuf     E

      ************************************
      * Convert buffer to DataRes
      ************************************
     PBufToDataRes     B                   Export

     DBufToDataRes     PI
     DBuffer                     271412A
     DDataStruct                           LikeDS(DataRes)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.metadata.numnodes = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.metadata.metdtakey = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.metadata.cachekey = %subst(CharBuf:1:36);
       BufPtr += 36;
       DataStruct.metadata.currcode = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.metadata.ttlnodes = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.metadata.ttlelem = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.data.key.root = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.data.coreentkey.emp.id = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.coreentkey.day.id = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.coreentkey.day.qualifier = %subst(CharBuf:1:10);
       BufPtr += 10;
       for i = 1 to 144;
       DataStruct.data.children(i).key.tkttrans = %subst(CharBuf:1:22);
       BufPtr += 22;
       DataStruct.data.children(i).key.tkpayper = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.children(i).key.people = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.children(i).coreentkey.emp.id = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.data.children(i).coreentkey.day.id = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.data.children(i).coreentkey.day.qualifier = %subst(CharBuf:1:10);
       BufPtr += 10;
       for j = 1 to 19;
       DataStruct.data.children(i).attribs(j).key = %subst(CharBuf:1:37);
       BufPtr += 37;
       DataStruct.data.children(i).attribs(j).alias = %subst(CharBuf:1:21);
       BufPtr += 21;
       DataStruct.data.children(i).attribs(j).rawvalue = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.data.children(i).attribs(j).value = %subst(CharBuf:1:18);
       BufPtr += 18;
       endfor;
       DataStruct.data.children(i).rootent = %subst(CharBuf:1:22);
       BufPtr += 22;
       endfor;
       DataStruct.data.rootent = %subst(CharBuf:1:4);
       BufPtr += 4;

       return ;

     PBufToDataRes     E
