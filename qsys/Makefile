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
	   tstmpgeteq

GENMODS = icndbapi \
          lblapi \
          trfcapi \
          vinapi \
          wthfrcapi \
          pncchkin \
          pnclatlon \
          skybtz  \
		  skybtzqm \
		  mpgeteqip 
#		  rmgetstmi

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
		  rmgetst_h

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
	   tstmpgeteq

CMDS = dspjk \
       dsptrfc \
       dspvhcl \
       dspwf \
       prtlbl \
       tstpncchk \
       tstpncll \
       tstskybtz \
	   tstskybtzq

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

$(libdir)/qrpglesrc.file/rmgetstmi.mbr $(libdir)/qrpglesrc.file/rmgetstm_h.mbr ../src/interfaces/rmgetstmi.ts: rmgetstmi.yaml
	npx ec-generate -f $<
	cp rmgetstmi.ts ../src/interfaces/rmgetstmi.ts
	system "CPYFRMSTMF FROMSTMF('rmgetstmi.rpgle') TOMBR('$(libdir)/qrpglesrc.file/rmgetstmi.mbr') MBROPT(*REPLACE)"
	system "CPYFRMSTMF FROMSTMF('rmgetstm_h.rpgleinc') TOMBR('$(libdir)/qrpglesrc.file/rmgetstm_h.mbr') MBROPT(*REPLACE)"		


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
