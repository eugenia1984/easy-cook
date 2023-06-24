import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from "@mui/material"
import App from './App.tsx'
import { easyCookTheme } from './theme/theme'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ easyCookTheme }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
