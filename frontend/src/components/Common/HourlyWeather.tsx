import { Box, Typography, Avatar } from '@mui/material'
import { doTime, doTemp, roundNumber } from '../../helpers/helper-functions'
import { MyStylesType, WeatherDataType } from '../../types/types'
import { colors } from '../../styles/colors'

const HourlyWeather = ({ forecast }: { forecast: WeatherDataType[] }) => {
  return (
    <Box sx={styles.wrapContainer}>
      {forecast.map(({ dt_txt, dt, weather, main }) => (
        <Box sx={styles.sectionContainer} key={dt}>
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
        </Box>
      ))}
    </Box>
  )
}

const styles: MyStylesType = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
    mt: 0,
  },
  weatherIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.cyan,
    mt: -1,
  },
  wrapContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    px: { md: 20, sm: 1 },
  },
  titleSm: {
    fontWeight: 400,
    fontSize: { md: 18, sm: 18, xs: 14 },
    my: { md: 2, sm: 1, xs: 0 },
    color: colors.winter,
  },
}

export default HourlyWeather
