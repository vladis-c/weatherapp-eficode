import { Box, Typography } from '@mui/material'

import { roundNumber, doWindDirection } from '../../helpers/helper-functions'
import { MyStylesType, WeatherDataType } from '../../types/types'
import { colors } from '../../styles/colors'
import CustomWindIcon from '../UI/CustomWindIcon'

const WindWeather = ({ forecast }: { forecast: WeatherDataType[] }) => {
  return (
    <Box sx={styles.wrapContainer}>
      {forecast.map(({ dt, wind }) => (
        <Box sx={styles.sectionContainer} key={dt}>
          <Box sx={styles.arrowContainer}>
            <CustomWindIcon direction={doWindDirection(wind.deg)} />
            <Typography sx={styles.titleSm}>
              {roundNumber(wind.speed)}
            </Typography>
          </Box>
          <Typography sx={styles.titleXxs}>
            {doWindDirection(wind.deg)}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

const styles: MyStylesType = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    mt: 0,
  },
  wrapContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    px: { md: 20, sm: 1 },
  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '10%',
  },
  titleSm: {
    fontWeight: 400,
    fontSize: { md: 18, sm: 18, xs: 14 },
    my: { md: 2, sm: 1, xs: 0 },
    color: colors.winter,
    pt: 1,
    mx: 1,
  },
  titleXxs: {
    fontWeight: 200,
    fontSize: { xl: 16, md: 14, sm: 12, xs: 12 },
    color: colors.winter,
  },
}

export default WindWeather
