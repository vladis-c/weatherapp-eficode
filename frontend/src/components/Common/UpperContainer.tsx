import { Typography, CircularProgress} from '@mui/material'
import {
  doDate,
  doWindDirection,
  roundNumber,
  doTemp,
} from '../../helpers/helper-functions'
import type { MyStylesType } from '../../types/types'
import HalfContainer from '../UI/HalfContainer'
import SunContainer from '../Home/SunContainer'
import { colors } from '../../styles/colors'
import TextSearch from '../FindLocation/TextSearch'
import { PagesNamesEnum } from '../../enums/enums'
import { useAppSelector } from '../../hooks/redux-hooks'


const UpperContainer = ({ pageName }: { pageName: PagesNamesEnum }) => {
  const findLocationPage = pageName === PagesNamesEnum.FIND
  const { weatherSlice } = useAppSelector((state) => state)

  const { currentLocationData, requestedCityData } = weatherSlice
  const locationData = findLocationPage
    ? requestedCityData.name !== ''
      ? requestedCityData
      : currentLocationData
    : currentLocationData
  const {
    name,
    main,
    sys: { sunrise, sunset },
    weather,
    wind,
  } = locationData
  const temp = roundNumber(main.temp)
  const weatherDesc = weather[0].description
  const weatherWind = roundNumber(wind.speed)

  if (locationData.name === '') {
    return (
      <HalfContainer bgColor={colors.cyan}>
        <CircularProgress
          sx={{ color: colors.winter, width: 200, height: 200 }}
        />
      </HalfContainer>
    )
  } else {
    return (
      <HalfContainer bgColor={colors.cyan}>        
        {findLocationPage ? (
          <TextSearch />
        ) : (
          <Typography sx={styles.mainTitle}>{name}</Typography>
        )}
        <Typography sx={styles.titleSm}>
          {findLocationPage ? `${name},` : ''} {doDate(new Date().getTime())}
        </Typography>
        <Typography sx={styles.titleL}>
          {doTemp(temp)}
          <Typography component="span" sx={styles.titleXs}>
            {`°С`}
          </Typography>
        </Typography>
        <SunContainer
          sunrise={sunrise}
          sunset={sunset}
          wIcon={weather[0].icon}
        />
        <Typography sx={{ ...styles.titleSm, textTransform: 'capitalize' }}>
          {weatherDesc}
        </Typography>
        <Typography sx={styles.titleSm}>
          Wind {weatherWind} m/s from {doWindDirection(weatherWind)}
        </Typography>       
      </HalfContainer>
    )
  }
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
