import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterachrpt from 'src/interfaces/pcachrpt';
import * as convertergettran from 'src/interfaces/pcgettran';
import * as convertergettrns from 'src/interfaces/pcgettrns';
import { getToken } from 'src/services/get-token';
import { sanitizeValues } from 'src/services/safe-values';

const logger = createLogger('commands/paycargo');
const { paycargo } = config;
const axiosInstance = axios.create(paycargo.axios);
const safeValues: any = {
    msg: '',
    code: 0,
    data: {
        '*30':{
            transactionId: 0,
            payerClientId: 0,
            payerId: 0,
            payerName: '',
            vendorClientId: 0,
            vendorId: 0,
            vendorName: '',
            number: '',
            departureDate: '',
            arrivalDate: '',
            paymentDueDate: '',
            approvalDate: '',
            hasArrived: '',
            total: 0,
            directionId: 0,
            bolLink: '',
            direction: '',
            createdDate: '',
            lastModifiedDate: '',
            userId: 0,
            modifiedByUserId: 0,
            shipperRefNumber: '',
            customerRefNumber: '',
            partialPayment: '',
            disputeReasonResponse: '',
            subcategory: '',
            externalSystemId: 0,
            externalId: '',
            parent: '',
            batchId: '',
            notes: '',
            valueOfGoods: '',
            status: '',
            statusId: 0,
            type: '',
            paymentDueDateDiff: 0,
            paymentMethod: '',
            payerRefNumber: '',
            vendorRefNumber: '',
            payerInternalNumber: '',
            payerFileNumber: '',
            payerVoucherNumber: '',
            payerProductNumber: '',
            payerInvoiceNumber: '',
            nachaBatchId: '',
            paycargoBatchId: '',
            processingDate: ''
        }
    }
};
const safeValuesACH: any = {
   // parms: {
   //     branchClientId: '',
   //     startDate: '',
   //     endDate: '',
   //     client_id: '',
   //     report_action_name: '',
   //     type: '',
   //     accountname: ''
   // },
    recordset: {
        '*50':{
            account: '',
            transaction_id: 0,
            payor: '',
            payee: '',
            category: '',
            transaction_type: '',
            number: '',
            debitCredit: '',
            debitAmount: 0,
            creditAmount: 0,
            payorBatch: 0,
            payorDate: '',
            payeeBatch: 0,
            payeeDate: '',
            payorID: '',
            payeeID: '',
            customer_reference_number: '',
            shipper_reference_number: '',
            parent: '',
            approvalDate: '',
            approvedByUserName: '',
            currency: '',
            payerId: 0,
            vendorId: 0,
            payerReferenceNumber: '',
            origin: '',
            destination: '',
            payerInternalNumber: '',
            payerFileNumber: '',
            payerVoucherNumber: '',
            payerProductNumber: '',
            payerInvoiceNumber: '',
            bolLink: ''        
        },
        overall: {
            count: 0,
            debitamount: 0,
            creditamount: 0
        },
        payor: {
            batch: 0,
            amount: 0
        }
    }
};
export const getAchrpt: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    const reqFields = converterachrpt.convertPCReqRptToObject(datax);

    logger.debug(`Received getAchrpt request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
      try {
        const token = await getToken()
        result = await axiosInstance.get('/reports/singleReport',  {
            params: {
                branchClientId: reqFields.branchClientId,
                startDate: reqFields.startDate,
                endDate: reqFields.endDate,
                client_id: reqFields.client_id,
                report_action_name: reqFields.report_action_name,
                type: reqFields.type,
                accountName: reqFields.accountName
            },
            headers: {
                Authorization: `JWT ${token}`
            }
        })

    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC1000', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC1000', err.message, nextReqKey);
    }

    // const responseData= result;
    // Send the result info
        let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
       // let responseData = result.data[0][1];
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
       // logger.error('Call test1 failed');
        return await ecc.sendObjectToCaller(responseData, converterachrpt.convertObjectToPCRcvRpt, nextReqKey);
        logger.error(nextReqKey);

   
};

export const getTransaction: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    // const reqFields = converterusraut.convertPCReqTokenToObject(datax);
    const reqFields = convertergettran.convertPCReqTrnToObject(datax);

    logger.debug(`Received getTransaction request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
      try {
        const token = await getToken()
        result = await axiosInstance.get('/transaction/' + reqFields.transactionId, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })

    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC1000', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC1000', err.message, nextReqKey);
    }

    // const responseData= result;
    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the results
    return ecc.sendObjectToCaller(result.data, convertergettran.convertObjectToPCRcvTrn, nextReqKey);
};
export const getTransactions: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    // const reqFields = converterusraut.convertPCReqTokenToObject(datax);
    const reqFields = convertergettrns.convertPCReqTrnsToObject(datax);

    logger.debug(`Received getTransactions request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
      try {
        const token = await getToken()
        result = await axiosInstance.get('/transactions' ,  {
            params: {
                page: reqFields.page,
                count: reqFields.count
            },
            headers: {
                Authorization: `JWT ${token}`
            }
        })

    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC1000', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC1000', err.message, nextReqKey);
    }

    // const responseData= result;
    // Send the result info
    let responseData = sanitizeValues(result.data, safeValues);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the results
    // return ecc.sendObjectToCaller(result.data, convertergettrns.convertObjectToPCRcvTrns, nextReqKey);
    return ecc.sendObjectToCaller(responseData, convertergettrns.convertObjectToPCRcvTrns, nextReqKey);
    logger.debug(`Executed sendObjectToCaller`);
};