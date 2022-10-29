import { takeLatest, all, select, call, put } from 'redux-saga/effects'
import { ApiEndpointsEnum } from '../../enums/enums'
import { WeatherDataType } from '../../types/types'
import { fetchWeatherFromApi } from '../actions/weather.actions'
import { setSearchLocationInput } from '../slices/historySlice'
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
  setLocation,
  fetchForecastCityName,
  fetchForecastCityNameFailed,
  fetchForecastCityNameSuccess,
} from '../slices/weatherSlice'
import { RootState } from '../store'

function* fetchWeatherCurrentLocationSaga() {
  const { weatherSlice }: RootState = yield select()
  const { currentLocation } = weatherSlice
  try {
    const data: WeatherDataType = yield call(
      fetchWeatherFromApi,
      currentLocation,
      ApiEndpointsEnum.COORDS
    )
    yield put(fetchWeatherCurrentLocationSuccess(data))
    yield put(fetchForecastCurrentLocation())
  } catch (error) {
    yield put(fetchWeatherCurrentLocationFailed(JSON.stringify(error)))
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
  try {
    const data: WeatherDataType[] = yield call(
      fetchWeatherFromApi,
      currentLocation,
      ApiEndpointsEnum.FORECAST_COORDS
    )
    yield put(fetchForecastCurrentLocationSuccess(data))
  } catch (error) {
    yield put(fetchForecastCurrentLocationFailed(JSON.stringify(error)))
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
    yield put(fetchForecastCityName())
  } catch (error) {
    yield put(fetchWeatherCityNameFailed(JSON.stringify(error)))
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
    yield put(fetchForecastCityNameFailed(JSON.stringify(error)))
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
