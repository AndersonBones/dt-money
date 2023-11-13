import { Header } from "../../components/header/Header"
import { Dashboard } from "../../components/dashboard/Dashboard"
import { HomeContainer, TransactionsTableContainer, PriceHighLight } from "./styles"
import { SearchForm } from "../../components/SearchForm/SearchForm"
import { useContext } from 'react'
import { TransactionContext } from "../../context/TransactionContext"
import { dateFormatter, priceFormatter } from "../../utils/formatter"
import { CalendarBlank, TagSimple} from "phosphor-react"

export const Transactions = () => {

    const { transactions } = useContext(TransactionContext)

    return (
        <HomeContainer>
            <Header></Header>
            <Dashboard></Dashboard>
            <SearchForm></SearchForm>

            <TransactionsTableContainer >

                <div className="container">

                    {transactions.map(transaction => {
                        return (
                            <div className="tb-row" >
                                <div className="tb-td">
                                    <p>{transaction.description}</p>
                                    <p><PriceHighLight variant={transaction.type} >{transaction.type == "outcome" ? `-${priceFormatter.format(transaction.price)}` : `${priceFormatter.format(transaction.price)}`}</PriceHighLight></p>
                                </div>
                                <div className="tb-td">
                                    <p><TagSimple size={20}></TagSimple> {transaction.category}</p>
                                    <p ><CalendarBlank size={20}></CalendarBlank> {dateFormatter.format(new Date(transaction.createdAt))}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </TransactionsTableContainer>
        </HomeContainer>
    )
}