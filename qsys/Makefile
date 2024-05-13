# Eradani Connect Template makefile

# Specify the development library by setting the environment variable "LIB" before
# running make.


# Variables
#
LIB?=ECIPRD39


# MODS = dspjk \
       dsptrfc \
       dspvhcl \
       dspwf \
       prtlbl \
       tstpncchk \
       tstpncll \
       tstskybtz \
	   tstskybtzq \
	   tstmpgeteq \
	   tstmpgete2 \
	   tstrmgtmi \
	   tstzplapi \
	   tstboapay \
	   tstukgttls \
	   tstukgpnch

GENMODS = ukgpers \
		  ukgputhos
#		  icndbapi \
          lblapi \
          trfcapi \
          vinapi \
          wthfrcapi \
          pncchkin \
          pnclatlon \
          skybtz  \
		  skybtzqm \
		  skybtzqp \
		  mpgeteqip \
		  mpgeteq2 \
		  rmgetstmi \
		  mpgetwohr \
		  mpgetwoch \
		  mpputlog \
		  mpputwo \
		  pncchkot \
		  pncupdat \
		  pncupdt2 \
		  pnclocat \
		  mpvendor \
		  rmgetdvir \
		  rmcrtdvir \
		  mpsvcitm \
		  mpemploy \
		  boapayment \
		  pncerror \
		  zplapi  \
		  mlgnveri \
		  makeme \
		  pcachrpt \
		  pcgettran \
		  pcgettrns \
		  p44stsupd \
		  ukgtotals \
		  ukgpunches \
		  ukgtchours \
		  hygetchg \
		  ukgputhr \
		  mpgeteq \
		  upsval \
		  mpgetwc2 \
		  t4300inv \
		  ukgdelof \
		  t4300mov \
		  mpgetwo \
		  ukgdrvr \
		  hrsdgetemp \
		  hrsdtoken \
		  hrsdupdoc \
		  hrsdupld \
		  ukgpchim \
		  psdvir

GENHDRS = ukgpers_h \
		  ukgputho_h 
#		  icndbapi_h \
          lblapi_h \
          trfcapi_h \
          vinapi_h \
          wthfcapi_h \
          pncchkin_h \
          pnclatln_h \
          skybtz_h \
		  skybtzqm_h \
		  skybtzqp_h \
		  mpgeteq_h \
		  rmgetstm_h \
		  mpgetwoc_h \
		  mpgetwoh_h \
		  mpgeteq2_h \
		  mpputlg_h \
		  mpputwo_h \
		  pncchkot_h \
		  pncupdat_h \
		  pncupdt2_h \
		  pnclocat_h \
		  mpvendor_h \
		  mpemploy_h \
		  boapaym_h \
		  pncerr_h \
		  zplapi_h \
		  mlgnveri_h \
		  makeme_h \
		  pcachrpt_h \
		  pcgettrn_h \
		  pcgettrs_h \
		  p44stsup_h \
		  ukgtotal_h \
		  ukgpunch_h \
		  ukg_hours_h \
		  hygetchg_h \
		  ukgputhr_h \
		  mpgeteqa_h \
		  upsval_h \
		  mpgetwc2_h \
		  t4300inv_h \
		  ukfdelof_h \
		  t4300mov_h \
		  mpgetwo_h \
		  ukgdrvr_h \
		  hrsdgete_h \
		  hrsdtokn_h \
		  hrsdupdc_h \
		  hrsdupld_h \
		  ukgpchim_h \
		  psdvir_h

SRVPGMS = ecctmpgen

#PGMS = dspjk \
       dsptrfc \
       dspvhcl \
       dspwf \
       prtlbl \
       tstpncchk \
       tstpncll \
       tstskybtz \
	   tstskybtzq \
	   tstmpgeteq \
	   tstmpgete2 \
	   tstrmgetmi \
	   tstzplapi \
	   tstboapay \
	   tstukgttls \
	   tstukgpnch

#CMDS = dspjk \
       dsptrfc \
       dspvhcl \
       dspwf \
       prtlbl \
       tstpncchk \
       tstpncll \
       tstskybtz \
	   tstskybtzq \
	   tstmpgeteq \
	   tstmpgete2 \
	   tstrmgetmi \
	   tstzplapi \
	   tstboapay

INBOUNDPGMS = simplecalc

# Calculated variables
#
ifndef LIB
   $(error LIB, the development library, is not defined)
else
   libdir = /qsys.lib/$(LIB).lib
endif

rootdir = $(shell cd ..; pwd)
ecclient = $(rootdir)/bin/ec-client

# List of natively qualified (NQ) generated modues
NQGENMODS = $(foreach mod, $(GENMODS), $(LIB)/$(mod))

# List of fully qualified commands, programs and modules
FQCMDS = $(foreach cmd, $(CMDS), $(libdir)/$(cmd).cmd)
FQPGMS = $(foreach pgm, $(PGMS), $(libdir)/$(pgm).pgm)
FQINBOUNDPGMS = $(foreach inpgm, $(INBOUNDPGMS), $(libdir)/$(inpgm).pgm)
FQSRVPGMS = $(foreach srvpgm, $(SRVPGMS), $(libdir)/$(srvpgm).srvpgm)
FQMODS = $(foreach mod, $(MODS), $(libdir)/$(mod).module)
FQGENMODS = $(foreach mod, $(GENMODS), $(libdir)/$(mod).module)

# List of fully qualified source members
FQCMDSRCMBRS = $(foreach srcmbr, $(CMDS), $(libdir)/qcmdsrc.file/$(srcmbr).mbr)
FQMODSRCMBRS = $(foreach srcmbr, $(MODS), $(libdir)/qrpglesrc.file/$(srcmbr).mbr)
FQGENMODSRCMBRS = $(foreach srcmbr, $(GENMODS), $(libdir)/qrpglesrc.file/$(srcmbr).mbr)
FQGENHDRSRCMBRS = $(foreach srcmbr, $(GENHDRS), $(libdir)/qrpglesrc.file/$(srcmbr).mbr)

# List of all fully qualified source members
FQSRCMBRS = $(FQCMDSRCMBRS) \
	    $(FQMODSRCMBRS) \
	    $(FQGENMODSRCMBRS) \
	    $(FQGENHDRSRCMBRS)

# Local (IFS) generated source
LCLGENMODSRC = $(foreach src, $(GENMODS), $(src).rpgle)
LCLGENHDRSRC = $(foreach src, $(GENHDRS), $(src).rpgleinc)
LCLGENTSSRC = $(foreach src, $(GENMODS), $(src).ts)
LCLGENJSSRC = $(foreach src, $(GENMODS), $(src).js)
FQTSGENSRC = $(foreach src, $(GENMODS), ../src/interfaces/$(src).ts)

# Rules
#

all: $(FQCMDS) \
	 $(FQINBOUNDPGMS)


# Command, program and module recipes
#$(libdir)/%.cmd: $(libdir)/qcmdsrc.file/%.mbr  $(libdir)/%.pgm
#	system "CRTCMD CMD($(LIB)/$(basename $(@F))) PGM($(LIB)/$(basename $(@F))) SRCFILE($(LIB)/QCMDSRC)"

#$(libdir)/dspjk.pgm: $(libdir)/dspjk.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/dsptrfc.pgm: $(libdir)/dsptrfc.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/dspvhcl.pgm: $(libdir)/dspvhcl.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/dspwf.pgm: $(libdir)/dspwf.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/prtlbl.pgm: $(libdir)/prtlbl.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstpncchk.pgm: $(libdir)/tstpncchk.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstpncll.pgm: $(libdir)/tstpncll.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstskybtz.pgm: $(libdir)/tstskybtz.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#!SECTION$(libdir)/tstskybtzq.pgm: $(libdir)/tstskybtzq.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"


#$(libdir)/tstmpgeteq.pgm: $(libdir)/tstmpgeteq.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstmpgete2.pgm: $(libdir)/tstmpgete2.module $(libdir)/ecctmpgen.srvpgm
#	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstrmgetmi.pgm: $(libdir)/tstrmgetmi.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstzplapi.pgm: $(libdir)/tstzplapi.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

#$(libdir)/tstboapay.pgm: $(libdir)/tstboapay.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"	

$(libdir)/ecctmpgen.srvpgm: $(FQGENMODS)
	system "CRTSRVPGM SRVPGM($(LIB)/$(basename $(@F))) MODULE($(NQGENMODS)) EXPORT(*ALL)"

$(libdir)/%.module: $(libdir)/qrpglesrc.file/%.mbr
	system "CRTRPGMOD MODULE($(LIB)/$(basename $(@F))) SRCFILE($(LIB)/QRPGLESRC) DBGVIEW(*LIST)"

# Source member recipes
$(libdir)/qcmdsrc.file/%.mbr: %.cmd
	system "CPYFRMSTMF FROMSTMF('$<') TOMBR('$@') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/%.mbr: %.rpgle
	system "CPYFRMSTMF FROMSTMF('$<') TOMBR('$@') MBROPT(*REPLACE)"


$(libdir)/qrpglesrc.file/%.mbr: %.sqlrpgle
	system "CPYFRMSTMF FROMSTMF('$<') TOMBR('$@') MBROPT(*REPLACE)"


$(libdir)/qrpglesrc.file/%.mbr: %.rpgleinc
	system "CPYFRMSTMF FROMSTMF('$<') TOMBR('$@') MBROPT(*REPLACE)"

# Non-wildcard dependencies
#$(libdir)/dspjk.module: $(libdir)/qrpglesrc.file/icndbapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/dsptrfc.module: $(libdir)/qrpglesrc.file/trfcapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/dspvhcl.module: $(libdir)/qrpglesrc.file/vinapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/dspwf.module: $(libdir)/qrpglesrc.file/wthfcapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/prtlbl.module: $(libdir)/qrpglesrc.file/lblapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstpncchk.module: $(libdir)/qrpglesrc.file/pncchkin_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstpncll.module: $(libdir)/qrpglesrc.file/pnclatln_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstskybtz.module: $(libdir)/qrpglesrc.file/skybtz_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstskybtzq.module: $(libdir)/qrpglesrc.file/skybtzqm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstmpgeteq.module: $(libdir)/qrpglesrc.file/mpgeteq_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstmpgete2.module: $(libdir)/qrpglesrc.file/mpgeteq2_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstrmgetmi.module: $(libdir)/qrpglesrc.file/rmgetstm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstzplapi.module: $(libdir)/qrpglesrc.file/zplapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstboapay.module: $(libdir)/qrpglesrc.file/boapaym_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstzplapi.module: $(libdir)/qrpglesrc.file/zplapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstrmgetmi.module: $(libdir)/qrpglesrc.file/rmgetstm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstmpgete2.module: $(libdir)/qrpglesrc.file/mpgeteq2_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstskybtzq.module: $(libdir)/qrpglesrc.file/skybtzqm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstskybtz.module: $(libdir)/qrpglesrc.file/skybtz_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#(libdir)/tstpncll.module: $(libdir)/qrpglesrc.file/pnclatln_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

#$(libdir)/tstpncchk.module: $(libdir)/qrpglesrc.file/pncchkin_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

# Inbound Programs

#$(libdir)/simplecalc.pgm: simplecalc.rpgle
#	system "CPYFRMSTMF FROMSTMF('simplecalc.rpgle') TOMBR('$(libdir)/qrpglesrc.file/simplecalc.mbr') MBROPT(*REPLACE)"
#	system "CRTBNDRPG PGM($(LIB)/SIMPLECALC) SRCFILE($(LIB)/QRPGLESRC) DBGVIEW(*LIST)"

# Prevent gmake from deleting intermediate source members
.PRECIOUS: $(FQSRCMBRS)


# Modules
#



# Miscellaneous objects
#

# Copy the Eradani Connect EccSndReq and EccRcvRes prototypes
ecnctc.rpgleinc: ../node_modules/@eradani-inc/ec-client/native/ecnctc.rpgleinc
	cp $< $@



# Files
#


# Miscelaneous rules and dependencies
#

.PHONEY: generatedtssrc
generatedtssrc: $(FQTSGENSRC)



$(libdir)/qrpglesrc.file/ukgpers.mbr $(libdir)/qrpglesrc.file/ukgpers_h.mbr ../src/interfaces/ukgpers.ts: ukgpers.yaml
	npx ec-generate -f $<
	cp ukgpers.ts ../src/interfaces/ukgpers.ts
	system "CPYFRMSTMF FROMSTMF('ukgpers.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgpers.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgpers_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgpers_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgputhos.mbr $(libdir)/qrpglesrc.file/ukgputho_h.mbr ../src/interfaces/ukgputhos.ts: ukgputhos.yaml
	npx ec-generate -f $<
	cp ukgputhos.ts ../src/interfaces/ukgputhos.ts
	system "CPYFRMSTMF FROMSTMF('ukgputhos.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgputhos.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgputho_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgputho_h.mbr') MBROPT(*REPLACE)"	

.PHONY: library
library:
	-system "CRTLIB $(LIB)"
	-system "CRTSRCPF FILE($(LIB)/QCMDSRC)"
	-system "CRTSRCPF FILE($(LIB)/QRPGLESRC)"


.PHONY: clean
clean:
	-rm $(FQCMDS)
	-rm $(FQPGMS)
	-rm $(FQSRVPGMS)
	-rm $(FQMODS)
	-rm $(FQGENMODS)
	-rm $(FQSRCMBRS)
	-rm $(libdir)/qrpglesrc.file/ecnctc.mbr
	-rm ecnctc.rpgleinc
	-rm $(LCLGENMODSRC)
	-rm $(LCLGENHDRSRC)
	-rm $(LCLGENTSSRC)
	-rm $(LCLGENJSSRC)
	-rm $(FQTSGENSRC)
	-rm $(FQINBOUNDPGMS)
