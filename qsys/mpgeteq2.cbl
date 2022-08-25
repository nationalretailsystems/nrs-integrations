       01 RqAssetAllLEN      PIC S9(5)
                    VALUE 262
                    COMP-3.
       01 RqAssetAll      .
           05 filename      PIC X(256).
           05 skiprecs      PIC S9(5).
       01 AssetAllDSLEN      PIC S9(5)
                    VALUE 15140
                    COMP-3.
       01 AssetAllDS      .
           05 assetKey      PIC S9(10).
           05 entityName      PIC X(50).
           05 assetId      PIC X(24).
           05 parentAssetId      PIC X(24).
           05 description      PIC X(50).
           05 groupKey      PIC S9(10).
           05 groupId      PIC X(24).
           05 categoryId      PIC X(24).
           05 typeId      PIC X(24).
           05 budgetGroupId      PIC X(24).
           05 budgetId      PIC X(24).
           05 statusId      PIC X(24).
           05 barcode      PIC X(50).
           05 manufacturer      PIC X(24).
           05 model      PIC X(32).
           05 serialNumber      PIC X(32).
           05 customer      PIC X(50).
           05 customerKey      PIC S9(10).
           05 purchaseDate      FORMAT DATE "Unknown format".
           05 purchaseCost      PIC S9(13)V9(2)
                    COMP-3.
           05 customFields      OCCURS 100 TIMES INDEXED BY customFields-I.
           10 key      PIC S9(10).
           10 customFieldKey      PIC S9(10).
           10 fieldName      PIC X(24).
           10 value      PIC X(100).
