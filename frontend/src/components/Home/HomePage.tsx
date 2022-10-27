import React, { useEffect } from 'react'
import { Typography } from '@mui/material'

import Layout from '../Layout/Layout'
import { PagesNamesEnum } from '../../enums/enums'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { fetchWeatherCityName, fetchWeatherCurrentLocation } from '../../redux/slices/weatherSlice'
import { dummy_data } from '../../data/dummy-data'

const HomePage = () => {
  const currentWeatherData = dummy_data
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchWeatherCityName())
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <Layout title={PagesNamesEnum.CURRENT}>
      <Typography>{currentWeatherData.name}</Typography>
    </Layout>
  )
}

export default HomePage