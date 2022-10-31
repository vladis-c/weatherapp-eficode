import { isMobile } from 'react-device-detect'

import { AccordionDetails } from '../UI/MUIComponents'
import type { MyStylesType } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { colors } from '../../styles/colors'
import TextDivider from '../Home/TextDivider'
import CitySearchListCard from './CitySearchListCard'
import { fetchWeatherCityName } from '../../redux/slices/weatherSlice'

const CitiesSearchList = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch()
  const { historySlice } = useAppSelector((state) => state)
  const { favourites, recentSearchHistory } = historySlice

  return (
    <AccordionDetails sx={styles.container}>
      {recentSearchHistory.length !== 0 ? (
        <TextDivider text="Recents" textColor={colors.grey} />
      ) : null}
      {recentSearchHistory.map(({ id, name, temp, icon }) => (
        <CitySearchListCard
          key={id}
          id={id}
          name={name}
          temp={temp}
          icon={icon}
          onOpenCity={() => {
            dispatch(fetchWeatherCityName(name))
            onClose()
          }}
        />
      ))}
      {favourites.length !== 0 ? (
        <TextDivider text="Favourites" textColor={colors.grey} />
      ) : null}
      {favourites.map(({ id, name, temp, icon }) => (
        <CitySearchListCard
          key={id}
          id={id}
          name={name}
          temp={temp}
          icon={icon}
          onOpenCity={() => {
            dispatch(fetchWeatherCityName(name))
            onClose()
          }}
        />
      ))}
    </AccordionDetails>
  )
}

const styles: MyStylesType = {
  container: {
    width: '100%',
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
    borderBottom: 0.1,
    borderColor: colors.grey,
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
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default CitiesSearchList
