/* eslint-disable */
// @ts-nocheck
// Module: ukgdtard
// Generated source -- do not modify

import { ibmiConversions, missingInput } from "@eradani-inc/ec-client";
const {
  fromIbmiDate,
  fromIbmiTime,
  fromIbmiTimestamp,
  toIbmiDate,
  toIbmiTime,
  toIbmiTimestamp
} = ibmiConversions;

/**
 * Output interface
 */
export interface hyperfindDS {
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface dateRangeDS {
    /**
     * @size 10 characters
     */
    endDate: string,
    /**
     * @size 10 characters
     * @default `''`
     */
    startDate: string
}

/**
 * Output interface
 */
export interface employeeSetDS {
    /**
     */
    hyperfind: hyperfindDS,
    /**
     */
    dateRange: dateRangeDS
}

/**
 * Output interface
 */
export interface fromDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    view: number,
    /**
     */
    employeeSet: employeeSetDS
}

/**
 * Output interface
 */
export interface PropDS {
    /**
     * @size 1 characters
     * @default `''`
     */
    key: string,
    /**
     * @size 25 characters
     * @default `''`
     */
    value: string
}

/**
 * Output interface
 */
export interface SelectDS {
    /**
     * @size 40 characters
     * @default `''`
     */
    key: string,
    /**
     * @size 21 characters
     * @default `''`
     */
    alias: string,
    /**
     */
    properties: Array<PropDS>
}

/**
 * Output interface
 */
export interface WhereDS {
    /**
     * @size 40 characters
     * @default `''`
     */
    key: string,
    /**
     * @size 21 characters
     * @default `''`
     */
    alias: string,
    /**
     * @size 15 characters
     * @default `''`
     */
    operator: string,
    /**
     * @size 15 characters
     * @default `''`
     */
    values: string
}

/**
 * Output interface
 */
export interface SortByDS {
    /**
     * @size 40 characters
     * @default `''`
     */
    key: string,
    /**
     * @size 21 characters
     * @default `''`
     */
    alias: string,
    /**
     * @size 3 characters
     * @default `''`
     */
    sortDirection: string
}

/**
 * Output interface
 */
export interface metadataDS {
    /**
     * @size 3 characters
     * @default `''`
     */
    numNodes: string,
    /**
     * @size 36 characters
     * @default `''`
     */
    metadataKey: string,
    /**
     * @size 36 characters
     * @default `''`
     */
    cacheKey: string,
    /**
     * @size 4 characters
     * @default `''`
     */
    currencyCode: string,
    /**
     * @size 3 characters
     * @default `''`
     */
    totalNodes: string,
    /**
     * @size 3 characters
     * @default `''`
     */
    totalElements: string
}

/**
 * Output interface
 */
export interface DataKeyDS {
    /**
     * @size 2 characters
     * @default `''`
     */
    ROOT: string
}

/**
 * Output interface
 */
export interface ChildKeyDS {
    /**
     * @size 22 characters
     * @default `''`
     */
    TKTIMECARD_TRANSACTION: string,
    /**
     * @size 5 characters
     * @default `''`
     */
    TKPAYPERIOD: string,
    /**
     * @size 5 characters
     * @default `''`
     */
    PEOPLE: string
}

/**
 * Output interface
 */
export interface EMPDS {
    /**
     * @size 6 characters
     * @default `''`
     */
    id: string
}

/**
 * Output interface
 */
export interface DAYDS {
    /**
     * @size 10 characters
     * @default `''`
     */
    id: string,
    /**
     * @size 10 characters
     * @default `''`
     */
    qualifier: string
}

/**
 * Output interface
 */
export interface coreEntityKeyDS {
    /**
     */
    EMP: EMPDS,
    /**
     */
    DAY: DAYDS
}

/**
 * Output interface
 */
export interface AttributesDS {
    /**
     * @size 37 characters
     * @default `''`
     */
    key: string,
    /**
     * @size 21 characters
     * @default `''`
     */
    alias: string,
    /**
     * @size 19 characters
     * @default `''`
     */
    rawValue: string,
    /**
     * @size 18 characters
     * @default `''`
     */
    value: string
}

/**
 * Output interface
 */
export interface ChildrenDS {
    /**
     */
    key: ChildKeyDS,
    /**
     */
    coreEntityKey: coreEntityKeyDS,
    /**
     */
    attributes: Array<AttributesDS>,
    /**
     * @size 22 characters
     * @default `''`
     */
    rootEntity: string
}

/**
 * Output interface
 */
export interface dataDS {
    /**
     */
    key: DataKeyDS,
    /**
     */
    coreEntityKey: coreEntityKeyDS,
    /**
     */
    children: Array<ChildrenDS>,
    /**
     * @size 4 characters
     * @default `''`
     */
    rootEntity: string
}

/**
 * Output interface
 */
export interface DataReq {
    /**
     */
    from: fromDS,
    /**
     */
    select: Array<SelectDS>,
    /**
     */
    where: Array<WhereDS>,
    /**
     */
    sortBy: Array<SortByDS>,
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    count: number,
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    index: number
}

/**
 * Convert DataReq record to TypeScript object
 */
export function convertDataReqToObject(dataIn: string): DataReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.from =   {
  
    };
  dataOut.from.view = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  dataOut.from.employeeSet =   {
  
    };
  dataOut.from.employeeSet.hyperfind =   {
  
    };
  dataOut.from.employeeSet.hyperfind.id = Number(dataIn.substring(pos, pos + 6).trimEnd());
  pos += 6;
  dataOut.from.employeeSet.dateRange =   {
  
    };
  dataOut.from.employeeSet.dateRange.endDate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.from.employeeSet.dateRange.startDate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.select = [
    
  ];
  for (let i: number = 0; i < 10; ++i) {
  dataOut.select[i] =   {
  
    };
  dataOut.select[i].key = dataIn.substring(pos, pos + 40).trimEnd();
  pos += 40;
  dataOut.select[i].alias = dataIn.substring(pos, pos + 21).trimEnd();
  pos += 21;
  dataOut.select[i].properties = [
    
  ];
  for (let j: number = 0; j < 1; ++j) {
  dataOut.select[i].properties[j] =   {
  
    };
  dataOut.select[i].properties[j].key = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.select[i].properties[j].value = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  }
  }
  dataOut.where = [
    
  ];
  for (let i: number = 0; i < 2; ++i) {
  dataOut.where[i] =   {
  
    };
  dataOut.where[i].key = dataIn.substring(pos, pos + 40).trimEnd();
  pos += 40;
  dataOut.where[i].alias = dataIn.substring(pos, pos + 21).trimEnd();
  pos += 21;
  dataOut.where[i].operator = dataIn.substring(pos, pos + 15).trimEnd();
  pos += 15;
  dataOut.where[i].values = dataIn.substring(pos, pos + 15).trimEnd();
  pos += 15;
  }
  dataOut.sortBy = [
    
  ];
  for (let i: number = 0; i < 3; ++i) {
  dataOut.sortBy[i] =   {
  
    };
  dataOut.sortBy[i].key = dataIn.substring(pos, pos + 40).trimEnd();
  pos += 40;
  dataOut.sortBy[i].alias = dataIn.substring(pos, pos + 21).trimEnd();
  pos += 21;
  dataOut.sortBy[i].sortDirection = dataIn.substring(pos, pos + 3).trimEnd();
  pos += 3;
  }
  dataOut.count = Number(dataIn.substring(pos, pos + 5).trimEnd());
  pos += 5;
  dataOut.index = Number(dataIn.substring(pos, pos + 5).trimEnd());
  pos += 5;

  return dataOut;
}

/**
 * Input interface
 */
export interface DataRes {
    /**
     */
    metadata: metadataDS,
    /**
     */
    data: dataDS
}

/**
 * Convert JavaScript object to DataRes record
 */
export function convertObjectToDataRes(dataIn: DataRes): string {
  let dataOut: string = "";

  dataOut += dataIn?.metadata?.numNodes?.substring(0, 3)?.padEnd(3) ?? "''".substring(0, 3).padEnd(3);
  dataOut += dataIn?.metadata?.metadataKey?.substring(0, 36)?.padEnd(36) ?? "''".substring(0, 36).padEnd(36);
  dataOut += dataIn?.metadata?.cacheKey?.substring(0, 36)?.padEnd(36) ?? "''".substring(0, 36).padEnd(36);
  dataOut += dataIn?.metadata?.currencyCode?.substring(0, 4)?.padEnd(4) ?? "''".substring(0, 4).padEnd(4);
  dataOut += dataIn?.metadata?.totalNodes?.substring(0, 3)?.padEnd(3) ?? "''".substring(0, 3).padEnd(3);
  dataOut += dataIn?.metadata?.totalElements?.substring(0, 3)?.padEnd(3) ?? "''".substring(0, 3).padEnd(3);
  dataOut += dataIn?.data?.key?.ROOT?.substring(0, 2)?.padEnd(2) ?? "''".substring(0, 2).padEnd(2);
  dataOut += dataIn?.data?.coreEntityKey?.EMP?.id?.substring(0, 6)?.padEnd(6) ?? "''".substring(0, 6).padEnd(6);
  dataOut += dataIn?.data?.coreEntityKey?.DAY?.id?.substring(0, 10)?.padEnd(10) ?? "''".substring(0, 10).padEnd(10);
  dataOut += dataIn?.data?.coreEntityKey?.DAY?.qualifier?.substring(0, 10)?.padEnd(10) ?? "''".substring(0, 10).padEnd(10);
  for (let j: number = 0; j < 25; ++j) {
  dataOut += dataIn?.data?.children[j]?.key?.TKTIMECARD_TRANSACTION?.substring(0, 22)?.padEnd(22) ?? "''".substring(0, 22).padEnd(22);
  dataOut += dataIn?.data?.children[j]?.key?.TKPAYPERIOD?.substring(0, 5)?.padEnd(5) ?? "''".substring(0, 5).padEnd(5);
  dataOut += dataIn?.data?.children[j]?.key?.PEOPLE?.substring(0, 5)?.padEnd(5) ?? "''".substring(0, 5).padEnd(5);
  dataOut += dataIn?.data?.children[j]?.coreEntityKey?.EMP?.id?.substring(0, 6)?.padEnd(6) ?? "''".substring(0, 6).padEnd(6);
  dataOut += dataIn?.data?.children[j]?.coreEntityKey?.DAY?.id?.substring(0, 10)?.padEnd(10) ?? "''".substring(0, 10).padEnd(10);
  dataOut += dataIn?.data?.children[j]?.coreEntityKey?.DAY?.qualifier?.substring(0, 10)?.padEnd(10) ?? "''".substring(0, 10).padEnd(10);
  for (let l: number = 0; l < 10; ++l) {
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.key?.substring(0, 37)?.padEnd(37) ?? "''".substring(0, 37).padEnd(37);
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.alias?.substring(0, 21)?.padEnd(21) ?? "''".substring(0, 21).padEnd(21);
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.rawValue?.substring(0, 19)?.padEnd(19) ?? "''".substring(0, 19).padEnd(19);
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.value?.substring(0, 18)?.padEnd(18) ?? "''".substring(0, 18).padEnd(18);
  }
  dataOut += dataIn?.data?.children[j]?.rootEntity?.substring(0, 22)?.padEnd(22) ?? "''".substring(0, 22).padEnd(22);
  }
  dataOut += dataIn?.data?.rootEntity?.substring(0, 4)?.padEnd(4) ?? "''".substring(0, 4).padEnd(4);

  return dataOut;
}

/* eslint-enable */
