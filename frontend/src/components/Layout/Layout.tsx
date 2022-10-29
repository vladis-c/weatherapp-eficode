import React from 'react'
import { colors } from '../../styles/colors'
import NavBar from './NavBar'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <header>
        <title>{title}</title>
        <meta name="description" content="Weather App for Eficode" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/hammashelppiapp.appspot.com/o/LOGOS%2FHH_sin.png?alt=media&token=f22cbc85-10b6-47bd-9793-a5fe5e35ccb4"
        />
      </header>
      <NavBar />
      <main
        style={{
          height: '100vh',
          backgroundColor: colors.grey,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
