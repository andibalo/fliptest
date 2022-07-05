import { useCallback } from 'react';
import { axiosClient } from './apiClient';
import { queryKeys } from './react-query/constants';
import { useQuery } from 'react-query';

const TRANSACTION_BASE_PATH = "/frontend-test"

export interface TransactionInfo {
    id: string
    amount: number
    uniqueCode: number
    status: string
    senderBank: string
    accountNumber: string
    beneficiaryName: string
    beneficiaryBank: string
    remark: string
    createdAt: string
    completedAt: string
    fee: number
}


const transactionFormatter = (data: any) : TransactionInfo[] => {

    const responseData = data.data
    const transactionData : TransactionInfo[] = []
    
    Object.keys(responseData).forEach(key => {
        let transactionInfo = {
            id: responseData[key].id,
            amount: responseData[key].amount,
            uniqueCode: responseData[key].unique_code,
            status: responseData[key].status,
            senderBank: responseData[key].sender_bank,
            accountNumber: responseData[key].account_number,
            beneficiaryName: responseData[key].beneficiary_name,
            beneficiaryBank: responseData[key].beneficiary_bank,
            remark: responseData[key].remark,
            createdAt: responseData[key].created_at,
            completedAt: responseData[key].completed_at,
            fee: responseData[key].fee
        }

        transactionData.push(transactionInfo)
    }) 

    return transactionData
}

export const useFetchTransaction = () => {
    return useQuery([queryKeys.transaction], async () => axiosClient.get(TRANSACTION_BASE_PATH), {
        select: useCallback(
            (data: any) => transactionFormatter(data),
            []
        )
    });
};