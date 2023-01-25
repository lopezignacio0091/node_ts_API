
import express from 'express'
import * as diaryServices from '../services/Diary/diary'
import toNewDiaryEntry from '../utils'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesSpecific())
})

router.get('/:id', (_req, res) => {
  const diary = diaryServices.getFindByIdEntry(+_req.params.id)
  return (diary != null) ? res.send(diary) : res.status(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const newDiary = diaryServices.addEntry(newDiaryEntry)
    res.send(newDiary)
  } catch (e) {
    res.status(400).send({ message: getErrorMessage(e) })
  }
})
export default router
