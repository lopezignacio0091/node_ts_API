
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'Stormy'
}
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Peor = 'peor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// EXTIENDE LA INTERFACE AGREGANDO SOLO LOS ATRIBUTOS QUE NECESITA
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'comment' | 'date' | 'weather'>

// Extiende la interface omitiendo el ID
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
