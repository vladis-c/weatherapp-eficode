import { Typography, Box, Avatar } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import { isMobile } from 'react-device-detect'
import CircularProgress from '@mui/material/CircularProgress'

import { dummy_forecast } from '../../data/dummy-data'
import {
  doTime,
  roundNumber,
  doWindDirection,
  doPressure,
  doTemp
} from '../../helpers/helper-functions'
import { colors } from '../../styles/colors'
import type { MyStylesType, WeatherDataType } from '../../types/types'
import HalfContainer from '../UI/HalfContainer'
import CustomWindIcon from '../UI/CustomWindIcon'
import TextDivider from '../Home/TextDivider'
import { PagesNamesEnum } from '../../enums/enums'
import { useAppSelector } from '../../hooks/redux-hooks'

const BottomContainer = ({ pageName }: { pageName: PagesNamesEnum }) => {
  const findLocationPage = pageName === PagesNamesEnum.FIND
  // const currentLocationForecast = dummy_forecast
  const { weatherSlice } = useAppSelector((state) => state)
  const { currentLocationForecast, requestedCityForecast } = weatherSlice
  const locationData = findLocationPage
    ? requestedCityForecast.length > 0
      ? requestedCityForecast
      : currentLocationForecast
    : currentLocationForecast
  const forecastToDisplay: WeatherDataType[] = isMobile && locationData
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
        <Box sx={styles.hourlyContainer}>
          {forecastToDisplay.map(({ dt_txt, dt, weather, main, wind }) => (
            <Box key={dt} sx={styles.hourlyWeather}>
              <Typography sx={styles.titleSm}>
                {dt_txt && doTime(dt_txt)}
              </Typography>
              <Avatar
                sx={styles.weatherIcon}
                alt="img"
                src={
                  weather[0]?.icon
                    ? `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`
                    : ''
                }
              />
              <Typography sx={styles.titleSm}>
                {doTemp(roundNumber(main?.temp))}
              </Typography>

              <Box sx={styles.sectionContainer}>
                <CustomWindIcon direction={doWindDirection(wind.deg)} />
                <Typography sx={{ ...styles.titleSm, pt: 1 }}>
                  {roundNumber(wind.speed)}
                </Typography>
                <Typography sx={styles.titleXxs}>
                  {doWindDirection(wind.deg)}
                </Typography>
              </Box>
              <Box sx={styles.sectionContainer2}>
                <AppsIcon sx={styles.humidityIcon} />
                <Typography sx={styles.titleSm}>
                  {roundNumber(main.humidity)}
                </Typography>
              </Box>
              <Box sx={styles.sectionContainer2}>
                <Box
                  sx={{
                    width: 60,
                    height: roundNumber(doPressure(main.pressure)) - 710,
                    backgroundColor: colors.cyan,
                  }}
                />
                <Typography sx={styles.titleSm}>
                  {roundNumber(doPressure(main.pressure))}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <TextDivider text={`Wind speed, m/s`} sx={{position: "relative", bottom: { md: -55, sm: 2 }}}/>
        <TextDivider text={`Humidity, %`} sx={{position: "relative", bottom: { md: -115, sm: -48 }}}/>
        <TextDivider text={`Pressure, mmHg`} sx={{position: "relative", bottom: { md: -180, sm: -100 }}}/>
      </HalfContainer>
    )
  }
}

const styles: MyStylesType = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    mt: 3,
  },
  sectionContainer2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
    mt: 2,
  },
  weatherIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.cyan,
    mt: -1,
  },
  humidityIcon: {
    color: colors.lightCyan,
    mb: -1,
  },
  hourlyWeather: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourlyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    height: '30%',
    px: { md: 20, sm: 1 },
    marginTop: { md: -43, sm: -38 },
  },
  mainTitle: {
    fontWeight: 600,
    fontSize: { md: 24, sm: 24, xs: 18 },
    color: colors.winter,
  },
  titleSm: {
    fontWeight: 400,
    fontSize: { md: 18, sm: 18, xs: 14 },
    my: { md: 2, sm: 1, xs: 0 },
    color: colors.winter,
  },
  titleL: {
    fontWeight: 300,
    fontSize: { md: 60, sm: 60, xs: 34 },
    color: colors.winter,
  },
  titleXs: {
    position: 'absolute',
    my: { md: 2, sm: 2, xs: 0 },
    fontWeight: 300,
    fontSize: 16,
    color: colors.winter,
  },
  titleXxs: {
    fontWeight: 200,
    fontSize: { md: 14, sm: 12, xs: 12 },
    color: colors.winter,
  },
}

export default BottomContainer
