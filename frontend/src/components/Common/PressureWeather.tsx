import { Box, Typography } from '@mui/material'

import { roundNumber, doPressure } from '../../helpers/helper-functions'
import { WeatherDataType, MyStylesType } from '../../types/types'
import { colors } from '../../styles/colors'

const PressureWeather = ({ forecast }: { forecast: WeatherDataType[] }) => {
  return (
    <Box sx={styles.wrapContainer}>
      {forecast.map(({ dt, main }) => (
        <Box sx={styles.sectionContainer} key = {dt}>
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
  wrapContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    height: '30%',
    px: { md: 20, sm: 1 },
  },
  titleSm: {
    fontWeight: 400,
    fontSize: { md: 18, sm: 18, xs: 14 },
    my: { md: 2, sm: 1, xs: 0 },
    color: colors.winter,
  },
}

export default PressureWeather
