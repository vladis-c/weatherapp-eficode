import React from 'react'
import { Typography } from '@mui/material'

import Layout from '../Layout/Layout'
import { PagesNamesEnum } from '../../enums/enums'

const HomePage = () => {
  return (
    <Layout title={PagesNamesEnum.CURRENT}>
      <Typography>Something</Typography>
    </Layout>
  )
}

export default HomePage