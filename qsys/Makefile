# Eradani Connect Template makefile

# Specify the development library by setting the environment variable "LIB" before
# running make.


# Variables
#
LIB?=ECIPRD39


MODS = dspjk \
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

GENMODS = icndbapi \
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
		  ukgpers \
		  ukgputhos \
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
		  psdvir \
		  mpwonote \
		  mpgetdown \
		  ddgetct \
		  ddputct \
		  ukgdtard


GENHDRS = icndbapi_h \
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
		  ukgpers_h \
		  ukgputho_h \
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
		  psdvir_h \
		  mpwonote_h \
		  mpgetdow_h \
		  ddgetc_h \
		  ddputct_h \
		  ukgdtard_h


SRVPGMS = ecctmpgen

PGMS = dspjk \
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

CMDS = dspjk \
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
$(libdir)/%.cmd: $(libdir)/qcmdsrc.file/%.mbr  $(libdir)/%.pgm
	system "CRTCMD CMD($(LIB)/$(basename $(@F))) PGM($(LIB)/$(basename $(@F))) SRCFILE($(LIB)/QCMDSRC)"

$(libdir)/dspjk.pgm: $(libdir)/dspjk.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/dsptrfc.pgm: $(libdir)/dsptrfc.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/dspvhcl.pgm: $(libdir)/dspvhcl.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/dspwf.pgm: $(libdir)/dspwf.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/prtlbl.pgm: $(libdir)/prtlbl.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstpncchk.pgm: $(libdir)/tstpncchk.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstpncll.pgm: $(libdir)/tstpncll.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstskybtz.pgm: $(libdir)/tstskybtz.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstskybtzq.pgm: $(libdir)/tstskybtzq.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"


$(libdir)/tstmpgeteq.pgm: $(libdir)/tstmpgeteq.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstmpgete2.pgm: $(libdir)/tstmpgete2.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstrmgetmi.pgm: $(libdir)/tstrmgetmi.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstzplapi.pgm: $(libdir)/tstzplapi.module $(libdir)/ecctmpgen.srvpgm
	system "CRTPGM PGM($(LIB)/$(basename $(@F))) MODULE(*PGM) BNDSRVPGM((ECCTMPGEN) (ECNCTC))"

$(libdir)/tstboapay.pgm: $(libdir)/tstboapay.module $(libdir)/ecctmpgen.srvpgm
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
$(libdir)/dspjk.module: $(libdir)/qrpglesrc.file/icndbapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/dsptrfc.module: $(libdir)/qrpglesrc.file/trfcapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/dspvhcl.module: $(libdir)/qrpglesrc.file/vinapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/dspwf.module: $(libdir)/qrpglesrc.file/wthfcapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/prtlbl.module: $(libdir)/qrpglesrc.file/lblapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstpncchk.module: $(libdir)/qrpglesrc.file/pncchkin_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstpncll.module: $(libdir)/qrpglesrc.file/pnclatln_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstskybtz.module: $(libdir)/qrpglesrc.file/skybtz_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstskybtzq.module: $(libdir)/qrpglesrc.file/skybtzqm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstmpgeteq.module: $(libdir)/qrpglesrc.file/mpgeteq_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstmpgete2.module: $(libdir)/qrpglesrc.file/mpgeteq2_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstrmgetmi.module: $(libdir)/qrpglesrc.file/rmgetstm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstzplapi.module: $(libdir)/qrpglesrc.file/zplapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstboapay.module: $(libdir)/qrpglesrc.file/boapaym_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstzplapi.module: $(libdir)/qrpglesrc.file/zplapi_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstrmgetmi.module: $(libdir)/qrpglesrc.file/rmgetstm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstmpgete2.module: $(libdir)/qrpglesrc.file/mpgeteq2_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstskybtzq.module: $(libdir)/qrpglesrc.file/skybtzqm_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstskybtz.module: $(libdir)/qrpglesrc.file/skybtz_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstpncll.module: $(libdir)/qrpglesrc.file/pnclatln_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

$(libdir)/tstpncchk.module: $(libdir)/qrpglesrc.file/pncchkin_h.mbr $(libdir)/qrpglesrc.file/ecnctc.mbr

# Inbound Programs

$(libdir)/simplecalc.pgm: simplecalc.rpgle
	system "CPYFRMSTMF FROMSTMF('simplecalc.rpgle') TOMBR('$(libdir)/qrpglesrc.file/simplecalc.mbr') MBROPT(*REPLACE)"
	system "CRTBNDRPG PGM($(LIB)/SIMPLECALC) SRCFILE($(LIB)/QRPGLESRC) DBGVIEW(*LIST)"

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

$(libdir)/qrpglesrc.file/icndbapi.mbr $(libdir)/qrpglesrc.file/icndbapi_h.mbr ../src/interfaces/icndbapi.ts: icndbapi.yaml
	#npx ec-generate -f $<
	#cp icndbapi.ts ../src/interfaces/icndbapi.ts
	system "CPYFRMSTMF FROMSTMF('icndbapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/icndbapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('icndbapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/icndbapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/trfcapi.mbr $(libdir)/qrpglesrc.file/trfcapi_h.mbr ../src/interfaces/trfcapi.ts: trfcapi.yaml
	#npx ec-generate -f $<
	#cp trfcapi.ts ../src/interfaces/trfcapi.ts
	system "CPYFRMSTMF FROMSTMF('trfcapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/trfcapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('trfcapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/trfcapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/vinapi.mbr $(libdir)/qrpglesrc.file/vinapi_h.mbr ../src/interfaces/vinapi.ts: vinapi.yaml
	#npx ec-generate -f $<
	#cp vinapi.ts ../src/interfaces/vinapi.ts
	system "CPYFRMSTMF FROMSTMF('vinapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/vinapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('vinapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/vinapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/wthfrcapi.mbr $(libdir)/qrpglesrc.file/wthfcapi_h.mbr ../src/interfaces/wthfrcapi.ts: wthfrcapi.yaml
	#npx ec-generate -f $<
	#cp wthfrcapi.ts ../src/interfaces/wthfrcapi.ts
	system "CPYFRMSTMF FROMSTMF('wthfrcapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/wthfrcapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('wthfcapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/wthfcapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/lblapi.mbr $(libdir)/qrpglesrc.file/lblapi_h.mbr ../src/interfaces/lblapi.ts: lblapi.yaml
	#npx ec-generate -f $<
	#cp lblapi.ts ../src/interfaces/lblapi.ts
	system "CPYFRMSTMF FROMSTMF('lblapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/lblapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('lblapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/lblapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pncchkin.mbr $(libdir)/qrpglesrc.file/pncchkin_h.mbr ../src/interfaces/pncchkin.ts: pncchkin.yaml
	#npx ec-generate -f $<
	#cp pncchkin.ts ../src/interfaces/pncchkin.ts
	system "CPYFRMSTMF FROMSTMF('pncchkin.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncchkin.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncchkin_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncchkin_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pnclatlon.mbr $(libdir)/qrpglesrc.file/pnclatln_h.mbr ../src/interfaces/pnclatlon.ts: pnclatlon.yaml
	#npx ec-generate -f $<
	#cp pnclatlon.ts ../src/interfaces/pnclatlon.ts
	#cp pnclatln_h.rpgleinc.backup pnclatln_h.rpgleinc
	system "CPYFRMSTMF FROMSTMF('pnclatlon.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pnclatlon.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pnclatln_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pnclatln_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/skybtz.mbr $(libdir)/qrpglesrc.file/skybtz_h.mbr ../src/interfaces/skybtz.ts: skybtz.yaml
	#npx ec-generate -f $<
	#cp skybtz.ts ../src/interfaces/skybtz.ts
	system "CPYFRMSTMF FROMSTMF('skybtz.rpgle') TOMBR('$(libdir)/qrpglesrc.file/skybtz.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('skybtz_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/skybtz_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/skybtzqm.mbr $(libdir)/qrpglesrc.file/skybtzqm_h.mbr ../src/interfaces/skybtzqm.ts: skybtzqm.yaml
	#npx ec-generate -f $<
	#cp skybtzqm.ts ../src/interfaces/skybtzqm.ts
	system "CPYFRMSTMF FROMSTMF('skybtzqm.rpgle') TOMBR('$(libdir)/qrpglesrc.file/skybtzqm.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('skybtzqm_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/skybtzqm_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/skybtzqp.mbr $(libdir)/qrpglesrc.file/skybtzqp_h.mbr ../src/interfaces/skybtzqp.ts: skybtzqp.yaml
	#npx ec-generate -f $<
	#cp skybtzqp.ts ../src/interfaces/skybtzqp.ts
	system "CPYFRMSTMF FROMSTMF('skybtzqp.rpgle') TOMBR('$(libdir)/qrpglesrc.file/skybtzqp.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('skybtzqp_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/skybtzqp_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpgeteqip.mbr $(libdir)/qrpglesrc.file/mpgeteq_h.mbr ../src/interfaces/mpgeteqip.ts: mpgeteqip.yaml
	#npx ec-generate -f $<
	#cp mpgeteqip.ts ../src/interfaces/mpgeteqip.ts
	system "CPYFRMSTMF FROMSTMF('mpgeteqip.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgeteqip.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgeteq_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpgeteq2.mbr $(libdir)/qrpglesrc.file/mpgeteq2_h.mbr ../src/interfaces/mpgeteq2.ts: mpgeteq2.yaml
	#npx ec-generate -f $<
	#cp mpgeteq2.ts ../src/interfaces/mpgeteq2.ts
	system "CPYFRMSTMF FROMSTMF('mpgeteq2.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq2.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgeteq2_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq2_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpgeteq.mbr $(libdir)/qrpglesrc.file/mpgeteqa_h.mbr ../src/interfaces/mpgeteq.ts: mpgeteq.yaml
	#npx ec-generate -f $<
	#cp mpgeteq.ts ../src/interfaces/mpgeteq.ts
	system "CPYFRMSTMF FROMSTMF('mpgeteq.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgeteqa_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgeteqa_h.mbr') MBROPT(*REPLACE)"			

$(libdir)/qrpglesrc.file/rmgetstmi.mbr $(libdir)/qrpglesrc.file/rmgetstm_h.mbr ../src/interfaces/rmgetstmi.ts: rmgetstmi.yaml
	#npx ec-generate -f $<
	#cp rmgetstmi.ts ../src/interfaces/rmgetstmi.ts
	system "CPYFRMSTMF FROMSTMF('rmgetstmi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmgetstmi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmgetstm_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmgetstm_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpgetwoch.mbr $(libdir)/qrpglesrc.file/mpgetwoc_h.mbr ../src/interfaces/mpgetwoch.ts: mpgetwoch.yaml
	#npx ec-generate -f $<
	#cp mpgetwoch.ts ../src/interfaces/mpgetwoch.ts
	system "CPYFRMSTMF FROMSTMF('mpgetwoch.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetwoch.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetwoc_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetwoc_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpgetwc2.mbr $(libdir)/qrpglesrc.file/mpgetwc2_h.mbr ../src/interfaces/mpgetwc2.ts: mpgetwc2.yaml
	#npx ec-generate -f $<
	#cp mpgetwc2.ts ../src/interfaces/mpgetwc2.ts
	system "CPYFRMSTMF FROMSTMF('mpgetwc2.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetwc2.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetwc2_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetwc2_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpgetwohr.mbr $(libdir)/qrpglesrc.file/mpgetwoh_h.mbr ../src/interfaces/mpgetwohr.ts: mpgetwohr.yaml
	#npx ec-generate -f $<
	#cp mpgetwohr.ts ../src/interfaces/mpgetwohr.ts
	system "CPYFRMSTMF FROMSTMF('mpgetwohr.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetwohr.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetwoh_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetwoh_h.mbr') MBROPT(*REPLACE)"
	
$(libdir)/qrpglesrc.file/mpputlog.mbr $(libdir)/qrpglesrc.file/mpputlg_h.mbr ../src/interfaces/mpputlog.ts: mpputlog.yaml
	#npx ec-generate -f $<
	#cp mpputlog.ts ../src/interfaces/mpputlog.ts
	system "CPYFRMSTMF FROMSTMF('mpputlog.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpputlog.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpputlg_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpputlg_h.mbr') MBROPT(*REPLACE)"
	
$(libdir)/qrpglesrc.file/mpputwo.mbr $(libdir)/qrpglesrc.file/mpputwo_h.mbr ../src/interfaces/mpputwo.ts: mpputwo.yaml
	#npx ec-generate -f $<
	#cp mpputwo.ts ../src/interfaces/mpputwo.ts
	system "CPYFRMSTMF FROMSTMF('mpputwo.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpputwo.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpputwo_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpputwo_h.mbr') MBROPT(*REPLACE)"			

$(libdir)/qrpglesrc.file/pncchkot.mbr $(libdir)/qrpglesrc.file/pncchkot_h.mbr ../src/interfaces/pncchkot.ts: pncchkot.yaml
	#npx ec-generate -f $<
	#cp pncchkot.ts ../src/interfaces/pncchkot.ts
	system "CPYFRMSTMF FROMSTMF('pncchkot.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncchkot.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncchkot_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncchkot_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pncupdat.mbr $(libdir)/qrpglesrc.file/pncupdat_h.mbr ../src/interfaces/pncupdat.ts: pncupdat.yaml
	#npx ec-generate -f $<
	#cp pncupdat.ts ../src/interfaces/pncupdat.ts
	system "CPYFRMSTMF FROMSTMF('pncupdat.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncupdat.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncupdat_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncupdat_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pncupdt2.mbr $(libdir)/qrpglesrc.file/pncupdt2_h.mbr ../src/interfaces/pncupdt2.ts: pncupdt2.yaml
	#npx ec-generate -f $<
	#cp pncupdt2.ts ../src/interfaces/pncupdt2.ts
	system "CPYFRMSTMF FROMSTMF('pncupdt2.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncupdt2.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncupdt2_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncupdt2_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pnclocat.mbr $(libdir)/qrpglesrc.file/pnclocat_h.mbr ../src/interfaces/pnclocat.ts: pnclocat.yaml
	#npx ec-generate -f $<
	#cp pnclocat.ts ../src/interfaces/pnclocat.ts
	system "CPYFRMSTMF FROMSTMF('pnclocat.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pnclocat.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pnclocat_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pnclocat_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpvendor.mbr $(libdir)/qrpglesrc.file/mpvendor_h.mbr ../src/interfaces/mpvendor.ts: mpvendor.yaml
	#npx ec-generate -f $<
	#cp mpvendor.ts ../src/interfaces/mpvendor.ts
	system "CPYFRMSTMF FROMSTMF('mpvendor.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpvendor.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpvendor_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpvendor_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/rmgetdvir.mbr $(libdir)/qrpglesrc.file/rmgetdvi_h.mbr ../src/interfaces/rmgetdvir.ts: rmgetdvir.yaml
	#npx ec-generate -f $<
	#cp rmgetdvir.ts ../src/interfaces/rmgetdvir.ts
	system "CPYFRMSTMF FROMSTMF('rmgetdvir.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmgetdvir.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmgetdvi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmgetdvi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/rmcrtdvir.mbr $(libdir)/qrpglesrc.file/rmcrtdvi_h.mbr ../src/interfaces/rmcrtdvir.ts: rmcrtdvir.yaml
	#npx ec-generate -f $<
	#cp rmcrtdvir.ts ../src/interfaces/rmcrtdvir.ts
	system "CPYFRMSTMF FROMSTMF('rmcrtdvir.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmcrtdvir.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmcrtdvi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmcrtdvi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpsvcitm.mbr $(libdir)/qrpglesrc.file/mpsvcit_h.mbr ../src/interfaces/mpsvcitm.ts: mpsvcitm.yaml
	#npx ec-generate -f $<
	#cp mpsvcitm.ts ../src/interfaces/mpsvcitm.ts
	system "CPYFRMSTMF FROMSTMF('mpsvcitm.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpsvcitm.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpsvcit_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpsvcit_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpemploy.mbr $(libdir)/qrpglesrc.file/mpemploy_h.mbr ../src/interfaces/mpemploy.ts: mpemploy.yaml
	#npx ec-generate -f $<
	#cp mpemploy.ts ../src/interfaces/mpemploy.ts
	system "CPYFRMSTMF FROMSTMF('mpemploy.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpemploy.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpemploy_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpemploy_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/boapayment.mbr $(libdir)/qrpglesrc.file/boapaym_h.mbr ../src/interfaces/boapayment.ts: boapayment.yaml
	#npx ec-generate -f $<
	#cp boapayment.ts ../src/interfaces/boapayment.ts
	system "CPYFRMSTMF FROMSTMF('boapayment.rpgle') TOMBR('$(libdir)/qrpglesrc.file/boapayment.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('boapaym_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/boapaym_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pncerror.mbr $(libdir)/qrpglesrc.file/pncerr_h.mbr ../src/interfaces/pncerror.ts: pncerror.yaml
	#npx ec-generate -f $<
	#cp pncerror.ts ../src/interfaces/pncerror.ts
	#cp pncerr_h.rpgleinc.backup pncerr_h.rpgleinc
	system "CPYFRMSTMF FROMSTMF('pncerror.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncerror.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncerr_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncerr_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/zplapi.mbr $(libdir)/qrpglesrc.file/zplapi_h.mbr ../src/interfaces/zplapi.ts: zplapi.yaml
	#npx ec-generate -f $<
	#cp zplapi.ts ../src/interfaces/zplapi.ts
	#cp zplapi_h.rpgleinc.backup zplapi_h.rpgleinc
	system "CPYFRMSTMF FROMSTMF('zplapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/zplapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('zplapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/zplapi_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mlgnveri.mbr $(libdir)/qrpglesrc.file/mlgenveri_h.mbr ../src/interfaces/mlgnveri.ts: mlgnveri.yaml
	#npx ec-generate -f $<
	#cp mlgnveri.ts ../src/interfaces/mlgnveri.ts
	#cp mlgnveri_h.rpgleinc.backup mlgnveri_h.rpgleinc
	system "CPYFRMSTMF FROMSTMF('mlgnveri.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mlgnveri.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mlgnveri_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mlgnveri_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/makeme.mbr $(libdir)/qrpglesrc.file/makeme_h.mbr ../src/interfaces/makeme.ts: makeme.yaml
	#npx ec-generate -f $<
	#cp makeme.ts ../src/interfaces/makeme.ts
	system "CPYFRMSTMF FROMSTMF('makeme.rpgle') TOMBR('$(libdir)/qrpglesrc.file/makeme.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('makeme_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/makeme_h.mbr') MBROPT(*REPLACE)"		

$(libdir)/qrpglesrc.file/pcachrpt.mbr $(libdir)/qrpglesrc.file/pcachrpt_h.mbr ../src/interfaces/pcachrpt.ts: pcachrpt.yaml
	#npx ec-generate -f $<
	#cp pcachrpt.ts ../src/interfaces/pcachrpt.ts
	system "CPYFRMSTMF FROMSTMF('pcachrpt.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pcachrpt.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pcachrpt_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pcachrpt_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/pcgettran.mbr $(libdir)/qrpglesrc.file/pcgettrn_h.mbr ../src/interfaces/pcgettran.ts: pcgettran.yaml
	#npx ec-generate -f $<
	#cp pcgettran.ts ../src/interfaces/pcgettran.ts
	system "CPYFRMSTMF FROMSTMF('pcgettran.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pcgettran.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pcgettrn_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pcgettrn_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/pcgettrns.mbr $(libdir)/qrpglesrc.file/pcgettrs_h.mbr ../src/interfaces/pcgettrns.ts: pcgettrns.yaml
	#npx ec-generate -f $<
	#cp pcgettrns.ts ../src/interfaces/pcgettrns.ts
	system "CPYFRMSTMF FROMSTMF('pcgettrns.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pcgettrns.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pcgettrs_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pcgettrs_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/p44stsupd.mbr $(libdir)/qrpglesrc.file/p44stsup_h.mbr ../src/interfaces/p44stsupd.ts: p44stsupd.yaml
	#npx ec-generate -f $<
	#cp p44stsupd.ts ../src/interfaces/p44stsupd.ts
	system "CPYFRMSTMF FROMSTMF('p44stsupd.rpgle') TOMBR('$(libdir)/qrpglesrc.file/p44stsupd.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('p44stsup_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/p44stsup_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgtotals.mbr $(libdir)/qrpglesrc.file/ukgtotal_h.mbr ../src/interfaces/ukgtotals.ts: ukgtotals.yaml
	npx ec-generate -f $<
	cp ukgtotals.ts ../src/interfaces/ukgtotals.ts
	system "CPYFRMSTMF FROMSTMF('ukgtotals.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgtotals.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgtotal_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgtotal_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgtchours.mbr $(libdir)/qrpglesrc.file/ukghours_h.mbr ../src/interfaces/ukgtchours.ts: ukgtchours.yaml
	npx ec-generate -f $<
	cp ukgtchours.ts ../src/interfaces/ukgtchours.ts
	system "CPYFRMSTMF FROMSTMF('ukgtchours.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgtchours.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukghours_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukghours_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgpunches.mbr $(libdir)/qrpglesrc.file/ukgpunch_h.mbr ../src/interfaces/ukgpunches.ts: ukgpunches.yaml
	npx ec-generate -f $<
	cp ukgpunches.ts ../src/interfaces/ukgpunches.ts
	system "CPYFRMSTMF FROMSTMF('ukgpunches.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgpunches.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgpunch_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgpunch_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgputhr.mbr $(libdir)/qrpglesrc.file/ukgputhr_h.mbr ../src/interfaces/ukgputhr.ts: ukgputhr.yaml
	npx ec-generate -f $<
	cp ukgputhr.ts ../src/interfaces/ukgputhr.ts
	system "CPYFRMSTMF FROMSTMF('ukgputhr.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgputhr.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgputhr_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgputhr_h.mbr') MBROPT(*REPLACE)"	

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

$(libdir)/qrpglesrc.file/upsval.mbr $(libdir)/qrpglesrc.file/upsval_h.mbr ../src/interfaces/upsval.ts: upsval.yaml
	npx ec-generate -f $<
	cp upsval.ts ../src/interfaces/upsval.ts
	system "CPYFRMSTMF FROMSTMF('upsval.rpgle') TOMBR('$(libdir)/qrpglesrc.file/upsval.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('upsval_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/upsval_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/t4300inv.mbr $(libdir)/qrpglesrc.file/t4300inv_h.mbr ../src/interfaces/t4300inv.ts: t4300inv.yaml
	npx ec-generate -f $<
	cp t4300inv.ts ../src/interfaces/t4300inv.ts
	system "CPYFRMSTMF FROMSTMF('t4300inv.rpgle') TOMBR('$(libdir)/qrpglesrc.file/t4300inv.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('t4300inv_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/t4300inv_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/ukgdelof.mbr $(libdir)/qrpglesrc.file/ukgdelof_h.mbr ../src/interfaces/ukgdelof.ts: ukgdelof.yaml
	npx ec-generate -f $<
	cp ukgdelof.ts ../src/interfaces/ukgdelof.ts
	system "CPYFRMSTMF FROMSTMF('ukgdelof.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgdelof.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgdelof_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgdelof_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/t4300mov.mbr $(libdir)/qrpglesrc.file/t4300mov_h.mbr ../src/interfaces/t4300mov.ts: t4300mov.yaml
	npx ec-generate -f $<
	cp t4300mov.ts ../src/interfaces/t4300mov.ts
	system "CPYFRMSTMF FROMSTMF('t4300mov.rpgle') TOMBR('$(libdir)/qrpglesrc.file/t4300mov.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('t4300mov_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/t4300mov_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpgetwo.mbr $(libdir)/qrpglesrc.file/mpgetwo_h.mbr ../src/interfaces/mpgetwo.ts: mpgetwo.yaml
	#npx ec-generate -f $<
	#cp mpgetwo.ts ../src/interfaces/mpgetwo.ts
	system "CPYFRMSTMF FROMSTMF('mpgetwo.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetwo.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetwo_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetwo_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgdrvr.mbr $(libdir)/qrpglesrc.file/ukgdrvr_h.mbr ../src/interfaces/ukgdrvr.ts: ukgdrvr.yaml
	#npx ec-generate -f $<
	#cp ukgdrvr.ts ../src/interfaces/ukgdrvr.ts
	system "CPYFRMSTMF FROMSTMF('ukgdrvr.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgdrvr.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgdrvr_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgdrvr_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/hrsdgetemp.mbr $(libdir)/qrpglesrc.file/hrsdgete_h.mbr ../src/interfaces/hrsdgetemp.ts: hrsdgetemp.yaml
	#npx ec-generate -f $<
	#cp hrsdgetemp.ts ../src/interfaces/hrsdgetemp.ts
	system "CPYFRMSTMF FROMSTMF('hrsdgetemp.rpgle') TOMBR('$(libdir)/qrpglesrc.file/hrsdgetemp.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('hrsdgete_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/hrsdgete_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/hrsdtoken.mbr $(libdir)/qrpglesrc.file/hrsdtokn_h.mbr ../src/interfaces/hrsdtoken.ts: hrsdtoken.yaml
	#npx ec-generate -f $<
	#cp hrsdtoken.ts ../src/interfaces/hrsdtoken.ts
	system "CPYFRMSTMF FROMSTMF('hrsdtoken.rpgle') TOMBR('$(libdir)/qrpglesrc.file/hrsdtoken.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('hrsdtokn_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/hrsdtokn_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/hrsdupld.mbr $(libdir)/qrpglesrc.file/hrsdupld_h.mbr ../src/interfaces/hrsdupld.ts: hrsdupld.yaml
	#npx ec-generate -f $<
	#cp hrsdupld.ts ../src/interfaces/hrsdupld.ts
	system "CPYFRMSTMF FROMSTMF('hrsdupld.rpgle') TOMBR('$(libdir)/qrpglesrc.file/hrsdupld.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('hrsdupld_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/hrsdupld_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/hrsdupdoc.mbr $(libdir)/qrpglesrc.file/hrsdupdc_h.mbr ../src/interfaces/hrsdupdoc.ts: hrsdupdoc.yaml
	#npx ec-generate -f $<
	#cp hrsdupdoc.ts ../src/interfaces/hrsdupdoc.ts
	system "CPYFRMSTMF FROMSTMF('hrsdupdoc.rpgle') TOMBR('$(libdir)/qrpglesrc.file/hrsdupdoc.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('hrsdupdc_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/hrsdupdc_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/ukgpchim.mbr $(libdir)/qrpglesrc.file/ukgpchim_h.mbr ../src/interfaces/ukgpchim.ts: ukgpchim.yaml
	npx ec-generate -f $<
	cp ukgpchim.ts ../src/interfaces/ukgpchim.ts
	system "CPYFRMSTMF FROMSTMF('ukgpchim.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgpchim.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgpchim_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgpchim_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/psdvir.mbr $(libdir)/qrpglesrc.file/psdvir_h.mbr ../src/interfaces/psdvir.ts: psdvir.yaml
	npx ec-generate -f $<
	cp psdvir.ts ../src/interfaces/psdvir.ts
	system "CPYFRMSTMF FROMSTMF('psdvir.rpgle') TOMBR('$(libdir)/qrpglesrc.file/psdvir.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('psdvir_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/psdvir_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpwonote.mbr $(libdir)/qrpglesrc.file/mpwonote_h.mbr ../src/interfaces/mpwonote.ts: mpwonote.yaml
	npx ec-generate -f $<
	cp mpwonote.ts ../src/interfaces/mpwonote.ts
	system "CPYFRMSTMF FROMSTMF('mpwonote.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpwonote.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpwonote_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpwonote_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpgetdown.mbr $(libdir)/qrpglesrc.file/mpgetdow_h.mbr ../src/interfaces/mpgetdown.ts: mpwonote.yaml
	npx ec-generate -f $<
	cp mpgetdown.ts ../src/interfaces/mpgetdown.ts
	system "CPYFRMSTMF FROMSTMF('mpgetdown.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetdown.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetdow_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetdow_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/ddgetct.mbr $(libdir)/qrpglesrc.file/ddgetct_h.mbr ../src/interfaces/ddgetct.ts: ddgetct.yaml
	npx ec-generate -f $<
	cp ddgetct.ts ../src/interfaces/ddgetct.ts
	system "CPYFRMSTMF FROMSTMF('ddgetct.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ddgetct.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ddgetct_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ddgetct_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/ddputct.mbr $(libdir)/qrpglesrc.file/ddputct_h.mbr ../src/interfaces/ddputct.ts: ddputct.yaml
	npx ec-generate -f $<
	cp ddputct.ts ../src/interfaces/ddputct.ts
	system "CPYFRMSTMF FROMSTMF('ddputct.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ddputct.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ddputct_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ddputct_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/ukgdtard.mbr $(libdir)/qrpglesrc.file/ukgdtard_h.mbr ../src/interfaces/ukgdtard.ts: ukgdtard.yaml
	npx ec-generate -f $<
	cp ukgdtard.ts ../src/interfaces/ukgdtard.ts
	system "CPYFRMSTMF FROMSTMF('ukgdtard.rpgle') TOMBR('$(libdir)/qrpglesrc.file/ukgdtard.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('ukgdtard_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/ukgdtard_h.mbr') MBROPT(*REPLACE)"	


.PHONY: library
library:
	-system "CRTLIB $(LIB)"
	-system "CRTSRCPF FILE($(LIB)/QCMDSRC)"
	-system "CRTSRCPF FILE($(LIB)/QRPGLESRC)"

.PHONY: tables
tables:
	-cp create-auth-table.sql create-auth-table-temp-make.sql
	-sed -i 's/@LIBRARY@/$(LIB)/g' create-auth-table-temp-make.sql
	-system "RUNSQLSTM SRCSTMF('create-auth-table-temp-make.sql')"
	-rm create-auth-table-temp-make.sql
	-cp create-auth-user.sql create-auth-user-temp-make.sql
	-sed -i 's/@LIBRARY@/$(LIB)/g' create-auth-user-temp-make.sql
	-system "RUNSQLSTM SRCSTMF('create-auth-user-temp-make.sql')" || :
	-rm create-auth-user-temp-make.sql

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
