import { createSlice } from '@reduxjs/toolkit'

export type WeatherSliceInitialState = {  
  error: string
  loading: boolean
}

const initialState: WeatherSliceInitialState = {   
  error: '',
  loading: false,
}

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    fetchWeatherByCity: (state, action) => {
      state.loading = true
      state.error = ""
    },
    fetchWeatherByCitySuccess: (state, action) => {
      state.loading = false
      state.error = ""
    },
    fetchWeatherByCityFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
   
  },
})

export const {
  fetchWeatherByCity,
} = weatherSlice.actions
export default weatherSlice.reducer
