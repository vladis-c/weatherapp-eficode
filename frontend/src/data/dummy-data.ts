import { WeatherDataType } from '../types/types'

export const dummy_data: WeatherDataType = {
  base: 'stations',
  clouds: { all: 0 },
  cod: 200,
  coord: { lon: -98, lat: 38 },
  dt: 1666863003,
  id: 4279645,
  main: {
    feels_like: 6.72,
    humidity: 61,
    pressure: 1015,
    temp: 9.5,
    temp_max: 9.95,
    temp_min: 7.48,
  },
  name: 'Helsinki',
  sys: {
    type: 2,
    id: 2005053,
    country: 'US',
    sunrise: 1666875146,
    sunset: 1666913943,
  },
  timezone: -18000,
  visibility: 10000,
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '10d' }],
  wind: { speed: 5.66, deg: 140 },
}

export const dummy_forecast: WeatherDataType[] = [
  {
    dt: 1666969200,
    main: {
      temp: 11.09,
      feels_like: 10.79,
      temp_min: 10.84,
      temp_max: 11.09,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 1009,
      humidity: 97,
      temp_kf: 0.25,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 98,
    },
    wind: {
      speed: 5.96,
      deg: 245,
      gust: 12.19,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-28 15:00:00',
  },
  {
    dt: 1666980000,
    main: {
      temp: 10.95,
      feels_like: 10.63,
      temp_min: 10.67,
      temp_max: 10.95,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 1008,
      humidity: 97,
      temp_kf: 0.28,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 98,
    },
    wind: {
      speed: 5,
      deg: 241,
      gust: 10.97,
    },
    visibility: 9151,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-28 18:00:00',
  },
  {
    dt: 1666990800,
    main: {
      temp: 10.66,
      feels_like: 10.31,
      temp_min: 10.45,
      temp_max: 10.66,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 1007,
      humidity: 97,
      temp_kf: 0.21,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 4.09,
      deg: 230,
      gust: 8.2,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-28 21:00:00',
  },
  {
    dt: 1667001600,
    main: {
      temp: 10.2,
      feels_like: 9.81,
      temp_min: 10.2,
      temp_max: 10.2,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 1005,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.56,
      deg: 229,
      gust: 6.76,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-29 00:00:00',
  },
  {
    dt: 1667012400,
    main: {
      temp: 10.08,
      feels_like: 9.65,
      temp_min: 10.08,
      temp_max: 10.08,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1002,
      humidity: 96,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.57,
      deg: 231,
      gust: 9.54,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-29 03:00:00',
  },
  {
    dt: 1667023200,
    main: {
      temp: 10.58,
      feels_like: 10.17,
      temp_min: 10.58,
      temp_max: 10.58,
      pressure: 1002,
      sea_level: 1002,
      grnd_level: 999,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.97,
      deg: 224,
      gust: 13.94,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-10-29 06:00:00',
  },
  {
    dt: 1667034000,
    main: {
      temp: 10.78,
      feels_like: 10.45,
      temp_min: 10.78,
      temp_max: 10.78,
      pressure: 998,
      sea_level: 998,
      grnd_level: 995,
      humidity: 97,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 9.09,
      deg: 223,
      gust: 16.35,
    },
    visibility: 1597,
    pop: 1,
    rain: {
      '3h': 1.64,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-10-29 09:00:00',
  },
  {
    dt: 1667044800,
    main: {
      temp: 11.71,
      feels_like: 11.08,
      temp_min: 11.71,
      temp_max: 11.71,
      pressure: 995,
      sea_level: 995,
      grnd_level: 993,
      humidity: 82,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 9.38,
      deg: 262,
      gust: 14.84,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 0.19,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-10-29 12:00:00',
  },
  {
    dt: 1667055600,
    main: {
      temp: 10.82,
      feels_like: 9.92,
      temp_min: 10.82,
      temp_max: 10.82,
      pressure: 994,
      sea_level: 994,
      grnd_level: 991,
      humidity: 75,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 73,
    },
    wind: {
      speed: 10.12,
      deg: 262,
      gust: 16.13,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-29 15:00:00',
  },
]
