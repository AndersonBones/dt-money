import styled from 'styled-components'

export const HomeContainer = styled.main`
    width: 100%;

`

export const TransactionsTableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;

    overflow-x: auto;
    
    div{
    
        border-collapse: separate;
        border-spacing: 0 0.5rem;
        margin-top: 1.5rem; 

       
        

        .tb-row{
            display: flex;
            
            padding: 0 1rem;
            border-radius: 6px;
            background-color: ${props=>props.theme['gray-700']}; 

        }

        .tb-td{
            display: flex;
            flex-direction: row;
            flex: 1;

            p{
                flex: 1;
            }

        }

        .tb-td > p:not(:first-child){
            text-align: center;
        }

        .tb-row > .tb-td:last-child > p{
            color: ${props=>props.theme['gray-400']};
        }
        
    }

    @media only screen and (max-width: 992px) {
        .tb-row{
            flex-direction: column;
        }

        .tb-row > .tb-td:first-child{
            flex-direction: column;

            p{
                text-align: start;
            }
        }

        .tb-row > .tb-td:last-child > p:last-child{
            text-align: end;
        }
        
    }
`

interface PriceHighLightProps{
    variant: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
    color:${props=>props.variant == 'income' ? props.theme['green-300'] : props.theme['red-300']}
`