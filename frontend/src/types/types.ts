import { PagesNamesEnum } from "../enums/enums"

export type ThemeColorsType = {
  [k:string]: string
}

export type PagesNamesType = {
  title: PagesNamesEnum
  icon: JSX.Element
}