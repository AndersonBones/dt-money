import styled from 'styled-components'


export const SearchFormContainer = styled.div`
    width: 100%;
    margin-top: 5rem;
    
    .headerSearchContainer{
        display: flex;
        justify-content: space-between;
        padding: 1rem;

        span{
            color: ${props=>props.theme['gray-300']};
        }
    }

    form{
        width: 100%;
        display: flex;
        gap: 1rem;

        input{
            flex: 1;
            border-radius: 6px;
            border: 0;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding:1rem;


            &::placeholder{
                color: ${props => props.theme['gray-500']};
            }

        }


        button{
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border: 0;
            padding: 1rem;
            background-color: transparent;
            border: 1px solid  ${props => props.theme['green-300']};
            color: ${props => props.theme['green-300']};
            font-weight: bold;
            border-radius: 6px;
            
            &:not(:disabled):hover{
                cursor: pointer;
                background-color: ${props => props.theme['green-500']};
                border-color: ${props => props.theme['green-500']};
                color: ${props => props.theme['white']};
                transition:  .2s ;
            }

            &:disabled{
                cursor: not-allowed;
                opacity: 0.6;
            }
        }
    }
    
`