import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
// Comment - import { DateTime } from 'luxon';
import AWS from 'aws-sdk';
// Comment - import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash/fp';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/boa');
const { boa } = config;
import * as paymentapi from 'src/interfaces/boapayment';
// Comment - import transport from 'src/services/connection';
// Comment - import { insertPincSnsLog } from 'src/models/pinc';
// Set AWS region
// Comment - AWS.config.update(boa.sns);
import { sanitizeValues } from 'src/services/safe-values';

let sqs = new AWS.SQS({ apiVersion: boa.sqs.apiVersion });

const safeValues: any = {
    api_version: '',
    channel: '',
    client_key: '',
    data: {
        payment: {
            amount: '',
            card_cvv_number: '',
            confirmation_number: '',
            currency_code3d: '',
            custom_fields: {
                property1: '',
                property2: ''
            },
            customer: {
                address: {
                    address_city: '',
                    address_country: '',
                    address_line1: '',
                    address_line2: '',
                    address_state: '',
                    address_zip1: '',
                    address_zip2: ''
                },
                custom_fields: {
                    property1: '',
                    property2: ''
                },
                customer_reference: '',
                date_of_birth: '',
                email: '',
                first_name: '',
                gender: '',
                home_phone: '',
                id: '',
                last_name: '',
                locale: '',
                middle_name: '',
                mobile_phone: '',
                ssn: '',
                status: '',
                url: '',
                work_phone: ''
            },
            customer_account: {
                account_holder_name: '',
                account_number: '',
                address: {
                    address_city: '',
                    address_country: '',
                    address_line1: '',
                    address_line2: '',
                    address_state: '',
                    address_zip1: '',
                    address_zip2: ''
                },
                current_balance: '',
                current_statement_balance: '',
                custom_fields: {
                    property1: '',
                    property2: ''
                },
                customer_account_reference: '',
                id: '',
                minimum_payment_due: '',
                nickname: '',
                past_amount_due: '',
                payment_due_date: '',
                statement_date: '',
                status: '',
                url: ''
            },
            expected_payment_settlement_date: '',
            fee: {
                fee_amount: '',
                fee_type: '',
                id: '',
                url: ''
            },
            funding_account: {
                aba_routing_number: '',
                account_holder_name: '',
                account_holder_type: '',
                account_number: '',
                account_subtype: '',
                account_type: '',
                ach_eligible_flag: '',
                address: {
                    address_city: '',
                    address_country: '',
                    address_line1: '',
                    address_line2: '',
                    address_state: '',
                    address_zip1: '',
                    address_zip2: ''
                },
                atm_eligible_flag: '',
                card_cvv_number: '',
                currency_code3d: '',
                custom_fields: {
                    property1: '',
                    property2: ''
                },
                display_text: '',
                expiry_date: '',
                id: '',
                issuer_name: '',
                nickname: '',
                status: '',
                url: ''          
            },
            id: '',
            payment_amount_type: '',
            payment_date: '',
            payment_entry_date: '',
            payment_method: '',
            payment_network_response: {
                payment_auth_code: '',
                payment_decline_code: '',
                payment_decline_msg: '',
                return_code: '',
                return_code_desc: ''
            },
            payment_reference: '',
            payment_request_date: '',
            payment_return_date: '',
            payment_schedule_type: '',
            return_code: '',
            status: '',
            payment_notification_email: '',
            comments: '',
            token: '',
            url: ''
        },
        id: '',
        pending_webhooks: '',
        source_id: '',    
        source_type: "user",
        timestamp: '',
        type: ''
    }
};


export const payment: ECCHandlerFunction = async (reqkey, _data, ecc) => {
    // Call web service
    let nextReqKey = reqkey;
    // Comment - let result: pnclatlonapi.LLRes;
    let result;
    let result2;
    try {
        const response = await sqs.receiveMessage(_.omit(['apiVersion'], boa.sqs) as any).promise();
        logger.debug('Receive Message Result', response);

        let message = response?.Messages && response.Messages[0];

        result = JSON.parse(message?.Body || '{}');
        result2 = JSON.parse(result.Message).body;
        if (message && message.ReceiptHandle && result?.Message) {
            result.MessageAttributes.MessageType.Value ||= '';

            const deleteParams = {
                QueueUrl: boa.sqs.QueueUrl,
                ReceiptHandle: message.ReceiptHandle
            };
            const deleteResult = await sqs.deleteMessage(deleteParams).promise();
            logger.debug('Delete Result', deleteResult);
        } else {
            logger.warn('Received no valid messages', message);
            return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
        }
        const result3 = JSON.parse(result2);
        let responseData = sanitizeValues(result3, safeValues);
        logger.debug('SQS Message Receive Sent', result);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        return await ecc.sendObjectToCaller(responseData, paymentapi.convertObjectTopayEvent, nextReqKey);
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
};




