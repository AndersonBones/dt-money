import { HeaderContainer, HeaderContent } from "./styles"

import logoImg from '../../assets/Ignite simbol.svg'
import * as Dialog from "@radix-ui/react-dialog"
import { TransactionModal } from "../TransactionModal/TransactionModal"

export const Header = ()=>{
    return (
        <HeaderContainer>
            <HeaderContent className="container">
                <img src={logoImg} alt="" />

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