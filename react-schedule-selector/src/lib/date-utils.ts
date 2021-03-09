import startOfDay from 'date-fns/start_of_day'
import isAfter from 'date-fns/is_after'

// Helper function that uses date-fns methods to determine if a date is between two other dates
export const dateHourIsBetween = (start: Date, candidate: Date, end: Date): boolean =>
  (candidate.getTime() === start.getTime() || isAfter(candidate, start)) &&
  (candidate.getTime() === end.getTime() || isAfter(end, candidate))

export const dateIsBetween = (start: Date, candidate: Date, end: Date): boolean => {
  const startOfCandidate = startOfDay(candidate)
  const startOfStart = startOfDay(start)
  const startOfEnd = startOfDay(end)

  return (
    (startOfCandidate.getTime() === startOfStart.getTime() || isAfter(startOfCandidate, startOfStart)) &&
    (startOfCandidate.getTime() === startOfEnd.getTime() || isAfter(startOfEnd, startOfCandidate))
  )
}

export const timeIsBetween = (start: Date, candidate: Date, end: Date): boolean => {
  const candidateTime = candidate.getHours() * 60 + candidate.getMinutes()
  const startTime = start.getHours() * 60 + start.getMinutes()
  const endTime = end.getHours() * 60 + end.getMinutes()

  return candidateTime >= startTime && candidateTime <= endTime
}
