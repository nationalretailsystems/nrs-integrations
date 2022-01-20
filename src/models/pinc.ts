import eradaniConnect from '@eradani-inc/eradani-connect';
// XXX import config from 'config';
import { JSONObject } from 'src/types';
// XXX const configNative = config.get().eradaniConnect.native;

export default new eradaniConnect.run.Sql(
    `select 
    CASE WHEN ETYPEY IN ('T','R')  THEN TRIM(CARRCY) || '-' || EQUIPY
         WHEN ETYPEY = 'X' then EQUIPY  
         ELSE TRIM(CARRCY) || EQUIPY END AS "Asset",
    CASE WHEN YARD#Y = '?' THEN '?'
         WHEN LTYPEY IN ('S','D') THEN YARD#Y || LTYPEY || DIGITS(LOCT#Y) 
         WHEN LTYPEY = 'R' THEN YARD#Y || ' Row ' || LOCT#Y
         WHEN LTYPEY = 'U' THEN YARD#Y || ' Uns ' || LOCT#Y
         ELSE  YARD#Y || LTYPEY || LOCT#Y END AS "Spot" ,
    CASE WHEN RFTAGY <> ' ' THEN '340853E1D402FC0000' || RFTAGY
         else  ' '  END as "Tag ID" ,
     etypey as Equipment
     from ydfile3.yard 
     where FACL#Y = ? and ETYPEY in ('T','C','R','Z')
     ORDER BY YARD#Y,LTYPEY,LOCT#Y`,
    {
        params: [
            {
                name: 'fromYard'
            }
        ]
    }
);
export const insertPincSqsLog = new ec.run.Sql(
    `insert into ${config.native.pincLibrary}.pncsqslog values (?, ?, ?, ?)`,
    {
        params: [
            { name: 'queueUrl', type: new ec.dataTypes.Char(150) },
            { name: 'resultCode', type: new ec.dataTypes.Char(7) },
            { name: 'result', type: new ec.dataTypes.Char(2500) },
            { name: 'timestamp', type: new ec.dataTypes.Timestamp() }
        ]
    }
);
