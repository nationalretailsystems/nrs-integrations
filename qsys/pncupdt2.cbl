       01 Updt2DSLEN      PIC S9(5)
                    VALUE 185
                    COMP-3.
       01 Updt2DS      .
           05 message_group_id      PIC X(25).
           05 campus      PIC X(6).
           05 data      .
           10 asset      .
           15 site_code      PIC X(25).
           15 asset_type      PIC X(25).
           15 Trailer_SCAC      PIC X(4).
           15 Trailer_number      PIC X(25).
           15 container_number      PIC X(25).
           15 load_status      PIC X(25).
           15 customer_code      PIC X(25).
