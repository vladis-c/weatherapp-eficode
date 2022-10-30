import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux-hooks'
import { colors } from '../../styles/colors'
import AlertMessage from '../UI/AlertMessage'
import NavBar from './NavBar'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
  const { weatherSlice } = useAppSelector((state) => state)
  const { error , loading} = weatherSlice
  const [openAlert, setOpenAlert] = useState(false)

  useEffect(() => {
    if (error && !loading) {
      setOpenAlert(true)
    }
  }, [error, loading])

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
      <AlertMessage
        severity="error"
        onCloseAlert={() => setOpenAlert(false)}
        message={error}
        alertIsOpen={openAlert}
      />
    </div>
  )
}

export default Layout
