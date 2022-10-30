import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocalStorageEnum } from '../../enums/enums'
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
    getLocalStorageItems: (state) => {
      const recents = localStorage.getItem(LocalStorageEnum.RECENTS)
      const favourites = localStorage.getItem(LocalStorageEnum.FAVOURITES)
      if (recents) {
        state.recentSearchHistory = JSON.parse(recents)
      }
      if (favourites) {
        state.favourites = JSON.parse(favourites)
      }
    },
    setCityToFavourites: (state, action: PayloadAction<number>) => {},
    setCityToFavouritesSuccess: (state, action: PayloadAction<CityType>) => {
      localStorage.removeItem(LocalStorageEnum.FAVOURITES)
      const alreadyExists = state.favourites.some(
        (city) => city.id === action.payload.id
      )
      if (!alreadyExists) {
        state.favourites.unshift(action.payload)
      }
      localStorage.setItem(
        LocalStorageEnum.FAVOURITES,
        JSON.stringify(state.favourites)
      )
    },
    removeCityFromFavourites: (state, action: PayloadAction<number>) => {
      localStorage.removeItem(LocalStorageEnum.FAVOURITES)
      const objIndexRec = state.recentSearchHistory.findIndex(
        (city) => city.id === action.payload
      )
      const objByIdRec = state.recentSearchHistory.find(
        (city) => city.id === action.payload
      )
      if (objIndexRec !== -1 && objByIdRec) {
        state.recentSearchHistory.splice(objIndexRec, 1, {
          ...objByIdRec,
          favourite: false,
        })
      }

      const objIndexFav = state.favourites.findIndex(
        (city) => city.id === action.payload
      )
      if (objIndexFav !== -1) {
        state.favourites.splice(objIndexFav, 1)
      }
      localStorage.setItem(
        LocalStorageEnum.FAVOURITES,
        JSON.stringify(state.favourites)
      )
    },
    setCityToRecents: (state, action: PayloadAction<CityType>) => {
      localStorage.removeItem(LocalStorageEnum.RECENTS)
      const { id, name } = action.payload
      const alreadyInFavourites = state.favourites.some(
        (city) => city.id === id
      )
      const objIndex = state.recentSearchHistory.findIndex(
        (city) => city.name === name
      )
      const objByName = state.recentSearchHistory.find(
        (city) => city.name === name
      )
      if (objIndex !== -1 && objByName) {
        state.recentSearchHistory.splice(objIndex, 1)
        state.recentSearchHistory.unshift(objByName)
      } else {
        state.recentSearchHistory.unshift({
          ...action.payload,
          favourite: alreadyInFavourites ? true : false,
        })
      }
      if (state.recentSearchHistory.length > 5) {
        state.recentSearchHistory.pop()
      }
      localStorage.setItem(
        LocalStorageEnum.RECENTS,
        JSON.stringify(state.recentSearchHistory)
      )
    },
    setSearchLocationInput: (state, action: PayloadAction<string>) => {
      state.searchLocationInput = action.payload
    },
  },
})

export const {
  getLocalStorageItems,
  setCityToFavourites,
  setCityToFavouritesSuccess,
  setCityToRecents,
  setSearchLocationInput,
  removeCityFromFavourites,
} = historySlice.actions
export default historySlice.reducer
