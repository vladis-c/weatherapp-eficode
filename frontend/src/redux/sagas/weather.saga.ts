import { takeLatest, all, select, call, put } from 'redux-saga/effects'
import { ApiEndpointsEnum } from '../../enums/enums'
import { WeatherDataType } from '../../types/types'
import { fetchWeatherFromApi } from '../actions/weather.actions'
import {
  fetchWeatherCurrentLocation,
  fetchWeatherCurrentLocationSuccess,
  fetchWeatherCurrentLocationFailed,
  fetchWeatherCityNameFailed,
  fetchWeatherCityNameSuccess,
  fetchWeatherCityName,
} from '../slices/weatherSlice'
import { RootState } from '../store'

function* fetchWeatherCurrentLocationSaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice
  if (currentLocation) {
    try {
      const data: WeatherDataType = yield call(
        fetchWeatherFromApi,
        currentLocation,
        ApiEndpointsEnum.COORDS
      )
      yield put(fetchWeatherCurrentLocationSuccess(data))
    } catch (error) {
      yield put(fetchWeatherCurrentLocationFailed(JSON.stringify(error)))
    }
  }
}

function* fetchWeatherCurrentLocationWatcher() {
  yield takeLatest(
    fetchWeatherCurrentLocation.type,
    fetchWeatherCurrentLocationSaga
  )
}

function* fetchWeatherCityNameSaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice
  if (currentLocation) {
    try {
      const data: WeatherDataType = yield call(
        fetchWeatherFromApi,
        currentLocation,
        ApiEndpointsEnum.CITY
      )
      yield put(fetchWeatherCityNameSuccess(data))
    } catch (error) {
      yield put(fetchWeatherCityNameFailed(JSON.stringify(error)))
    }
  }
}

function* fetchWeatherCityNameWatcher() {
  yield takeLatest(fetchWeatherCityName.type, fetchWeatherCityNameSaga)
}

export default function* weatherSaga() {
  yield all([
    fetchWeatherCurrentLocationWatcher(),
    fetchWeatherCityNameWatcher(),
  ])
}
