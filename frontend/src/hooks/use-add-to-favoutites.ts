import {
  removeCityFromFavourites,
  setCityToFavourites,
} from '../redux/slices/historySlice'
import { useAppDispatch, useAppSelector } from './redux-hooks'

/**
 * Custom hook.
 * Used to handle set and remove favourites.
 * Vladislav Cherkasheninov 30.10.2022
 */
export const useAddToFavourites = () => {
  const dispatch = useAppDispatch()
  const { historySlice } = useAppSelector((state) => state)
  const { favourites} = historySlice
  
  const handleFavourites = (cityId: number) => {
    if (favourites.some((city) => city.id === cityId)) {
      dispatch(removeCityFromFavourites(cityId))
    } else {
      dispatch(setCityToFavourites(cityId))
    }
  }
  return { handleFavourites }
}
