import isBefore from 'date-fns/is_before'

import * as dateUtils from '../date-utils'

const linear = (selectionStart: Date | null, selectionEnd: Date | null, dateList: Array<Array<Date>>): Array<Date> => {
  let selected: Array<Date> = []
  if (selectionEnd == null) {
    if (selectionStart) selected = [selectionStart]
  } else if (selectionStart) {
    const reverseSelection = isBefore(selectionEnd, selectionStart)
    selected = dateList.reduce(
      (acc, dayOfTimes) =>
        acc.concat(
          dayOfTimes.filter(
            t =>
              selectionStart &&
              selectionEnd &&
              dateUtils.dateHourIsBetween(
                reverseSelection ? selectionEnd : selectionStart,
                t,
                reverseSelection ? selectionStart : selectionEnd
              )
          )
        ),
      []
    )
  }
  return selected
}

export default linear
