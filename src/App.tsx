import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Router from './lib/Router'
import { ApiContextProvider } from './contexts/ApiContext'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ApiContextProvider>
          <Router />
        </ApiContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
