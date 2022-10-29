import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeatherDataType, LocationType } from '../../types/types'

export type WeatherSliceInitialState = {
  currentLocation: LocationType | null
  newLocation: LocationType | null
  currentLocationData: WeatherDataType | null
  currentLocationForecast: any
  requestedCityData: WeatherDataType | null
  requestedCityForecast: any
  error: string
  loading: boolean
}

const initialState: WeatherSliceInitialState = {
  currentLocation: {
    lat: 0,
    lon: 0,
    city: "Helsinki"
  },
  newLocation: null,
  currentLocationData: null,
  currentLocationForecast: null,
  requestedCityData: null,
  requestedCityForecast: null,
  error: '',
  loading: false,
}

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
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
  fetchWeatherCityName,
  fetchWeatherCityNameFailed,
  fetchWeatherCityNameSuccess,
  fetchWeatherCurrentLocation,
  fetchWeatherCurrentLocationSuccess,
  fetchWeatherCurrentLocationFailed,
} = weatherSlice.actions
export default weatherSlice.reducer
