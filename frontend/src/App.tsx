import './styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { persistor, store } from '../src/redux/store'
import HomePage from './components/Home/HomePage'

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),    
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomePage />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
