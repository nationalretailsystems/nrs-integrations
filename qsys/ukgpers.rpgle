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
     DBuffer                       1731A
     DDataStruct                           LikeDS(personResp)

      * Initialize to begining of buffer
       BufPtr = %addr(Buffer);

      * Read fields from buffer into DS
       DataStruct.employeeExtension.accessProfile = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.employeeExtension.accessProfileId = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.employeeExtension.accountLocked = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.active = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.approvalMethod = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.employeeExtension.appmethid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.authtype = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.employeeExtension.authtypeid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.clockOnlyUser = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.consbadlogin = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.dataAccessExtensionGroups.assignDAGID = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.dataAccessExtensionGroups.dataAccessGroup = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.dataAccessExtensionGroups.dataaccgrpid = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.employeeExtension.dataAccessExtensionGroups.dataaccgrprol = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.employeeExtension.dataAccessExtensionGroups.dataaccgrprid = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.employeeExtension.dataAccessExtensionGroups.defaultSwitch = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.dataAccessExtensionGroups.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.dataAccessExtensionGroups.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.dataAccessExtensionGroups.personID = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.dataaccgrpsnp = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.employeeExtension.delegateProfile = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.employeeExtension.delgprofid = %dec(%subst(CharBuf:1:4):2:0);
       BufPtr += 4;
       DataStruct.employeeExtension.effdatactsts.accountStatus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.employeeExtension.effdatactsts.acctststypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.effdatactsts.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.effdatactsts.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.effactstssnp = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.employeeExtension.effprmjobact.effdataccent = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.employeeExtension.effprmjobact.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.effprmjobact.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.effprmjobact.primaryJob = %subst(CharBuf:1:93);
       BufPtr += 93;
       DataStruct.employeeExtension.effprmjobact.primlabcat = %subst(CharBuf:1:55);
       BufPtr += 55;
       DataStruct.employeeExtension.effprmjobact.primlabcatid = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.effprmjobact.primorgid = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.effprmsnpdat = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.employeeExtension.erlcondata.contactData = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.employeeExtension.erlcondata.contactType = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.employeeExtension.erlcondata.contactTypeId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.erlcondata.hasemlnotdel = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.empstatuses.effectiveDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.empstatuses.empostatus = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.employeeExtension.empstatuses.empststypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.empstatuses.expirationDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.empstsextsnp = %subst(CharBuf:1:26);
       BufPtr += 26;
       DataStruct.employeeExtension.facereqflag = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.fngreqflag = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.firstName = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.employeeExtension.fullName = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.employeeExtension.haskmailnd = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.hireDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.identifier.identifier = %subst(CharBuf:1:18);
       BufPtr += 18;
       DataStruct.employeeExtension.isEmployee = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.isManager = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.jobAssigmentId = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.jobAssignmentId = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.lastName = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.employeeExtension.learnPath = %subst(CharBuf:1:10);
       BufPtr += 10;
       for i = 1 to 8;
       DataStruct.employeeExtension.licenseTypeList(i).active = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.licenseTypeList(i).licenseId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.licenseTypeList(i).licenseType = %subst(CharBuf:1:8);
       BufPtr += 8;
       DataStruct.employeeExtension.licenseTypeList(i).licenseTypeName = %subst(CharBuf:1:31);
       BufPtr += 31;
       endfor;
       DataStruct.employeeExtension.lckoutrdt = %subst(CharBuf:1:19);
       BufPtr += 19;
       DataStruct.employeeExtension.logonProfile = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.employeeExtension.logonProfileId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.mfaRequired = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.middleName = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.notifprof = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.employeeExtension.pwdupdreq = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.pwdupddt = %subst(CharBuf:1:19);
       BufPtr += 19;
       for i = 1 to 4;
       DataStruct.employeeExtension.personCustomDataEntries(i).customDataType = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.personCustomDataEntries(i).cstmdatatypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       endfor;
       for i = 1 to 7;
       DataStruct.employeeExtension.personDatesEntries(i).cstmdatatypid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.personDatesEntries(i).dateName = %subst(CharBuf:1:17);
       BufPtr += 17;
       DataStruct.employeeExtension.personDatesEntries(i).defaultDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.personDatesEntries(i).description = %subst(CharBuf:1:12);
       BufPtr += 12;
       DataStruct.employeeExtension.personDatesEntries(i).overrideDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       endfor;
       DataStruct.employeeExtension.personId = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.personNumber = %subst(CharBuf:1:6);
       BufPtr += 6;
       DataStruct.employeeExtension.postadddata.city = %subst(CharBuf:1:9);
       BufPtr += 9;
       DataStruct.employeeExtension.postadddata.contactType = %subst(CharBuf:1:4);
       BufPtr += 4;
       DataStruct.employeeExtension.postadddata.contactTypeId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.postadddata.country = %subst(CharBuf:1:3);
       BufPtr += 3;
       DataStruct.employeeExtension.postadddata.state = %subst(CharBuf:1:2);
       BufPtr += 2;
       DataStruct.employeeExtension.postadddata.street = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.employeeExtension.postadddata.zipCode = %subst(CharBuf:1:5);
       BufPtr += 5;
       DataStruct.employeeExtension.prefprof = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.employeeExtension.prefproddata.preferenceProfile = %subst(CharBuf:1:16);
       BufPtr += 16;
       DataStruct.employeeExtension.prefproddata.prefprofid = %dec(%subst(CharBuf:1:5):3:0);
       BufPtr += 5;
       DataStruct.employeeExtension.prefproddata.schperid = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.prefproddata.usingShiftLabel = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.prefproddata.uses12hrfmt = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.procempprof = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.employeeExtension.propmgrprof = %subst(CharBuf:1:13);
       BufPtr += 13;
       DataStruct.employeeExtension.reqpasschg = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.restrictedUser = %subst(CharBuf:1:1);
       BufPtr += 1;
       DataStruct.employeeExtension.seniorityDate = %subst(CharBuf:1:10);
       BufPtr += 10;
       DataStruct.employeeExtension.shortName = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.employeeExtension.superfn = %subst(CharBuf:1:15);
       BufPtr += 15;
       DataStruct.employeeExtension.superpersid = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.employeeExtension.superpersnum = %subst(CharBuf:1:5);
       BufPtr += 5;
       for i = 1 to 2;
       DataStruct.employeeExtension.telContactDataEntries(i).contactData = %subst(CharBuf:1:14);
       BufPtr += 14;
       DataStruct.employeeExtension.telContactDataEntries(i).contactType = %subst(CharBuf:1:7);
       BufPtr += 7;
       DataStruct.employeeExtension.telContactDataEntries(i).contactTypeId = %dec(%subst(CharBuf:1:3):1:0);
       BufPtr += 3;
       DataStruct.employeeExtension.telContactDataEntries(i).smsswitch = %subst(CharBuf:1:1);
       BufPtr += 1;
       endfor;
       DataStruct.employeeExtension.timeZone = %subst(CharBuf:1:25);
       BufPtr += 25;
       DataStruct.employeeExtension.timeZoneId = %dec(%subst(CharBuf:1:7):5:0);
       BufPtr += 7;
       DataStruct.employeeExtension.userAccountId = %dec(%subst(CharBuf:1:6):4:0);
       BufPtr += 6;
       DataStruct.employeeExtension.userName = %subst(CharBuf:1:24);
       BufPtr += 24;
       DataStruct.exceptionPresent = %subst(CharBuf:1:1);
       BufPtr += 1;

       return ;

     PBufTopersonResp  E
