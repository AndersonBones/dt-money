import { X, ArrowCircleDown, ArrowCircleUp } from "phosphor-react"
import { TransactionType } from "./styles"
import { TransactionTypeButton } from "./styles"
import * as Dialog from "@radix-ui/react-dialog"
import { Overlay, Content, CloseButton } from "./styles"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {useContext} from 'react'
import { TransactionContext } from "../../context/TransactionContext"

const modalFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),

})

type ModalTransactionFormUnputs = z.infer<typeof modalFormSchema>

export const TransactionModal = () => {
    const {createTransaction} = useContext(TransactionContext)

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<ModalTransactionFormUnputs>({
        resolver: zodResolver(modalFormSchema)
    })

    const handleNewTransaction = async (data: ModalTransactionFormUnputs) => {
        const {description, price, category, type} = data;
        
        await createTransaction({description, price, category, type})
        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay></Overlay>
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton><X size={24}></X></CloseButton>

                <form action="" onSubmit={handleSubmit(handleNewTransaction )}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        autoComplete="off"
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        placeholder="Categoria"
                        required
                        autoComplete="off"
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({field}) => {
                           
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value='income'>
                                        <ArrowCircleUp size={24}></ArrowCircleUp>
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24}></ArrowCircleDown>
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>

                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}