import { useEffect } from 'react'
import { useGeolocated } from 'react-geolocated'

import Layout from '../components/Layout/Layout'
import { PagesNamesEnum } from '../enums/enums'
import UpperContainer from '../components/Common/UpperContainer'
import BottomContainer from '../components/Common/BottomContainer'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import {
  fetchWeatherCurrentLocation,
  setLocation,
} from '../redux/slices/weatherSlice'
import { roundNumberToPrecision } from '../helpers/helper-functions'
import { Alert } from '@mui/material'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { weatherSlice } = useAppSelector((state) => state)
  const { currentLocation } = weatherSlice
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    })

  useEffect(() => {
    if (coords) {
      dispatch(
        setLocation({
          lat: roundNumberToPrecision(coords?.latitude),
          lon: roundNumberToPrecision(coords?.longitude),
          city: '',
        })
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords])

  useEffect(() => {
    if (currentLocation?.lat && currentLocation?.lon) {
      dispatch(fetchWeatherCurrentLocation())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation])

  return (
    <>
      <Layout title={PagesNamesEnum.CURRENT}>
        <UpperContainer pageName={PagesNamesEnum.CURRENT} />
        <BottomContainer pageName={PagesNamesEnum.CURRENT} />
      </Layout>
      {!isGeolocationAvailable ? (
        <Alert severity="error">
          Your browser does not support Geolocation
        </Alert>
      ) : null}
      {!isGeolocationEnabled ? (
        <Alert severity="warning">
          Geolocation is not enabled
        </Alert>
      ) : null}
    </>
  )
}

export default HomePage
