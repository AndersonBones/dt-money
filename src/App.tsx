
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import {Transactions} from '../src/pages/Home/Home'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './context/TransactionContext'

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
        <TransactionsProvider>

          <Transactions></Transactions>
        </TransactionsProvider>
        
        
    </ThemeProvider>
  )
}

export default App
