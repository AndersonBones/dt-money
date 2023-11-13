import styled,{css} from 'styled-components'

export const DashboardSection = styled.section`
    width: 100%;
    
    
`
export const DashboardContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    margin-top: -5rem;

    @media only screen and (max-width: 992px) {
        grid-template-columns: repeat(1, 1fr);
        
    }
`


interface CardProps{
    variant?:'green' | undefined
}

export const CardContainer = styled.div<CardProps>`
    background: ${props=>props.theme['gray-600']};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    padding: 2rem;
    
    align-items: center;
    justify-content: center;

    header{
        width: 100%;
        color: ${props=>props.theme['gray-300']};;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        color: ${props=>props.theme['gray-100']};
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props=>props.variant == 'green' && css`
        background: ${props.theme['green-700']};
    `}

`