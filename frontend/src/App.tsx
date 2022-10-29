import './styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { persistor, store } from '../src/redux/store'
import Router from './router/Router'

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
