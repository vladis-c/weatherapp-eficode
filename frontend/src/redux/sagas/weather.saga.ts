import { takeLatest, all, select, call, put } from 'redux-saga/effects'

import { ApiEndpointsEnum } from '../../enums/enums'
import { roundNumber, doTemp } from '../../helpers/helper-functions'
import { WeatherDataType } from '../../types/types'
import { fetchWeatherFromApi } from '../actions/weather.actions'
import {
  setCityToRecents,
  setSearchLocationInput,
} from '../slices/historySlice'
import {
  fetchWeatherCurrentLocation,
  fetchWeatherCurrentLocationSuccess,
  fetchWeatherCurrentLocationFailed,
  fetchWeatherCityNameFailed,
  fetchWeatherCityNameSuccess,
  fetchWeatherCityName,
  fetchForecastCurrentLocation,
  fetchForecastCurrentLocationFailed,
  fetchForecastCurrentLocationSuccess,
  fetchForecastCityName,
  fetchForecastCityNameFailed,
  fetchForecastCityNameSuccess,
} from '../slices/weatherSlice'
import { RootState } from '../store'

const errorMessage = 'error when fetching data'

function* fetchWeatherCurrentLocationSaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice
  const { lon, lat } = currentLocation
  const endpoint = lat && lon ? ApiEndpointsEnum.COORDS : ApiEndpointsEnum.CITY
  try {
    const data: WeatherDataType = yield call(
      fetchWeatherFromApi,
      currentLocation,
      endpoint
    )
    yield put(fetchWeatherCurrentLocationSuccess(data))
    yield put(fetchForecastCurrentLocation())
  } catch (error) {
    yield put(fetchWeatherCurrentLocationFailed(errorMessage))
  }
}

function* fetchWeatherCurrentLocationWatcher() {
  yield takeLatest(
    fetchWeatherCurrentLocation.type,
    fetchWeatherCurrentLocationSaga
  )
}

function* fetchForecastCurrentLocationSaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice
  const { lon, lat } = currentLocation
  const endpoint =
    lat && lon ? ApiEndpointsEnum.FORECAST_COORDS : ApiEndpointsEnum.FORECAST
  try {
    const data: WeatherDataType[] = yield call(
      fetchWeatherFromApi,
      currentLocation,
      endpoint
    )
    yield put(fetchForecastCurrentLocationSuccess(data))
  } catch (error) {
    yield put(fetchForecastCurrentLocationFailed(errorMessage))
  }
}

function* fetchForecastCurrentLocationWatcher() {
  yield takeLatest(
    fetchForecastCurrentLocation.type,
    fetchForecastCurrentLocationSaga
  )
}

function* fetchWeatherCityNameSaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice

  try {
    const data: WeatherDataType = yield call(
      fetchWeatherFromApi,
      currentLocation,
      ApiEndpointsEnum.CITY
    )
    yield put(fetchWeatherCityNameSuccess(data))
    yield put(setSearchLocationInput(''))
    if (
      data.name &&
      data.coord &&
      data.id &&
      data.main.temp &&
      data.weather[0].icon
    ) {
      yield put(
        setCityToRecents({
          name: data.name,
          coord: data.coord,
          id: data.id,
          temp: doTemp(roundNumber(data.main.temp)),
          icon: data.weather[0].icon,
        })
      )
    }
    yield put(fetchForecastCityName())
  } catch (error) {
    yield put(fetchWeatherCityNameFailed(errorMessage))
  }
}

function* fetchWeatherCityNameWatcher() {
  yield takeLatest(fetchWeatherCityName.type, fetchWeatherCityNameSaga)
}

function* fetchForecastCitySaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice
  try {
    const data: WeatherDataType[] = yield call(
      fetchWeatherFromApi,
      currentLocation,
      ApiEndpointsEnum.FORECAST
    )
    yield put(fetchForecastCityNameSuccess(data))
  } catch (error) {
    yield put(fetchForecastCityNameFailed(errorMessage))
  }
}

function* fetchForecastCityWatcher() {
  yield takeLatest(fetchForecastCityName.type, fetchForecastCitySaga)
}

export default function* weatherSaga() {
  yield all([
    fetchWeatherCurrentLocationWatcher(),
    fetchWeatherCityNameWatcher(),
    fetchForecastCurrentLocationWatcher(),
    fetchForecastCityWatcher(),
  ])
}
