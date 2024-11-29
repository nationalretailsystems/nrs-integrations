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
     */
    key: string,
    /**
     * @size 25 characters
     */
    value: string
}

/**
 * Output interface
 */
export interface SelectDS {
    /**
     * @size 20 characters
     */
    key: string,
    /**
     * @size 21 characters
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
     * @size 31 characters
     */
    key: string,
    /**
     * @size 21 characters
     */
    alias: string,
    /**
     * @size 11 characters
     */
    operator: string,
    /**
     * @size 5 characters
     */
    values: string
}

/**
 * Output interface
 */
export interface SortByDS {
    /**
     * @size 20 characters
     */
    key: string,
    /**
     * @size 21 characters
     */
    alias: string,
    /**
     * @size 3 characters
     */
    sortDirection: string
}

/**
 * Output interface
 */
export interface metadataDS {
    /**
     * @size 3 characters
     */
    numNodes: string,
    /**
     * @size 36 characters
     */
    metadataKey: string,
    /**
     * @size 36 characters
     */
    cacheKey: string,
    /**
     * @size 4 characters
     */
    currencyCode: string,
    /**
     * @size 3 characters
     */
    totalNodes: string,
    /**
     * @size 3 characters
     */
    totalElements: string
}

/**
 * Output interface
 */
export interface DataKeyDS {
    /**
     * @size 2 characters
     */
    ROOT: string
}

/**
 * Output interface
 */
export interface ChildKeyDS {
    /**
     * @size 22 characters
     */
    TKTIMECARD_TRANSACTION: string,
    /**
     * @size 5 characters
     */
    TKPAYPERIOD: string,
    /**
     * @size 5 characters
     */
    PEOPLE: string
}

/**
 * Output interface
 */
export interface EMPDS {
    /**
     * @size 5 characters
     */
    id: string
}

/**
 * Output interface
 */
export interface DAYDS {
    /**
     * @size 10 characters
     */
    id: string,
    /**
     * @size 10 characters
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
     */
    key: string,
    /**
     * @size 21 characters
     */
    alias: string,
    /**
     * @size 19 characters
     */
    rawValue: string,
    /**
     * @size 18 characters
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
    count: number
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
  for (let i: number = 0; i < 20; ++i) {
  dataOut.select[i] =   {
  
    };
  dataOut.select[i].key = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;
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
  for (let i: number = 0; i < 1; ++i) {
  dataOut.where[i] =   {
  
    };
  dataOut.where[i].key = dataIn.substring(pos, pos + 31).trimEnd();
  pos += 31;
  dataOut.where[i].alias = dataIn.substring(pos, pos + 21).trimEnd();
  pos += 21;
  dataOut.where[i].operator = dataIn.substring(pos, pos + 11).trimEnd();
  pos += 11;
  dataOut.where[i].values = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  }
  dataOut.sortBy = [
    
  ];
  for (let i: number = 0; i < 3; ++i) {
  dataOut.sortBy[i] =   {
  
    };
  dataOut.sortBy[i].key = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;
  dataOut.sortBy[i].alias = dataIn.substring(pos, pos + 21).trimEnd();
  pos += 21;
  dataOut.sortBy[i].sortDirection = dataIn.substring(pos, pos + 3).trimEnd();
  pos += 3;
  }
  dataOut.count = Number(dataIn.substring(pos, pos + 5).trimEnd());
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

  dataOut += dataIn?.metadata?.numNodes?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.metadata.numNodes`, "char", dataIn?.metadata?.numNodes);
  dataOut += dataIn?.metadata?.metadataKey?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.metadata.metadataKey`, "char", dataIn?.metadata?.metadataKey);
  dataOut += dataIn?.metadata?.cacheKey?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.metadata.cacheKey`, "char", dataIn?.metadata?.cacheKey);
  dataOut += dataIn?.metadata?.currencyCode?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.metadata.currencyCode`, "char", dataIn?.metadata?.currencyCode);
  dataOut += dataIn?.metadata?.totalNodes?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.metadata.totalNodes`, "char", dataIn?.metadata?.totalNodes);
  dataOut += dataIn?.metadata?.totalElements?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.metadata.totalElements`, "char", dataIn?.metadata?.totalElements);
  dataOut += dataIn?.data?.key?.ROOT?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.data.key.ROOT`, "char", dataIn?.data?.key?.ROOT);
  dataOut += dataIn?.data?.coreEntityKey?.EMP?.id?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.data.coreEntityKey.EMP.id`, "char", dataIn?.data?.coreEntityKey?.EMP?.id);
  dataOut += dataIn?.data?.coreEntityKey?.DAY?.id?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.data.coreEntityKey.DAY.id`, "char", dataIn?.data?.coreEntityKey?.DAY?.id);
  dataOut += dataIn?.data?.coreEntityKey?.DAY?.qualifier?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.data.coreEntityKey.DAY.qualifier`, "char", dataIn?.data?.coreEntityKey?.DAY?.qualifier);
  for (let j: number = 0; j < 144; ++j) {
  dataOut += dataIn?.data?.children[j]?.key?.TKTIMECARD_TRANSACTION?.substring(0, 22)?.padEnd(22) ?? missingInput(`dataIn.data.children[${j}].key.TKTIMECARD_TRANSACTION`, "char", dataIn?.data?.children[j]?.key?.TKTIMECARD_TRANSACTION);
  dataOut += dataIn?.data?.children[j]?.key?.TKPAYPERIOD?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.data.children[${j}].key.TKPAYPERIOD`, "char", dataIn?.data?.children[j]?.key?.TKPAYPERIOD);
  dataOut += dataIn?.data?.children[j]?.key?.PEOPLE?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.data.children[${j}].key.PEOPLE`, "char", dataIn?.data?.children[j]?.key?.PEOPLE);
  dataOut += dataIn?.data?.children[j]?.coreEntityKey?.EMP?.id?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.data.children[${j}].coreEntityKey.EMP.id`, "char", dataIn?.data?.children[j]?.coreEntityKey?.EMP?.id);
  dataOut += dataIn?.data?.children[j]?.coreEntityKey?.DAY?.id?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.data.children[${j}].coreEntityKey.DAY.id`, "char", dataIn?.data?.children[j]?.coreEntityKey?.DAY?.id);
  dataOut += dataIn?.data?.children[j]?.coreEntityKey?.DAY?.qualifier?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.data.children[${j}].coreEntityKey.DAY.qualifier`, "char", dataIn?.data?.children[j]?.coreEntityKey?.DAY?.qualifier);
  for (let l: number = 0; l < 19; ++l) {
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.key?.substring(0, 37)?.padEnd(37) ?? missingInput(`dataIn.data.children[${j}].attributes[${l}].key`, "char", dataIn?.data?.children[j]?.attributes[l]?.key);
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.alias?.substring(0, 21)?.padEnd(21) ?? missingInput(`dataIn.data.children[${j}].attributes[${l}].alias`, "char", dataIn?.data?.children[j]?.attributes[l]?.alias);
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.rawValue?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.data.children[${j}].attributes[${l}].rawValue`, "char", dataIn?.data?.children[j]?.attributes[l]?.rawValue);
  dataOut += dataIn?.data?.children[j]?.attributes[l]?.value?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.data.children[${j}].attributes[${l}].value`, "char", dataIn?.data?.children[j]?.attributes[l]?.value);
  }
  dataOut += dataIn?.data?.children[j]?.rootEntity?.substring(0, 22)?.padEnd(22) ?? missingInput(`dataIn.data.children[${j}].rootEntity`, "char", dataIn?.data?.children[j]?.rootEntity);
  }
  dataOut += dataIn?.data?.rootEntity?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.data.rootEntity`, "char", dataIn?.data?.rootEntity);

  return dataOut;
}

/* eslint-enable */
