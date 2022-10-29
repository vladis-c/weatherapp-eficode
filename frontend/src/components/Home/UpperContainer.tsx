import { Typography } from '@mui/material'
import {
  doDate,
  doWindDirection,
  roundNumber,
} from '../../helpers/helper-functions'
import type { MyStylesType } from '../../types/types'
import HalfContainer from '../UI/HalfContainer'
import SunContainer from './SunContainer'
import { colors } from '../../styles/colors'
import { dummy_data } from '../../data/dummy-data'

const UpperContainer = () => {
  const currentLocationData = dummy_data
  const {
    name,
    main,
    sys: { sunrise, sunset },
    weather,
    wind,
  } = currentLocationData
  const temp = roundNumber(main.temp)
  const temperature = temp > 0 ? `+${temp}` : `${temp}`
  const weatherDesc = weather[0].description
  const weatherWind = roundNumber(wind.speed)

  return (
    <HalfContainer bgColor={colors.cyan}>      
      <Typography sx={styles.mainTitle}>{name}</Typography>
      <Typography sx={styles.titleSm}>
        {doDate(new Date().getTime())}
      </Typography>
      <Typography sx={styles.titleL}>
        {temperature}
        <Typography component="span" sx={styles.titleXs}>
          {`°С`}
        </Typography>
      </Typography>
      <SunContainer sunrise={sunrise} sunset={sunset} wIcon={weather[0].icon} />
      <Typography sx={{ ...styles.titleSm, textTransform: 'capitalize' }}>
        {weatherDesc}
      </Typography>
      <Typography sx={styles.titleSm}>
        Wind {weatherWind} m/s from {doWindDirection(weatherWind)}
      </Typography>
    </HalfContainer>
  )
}

const styles: MyStylesType = {
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
}

export default UpperContainer
