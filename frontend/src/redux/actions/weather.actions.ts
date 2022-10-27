import { ApiEndpointsEnum } from '../../enums/enums'
import { LocationType, WeatherDataType } from '../../types/types'

const baseURL = process.env.ENDPOINT || 'http://localhost:9000/api'

export const fetchWeatherFromApi = async (
  currentLocation: LocationType,
  endpoint: ApiEndpointsEnum
) => {
  const { lon, lat, city } = currentLocation
  const latestUrlpart = () => {
    if (endpoint === ApiEndpointsEnum.COORDS) {
      return `lon=${lon}&lat=${lat}`
    }
    if (endpoint === ApiEndpointsEnum.CITY) {
      return `city=${city}`
    }
  }

  try {
    const response = await fetch(
      `${baseURL}/weatherbycoordinates?${latestUrlpart()}`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    )
    const data: WeatherDataType = await response.json()
    return data
  } catch (error) {
    console.log('fetchWeatherByCoordinates', error)
  }
}
