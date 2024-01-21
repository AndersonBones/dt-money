import { HeaderContainer, HeaderContent, LogoIcon } from "./styles"


import * as Dialog from "@radix-ui/react-dialog"
import { TransactionModal } from "../TransactionModal/TransactionModal"
import { CurrencyCircleDollar } from "phosphor-react"

export const Header = ()=>{
    return (
        <HeaderContainer>
            <HeaderContent className="container">
                <LogoIcon>
                    <CurrencyCircleDollar size={50}></CurrencyCircleDollar>
                    DT.Money
                </LogoIcon>

                <Dialog.Root >
                    <Dialog.Trigger asChild>
                        <button>Nova transação</button>
                    </Dialog.Trigger>

                    <TransactionModal></TransactionModal>
                    
                </Dialog.Root>  
                
            </HeaderContent>

           
            
        </HeaderContainer>
    )
}