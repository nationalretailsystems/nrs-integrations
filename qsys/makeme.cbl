       01 PwdRequestLEN      PIC S9(5)
                    VALUE 55
                    COMP-3.
       01 PwdRequest      .
           05 wc      PIC S9(3).
           05 pc      PIC S9(3).
           05 sp      PIC X(1).
           05 minCh      PIC S9(3).
           05 maxCh      PIC S9(3).
           05 whenNum      PIC X(15).
           05 nums      PIC S9(3).
           05 whenUp      PIC X(15).
           05 ups      PIC S9(3).
       01 PwdResultLEN      PIC S9(5)
                    VALUE 550
                    COMP-3.
       01 PwdResult      .
           05 data      OCCURS 10 TIMES INDEXED BY data-I.
           10 pws      PIC X(50).
           05 error      PIC X(50).
