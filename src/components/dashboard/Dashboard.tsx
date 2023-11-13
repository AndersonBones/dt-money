
import { useDashboard } from "../../hooks/useDashboad"
import { priceFormatter } from "../../utils/formatter"
import { DashboardSection, CardContainer, DashboardContainer } from "./styles"
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'


export const Dashboard = () => {

    const dashboardValues = useDashboard();

    return (
        <DashboardSection>
            <DashboardContainer className="container">
                <CardContainer>
                    <header>
                        <span>Entradas</span>
                        <ArrowCircleUp size={32} color="#00b37e"></ArrowCircleUp>
                    </header>
                    <strong>{priceFormatter.format(dashboardValues.income)}</strong>
                </CardContainer>

                <CardContainer>
                    <header>
                        <span>Saídas</span>
                        <ArrowCircleDown size={32} color="#f75a68"></ArrowCircleDown>
                    </header>
                    <strong>{priceFormatter.format(dashboardValues.outcome)}</strong>
                </CardContainer>

                <CardContainer variant="green">
                    <header>
                        <span>Total</span>
                        <CurrencyDollar size={32} color="#fff"></CurrencyDollar>
                    </header>
                    <strong>{priceFormatter.format(dashboardValues.total)}</strong>
                </CardContainer>
            </DashboardContainer>

        </DashboardSection>
    )

}