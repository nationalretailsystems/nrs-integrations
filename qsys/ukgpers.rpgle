     H Nomain

      ************************************
      * Module: ukgpers
      * Generated RPG conversion procedures
      * Do not modify
      ************************************

      /include ukgpers_h

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
      * Convert personReq to buffer
      ************************************
     PpersonReqToBuf   B                   Export

     DpersonReqToBuf   PI
     DDataStruct                           LikeDS(personReq)
     D                                     Const
     DBuffer                          6A

      * Initialize to beginning of buffer
       BufPtr = %addr(Buffer);

      * Write fields from DS to buffer
       %subst(CharBuf:1:6) = DataStruct.empno;
       BufPtr += 6;

       return ;

     PpersonReqToBuf   E

      ************************************
      * Convert buffer to personResp
      ************************************
     PBufTopersonResp  B                   Export

     DBufTopersonResp  PI
     DBuffer                       1714A
     DDataStruct                           LikeDS(personResp)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.empextension.accessProfile = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.empextension.accessProfileId = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.empextension.accountLocked = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.active = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.approvalMethod = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.empextension.appmethid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.authtype = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.empextension.authtypeid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.clockOnlyUser = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.consbadlogin = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.dataccextgrp.assignDAGID = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.dataccextgrp.dataAccessGroup = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.dataccextgrp.dataaccgrpid = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.dataccextgrp.dataaccgrprol = %subst(CharBuf:1:20);
       BufPtr += 20;
       DataStruct.empextension.dataccextgrp.dataaccgrprid = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.dataccextgrp.defaultSwitch = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.dataccextgrp.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.dataccextgrp.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.dataccextgrp.personID = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.dataaccgrpsnp.dataAccessGroupsForSnapshotDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.delegateProfile = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.empextension.delgprofid = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.empextension.effdatactsts.accountStatus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.empextension.effdatactsts.acctststypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.effdatactsts.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.effdatactsts.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.effactstssnp.effDatedAccountStatusesForExtensionSnapshotDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.effprmjobact.effdataccent = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.empextension.effprmjobact.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.effprmjobact.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.effprmjobact.primaryJob = %subst(CharBuf:1:93);
       BufPtr += 93;
       DataStruct.empextension.effprmjobact.primlabcat = %subst(CharBuf:1:55);
       BufPtr += 55;
       DataStruct.empextension.effprmjobact.primlabcatid = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.effprmjobact.primorgid = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.effprmsnpdat.effDatedPrimaryJobAccountForSnapshotDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.erlcondata.contactData = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.empextension.erlcondata.contactType = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.empextension.erlcondata.contactTypeId = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.empextension.erlcondata.hasemlnotdel = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.empstatuses.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.empstatuses.empostatus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.empextension.empstatuses.empststypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.empstatuses.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.empstsextsnp.employmentStatusesForExtensionSnapshotDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.facereqflag = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.fngreqflag = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.firstName = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.empextension.fullName = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.empextension.haskmailnd = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.hireDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.identifier.identifier = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.empextension.isEmployee = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.isManager = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.jobAssigmentId = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.lastName = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.empextension.learnPath = %subst(CharBuf:1:10);
       BufPtr += 10;
       for i = 1 to 8;
       DataStruct.empextension.licenseTypeList(i).active = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.licenseTypeList(i).licenseId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.licenseTypeList(i).licenseType = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.empextension.licenseTypeList(i).licenseTypeName = %subst(CharBuf:1:31);
       BufPtr += 31;
       endfor;
       DataStruct.empextension.lckoutrdt = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.empextension.logonProfile = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.empextension.logonProfileId = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.mfaRequired = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.middleName = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.notifprof = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.empextension.pwdupdreq = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.pwdupddt = %subst(CharBuf:1:19);
       BufPtr += 19;
       for i = 1 to 4;
       DataStruct.empextension.personCustomDataEntries(i).customDataType = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.personCustomDataEntries(i).cstmdatatypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       endfor;
       for i = 1 to 7;
       DataStruct.empextension.personDatesEntries(i).cstmdatatypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.personDatesEntries(i).dateName = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.empextension.personDatesEntries(i).defaultDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.personDatesEntries(i).description = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.empextension.personDatesEntries(i).overrideDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;
       DataStruct.empextension.personId = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.personNumber = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.empextension.postadddata.city = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.empextension.postadddata.contactType = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.empextension.postadddata.contactTypeId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.postadddata.country = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.empextension.postadddata.state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.empextension.postadddata.street = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.empextension.postadddata.zipCode = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.empextension.prefprof = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.empextension.prefproddata.prefprof = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.empextension.prefproddata.prefprofid = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.empextension.prefproddata.schperid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.prefproddata.usingShiftLabel = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.prefproddata.uses12hrfmt = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.procempprof = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.empextension.propmgrprof = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.empextension.reqpasschg = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.restrictedUser = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.empextension.seniorityDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.empextension.shortName = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.empextension.superfn = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.empextension.superpersid = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.superpersnum = %subst(CharBuf:1:6);
       BufPtr += 6;
       for i = 1 to 2;
       DataStruct.empextension.telContactDataEntries(i).contactData = %subst(CharBuf:1:14);
       BufPtr += 14;
       DataStruct.empextension.telContactDataEntries(i).contactType = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.empextension.telContactDataEntries(i).contactTypeId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.empextension.telContactDataEntries(i).smsswitch = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       DataStruct.empextension.timeZone = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.empextension.timeZoneId = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.empextension.userAccountId = %dec(%subst(CharBuf:1:8):6:0);
       BufPtr += 8;
       DataStruct.empextension.userName = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.exceptpresent = %subst(CharBuf:1:1);
       BufPtr += 1;

       return ;

     PBufTopersonResp  E
