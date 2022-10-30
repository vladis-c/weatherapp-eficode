import { PayloadAction } from '@reduxjs/toolkit'
import { select, put, takeEvery, all } from 'redux-saga/effects'
import { doTemp, roundNumber } from '../../helpers/helper-functions'
import {
  setCityToFavouritesSuccess,
  setCityToFavourites,
} from '../slices/historySlice'
import { RootState } from '../store'

function* setCityToFavouritesSaga(action: PayloadAction<number>) {
  const { weatherSlice, historySlice }: RootState = yield select()
  const { currentLocationData, requestedCityData } = weatherSlice
  const { recentSearchHistory } = historySlice

  const currentLocationCity = currentLocationData.id === action.payload
  const requestedCity = requestedCityData.id === action.payload
  const recentSearchHistoryCity = recentSearchHistory.find(
    (city) => city.id === action.payload
  )  

  if (recentSearchHistoryCity) {
    yield put(setCityToFavouritesSuccess(recentSearchHistoryCity))
    return
  }
  if (currentLocationCity) {
    yield put(
      setCityToFavouritesSuccess({
        name: currentLocationData.name ? currentLocationData.name : '',
        coord: currentLocationData.coord
          ? currentLocationData.coord
          : {
              lon: 0,
              lat: 0,
            },
        id: currentLocationData.id ? currentLocationData.id : 0,
        temp: doTemp(roundNumber(currentLocationData.main.temp)),
        icon: currentLocationData.weather[0].icon,
        favourite: true,
      })
    )
    return
  }
  if (requestedCity) {
    yield put(
      setCityToFavouritesSuccess({
        name: requestedCityData.name ? requestedCityData.name : '',
        coord: requestedCityData.coord
          ? requestedCityData.coord
          : {
              lon: 0,
              lat: 0,
            },
        id: requestedCityData.id ? requestedCityData.id : 0,
        temp: doTemp(roundNumber(requestedCityData.main.temp)),
        icon: requestedCityData.weather[0].icon,
        favourite: true,
      })
    )
    return
  }
  
}

function* setCityToFavouritesWatcher() {
  yield takeEvery(setCityToFavourites.type, setCityToFavouritesSaga)
}

export default function* historySaga() {
  yield all([setCityToFavouritesWatcher()])
}
