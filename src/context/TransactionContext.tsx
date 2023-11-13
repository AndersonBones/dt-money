import {createContext} from 'react'
import { useEffect, useState } from "react"
import { api } from '../libs/axios'

export interface ITransaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface CreateTransaction{
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    
}

interface TransactionContextType{
    transactions: ITransaction[];
    getTransactions: (query?:string)=>Promise<void>
    createTransaction: (data:CreateTransaction)=>Promise<void>
}

interface TransactionProviderProps{
    children:React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({children}:TransactionProviderProps)=>{

    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const getTransactions = async (query?:string) => {
        const response = await api.get('/transactions',{
            params:{
                _sort:'createdAt',
                _order:'desc',
                q:query
            }
        })

        setTransactions(response.data)
    }

    const createTransaction =async (data:CreateTransaction) => {
        const {category, description, price, type} = data

        const newTransaction = await api.post('transactions',{
            description,
            category,
            price,
            type,
            createdAt:new Date()
        })

        setTransactions([...transactions, newTransaction.data])
    }

    useEffect(() => {

        getTransactions();

    }, [])

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                getTransactions,
                createTransaction
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}