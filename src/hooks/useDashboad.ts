import { useContext } from "react"
import { TransactionContext } from "../context/TransactionContext"
import { useMemo } from "react"


export const useDashboard = ()=>{
    const {transactions} = useContext(TransactionContext)

    const dashboardValues = useMemo(()=>{
        return transactions.reduce((acc, transaction)=>{
            if(transaction.type == 'income'){
                acc.income+= transaction.price
                acc.total+=transaction.price
            } else{
                acc.outcome += transaction.price
                acc.total-=transaction.price
            }
    
            return acc
    
        },
            {
                income: 0, 
                outcome: 0, 
                total:0
            }
        )
    },[transactions])
    
    return dashboardValues
}