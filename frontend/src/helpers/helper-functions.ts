import { WindEnum } from '../enums/enums'

export const doDate = (d: number | string) => {
  const todaysDate = new Date(d)
  const previousDay = todaysDate.getTime() - 86400000
  const previousDate = new Date(previousDay)
  const dayOfTheWeek = previousDate.toLocaleString('default', {
    weekday: 'short',
  })
  const date = todaysDate.getDate()
  const month = todaysDate.toLocaleString('default', { month: 'short' })
  const hours = todaysDate.getHours()
  const minutes = todaysDate.getMinutes()

  return `${dayOfTheWeek}, ${date} ${month}, ${('0' + hours).slice(-2)}:${(
    '0' + minutes
  ).slice(-2)}`
}

export const doTime = (d: number | string) => {
  const dn = new Date(d).getTime()
  const todaysDate = new Date(typeof d === 'number' ? d * 1000 : dn)
  const hours = todaysDate.getHours()
  const minutes = todaysDate.getMinutes()

  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`
}

export const roundNumber = (t: number) => {
  return Math.round(t)
}

export const roundNumberToPrecision = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export const doWindDirection = (deg: number) => {
  if (deg >= 22.5 && deg < 67.5) {
    return WindEnum.NE
  }
  if (deg >= 67.5 && deg < 112.5) {
    return WindEnum.E
  }
  if (deg >= 112.5 && deg < 157.5) {
    return WindEnum.SE
  }
  if (deg >= 157.5 && deg < 202.5) {
    return WindEnum.S
  }
  if (deg >= 202.5 && deg < 247.5) {
    return WindEnum.SW
  }
  if (deg >= 247.5 && deg < 292.5) {
    return WindEnum.W
  }
  if (deg >= 292.5 && deg < 337.5) {
    return WindEnum.NW
  } else {
    return WindEnum.N
  }
}

export const doPressure = (pres: number) => {
  const coef = 0.750062 // ~coef of expression mmHg/bar . API returns bar, we convert it to mmhg
  return pres * coef
}

export const doTemp = (temp: number) => {
  if (temp > 0) {
    return `+${temp}`
  } else {
    return `${temp}`
  }
}
