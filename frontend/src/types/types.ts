import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { PagesNamesEnum } from '../enums/enums'

export type ThemeColorsType = {
  [k: string]: string
}

export type PagesNamesType = {
  title: PagesNamesEnum
  icon: JSX.Element
  link: string
}

export type LocationType = {
  lat: number
  lon: number
  city?: string
}

export interface WeatherDataType {
  coord?: LocationType
  weather: {
    id: number
    main: string
    description: string
    icon: string
    [k: string]: any
  }[]
  base?: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level?: number
    grnd_level?: number
    temp_kf?: number
    [k: string]: any
  }
  visibility: number
  wind: { speed: number; deg: number; [k: string]: any }
  clouds: { all: number; [k: string]: any } | number
  dt: number
  sys: {
    type?: number
    id?: number
    country?: string
    sunrise?: number
    sunset?: number
    pod?: string
    [k: string]: any
  }
  timezone?: number
  id?: number
  name?: string
  cod?: number
  pop?: number
  dt_txt?: string
  [k: string]: any
}

export interface MyStylesType {
  [k: string]: SxProps<Theme>
}

export type CityType = {
  name: string,
  coord: LocationType,
  id: number
  temp?: string,
  icon?: string
  favourite?: boolean  
}