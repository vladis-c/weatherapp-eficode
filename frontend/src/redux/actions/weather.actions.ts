import { ApiEndpointsEnum } from '../../enums/enums'
import { LocationType, WeatherDataType } from '../../types/types'

const baseURL = process.env.ENDPOINT || 'http://localhost:3000/api'

export const fetchWeatherFromApi = async (
  currentLocation: LocationType,
  endpoint: ApiEndpointsEnum
) => {
  const { lon, lat, city } = currentLocation
  const latestUrlpart = () => {
    if (
      endpoint === ApiEndpointsEnum.COORDS ||
      endpoint === ApiEndpointsEnum.FORECAST_COORDS
    ) {
      return `lon=${lon.toString()}&lat=${lat.toString()}`
    }
    if (
      endpoint === ApiEndpointsEnum.CITY ||
      endpoint === ApiEndpointsEnum.FORECAST
    ) {
      return `city=${city}`
    }
  }
  const url = `${baseURL}/${endpoint}?${latestUrlpart()}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
  const data: WeatherDataType | WeatherDataType[] = await response.json()
  return data
}
