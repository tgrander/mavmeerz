export function dateFormatter(cell, row){
  const numberToMonths = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  }

  const month = cell.slice(5,7)
      , day = cell.slice(8,10)
      , year = cell.slice(0,4)

  return `${numberToMonths[month]} ${day}, ${year}`
}
