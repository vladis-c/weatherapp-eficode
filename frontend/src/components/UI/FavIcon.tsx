import { IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { colors } from '../../styles/colors'
import { useAppSelector } from '../../hooks/redux-hooks'
import { useAddToFavourites } from '../../hooks/use-add-to-favoutites'

type FavIconProps = {
  id?: number
}

const FavIcon = ({ id }: FavIconProps) => {
  const { handleFavourites } = useAddToFavourites()
  const { weatherSlice, historySlice } = useAppSelector((state) => state)
  const { currentLocationData, requestedCityData } = weatherSlice
  const requestedCityId = id || requestedCityData.id || currentLocationData.id
  const { favourites } = historySlice
  const favs = favourites.some((city) => city.id === requestedCityId)

  return (
    <IconButton
      onClick={() => {
        // dispatch(setIdOfTheCity(requestedCityId))
        requestedCityId &&  handleFavourites(requestedCityId)
      }}
      sx={{ color: 'inherit' }}
    >
      {favs ? (
        <StarIcon sx={{ color: colors.yellow }} />
      ) : (
        <StarOutlineIcon sx={{ color: 'inherit' }} />
      )}
    </IconButton>
  )
}

export default FavIcon
