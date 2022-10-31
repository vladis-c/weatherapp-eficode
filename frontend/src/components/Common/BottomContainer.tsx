import { isMobile } from 'react-device-detect'
import CircularProgress from '@mui/material/CircularProgress'

import { colors } from '../../styles/colors'
import type { MyStylesType, WeatherDataType } from '../../types/types'
import HalfContainer from '../UI/HalfContainer'
import CustomWindIcon from '../UI/CustomWindIcon'
import TextDivider from '../Home/TextDivider'
import { PagesNamesEnum } from '../../enums/enums'
import { useAppSelector } from '../../hooks/redux-hooks'
import HourlyWeather from './HourlyWeather'
import WindWeather from './WindWeather'
import HumidityWeather from './HumidityWeather'
import PressureWeather from './PressureWeather'

const BottomContainer = ({ pageName }: { pageName: PagesNamesEnum }) => {
  const findLocationPage = pageName === PagesNamesEnum.FIND
  const { weatherSlice } = useAppSelector((state) => state)
  const { currentLocationForecast, requestedCityForecast } = weatherSlice
  const locationData = findLocationPage
    ? requestedCityForecast.length > 0
      ? requestedCityForecast
      : currentLocationForecast
    : currentLocationForecast
  const forecastToDisplay: WeatherDataType[] =
    isMobile && locationData
      ? locationData.slice(0, 5)
      : locationData.slice(0, 8)

  if (forecastToDisplay.length === 0) {
    return (
      <HalfContainer bgColor={colors.grey}>
        <CircularProgress
          sx={{ color: colors.winter, width: 200, height: 200 }}
        />
      </HalfContainer>
    )
  } else {
    return (
      <HalfContainer bgColor={colors.grey} bottom={true}>
        <HourlyWeather forecast={forecastToDisplay} />
        <TextDivider text={`Wind speed, m/s`} />
        <WindWeather forecast={forecastToDisplay} />
        <TextDivider text={`Humidity, %`} />
        <HumidityWeather forecast={forecastToDisplay} />
        <TextDivider text={`Pressure, mmHg`} />
        <PressureWeather forecast={forecastToDisplay} />
      </HalfContainer>
    )
  }
}

export default BottomContainer
