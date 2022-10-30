import { useEffect } from 'react'
import { useGeolocated } from 'react-geolocated'
import { Alert } from '@mui/material'
import { isMobile } from 'react-device-detect'

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
import { getLocalStorageItems } from '../redux/slices/historySlice'

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
    //if Desktop it is gonna check first for coordinates and then fetch data.
    if (currentLocation?.lat && currentLocation?.lon) {
      dispatch(fetchWeatherCurrentLocation())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation])

  useEffect(() => {
    //if moblie it is gonna fetch data with default city Helsinki due to no location on mobile browsers in Dev environment.
    if (process.env.NODE_ENV === 'development' && isMobile) {
      dispatch(fetchWeatherCurrentLocation())
    }
    dispatch(getLocalStorageItems())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <Alert severity="warning">Geolocation is not enabled</Alert>
      ) : null}
    </>
  )
}

export default HomePage
