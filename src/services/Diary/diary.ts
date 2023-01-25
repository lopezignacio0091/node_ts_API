import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getFindByIdEntry = (id: number): DiaryEntry | undefined => {
  const diary = diaries.find(d => d.id === id)
  return diary
}

export const getEntriesSpecific = (): NonSensitiveInfoDiaryEntry[] => diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }))

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newEntry)
  return newEntry
}
