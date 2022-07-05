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
    createdAat: string
    completedAat: string
    fee: number
}


const transactionFormatter = (data: any) : TransactionInfo[] => {
    const transactionData : TransactionInfo[] = []
    
    Object.keys(data).forEach(key => {
        let transactionInfo = {
            id: data[key].id,
            amount: data[key].amount,
            uniqueCode: data[key].unique_code,
            status: data[key].status,
            senderBank: data[key].sender_bank,
            accountNumber: data[key].account_number,
            beneficiaryName: data[key].beneficiary_name,
            beneficiaryBank: data[key].beneficiary_bank,
            remark: data[key].remark,
            createdAat: data[key].created_at,
            completedAat: data[key].completed_at,
            fee: data[key].fee
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