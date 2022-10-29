import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeatherDataType, LocationType } from '../../types/types'

export type WeatherSliceInitialState = {
  currentLocation: LocationType
  newLocation: LocationType 
  currentLocationData: WeatherDataType
  currentLocationForecast: WeatherDataType
  requestedCityData: WeatherDataType
  requestedCityForecast: WeatherDataType
  error: string
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
}

const initialStateOfLocation = {
  lat: 0,
  lon: 0,
  city: '',
}

const initialState: WeatherSliceInitialState = {
  currentLocation: initialStateOfLocation,
  newLocation: initialStateOfLocation,
  currentLocationData: initialStateOfWeatherData,
  currentLocationForecast: initialStateOfWeatherData,
  requestedCityData: initialStateOfWeatherData,
  requestedCityForecast: initialStateOfWeatherData,
  error: '',
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
      state.currentLocationData = action.payload
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
    fetchWeatherCityName: (state) => {
      state.loading = true
      state.error = ''
    },
    fetchWeatherCityNameSuccess: (
      state,
      action: PayloadAction<WeatherDataType>
    ) => {
      state.requestedCityData = action.payload
      state.loading = false
      state.error = ''
    },
    fetchWeatherCityNameFailed: (state, action: PayloadAction<string>) => {
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
  fetchWeatherCurrentLocationSuccess,
  fetchWeatherCurrentLocationFailed,
} = weatherSlice.actions
export default weatherSlice.reducer
