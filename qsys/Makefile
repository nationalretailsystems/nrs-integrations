# Eradani Connect Template makefile

# Specify the development library by setting the environment variable "LIB" before
# running make.


# Variables
#
LIB?=ECNCTAPP


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
	   tstrmgtmi

GENMODS = icndbapi \
          lblapi \
          trfcapi \
          vinapi \
          wthfrcapi \
          pncchkin \
          pnclatlon \
          skybtz  \
		  skybtzqm \
		  mpgeteqip \
		  mpgeteq2 \
		  rmgetstmi \
		  mpgetwohr \
		  mpgetwoch \
		  mpputlog \
		  mpputwo \
		  pncchkot \
		  pncupdat \
		  pnclocat \
		  mpvendor \
		  rmgetdvir \
		  rmcrtdvir \
		  mpsvcitm

GENHDRS = icndbapi_h \
          lblapi_h \
          trfcapi_h \
          vinapi_h \
          wthfcapi_h \
          pncchkin_h \
          pnclatln_h \
          skybtz_h \
		  skybtzqm_h \
		  mpgeteq_h \
		  rmgetstm_h \
		  mpgetwoc_h \
		  mpgetwoh_h \
		  mpgeteq2_h \
		  mpputlg_h \
		  mpputwo_h \
		  pncchkot_h \
		  pncupdat_h \
		  pnclocat_h \
		  mpvendor_h

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
	   tstrmgetmi

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
	   tstrmgetmi

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

$(libdir)/ecctmpgen.srvpgm: $(FQGENMODS)
	system "CRTSRVPGM SRVPGM($(LIB)/$(basename $(@F))) MODULE($(NQGENMODS)) EXPORT(*ALL)"

$(libdir)/%.module: $(libdir)/qrpglesrc.file/%.mbr
	system "CRTRPGMOD MODULE($(LIB)/$(basename $(@F))) SRCFILE($(LIB)/QRPGLESRC) DBGVIEW(*LIST)"

# Source member recipes
$(libdir)/qcmdsrc.file/%.mbr: %.cmd
	system "CPYFRMSTMF FROMSTMF('$<') TOMBR('$@') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/%.mbr: %.rpgle
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
	npx ec-generate -f $<
	cp icndbapi.ts ../src/interfaces/icndbapi.ts
	system "CPYFRMSTMF FROMSTMF('icndbapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/icndbapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('icndbapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/icndbapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/trfcapi.mbr $(libdir)/qrpglesrc.file/trfcapi_h.mbr ../src/interfaces/trfcapi.ts: trfcapi.yaml
	npx ec-generate -f $<
	cp trfcapi.ts ../src/interfaces/trfcapi.ts
	system "CPYFRMSTMF FROMSTMF('trfcapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/trfcapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('trfcapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/trfcapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/vinapi.mbr $(libdir)/qrpglesrc.file/vinapi_h.mbr ../src/interfaces/vinapi.ts: vinapi.yaml
	npx ec-generate -f $<
	cp vinapi.ts ../src/interfaces/vinapi.ts
	system "CPYFRMSTMF FROMSTMF('vinapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/vinapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('vinapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/vinapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/wthfrcapi.mbr $(libdir)/qrpglesrc.file/wthfcapi_h.mbr ../src/interfaces/wthfrcapi.ts: wthfrcapi.yaml
	npx ec-generate -f $<
	cp wthfrcapi.ts ../src/interfaces/wthfrcapi.ts
	system "CPYFRMSTMF FROMSTMF('wthfrcapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/wthfrcapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('wthfcapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/wthfcapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/lblapi.mbr $(libdir)/qrpglesrc.file/lblapi_h.mbr ../src/interfaces/lblapi.ts: lblapi.yaml
	npx ec-generate -f $<
	cp lblapi.ts ../src/interfaces/lblapi.ts
	system "CPYFRMSTMF FROMSTMF('lblapi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/lblapi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('lblapi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/lblapi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pncchkin.mbr $(libdir)/qrpglesrc.file/pncchkin_h.mbr ../src/interfaces/pncchkin.ts: pncchkin.yaml
	npx ec-generate -f $<
	cp pncchkin.ts ../src/interfaces/pncchkin.ts
	system "CPYFRMSTMF FROMSTMF('pncchkin.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncchkin.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncchkin_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncchkin_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pnclatlon.mbr $(libdir)/qrpglesrc.file/pnclatln_h.mbr ../src/interfaces/pnclatlon.ts: pnclatlon.yaml
	npx ec-generate -f $<
	cp pnclatlon.ts ../src/interfaces/pnclatlon.ts
	#cp pnclatln_h.rpgleinc.backup pnclatln_h.rpgleinc
	system "CPYFRMSTMF FROMSTMF('pnclatlon.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pnclatlon.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pnclatln_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pnclatln_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/skybtz.mbr $(libdir)/qrpglesrc.file/skybtz_h.mbr ../src/interfaces/skybtz.ts: skybtz.yaml
	npx ec-generate -f $<
	cp skybtz.ts ../src/interfaces/skybtz.ts
	system "CPYFRMSTMF FROMSTMF('skybtz.rpgle') TOMBR('$(libdir)/qrpglesrc.file/skybtz.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('skybtz_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/skybtz_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/skybtzqm.mbr $(libdir)/qrpglesrc.file/skybtzqm_h.mbr ../src/interfaces/skybtzqm.ts: skybtzqm.yaml
	npx ec-generate -f $<
	cp skybtzqm.ts ../src/interfaces/skybtzqm.ts
	system "CPYFRMSTMF FROMSTMF('skybtzqm.rpgle') TOMBR('$(libdir)/qrpglesrc.file/skybtzqm.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('skybtzqm_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/skybtzqm_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpgeteqip.mbr $(libdir)/qrpglesrc.file/mpgeteq_h.mbr ../src/interfaces/mpgeteqip.ts: mpgeteqip.yaml
	npx ec-generate -f $<
	cp mpgeteqip.ts ../src/interfaces/mpgeteqip.ts
	system "CPYFRMSTMF FROMSTMF('mpgeteqip.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgeteqip.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgeteq_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq_h.mbr') MBROPT(*REPLACE)"	

$(libdir)/qrpglesrc.file/mpgeteq2.mbr $(libdir)/qrpglesrc.file/mpgeteq2_h.mbr ../src/interfaces/mpgeteq2.ts: mpgeteq2.yaml
	npx ec-generate -f $<
	cp mpgeteq2.ts ../src/interfaces/mpgeteq2.ts
	system "CPYFRMSTMF FROMSTMF('mpgeteq2.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq2.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgeteq2_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgeteq2_h.mbr') MBROPT(*REPLACE)"		

$(libdir)/qrpglesrc.file/rmgetstmi.mbr $(libdir)/qrpglesrc.file/rmgetstm_h.mbr ../src/interfaces/rmgetstmi.ts: rmgetstmi.yaml
	npx ec-generate -f $<
	cp rmgetstmi.ts ../src/interfaces/rmgetstmi.ts
	system "CPYFRMSTMF FROMSTMF('rmgetstmi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmgetstmi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmgetstm_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmgetstm_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpgetwoch.mbr $(libdir)/qrpglesrc.file/mpgetwoc_h.mbr ../src/interfaces/mpgetwoch.ts: mpgetwoch.yaml
	npx ec-generate -f $<
	cp mpgetwoch.ts ../src/interfaces/mpgetwoch.ts
	system "CPYFRMSTMF FROMSTMF('mpgetwoch.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetwoch.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetwoc_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetwoc_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpgetwohr.mbr $(libdir)/qrpglesrc.file/mpgetwoh_h.mbr ../src/interfaces/mpgetwohr.ts: mpgetwohr.yaml
	npx ec-generate -f $<
	cp mpgetwohr.ts ../src/interfaces/mpgetwohr.ts
	system "CPYFRMSTMF FROMSTMF('mpgetwohr.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpgetwohr.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpgetwoh_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpgetwoh_h.mbr') MBROPT(*REPLACE)"
	
$(libdir)/qrpglesrc.file/mpputlog.mbr $(libdir)/qrpglesrc.file/mpputlg_h.mbr ../src/interfaces/mpputlog.ts: mpputlog.yaml
	npx ec-generate -f $<
	cp mpputlog.ts ../src/interfaces/mpputlog.ts
	system "CPYFRMSTMF FROMSTMF('mpputlog.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpputlog.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpputlg_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpputlg_h.mbr') MBROPT(*REPLACE)"
	
$(libdir)/qrpglesrc.file/mpputwo.mbr $(libdir)/qrpglesrc.file/mpputwo_h.mbr ../src/interfaces/mpputwo.ts: mpputwo.yaml
	npx ec-generate -f $<
	cp mpputwo.ts ../src/interfaces/mpputwo.ts
	system "CPYFRMSTMF FROMSTMF('mpputwo.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpputwo.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpputwo_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpputwo_h.mbr') MBROPT(*REPLACE)"			

$(libdir)/qrpglesrc.file/pncchkot.mbr $(libdir)/qrpglesrc.file/pncchkot_h.mbr ../src/interfaces/pncchkot.ts: pncchkot.yaml
	npx ec-generate -f $<
	cp pncchkot.ts ../src/interfaces/pncchkot.ts
	system "CPYFRMSTMF FROMSTMF('pncchkot.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncchkot.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncchkot_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncchkot_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pncupdat.mbr $(libdir)/qrpglesrc.file/pncupdat_h.mbr ../src/interfaces/pncupdat.ts: pncupdat.yaml
	npx ec-generate -f $<
	cp pncupdat.ts ../src/interfaces/pncupdat.ts
	system "CPYFRMSTMF FROMSTMF('pncupdat.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pncupdat.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pncupdat_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pncupdat_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/pnclocat.mbr $(libdir)/qrpglesrc.file/pnclocat_h.mbr ../src/interfaces/pnclocat.ts: pnclocat.yaml
	npx ec-generate -f $<
	cp pnclocat.ts ../src/interfaces/pnclocat.ts
	system "CPYFRMSTMF FROMSTMF('pnclocat.rpgle') TOMBR('$(libdir)/qrpglesrc.file/pnclocat.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('pnclocat_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/pnclocat_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpvendor.mbr $(libdir)/qrpglesrc.file/mpvendor_h.mbr ../src/interfaces/mpvendor.ts: mpvendor.yaml
	npx ec-generate -f $<
	cp mpvendor.ts ../src/interfaces/mpvendor.ts
	system "CPYFRMSTMF FROMSTMF('mpvendor.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpvendor.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpvendor_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpvendor_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/rmgetdvir.mbr $(libdir)/qrpglesrc.file/rmgetdvi_h.mbr ../src/interfaces/rmgetdvir.ts: rmgetdvir.yaml
	npx ec-generate -f $<
	cp rmgetdvir.ts ../src/interfaces/rmgetdvir.ts
	system "CPYFRMSTMF FROMSTMF('rmgetdvir.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmgetdvir.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmgetdvi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmgetdvi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/rmcrtdvir.mbr $(libdir)/qrpglesrc.file/rmcrtdvi_h.mbr ../src/interfaces/rmcrtdvir.ts: rmcrtdvir.yaml
	npx ec-generate -f $<
	cp rmcrtdvir.ts ../src/interfaces/rmcrtdvir.ts
	system "CPYFRMSTMF FROMSTMF('rmcrtdvir.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmcrtdvir.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmcrtdvi_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmcrtdvi_h.mbr') MBROPT(*REPLACE)"

$(libdir)/qrpglesrc.file/mpsvcitm.mbr $(libdir)/qrpglesrc.file/mpsvcit_h.mbr ../src/interfaces/mpsvcitm.ts: mpsvcitm.yaml
	npx ec-generate -f $<
	cp mpsvcitm.ts ../src/interfaces/mpsvcitm.ts
	system "CPYFRMSTMF FROMSTMF('mpsvcitm.rpgle') TOMBR('$(libdir)/qrpglesrc.file/mpsvcitm.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('mpsvcit_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/mpsvcit_h.mbr') MBROPT(*REPLACE)"

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
