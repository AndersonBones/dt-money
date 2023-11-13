import { useForm } from "react-hook-form"
import { SearchFormContainer } from "./styles"
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import {useContext} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { TransactionContext } from "../../context/TransactionContext"
import {memo} from 'react'

const searchFormSchema = z.object({
    query:z.string()
})

type SearchFormUnputs = z.infer<typeof searchFormSchema>


const SearchFormComponent = () => {
    const {getTransactions, transactions} = useContext(TransactionContext)

    const {register, handleSubmit, formState:{isSubmitting}} = useForm<SearchFormUnputs>({
        resolver:zodResolver(searchFormSchema)
    })

    const handleSearchTransactions = async (data:SearchFormUnputs)=>{
        await getTransactions(data.query)

    }
    return (
        <SearchFormContainer >
            <div className="headerSearchContainer container">
                <span>Transações</span>
                <span>{transactions.length} Itens</span>
            </div>
            
            <form action="" className="container" onSubmit={handleSubmit(handleSearchTransactions)}>
                <input 
                    type="text"
                    placeholder="Busque uma transação" 
                    {...register('query')}
                    autoComplete="off"
                 />

                <button type="submit" disabled={isSubmitting}>
                    <MagnifyingGlass size={20}></MagnifyingGlass>
                    Buscar
                </button>
            </form>

        </SearchFormContainer>
    )
}

export const SearchForm = memo(SearchFormComponent)