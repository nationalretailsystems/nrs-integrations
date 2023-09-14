import config from 'config';
import ec from '@eradani-inc/eradani-connect';

export const insertHysterRecord = new ec.run.Sql(
    `insert into ${config.native.hysterLibrary}.HysterLog values (?, ?, ?, ?, ?, ?, ?, ?) with NC`,
    {
        params: [
            { name: 'SessionID', type: new ec.dataTypes.Char(15) },
            { name: 'EquipmentAssetID', type: new ec.dataTypes.Char(15) },
            { name: 'StartDateTimeEq', type: new ec.dataTypes.Timestamp() },
            { name: 'EndDateTimeEq', type: new ec.dataTypes.Timestamp() },
            { name: 'StartMainServiceMeter', type: new ec.dataTypes.Char(15) },
            { name: 'EndMainServiceMeter', type: new ec.dataTypes.Char(15) },
            { name: 'UpdateFlag', type: new ec.dataTypes.Char(1) },
            { name: 'UpdateStamp', type: new ec.dataTypes.Timestamp() }
        ]
    }
);

