import styled from 'styled-components'


export const HeaderContainer = styled.header`
    width: 100%;

    background-color: ${props=>props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
   

    display: flex;
    justify-content: space-between;
    align-items: center;


    button{
        background-color: ${props=>props.theme['green-500']};
        border-radius: 6px;

        height: 50px;
        border: none;
        color: ${props=>props.theme['white']};
        padding: 0 1.25rem;

        

        &:hover{
            background-color: ${props=>props.theme['green-700']};
            transition: background-color .2s ;
        }
    }
`