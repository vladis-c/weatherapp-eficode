import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeatherDataType, LocationType } from '../../types/types'

export type WeatherSliceInitialState = {
  currentLocation: LocationType
  currentLocationData: WeatherDataType
  currentLocationForecast: WeatherDataType[]
  requestedCityData: WeatherDataType
  requestedCityForecast: WeatherDataType[]
  error: string
  success: boolean
  loading: boolean
}

const initialStateOfWeatherData = {
  base: '',
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: '',
  sys: {
    type: 0,
    id: 20,
    country: 'US',
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  visibility: 0,
  weather: [{ id: 0, main: '', description: '', icon: '' }],
  wind: { speed: 0, deg: 0 },
  dt_txt: '',
}

const initialStateOfLocation = {
  lat: 0,
  lon: 0,
  city: 'Helsinki',
}

const initialState: WeatherSliceInitialState = {
  currentLocation: initialStateOfLocation,
  currentLocationData: initialStateOfWeatherData,
  currentLocationForecast: [],
  requestedCityData: initialStateOfWeatherData,
  requestedCityForecast: [],
  error: '',
  success: false,
  loading: false,
}

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationType>) => {
      state.currentLocation = action.payload
    },
    fetchWeatherCurrentLocation: (state) => {
      state.loading = true
      state.error = ''
    },
    fetchWeatherCurrentLocationSuccess: (
      state,
      action: PayloadAction<WeatherDataType>
    ) => {
      if (action.payload) {
        state.currentLocationData = action.payload
      }
      state.requestedCityData = initialState.requestedCityData
      state.loading = false
      state.error = ''
    },
    fetchWeatherCurrentLocationFailed: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false
      state.error = action.payload
    },
    fetchForecastCurrentLocation: (state) => {
      state.loading = true
      state.error = ''
    },
    fetchForecastCurrentLocationSuccess: (
      state,
      action: PayloadAction<WeatherDataType[]>
    ) => {
      if (action.payload) {
        state.currentLocationForecast = action.payload
      }
      state.loading = false
      state.error = ''
    },
    fetchForecastCurrentLocationFailed: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false
      state.error = action.payload
    },
    fetchWeatherCityName: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.currentLocation = {
        ...state.currentLocation,
        city: action.payload
      }
      state.loading = true
      state.error = ''
    },
    fetchWeatherCityNameSuccess: (
      state,
      action: PayloadAction<WeatherDataType>
    ) => {
      if (action.payload) {
        state.requestedCityData = action.payload
      }
      state.currentLocationData = initialState.currentLocationData
      state.loading = false
      state.error = ''
    },
    fetchWeatherCityNameFailed: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    fetchForecastCityName: (state) => {
      state.loading = true
      state.error = ''
    },
    fetchForecastCityNameSuccess: (
      state,
      action: PayloadAction<WeatherDataType[]>
    ) => {
      if (action.payload) {
        state.requestedCityForecast = action.payload
      }
      state.loading = false
      state.error = ''
    },
    fetchForecastCityNameFailed: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  setLocation,
  fetchWeatherCityName,
  fetchWeatherCityNameFailed,
  fetchWeatherCityNameSuccess,
  fetchWeatherCurrentLocation,
  fetchForecastCurrentLocation,
  fetchForecastCurrentLocationFailed,
  fetchForecastCurrentLocationSuccess,
  fetchWeatherCurrentLocationSuccess,
  fetchWeatherCurrentLocationFailed,
  fetchForecastCityName,
  fetchForecastCityNameFailed,
  fetchForecastCityNameSuccess,
} = weatherSlice.actions
export default weatherSlice.reducer
