/* eslint-disable */
// @ts-nocheck
// Module: boapayment
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface cstmfldsDS {
    /**
     * @size 25 characters
     */
    property1: string;
    /**
     * @size 25 characters
     */
    property2: string;
}

/**
 * Output interface
 */
export interface addressDS {
    /**
     * @size 20 characters
     */
    address_city: string;
    /**
     * @size 3 characters
     */
    address_country: string;
    /**
     * @size 100 characters
     */
    address_line1: string;
    /**
     * @size 100 characters
     */
    address_line2: string;
    /**
     * @size 2 characters
     */
    address_state: string;
    /**
     * @size 5 characters
     */
    address_zip1: string;
    /**
     * @size 4 characters
     */
    address_zip2: string;
}

/**
 * Output interface
 */
export interface netrespDS {
    /**
     * @size 30 characters
     */
    payment_auth_code: string;
    /**
     * @size 30 characters
     */
    payment_decline_code: string;
    /**
     * @size 100 characters
     */
    payment_decline_msg: string;
    /**
     * @size 30 characters
     */
    return_code: string;
    /**
     * @size 100 characters
     */
    return_code_desc: string;
}

/**
 * Output interface
 */
export interface fndacctDS {
    /**
     * @size 9 characters
     */
    aba_routing_number: string;
    /**
     * @size 60 characters
     */
    account_holder_name: string;
    /**
     * @size 25 characters
     */
    account_holder_type: string;
    /**
     * @size 32 characters
     */
    account_number: string;
    /**
     * @size 25 characters
     */
    account_subtype: string;
    /**
     * @size 25 characters
     */
    account_type: string;
    /**
     * @size 3 characters
     */
    ach_eligible_flag: string;
    /**
     */
    address: addressDS;
    /**
     * @size 3 characters
     */
    atm_eligible_flag: string;
    /**
     * @size 4 characters
     */
    card_cvv_number: string;
    /**
     * @size 3 characters
     */
    currency_code3d: string;
    /**
     */
    custom_fields: cstmfldsDS;
    /**
     * @size 5 characters
     */
    expiry_date: string;
    /**
     * @size 20 characters
     */
    id: string;
    /**
     * @size 32 characters
     */
    issuer_name: string;
    /**
     * @size 32 characters
     */
    nickname: string;
    /**
     * @size 25 characters
     */
    status: string;
    /**
     * @size 20 characters
     */
    display_text: string;
    /**
     * @size 100 characters
     */
    url: string;
}

/**
 * Output interface
 */
export interface feeDS {
    /**
     * @size 17 characters
     */
    fee_amount: string;
    /**
     * @size 25 characters
     */
    fee_type: string;
    /**
     * @size 20 characters
     */
    id: string;
    /**
     * @size 100 characters
     */
    url: string;
}

/**
 * Output interface
 */
export interface custacctDS {
    /**
     * @size 60 characters
     */
    account_holder_name: string;
    /**
     * @size 32 characters
     */
    account_number: string;
    /**
     */
    address: addressDS;
    /**
     * @size 18 characters
     */
    current_balance: string;
    /**
     * @size 18 characters
     */
    current_statement_balance: string;
    /**
     */
    custom_fields: cstmfldsDS;
    /**
     * @size 50 characters
     */
    customer_account_reference: string;
    /**
     * @size 20 characters
     */
    id: string;
    /**
     * @size 18 characters
     */
    minimum_payment_due: string;
    /**
     * @size 32 characters
     */
    nickname: string;
    /**
     * @size 18 characters
     */
    past_amount_due: string;
    /**
     * @size 10 characters
     */
    payment_due_date: string;
    /**
     * @size 10 characters
     */
    statement_date: string;
    /**
     * @size 25 characters
     */
    status: string;
    /**
     * @size 100 characters
     */
    url: string;
}

/**
 * Output interface
 */
export interface customerDS {
    /**
     */
    address: addressDS;
    /**
     */
    custom_fields: cstmfldsDS;
    /**
     * @size 100 characters
     */
    customer_reference: string;
    /**
     * @size 10 characters
     */
    date_of_birth: string;
    /**
     * @size 100 characters
     */
    email: string;
    /**
     * @size 60 characters
     */
    first_name: string;
    /**
     * @size 10 characters
     */
    gender: string;
    /**
     * @size 10 characters
     */
    home_phone: string;
    /**
     * @size 20 characters
     */
    id: string;
    /**
     * @size 60 characters
     */
    last_name: string;
    /**
     * @size 5 characters
     */
    locale: string;
    /**
     * @size 60 characters
     */
    middle_name: string;
    /**
     * @size 10 characters
     */
    mobile_phone: string;
    /**
     * @size 9 characters
     */
    ssn: string;
    /**
     * @size 25 characters
     */
    status: string;
    /**
     * @size 100 characters
     */
    url: string;
    /**
     * @size 10 characters
     */
    work_phone: string;
}

/**
 * Output interface
 */
export interface paymentDS {
    /**
     * @size 17 characters
     */
    amount: string;
    /**
     * @size 4 characters
     */
    card_cvv_number: string;
    /**
     * @size 30 characters
     */
    confirmation_number: string;
    /**
     * @size 3 characters
     */
    currency_code3d: string;
    /**
     */
    custom_fields: cstmfldsDS;
    /**
     */
    customer: customerDS;
    /**
     */
    customer_account: custacctDS;
    /**
     * @size 10 characters
     */
    expected_payment_settlement_date: string;
    /**
     */
    fee: feeDS;
    /**
     */
    funding_account: fndacctDS;
    /**
     * @size 20 characters
     */
    id: string;
    /**
     * @size 25 characters
     */
    payment_amount_type: string;
    /**
     * @size 10 characters
     */
    payment_date: string;
    /**
     * @size 10 characters
     */
    payment_entry_date: string;
    /**
     * @size 25 characters
     */
    payment_method: string;
    /**
     */
    payment_network_response: netrespDS;
    /**
     * @size 50 characters
     */
    payment_reference: string;
    /**
     * @size 10 characters
     */
    payment_request_date: string;
    /**
     * @size 10 characters
     */
    payment_return_date: string;
    /**
     * @size 50 characters
     */
    payment_schedule_type: string;
    /**
     * @size 10 characters
     */
    return_code: string;
    /**
     * @size 25 characters
     */
    status: string;
    /**
     * @size 100 characters
     */
    payment_notification_email: string;
    /**
     * @size 1000 characters
     */
    comments: string;
    /**
     * @size 64 characters
     */
    token: string;
    /**
     * @size 100 characters
     */
    url: string;
}

/**
 * Output interface
 */
export interface dataDS {
    /**
     */
    payment: paymentDS;
}

/**
 * Output interface
 */
export interface payReq {
    /**
     * @size 80 characters
     */
    comment: string;
}

/**
 * Convert payReq record to TypeScript object
 */
export function convertpayReqToObject(dataIn: string): payReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.comment = dataIn.substring(pos, pos + 80).trimEnd();
    pos += 80;

    return dataOut;
}

/**
 * Input interface
 */
export interface payEvent {
    /**
     * @size 25 characters
     */
    api_version: string;
    /**
     * @size 25 characters
     */
    channel: string;
    /**
     * @size 50 characters
     */
    client_key: string;
    /**
     */
    data: dataDS;
    /**
     * @size 50 characters
     */
    id: string;
    /**
     * @size 9 characters
     */
    pending_webhooks: string;
    /**
     * @size 25 characters
     */
    source_id: string;
    /**
     * @size 25 characters
     */
    source_type: string;
    /**
     * @size 30 characters
     */
    timestamp: string;
    /**
     * @size 25 characters
     */
    type: string;
}

/**
 * Convert JavaScript object to payEvent record
 */
export function convertObjectTopayEvent(dataIn: payEvent): string {
    let dataOut: string = '';

    dataOut += dataIn.api_version.substring(0, 25).padEnd(25);
    dataOut += dataIn.channel.substring(0, 25).padEnd(25);
    dataOut += dataIn.client_key.substring(0, 50).padEnd(50);
    dataOut += dataIn.data.payment.amount.substring(0, 17).padEnd(17);
    dataOut += dataIn.data.payment.card_cvv_number.substring(0, 4).padEnd(4);
    dataOut += dataIn.data.payment.confirmation_number.substring(0, 30).padEnd(30);
    dataOut += dataIn.data.payment.currency_code3d.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.custom_fields.property1.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.custom_fields.property2.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer.address.address_city.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.customer.address.address_country.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.customer.address.address_line1.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer.address.address_line2.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer.address.address_state.substring(0, 2).padEnd(2);
    dataOut += dataIn.data.payment.customer.address.address_zip1.substring(0, 5).padEnd(5);
    dataOut += dataIn.data.payment.customer.address.address_zip2.substring(0, 4).padEnd(4);
    dataOut += dataIn.data.payment.customer.custom_fields.property1.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer.custom_fields.property2.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer.customer_reference.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer.date_of_birth.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer.email.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer.first_name.substring(0, 60).padEnd(60);
    dataOut += dataIn.data.payment.customer.gender.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer.home_phone.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer.id.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.customer.last_name.substring(0, 60).padEnd(60);
    dataOut += dataIn.data.payment.customer.locale.substring(0, 5).padEnd(5);
    dataOut += dataIn.data.payment.customer.middle_name.substring(0, 60).padEnd(60);
    dataOut += dataIn.data.payment.customer.mobile_phone.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer.ssn.substring(0, 9).padEnd(9);
    dataOut += dataIn.data.payment.customer.status.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer.url.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer.work_phone.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer_account.account_holder_name.substring(0, 60).padEnd(60);
    dataOut += dataIn.data.payment.customer_account.account_number.substring(0, 32).padEnd(32);
    dataOut += dataIn.data.payment.customer_account.address.address_city.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.customer_account.address.address_country.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.customer_account.address.address_line1.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer_account.address.address_line2.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.customer_account.address.address_state.substring(0, 2).padEnd(2);
    dataOut += dataIn.data.payment.customer_account.address.address_zip1.substring(0, 5).padEnd(5);
    dataOut += dataIn.data.payment.customer_account.address.address_zip2.substring(0, 4).padEnd(4);
    dataOut += dataIn.data.payment.customer_account.current_balance.substring(0, 18).padEnd(18);
    dataOut += dataIn.data.payment.customer_account.current_statement_balance.substring(0, 18).padEnd(18);
    dataOut += dataIn.data.payment.customer_account.custom_fields.property1.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer_account.custom_fields.property2.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer_account.customer_account_reference.substring(0, 50).padEnd(50);
    dataOut += dataIn.data.payment.customer_account.id.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.customer_account.minimum_payment_due.substring(0, 18).padEnd(18);
    dataOut += dataIn.data.payment.customer_account.nickname.substring(0, 32).padEnd(32);
    dataOut += dataIn.data.payment.customer_account.past_amount_due.substring(0, 18).padEnd(18);
    dataOut += dataIn.data.payment.customer_account.payment_due_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer_account.statement_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.customer_account.status.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.customer_account.url.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.expected_payment_settlement_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.fee.fee_amount.substring(0, 17).padEnd(17);
    dataOut += dataIn.data.payment.fee.fee_type.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.fee.id.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.fee.url.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.funding_account.aba_routing_number.substring(0, 9).padEnd(9);
    dataOut += dataIn.data.payment.funding_account.account_holder_name.substring(0, 60).padEnd(60);
    dataOut += dataIn.data.payment.funding_account.account_holder_type.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.funding_account.account_number.substring(0, 32).padEnd(32);
    dataOut += dataIn.data.payment.funding_account.account_subtype.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.funding_account.account_type.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.funding_account.ach_eligible_flag.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.funding_account.address.address_city.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.funding_account.address.address_country.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.funding_account.address.address_line1.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.funding_account.address.address_line2.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.funding_account.address.address_state.substring(0, 2).padEnd(2);
    dataOut += dataIn.data.payment.funding_account.address.address_zip1.substring(0, 5).padEnd(5);
    dataOut += dataIn.data.payment.funding_account.address.address_zip2.substring(0, 4).padEnd(4);
    dataOut += dataIn.data.payment.funding_account.atm_eligible_flag.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.funding_account.card_cvv_number.substring(0, 4).padEnd(4);
    dataOut += dataIn.data.payment.funding_account.currency_code3d.substring(0, 3).padEnd(3);
    dataOut += dataIn.data.payment.funding_account.custom_fields.property1.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.funding_account.custom_fields.property2.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.funding_account.expiry_date.substring(0, 5).padEnd(5);
    dataOut += dataIn.data.payment.funding_account.id.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.funding_account.issuer_name.substring(0, 32).padEnd(32);
    dataOut += dataIn.data.payment.funding_account.nickname.substring(0, 32).padEnd(32);
    dataOut += dataIn.data.payment.funding_account.status.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.funding_account.display_text.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.funding_account.url.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.id.substring(0, 20).padEnd(20);
    dataOut += dataIn.data.payment.payment_amount_type.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.payment_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.payment_entry_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.payment_method.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.payment_network_response.payment_auth_code.substring(0, 30).padEnd(30);
    dataOut += dataIn.data.payment.payment_network_response.payment_decline_code.substring(0, 30).padEnd(30);
    dataOut += dataIn.data.payment.payment_network_response.payment_decline_msg.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.payment_network_response.return_code.substring(0, 30).padEnd(30);
    dataOut += dataIn.data.payment.payment_network_response.return_code_desc.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.payment_reference.substring(0, 50).padEnd(50);
    dataOut += dataIn.data.payment.payment_request_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.payment_return_date.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.payment_schedule_type.substring(0, 50).padEnd(50);
    dataOut += dataIn.data.payment.return_code.substring(0, 10).padEnd(10);
    dataOut += dataIn.data.payment.status.substring(0, 25).padEnd(25);
    dataOut += dataIn.data.payment.payment_notification_email.substring(0, 100).padEnd(100);
    dataOut += dataIn.data.payment.comments.substring(0, 1000).padEnd(1000);
    dataOut += dataIn.data.payment.token.substring(0, 64).padEnd(64);
    dataOut += dataIn.data.payment.url.substring(0, 100).padEnd(100);
    dataOut += dataIn.id.substring(0, 50).padEnd(50);
    dataOut += dataIn.pending_webhooks.substring(0, 9).padEnd(9);
    dataOut += dataIn.source_id.substring(0, 25).padEnd(25);
    dataOut += dataIn.source_type.substring(0, 25).padEnd(25);
    dataOut += dataIn.timestamp.substring(0, 30).padEnd(30);
    dataOut += dataIn.type.substring(0, 25).padEnd(25);

    return dataOut;
}

/* eslint-enable */
