/* eslint-disable */
// @ts-nocheck
// Module: ddgetct
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
export interface customerDS {
    /**
     * @size 6 characters
     */
    name: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number
}

/**
 * Output interface
 */
export interface pier_passDS {
    /**
     * @size 7 characters
     */
    terminals: Array<string>,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     */
    claimed_by_other_company: boolean,
    /**
     */
    fee_paid: boolean,
    /**
     */
    has_hold: boolean,
    /**
     * @size 20 characters
     */
    observed: string
}

/**
 * Output interface
 */
export interface clean_truck_feeDS {
    /**
     * @size 7 characters
     */
    terminals: Array<string>,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     */
    claimed_by_other_company: boolean,
    /**
     */
    fee_paid: boolean,
    /**
     */
    has_hold: boolean,
    /**
     * @size 20 characters
     */
    observed: string
}

/**
 * Output interface
 */
export interface raw_dataDS {

}

/**
 * Output interface
 */
export interface extra_dataDS {

}

/**
 * Output interface
 */
export interface ParsedHoldsDS {
    /**
     * @size 9 characters
     */
    type: string,
    /**
     * @size 6 characters
     */
    raw_type: string
}

/**
 * Output interface
 */
export interface import_statusDS {
    /**
     * @size 7 characters
     */
    terminal: string,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     * @size 10 characters
     */
    last_free_date: string,
    /**
     * @size 6 characters
     */
    master_bill_of_lading: string,
    /**
     * @size 3 characters
     */
    shipping_line: string,
    /**
     * @size 16 characters
     */
    container_type: string,
    /**
     * @size 6 characters
     */
    vessel: string,
    /**
     * @size 7 characters
     */
    location: string,
    /**
     * @size 9 characters
     */
    parsed_location: string,
    /**
     * @size 10 characters
     */
    terminal_block: string,
    /**
     * @size 3 characters
     */
    terminal_block_availability_key: string,
    /**
     * @size 14 characters
     */
    holds: Array<string>,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    demurrage_fees: number,
    /**
     */
    ready_for_appointment: boolean,
    /**
     */
    available_for_pickup: boolean,
    /**
     */
    wheeled: boolean,
    /**
     */
    closed_area: boolean,
    /**
     * @size 20 characters
     */
    out_gated_time: string,
    /**
     * @size 20 characters
     */
    discharged_time: string,
    /**
     */
    raw_data: raw_dataDS,
    /**
     */
    extra_data: extra_dataDS,
    /**
     * @size 20 characters
     */
    observed: string,
    /**
     * @size 4 characters
     */
    parsed_shipping_line: string,
    /**
     * @size 5 characters
     */
    parsed_container_type: string,
    /**
     */
    parsed_holds: Array<ParsedHoldsDS>,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    cycle_id: number,
    /**
     * @size 20 characters
     */
    last_observed: string,
    /**
     * @size 20 characters
     */
    last_initiated_check: string
}

/**
 * Output interface
 */
export interface ImportStatusesDS {
    /**
     * @size 7 characters
     */
    terminal: string,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     * @size 10 characters
     */
    last_free_date: string,
    /**
     * @size 6 characters
     */
    master_bill_of_lading: string,
    /**
     * @size 3 characters
     */
    shipping_line: string,
    /**
     * @size 16 characters
     */
    container_type: string,
    /**
     * @size 6 characters
     */
    vessel: string,
    /**
     * @size 7 characters
     */
    location: string,
    /**
     * @size 9 characters
     */
    parsed_location: string,
    /**
     * @size 10 characters
     */
    terminal_block: string,
    /**
     * @size 3 characters
     */
    terminal_block_availability_key: string,
    /**
     * @size 14 characters
     */
    holds: Array<string>,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    demurrage_fees: number,
    /**
     */
    ready_for_appointment: boolean,
    /**
     */
    available_for_pickup: boolean,
    /**
     */
    wheeled: boolean,
    /**
     */
    closed_area: boolean,
    /**
     * @size 20 characters
     */
    out_gated_time: string,
    /**
     * @size 20 characters
     */
    discharged_time: string,
    /**
     */
    raw_data: raw_dataDS,
    /**
     */
    extra_data: extra_dataDS,
    /**
     * @size 20 characters
     */
    observed: string,
    /**
     * @size 4 characters
     */
    parsed_shipping_line: string,
    /**
     * @size 5 characters
     */
    parsed_container_type: string,
    /**
     */
    parsed_holds: Array<ParsedHoldsDS>,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    cycle_id: number,
    /**
     * @size 20 characters
     */
    last_observed: string,
    /**
     * @size 20 characters
     */
    last_initiated_check: string
}

/**
 * Output interface
 */
export interface LinkedApptsDS {
    /**
     * @size 6 characters
     */
    terminal_reference: string,
    /**
     * @size 6 characters
     */
    container_number: string
}

/**
 * Output interface
 */
export interface requested_byDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 6 characters
     */
    first_name: string,
    /**
     * @size 6 characters
     */
    last_name: string
}

/**
 * Output interface
 */
export interface rescheduled_byDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 6 characters
     */
    first_name: string,
    /**
     * @size 6 characters
     */
    last_name: string
}

/**
 * Output interface
 */
export interface latest_appointmentDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     */
    loaded: boolean,
    /**
     * @size 16 characters
     */
    status: string,
    /**
     * @size 7 characters
     */
    direction: string,
    /**
     * @size 20 characters
     */
    window_start: string,
    /**
     * @size 20 characters
     */
    window_end: string,
    /**
     */
    linked_appointments: Array<LinkedApptsDS>,
    /**
     * @size 7 characters
     */
    terminal: string,
    /**
     * @size 6 characters
     */
    terminal_reference: string,
    /**
     * @size 6 characters
     */
    display_terminal_reference: string,
    /**
     * @size 6 characters
     */
    truck_license_plate_number: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    truck_id: number,
    /**
     * @size 6 characters
     */
    terminal_block: string,
    /**
     */
    requested_by: requested_byDS,
    /**
     */
    rescheduled_by: rescheduled_byDS,
    /**
     * @size 20 characters
     */
    observed: string,
    /**
     * @size 20 characters
     */
    last_observed: string,
    /**
     * @size 20 characters
     */
    created_at_terminal: string,
    /**
     */
    extra_data: extra_dataDS
}

/**
 * Output interface
 */
export interface OtherApptCountsDS {
    /**
     * @size 16 characters
     */
    status: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    count: number
}

/**
 * Output interface
 */
export interface line_import_statusDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     * @size 6 characters
     */
    status: string,
    /**
     * @size 9 characters
     */
    parsed_status: string,
    /**
     * @size 7 characters
     */
    terminal: string,
    /**
     * @size 10 characters
     */
    last_free_date: string,
    /**
     * @size 20 characters
     */
    observed: string,
    /**
     * @size 20 characters
     */
    last_observed: string,
    /**
     * @size 4 characters
     */
    parsed_shipping_line: string,
    /**
     * @size 5 characters
     */
    parsed_container_type: string
}

/**
 * Output interface
 */
export interface inbound_gate_transactionDS {
    /**
     * @size 7 characters
     */
    terminal: string,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     * @size 6 characters
     */
    chassis_number: string,
    /**
     * @size 20 characters
     */
    time: string,
    /**
     */
    loaded: boolean,
    /**
     * @size 7 characters
     */
    direction: string,
    /**
     * @size 6 characters
     */
    drivers_license_number: string,
    /**
     * @size 6 characters
     */
    truck_rfid_number: string,
    /**
     * @size 6 characters
     */
    truck_license_plate_number: string,
    /**
     */
    extra_data: extra_dataDS,
    /**
     */
    raw_data: raw_dataDS,
    /**
     * @size 20 characters
     */
    observed: string
}

/**
 * Output interface
 */
export interface outbound_gate_transactionDS {
    /**
     * @size 7 characters
     */
    terminal: string,
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     * @size 6 characters
     */
    chassis_number: string,
    /**
     * @size 20 characters
     */
    time: string,
    /**
     */
    loaded: boolean,
    /**
     * @size 7 characters
     */
    direction: string,
    /**
     * @size 6 characters
     */
    drivers_license_number: string,
    /**
     * @size 6 characters
     */
    truck_rfid_number: string,
    /**
     * @size 6 characters
     */
    truck_license_plate_number: string,
    /**
     */
    extra_data: extra_dataDS,
    /**
     */
    raw_data: raw_dataDS,
    /**
     * @size 20 characters
     */
    observed: string
}

/**
 * Output interface
 */
export interface next_available_appointmentDS {
    /**
     * @size 20 characters
     */
    window_start: string,
    /**
     * @size 20 characters
     */
    observed: string,
    /**
     */
    has_availability: boolean
}

/**
 * Output interface
 */
export interface added_by_userDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 6 characters
     */
    first_name: string,
    /**
     * @size 6 characters
     */
    last_name: string
}

/**
 * Output interface
 */
export interface AssignedUsersDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 6 characters
     */
    first_name: string,
    /**
     * @size 6 characters
     */
    last_name: string
}

/**
 * Output interface
 */
export interface matched_vesselDS {
    /**
     * @size 6 characters
     */
    name: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    imo_number: number
}

/**
 * Output interface
 */
export interface ContainersDS {
    /**
     * @size 6 characters
     */
    container_number: string,
    /**
     * @size 4 characters
     */
    shipping_line: string,
    /**
     * @size 5 characters
     */
    container_type: string,
    /**
     */
    customer: customerDS,
    /**
     */
    pier_pass: pier_passDS,
    /**
     */
    clean_truck_fee: clean_truck_feeDS,
    /**
     */
    import_status: import_statusDS,
    /**
     */
    import_statuses: Array<ImportStatusesDS>,
    /**
     */
    latest_appointment: latest_appointmentDS,
    /**
     */
    other_appointment_counts: Array<OtherApptCountsDS>,
    /**
     */
    line_import_status: line_import_statusDS,
    /**
     */
    inbound_gate_transaction: inbound_gate_transactionDS,
    /**
     */
    outbound_gate_transaction: outbound_gate_transactionDS,
    /**
     * @size 7 characters
     */
    cycle_state: string,
    /**
     */
    next_available_appointment: next_available_appointmentDS,
    /**
     * @size 6 characters
     */
    master_bl: string,
    /**
     * @size 6 characters
     */
    tms_reference: string,
    /**
     */
    added_by_user: added_by_userDS,
    /**
     */
    assigned_users: Array<AssignedUsersDS>,
    /**
     */
    auto_book_on: boolean,
    /**
     * @size 9 characters
     */
    auto_book_request_status: string,
    /**
     * @size 7 characters
     */
    last_related_terminal: string,
    /**
     * @size 20 characters
     */
    watched_time: string,
    /**
     * @size 20 characters
     */
    discharged_time: string,
    /**
     * @size 20 characters
     */
    import_appointment_time: string,
    /**
     * @size 20 characters
     */
    import_out_gated_time: string,
    /**
     * @size 20 characters
     */
    empty_appointment_time: string,
    /**
     * @size 20 characters
     */
    empty_in_gated_time: string,
    /**
     * @size 10 characters
     */
    last_free_date: string,
    /**
     * @size 6 characters
     */
    tags: Array<string>,
    /**
     * @size 6 characters
     */
    vessel: string,
    /**
     */
    matched_vessel: matched_vesselDS
}

/**
 * Input interface
 */
export interface FormatName {
    /**
     * @size 6 characters
     */
    unwatched_containers: Array<string>,
    /**
     */
    containers: Array<ContainersDS>
}

/**
 * Convert JavaScript object to FormatName record
 */
export function convertObjectToFormatName(dataIn: FormatName): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 1; ++i) {
  dataOut += dataIn?.unwatched_containers[i]?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.unwatched_containers[${i}]`, "char", dataIn?.unwatched_containers[i]);
  }
  for (let i: number = 0; i < 1; ++i) {
  dataOut += dataIn?.containers[i]?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].container_number`, "char", dataIn?.containers[i]?.container_number);
  dataOut += dataIn?.containers[i]?.shipping_line?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.containers[${i}].shipping_line`, "char", dataIn?.containers[i]?.shipping_line);
  dataOut += dataIn?.containers[i]?.container_type?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.containers[${i}].container_type`, "char", dataIn?.containers[i]?.container_type);
  dataOut += dataIn?.containers[i]?.customer?.name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].customer.name`, "char", dataIn?.containers[i]?.customer?.name);
  dataOut += dataIn?.containers[i]?.customer?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].customer.id`, "packed", dataIn?.containers[i]?.customer?.id);
  for (let l: number = 0; l < 1; ++l) {
  dataOut += dataIn?.containers[i]?.pier_pass?.terminals[l]?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].pier_pass.terminals[${l}]`, "char", dataIn?.containers[i]?.pier_pass?.terminals[l]);
  }
  dataOut += dataIn?.containers[i]?.pier_pass?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].pier_pass.container_number`, "char", dataIn?.containers[i]?.pier_pass?.container_number);
  dataOut += (dataIn?.containers[i]?.pier_pass?.claimed_by_other_company !== undefined ? (dataIn?.containers[i]?.pier_pass?.claimed_by_other_company ? "1" : "0") : missingInput(`dataIn.containers[${i}].pier_pass.claimed_by_other_company`, "bool", dataIn?.containers[i]?.pier_pass?.claimed_by_other_company));
  dataOut += (dataIn?.containers[i]?.pier_pass?.fee_paid !== undefined ? (dataIn?.containers[i]?.pier_pass?.fee_paid ? "1" : "0") : missingInput(`dataIn.containers[${i}].pier_pass.fee_paid`, "bool", dataIn?.containers[i]?.pier_pass?.fee_paid));
  dataOut += (dataIn?.containers[i]?.pier_pass?.has_hold !== undefined ? (dataIn?.containers[i]?.pier_pass?.has_hold ? "1" : "0") : missingInput(`dataIn.containers[${i}].pier_pass.has_hold`, "bool", dataIn?.containers[i]?.pier_pass?.has_hold));
  dataOut += dataIn?.containers[i]?.pier_pass?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].pier_pass.observed`, "char", dataIn?.containers[i]?.pier_pass?.observed);
  for (let l: number = 0; l < 1; ++l) {
  dataOut += dataIn?.containers[i]?.clean_truck_fee?.terminals[l]?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].clean_truck_fee.terminals[${l}]`, "char", dataIn?.containers[i]?.clean_truck_fee?.terminals[l]);
  }
  dataOut += dataIn?.containers[i]?.clean_truck_fee?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].clean_truck_fee.container_number`, "char", dataIn?.containers[i]?.clean_truck_fee?.container_number);
  dataOut += (dataIn?.containers[i]?.clean_truck_fee?.claimed_by_other_company !== undefined ? (dataIn?.containers[i]?.clean_truck_fee?.claimed_by_other_company ? "1" : "0") : missingInput(`dataIn.containers[${i}].clean_truck_fee.claimed_by_other_company`, "bool", dataIn?.containers[i]?.clean_truck_fee?.claimed_by_other_company));
  dataOut += (dataIn?.containers[i]?.clean_truck_fee?.fee_paid !== undefined ? (dataIn?.containers[i]?.clean_truck_fee?.fee_paid ? "1" : "0") : missingInput(`dataIn.containers[${i}].clean_truck_fee.fee_paid`, "bool", dataIn?.containers[i]?.clean_truck_fee?.fee_paid));
  dataOut += (dataIn?.containers[i]?.clean_truck_fee?.has_hold !== undefined ? (dataIn?.containers[i]?.clean_truck_fee?.has_hold ? "1" : "0") : missingInput(`dataIn.containers[${i}].clean_truck_fee.has_hold`, "bool", dataIn?.containers[i]?.clean_truck_fee?.has_hold));
  dataOut += dataIn?.containers[i]?.clean_truck_fee?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].clean_truck_fee.observed`, "char", dataIn?.containers[i]?.clean_truck_fee?.observed);
  dataOut += dataIn?.containers[i]?.import_status?.terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].import_status.terminal`, "char", dataIn?.containers[i]?.import_status?.terminal);
  dataOut += dataIn?.containers[i]?.import_status?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_status.container_number`, "char", dataIn?.containers[i]?.import_status?.container_number);
  dataOut += dataIn?.containers[i]?.import_status?.last_free_date?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.containers[${i}].import_status.last_free_date`, "char", dataIn?.containers[i]?.import_status?.last_free_date);
  dataOut += dataIn?.containers[i]?.import_status?.master_bill_of_lading?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_status.master_bill_of_lading`, "char", dataIn?.containers[i]?.import_status?.master_bill_of_lading);
  dataOut += dataIn?.containers[i]?.import_status?.shipping_line?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_status.shipping_line`, "char", dataIn?.containers[i]?.import_status?.shipping_line);
  dataOut += dataIn?.containers[i]?.import_status?.container_type?.substring(0, 16)?.padEnd(16) ?? missingInput(`dataIn.containers[${i}].import_status.container_type`, "char", dataIn?.containers[i]?.import_status?.container_type);
  dataOut += dataIn?.containers[i]?.import_status?.vessel?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_status.vessel`, "char", dataIn?.containers[i]?.import_status?.vessel);
  dataOut += dataIn?.containers[i]?.import_status?.location?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].import_status.location`, "char", dataIn?.containers[i]?.import_status?.location);
  dataOut += dataIn?.containers[i]?.import_status?.parsed_location?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.containers[${i}].import_status.parsed_location`, "char", dataIn?.containers[i]?.import_status?.parsed_location);
  dataOut += dataIn?.containers[i]?.import_status?.terminal_block?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.containers[${i}].import_status.terminal_block`, "char", dataIn?.containers[i]?.import_status?.terminal_block);
  dataOut += dataIn?.containers[i]?.import_status?.terminal_block_availability_key?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_status.terminal_block_availability_key`, "char", dataIn?.containers[i]?.import_status?.terminal_block_availability_key);
  for (let l: number = 0; l < 2; ++l) {
  dataOut += dataIn?.containers[i]?.import_status?.holds[l]?.substring(0, 14)?.padEnd(14) ?? missingInput(`dataIn.containers[${i}].import_status.holds[${l}]`, "char", dataIn?.containers[i]?.import_status?.holds[l]);
  }
  dataOut += dataIn?.containers[i]?.import_status?.demurrage_fees?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_status.demurrage_fees`, "packed", dataIn?.containers[i]?.import_status?.demurrage_fees);
  dataOut += (dataIn?.containers[i]?.import_status?.ready_for_appointment !== undefined ? (dataIn?.containers[i]?.import_status?.ready_for_appointment ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_status.ready_for_appointment`, "bool", dataIn?.containers[i]?.import_status?.ready_for_appointment));
  dataOut += (dataIn?.containers[i]?.import_status?.available_for_pickup !== undefined ? (dataIn?.containers[i]?.import_status?.available_for_pickup ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_status.available_for_pickup`, "bool", dataIn?.containers[i]?.import_status?.available_for_pickup));
  dataOut += (dataIn?.containers[i]?.import_status?.wheeled !== undefined ? (dataIn?.containers[i]?.import_status?.wheeled ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_status.wheeled`, "bool", dataIn?.containers[i]?.import_status?.wheeled));
  dataOut += (dataIn?.containers[i]?.import_status?.closed_area !== undefined ? (dataIn?.containers[i]?.import_status?.closed_area ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_status.closed_area`, "bool", dataIn?.containers[i]?.import_status?.closed_area));
  dataOut += dataIn?.containers[i]?.import_status?.out_gated_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_status.out_gated_time`, "char", dataIn?.containers[i]?.import_status?.out_gated_time);
  dataOut += dataIn?.containers[i]?.import_status?.discharged_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_status.discharged_time`, "char", dataIn?.containers[i]?.import_status?.discharged_time);
  dataOut += dataIn?.containers[i]?.import_status?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_status.observed`, "char", dataIn?.containers[i]?.import_status?.observed);
  dataOut += dataIn?.containers[i]?.import_status?.parsed_shipping_line?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.containers[${i}].import_status.parsed_shipping_line`, "char", dataIn?.containers[i]?.import_status?.parsed_shipping_line);
  dataOut += dataIn?.containers[i]?.import_status?.parsed_container_type?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.containers[${i}].import_status.parsed_container_type`, "char", dataIn?.containers[i]?.import_status?.parsed_container_type);
  for (let l: number = 0; l < 1; ++l) {
  dataOut += dataIn?.containers[i]?.import_status?.parsed_holds[l]?.type?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.containers[${i}].import_status.parsed_holds[${l}].type`, "char", dataIn?.containers[i]?.import_status?.parsed_holds[l]?.type);
  dataOut += dataIn?.containers[i]?.import_status?.parsed_holds[l]?.raw_type?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_status.parsed_holds[${l}].raw_type`, "char", dataIn?.containers[i]?.import_status?.parsed_holds[l]?.raw_type);
  }
  dataOut += dataIn?.containers[i]?.import_status?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_status.id`, "packed", dataIn?.containers[i]?.import_status?.id);
  dataOut += dataIn?.containers[i]?.import_status?.cycle_id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_status.cycle_id`, "packed", dataIn?.containers[i]?.import_status?.cycle_id);
  dataOut += dataIn?.containers[i]?.import_status?.last_observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_status.last_observed`, "char", dataIn?.containers[i]?.import_status?.last_observed);
  dataOut += dataIn?.containers[i]?.import_status?.last_initiated_check?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_status.last_initiated_check`, "char", dataIn?.containers[i]?.import_status?.last_initiated_check);
  for (let k: number = 0; k < 1; ++k) {
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].terminal`, "char", dataIn?.containers[i]?.import_statuses[k]?.terminal);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].container_number`, "char", dataIn?.containers[i]?.import_statuses[k]?.container_number);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.last_free_date?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].last_free_date`, "char", dataIn?.containers[i]?.import_statuses[k]?.last_free_date);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.master_bill_of_lading?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].master_bill_of_lading`, "char", dataIn?.containers[i]?.import_statuses[k]?.master_bill_of_lading);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.shipping_line?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].shipping_line`, "char", dataIn?.containers[i]?.import_statuses[k]?.shipping_line);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.container_type?.substring(0, 16)?.padEnd(16) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].container_type`, "char", dataIn?.containers[i]?.import_statuses[k]?.container_type);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.vessel?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].vessel`, "char", dataIn?.containers[i]?.import_statuses[k]?.vessel);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.location?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].location`, "char", dataIn?.containers[i]?.import_statuses[k]?.location);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.parsed_location?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].parsed_location`, "char", dataIn?.containers[i]?.import_statuses[k]?.parsed_location);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.terminal_block?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].terminal_block`, "char", dataIn?.containers[i]?.import_statuses[k]?.terminal_block);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.terminal_block_availability_key?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].terminal_block_availability_key`, "char", dataIn?.containers[i]?.import_statuses[k]?.terminal_block_availability_key);
  for (let m: number = 0; m < 2; ++m) {
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.holds[m]?.substring(0, 14)?.padEnd(14) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].holds[${m}]`, "char", dataIn?.containers[i]?.import_statuses[k]?.holds[m]);
  }
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.demurrage_fees?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].demurrage_fees`, "packed", dataIn?.containers[i]?.import_statuses[k]?.demurrage_fees);
  dataOut += (dataIn?.containers[i]?.import_statuses[k]?.ready_for_appointment !== undefined ? (dataIn?.containers[i]?.import_statuses[k]?.ready_for_appointment ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_statuses[${k}].ready_for_appointment`, "bool", dataIn?.containers[i]?.import_statuses[k]?.ready_for_appointment));
  dataOut += (dataIn?.containers[i]?.import_statuses[k]?.available_for_pickup !== undefined ? (dataIn?.containers[i]?.import_statuses[k]?.available_for_pickup ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_statuses[${k}].available_for_pickup`, "bool", dataIn?.containers[i]?.import_statuses[k]?.available_for_pickup));
  dataOut += (dataIn?.containers[i]?.import_statuses[k]?.wheeled !== undefined ? (dataIn?.containers[i]?.import_statuses[k]?.wheeled ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_statuses[${k}].wheeled`, "bool", dataIn?.containers[i]?.import_statuses[k]?.wheeled));
  dataOut += (dataIn?.containers[i]?.import_statuses[k]?.closed_area !== undefined ? (dataIn?.containers[i]?.import_statuses[k]?.closed_area ? "1" : "0") : missingInput(`dataIn.containers[${i}].import_statuses[${k}].closed_area`, "bool", dataIn?.containers[i]?.import_statuses[k]?.closed_area));
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.out_gated_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].out_gated_time`, "char", dataIn?.containers[i]?.import_statuses[k]?.out_gated_time);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.discharged_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].discharged_time`, "char", dataIn?.containers[i]?.import_statuses[k]?.discharged_time);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].observed`, "char", dataIn?.containers[i]?.import_statuses[k]?.observed);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.parsed_shipping_line?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].parsed_shipping_line`, "char", dataIn?.containers[i]?.import_statuses[k]?.parsed_shipping_line);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.parsed_container_type?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].parsed_container_type`, "char", dataIn?.containers[i]?.import_statuses[k]?.parsed_container_type);
  for (let m: number = 0; m < 1; ++m) {
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.parsed_holds[m]?.type?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].parsed_holds[${m}].type`, "char", dataIn?.containers[i]?.import_statuses[k]?.parsed_holds[m]?.type);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.parsed_holds[m]?.raw_type?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].parsed_holds[${m}].raw_type`, "char", dataIn?.containers[i]?.import_statuses[k]?.parsed_holds[m]?.raw_type);
  }
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].id`, "packed", dataIn?.containers[i]?.import_statuses[k]?.id);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.cycle_id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].cycle_id`, "packed", dataIn?.containers[i]?.import_statuses[k]?.cycle_id);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.last_observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].last_observed`, "char", dataIn?.containers[i]?.import_statuses[k]?.last_observed);
  dataOut += dataIn?.containers[i]?.import_statuses[k]?.last_initiated_check?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_statuses[${k}].last_initiated_check`, "char", dataIn?.containers[i]?.import_statuses[k]?.last_initiated_check);
  }
  dataOut += dataIn?.containers[i]?.latest_appointment?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].latest_appointment.id`, "packed", dataIn?.containers[i]?.latest_appointment?.id);
  dataOut += dataIn?.containers[i]?.latest_appointment?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.container_number`, "char", dataIn?.containers[i]?.latest_appointment?.container_number);
  dataOut += (dataIn?.containers[i]?.latest_appointment?.loaded !== undefined ? (dataIn?.containers[i]?.latest_appointment?.loaded ? "1" : "0") : missingInput(`dataIn.containers[${i}].latest_appointment.loaded`, "bool", dataIn?.containers[i]?.latest_appointment?.loaded));
  dataOut += dataIn?.containers[i]?.latest_appointment?.status?.substring(0, 16)?.padEnd(16) ?? missingInput(`dataIn.containers[${i}].latest_appointment.status`, "char", dataIn?.containers[i]?.latest_appointment?.status);
  dataOut += dataIn?.containers[i]?.latest_appointment?.direction?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].latest_appointment.direction`, "char", dataIn?.containers[i]?.latest_appointment?.direction);
  dataOut += dataIn?.containers[i]?.latest_appointment?.window_start?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].latest_appointment.window_start`, "char", dataIn?.containers[i]?.latest_appointment?.window_start);
  dataOut += dataIn?.containers[i]?.latest_appointment?.window_end?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].latest_appointment.window_end`, "char", dataIn?.containers[i]?.latest_appointment?.window_end);
  for (let l: number = 0; l < 1; ++l) {
  dataOut += dataIn?.containers[i]?.latest_appointment?.linked_appointments[l]?.terminal_reference?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.linked_appointments[${l}].terminal_reference`, "char", dataIn?.containers[i]?.latest_appointment?.linked_appointments[l]?.terminal_reference);
  dataOut += dataIn?.containers[i]?.latest_appointment?.linked_appointments[l]?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.linked_appointments[${l}].container_number`, "char", dataIn?.containers[i]?.latest_appointment?.linked_appointments[l]?.container_number);
  }
  dataOut += dataIn?.containers[i]?.latest_appointment?.terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].latest_appointment.terminal`, "char", dataIn?.containers[i]?.latest_appointment?.terminal);
  dataOut += dataIn?.containers[i]?.latest_appointment?.terminal_reference?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.terminal_reference`, "char", dataIn?.containers[i]?.latest_appointment?.terminal_reference);
  dataOut += dataIn?.containers[i]?.latest_appointment?.display_terminal_reference?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.display_terminal_reference`, "char", dataIn?.containers[i]?.latest_appointment?.display_terminal_reference);
  dataOut += dataIn?.containers[i]?.latest_appointment?.truck_license_plate_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.truck_license_plate_number`, "char", dataIn?.containers[i]?.latest_appointment?.truck_license_plate_number);
  dataOut += dataIn?.containers[i]?.latest_appointment?.truck_id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].latest_appointment.truck_id`, "packed", dataIn?.containers[i]?.latest_appointment?.truck_id);
  dataOut += dataIn?.containers[i]?.latest_appointment?.terminal_block?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.terminal_block`, "char", dataIn?.containers[i]?.latest_appointment?.terminal_block);
  dataOut += dataIn?.containers[i]?.latest_appointment?.requested_by?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].latest_appointment.requested_by.id`, "packed", dataIn?.containers[i]?.latest_appointment?.requested_by?.id);
  dataOut += dataIn?.containers[i]?.latest_appointment?.requested_by?.first_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.requested_by.first_name`, "char", dataIn?.containers[i]?.latest_appointment?.requested_by?.first_name);
  dataOut += dataIn?.containers[i]?.latest_appointment?.requested_by?.last_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.requested_by.last_name`, "char", dataIn?.containers[i]?.latest_appointment?.requested_by?.last_name);
  dataOut += dataIn?.containers[i]?.latest_appointment?.rescheduled_by?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].latest_appointment.rescheduled_by.id`, "packed", dataIn?.containers[i]?.latest_appointment?.rescheduled_by?.id);
  dataOut += dataIn?.containers[i]?.latest_appointment?.rescheduled_by?.first_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.rescheduled_by.first_name`, "char", dataIn?.containers[i]?.latest_appointment?.rescheduled_by?.first_name);
  dataOut += dataIn?.containers[i]?.latest_appointment?.rescheduled_by?.last_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].latest_appointment.rescheduled_by.last_name`, "char", dataIn?.containers[i]?.latest_appointment?.rescheduled_by?.last_name);
  dataOut += dataIn?.containers[i]?.latest_appointment?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].latest_appointment.observed`, "char", dataIn?.containers[i]?.latest_appointment?.observed);
  dataOut += dataIn?.containers[i]?.latest_appointment?.last_observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].latest_appointment.last_observed`, "char", dataIn?.containers[i]?.latest_appointment?.last_observed);
  dataOut += dataIn?.containers[i]?.latest_appointment?.created_at_terminal?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].latest_appointment.created_at_terminal`, "char", dataIn?.containers[i]?.latest_appointment?.created_at_terminal);
  for (let k: number = 0; k < 1; ++k) {
  dataOut += dataIn?.containers[i]?.other_appointment_counts[k]?.status?.substring(0, 16)?.padEnd(16) ?? missingInput(`dataIn.containers[${i}].other_appointment_counts[${k}].status`, "char", dataIn?.containers[i]?.other_appointment_counts[k]?.status);
  dataOut += dataIn?.containers[i]?.other_appointment_counts[k]?.count?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].other_appointment_counts[${k}].count`, "packed", dataIn?.containers[i]?.other_appointment_counts[k]?.count);
  }
  dataOut += dataIn?.containers[i]?.line_import_status?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].line_import_status.id`, "packed", dataIn?.containers[i]?.line_import_status?.id);
  dataOut += dataIn?.containers[i]?.line_import_status?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].line_import_status.container_number`, "char", dataIn?.containers[i]?.line_import_status?.container_number);
  dataOut += dataIn?.containers[i]?.line_import_status?.status?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].line_import_status.status`, "char", dataIn?.containers[i]?.line_import_status?.status);
  dataOut += dataIn?.containers[i]?.line_import_status?.parsed_status?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.containers[${i}].line_import_status.parsed_status`, "char", dataIn?.containers[i]?.line_import_status?.parsed_status);
  dataOut += dataIn?.containers[i]?.line_import_status?.terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].line_import_status.terminal`, "char", dataIn?.containers[i]?.line_import_status?.terminal);
  dataOut += dataIn?.containers[i]?.line_import_status?.last_free_date?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.containers[${i}].line_import_status.last_free_date`, "char", dataIn?.containers[i]?.line_import_status?.last_free_date);
  dataOut += dataIn?.containers[i]?.line_import_status?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].line_import_status.observed`, "char", dataIn?.containers[i]?.line_import_status?.observed);
  dataOut += dataIn?.containers[i]?.line_import_status?.last_observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].line_import_status.last_observed`, "char", dataIn?.containers[i]?.line_import_status?.last_observed);
  dataOut += dataIn?.containers[i]?.line_import_status?.parsed_shipping_line?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.containers[${i}].line_import_status.parsed_shipping_line`, "char", dataIn?.containers[i]?.line_import_status?.parsed_shipping_line);
  dataOut += dataIn?.containers[i]?.line_import_status?.parsed_container_type?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.containers[${i}].line_import_status.parsed_container_type`, "char", dataIn?.containers[i]?.line_import_status?.parsed_container_type);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.terminal`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.terminal);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.container_number`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.container_number);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.chassis_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.chassis_number`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.chassis_number);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.time`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.time);
  dataOut += (dataIn?.containers[i]?.inbound_gate_transaction?.loaded !== undefined ? (dataIn?.containers[i]?.inbound_gate_transaction?.loaded ? "1" : "0") : missingInput(`dataIn.containers[${i}].inbound_gate_transaction.loaded`, "bool", dataIn?.containers[i]?.inbound_gate_transaction?.loaded));
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.direction?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.direction`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.direction);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.drivers_license_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.drivers_license_number`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.drivers_license_number);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.truck_rfid_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.truck_rfid_number`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.truck_rfid_number);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.truck_license_plate_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.truck_license_plate_number`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.truck_license_plate_number);
  dataOut += dataIn?.containers[i]?.inbound_gate_transaction?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].inbound_gate_transaction.observed`, "char", dataIn?.containers[i]?.inbound_gate_transaction?.observed);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.terminal`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.terminal);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.container_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.container_number`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.container_number);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.chassis_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.chassis_number`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.chassis_number);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.time`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.time);
  dataOut += (dataIn?.containers[i]?.outbound_gate_transaction?.loaded !== undefined ? (dataIn?.containers[i]?.outbound_gate_transaction?.loaded ? "1" : "0") : missingInput(`dataIn.containers[${i}].outbound_gate_transaction.loaded`, "bool", dataIn?.containers[i]?.outbound_gate_transaction?.loaded));
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.direction?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.direction`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.direction);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.drivers_license_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.drivers_license_number`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.drivers_license_number);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.truck_rfid_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.truck_rfid_number`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.truck_rfid_number);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.truck_license_plate_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.truck_license_plate_number`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.truck_license_plate_number);
  dataOut += dataIn?.containers[i]?.outbound_gate_transaction?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].outbound_gate_transaction.observed`, "char", dataIn?.containers[i]?.outbound_gate_transaction?.observed);
  dataOut += dataIn?.containers[i]?.cycle_state?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].cycle_state`, "char", dataIn?.containers[i]?.cycle_state);
  dataOut += dataIn?.containers[i]?.next_available_appointment?.window_start?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].next_available_appointment.window_start`, "char", dataIn?.containers[i]?.next_available_appointment?.window_start);
  dataOut += dataIn?.containers[i]?.next_available_appointment?.observed?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].next_available_appointment.observed`, "char", dataIn?.containers[i]?.next_available_appointment?.observed);
  dataOut += (dataIn?.containers[i]?.next_available_appointment?.has_availability !== undefined ? (dataIn?.containers[i]?.next_available_appointment?.has_availability ? "1" : "0") : missingInput(`dataIn.containers[${i}].next_available_appointment.has_availability`, "bool", dataIn?.containers[i]?.next_available_appointment?.has_availability));
  dataOut += dataIn?.containers[i]?.master_bl?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].master_bl`, "char", dataIn?.containers[i]?.master_bl);
  dataOut += dataIn?.containers[i]?.tms_reference?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].tms_reference`, "char", dataIn?.containers[i]?.tms_reference);
  dataOut += dataIn?.containers[i]?.added_by_user?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].added_by_user.id`, "packed", dataIn?.containers[i]?.added_by_user?.id);
  dataOut += dataIn?.containers[i]?.added_by_user?.first_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].added_by_user.first_name`, "char", dataIn?.containers[i]?.added_by_user?.first_name);
  dataOut += dataIn?.containers[i]?.added_by_user?.last_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].added_by_user.last_name`, "char", dataIn?.containers[i]?.added_by_user?.last_name);
  for (let k: number = 0; k < 1; ++k) {
  dataOut += dataIn?.containers[i]?.assigned_users[k]?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].assigned_users[${k}].id`, "packed", dataIn?.containers[i]?.assigned_users[k]?.id);
  dataOut += dataIn?.containers[i]?.assigned_users[k]?.first_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].assigned_users[${k}].first_name`, "char", dataIn?.containers[i]?.assigned_users[k]?.first_name);
  dataOut += dataIn?.containers[i]?.assigned_users[k]?.last_name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].assigned_users[${k}].last_name`, "char", dataIn?.containers[i]?.assigned_users[k]?.last_name);
  }
  dataOut += (dataIn?.containers[i]?.auto_book_on !== undefined ? (dataIn?.containers[i]?.auto_book_on ? "1" : "0") : missingInput(`dataIn.containers[${i}].auto_book_on`, "bool", dataIn?.containers[i]?.auto_book_on));
  dataOut += dataIn?.containers[i]?.auto_book_request_status?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.containers[${i}].auto_book_request_status`, "char", dataIn?.containers[i]?.auto_book_request_status);
  dataOut += dataIn?.containers[i]?.last_related_terminal?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.containers[${i}].last_related_terminal`, "char", dataIn?.containers[i]?.last_related_terminal);
  dataOut += dataIn?.containers[i]?.watched_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].watched_time`, "char", dataIn?.containers[i]?.watched_time);
  dataOut += dataIn?.containers[i]?.discharged_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].discharged_time`, "char", dataIn?.containers[i]?.discharged_time);
  dataOut += dataIn?.containers[i]?.import_appointment_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_appointment_time`, "char", dataIn?.containers[i]?.import_appointment_time);
  dataOut += dataIn?.containers[i]?.import_out_gated_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].import_out_gated_time`, "char", dataIn?.containers[i]?.import_out_gated_time);
  dataOut += dataIn?.containers[i]?.empty_appointment_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].empty_appointment_time`, "char", dataIn?.containers[i]?.empty_appointment_time);
  dataOut += dataIn?.containers[i]?.empty_in_gated_time?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.containers[${i}].empty_in_gated_time`, "char", dataIn?.containers[i]?.empty_in_gated_time);
  dataOut += dataIn?.containers[i]?.last_free_date?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.containers[${i}].last_free_date`, "char", dataIn?.containers[i]?.last_free_date);
  for (let k: number = 0; k < 1; ++k) {
  dataOut += dataIn?.containers[i]?.tags[k]?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].tags[${k}]`, "char", dataIn?.containers[i]?.tags[k]);
  }
  dataOut += dataIn?.containers[i]?.vessel?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].vessel`, "char", dataIn?.containers[i]?.vessel);
  dataOut += dataIn?.containers[i]?.matched_vessel?.name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.containers[${i}].matched_vessel.name`, "char", dataIn?.containers[i]?.matched_vessel?.name);
  dataOut += dataIn?.containers[i]?.matched_vessel?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].matched_vessel.id`, "packed", dataIn?.containers[i]?.matched_vessel?.id);
  dataOut += dataIn?.containers[i]?.matched_vessel?.imo_number?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.containers[${i}].matched_vessel.imo_number`, "packed", dataIn?.containers[i]?.matched_vessel?.imo_number);
  }

  return dataOut;
}

/* eslint-enable */
