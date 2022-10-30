import {
  removeCityFromFavourites,
  setCityToFavourites,
} from '../redux/slices/historySlice'
import { useAppDispatch, useAppSelector } from './redux-hooks'

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
