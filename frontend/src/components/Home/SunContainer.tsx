import { Box, Typography, Avatar } from '@mui/material'
import { doTime } from '../../helpers/helper-functions'
import { colors } from '../../styles/colors'
import { MyStylesType } from '../../types/types'

type SunContainerProps = {
  sunrise: number | undefined
  sunset: number | undefined
  wIcon: string
}

const SunContainer = ({ sunrise, sunset, wIcon }: SunContainerProps) => {
  return (
    <Box sx={styles.sunContainer}>
      <Box
        sx={{
          ...styles.sunContainer,
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography sx={{ ...styles.titleXs, marginTop: 0 }}>
          Sunrise
        </Typography>
        <Typography sx={styles.titleSm}>
          {sunrise && doTime(sunrise)}
        </Typography>
      </Box>
      <Avatar
        sx={{
          height: 100,
          width: 100,
        }}
        alt="img"
        src={wIcon ? `http://openweathermap.org/img/wn/${wIcon}@2x.png` : ''}
      />
      <Box
        sx={{
          ...styles.sunContainer,
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Typography sx={{ ...styles.titleXs, marginTop: 0 }}>Sunset</Typography>
        <Typography sx={styles.titleSm}>{sunset && doTime(sunset)}</Typography>
      </Box>
    </Box>
  )
}

const styles: MyStylesType = {
  titleSm: {
    fontWeight: 400,
    fontSize: { md: 18, sm: 18, xs: 14 },
    color: colors.winter,
  },
  titleXs: {
    fontWeight: 300,
    fontSize: 16,
    color: colors.winter,
  },
  sunContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
}

export default SunContainer
