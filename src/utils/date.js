import { formats } from '@constants/dateFormats'

const isEquals = (date1, date2) => date1.format(formats.american) === date2.format(formats.american)
const isSameDay = (date1, date2) => date1.isSame(date2, 'day')

export { isEquals, isSameDay }
