import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Submenu from '../components/Submenu'
import Footer from '../components/Footer'

const Layout = ({ children, submenu }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="layout siteContent">
            <Menu />
            {submenu && <Submenu/>}
            {children}
            {submenu && <Submenu/>}
          </div>
          <Footer />
        </>
      </ThemeProvider>
    </div>
  )
}

export default Layout
