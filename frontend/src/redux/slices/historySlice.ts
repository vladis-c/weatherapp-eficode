import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CityType } from '../../types/types'

export type HistorySliceInitialState = {
  searchLocationInput: string
  recentSearchHistory: CityType[]
  favourites: CityType[]
}

const initialState: HistorySliceInitialState = {
  searchLocationInput: '',
  recentSearchHistory: [],
  favourites: [],
}

const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    setCityToFavourites: (state, action: PayloadAction<CityType>) => {
      const alreadyExists = state.favourites.some(
        (city) => city.id === action.payload.id
      )
      if (!alreadyExists) {
        state.favourites.unshift(action.payload)
      }
    },
    setCityToRecents: (state, action: PayloadAction<CityType>) => {
      const objIndex = state.recentSearchHistory.findIndex(
        (city) => city.name === action.payload.name
      )
      const objByName = state.recentSearchHistory.find(
        (city) => city.name === action.payload.name
      )
      if (objIndex !== -1 && objByName) {
        state.recentSearchHistory.slice(objIndex, 1)
        state.recentSearchHistory.unshift(objByName)
      } else {
        state.recentSearchHistory.unshift(action.payload)
      }
    },
    setSearchLocationInput: (state, action: PayloadAction<string>) => {
      state.searchLocationInput = action.payload
    },
  },
})

export const { setCityToRecents, setSearchLocationInput } = historySlice.actions
export default historySlice.reducer
