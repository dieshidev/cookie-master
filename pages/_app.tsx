import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { Theme, ThemeProvider } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '../themes'
import Cookies from 'js-cookie'
import React from 'react'

interface Props extends AppProps {
  theme: string
}

function MyApp({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = React.useState(lightTheme)

  React.useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'

    const selectedTheme = cookieTheme === 'light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme
    setCurrentTheme(selectedTheme)
  }, [])

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
