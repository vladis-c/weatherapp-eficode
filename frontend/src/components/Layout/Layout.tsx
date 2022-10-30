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
