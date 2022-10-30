import { Typography, Box, Avatar, Button } from '@mui/material'
import { isMobile } from 'react-device-detect'

import type { MyStylesType } from '../../types/types'
import FavIcon from '../UI/FavIcon'
import { colors } from '../../styles/colors'

type CitySearchListCardProps = {
  name: string
  temp: string | undefined
  icon: string | undefined
  id: number
  onOpenCity: () => void
}

const CitySearchListCard = ({
  name,
  temp,
  icon,
  id,
  onOpenCity
}: CitySearchListCardProps) => {
  return (
    <Box sx={styles.card}>
      <Button variant="text" sx={styles.halfContainer} onClick={onOpenCity}>
        <Typography sx={styles.name}>{name}</Typography>
        <Box sx={styles.tempContainer}>
          <Typography sx={styles.name}>{temp}</Typography>
          <Avatar
            sx={styles.weatherIcon}
            alt="img"
            src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''}
          />
        </Box>
      </Button>
      <Box
        sx={{
          ...styles.halfContainer,
          justifyContent: 'flex-end',
          width: '20%',
        }}
      >
        <FavIcon id={id}/>
      </Box>
    </Box>
  )
}

const styles: MyStylesType = {
  card: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
    borderBottom: 0.1,
    
  },
  name: {
    fontSize: isMobile ? 14 : 18,
    fontWeight: 500,
  },
  weatherIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.cyan,
    ml: 2,
  },
  tempContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.grey,
    textTransform: 'none',
    color: colors.lightBlack,
  },
}
export default CitySearchListCard
