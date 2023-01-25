import { NewDiaryEntry, Weather, Visibility } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) { throw new Error('Comentario Incorrecto, valide que sea de tipo texto') }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('La fecha es  Incorrecta')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) { throw new Error('Weather Incorrecto') }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) { throw new Error('Visibility Incorrecto') }
  return visibilityFromRequest
}

// string instanceof String cuando crean una instancia con New String se valida asi
const isString = (string: string): boolean => typeof string === 'string'
const isDate = (date: string): boolean => Boolean(Date.parse(date))
const isWeather = (weather: any): boolean => Object.values(Weather).includes(weather)
const isVisibility = (params: any): boolean => Object.values(Visibility).includes(params)

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
