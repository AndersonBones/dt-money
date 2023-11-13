import { useContext } from "react"
import { TransactionContext } from "../context/TransactionContext"

export const useDashboard = ()=>{
    const {transactions} = useContext(TransactionContext)

    const dashboardValues = transactions.reduce((acc, transaction)=>{
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

    return dashboardValues
}