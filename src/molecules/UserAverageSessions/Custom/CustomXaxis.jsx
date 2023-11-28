
/**
 * 
 * @param {number} day
 * @returns {string}
 * @description This component is used to convert and display the day in number to a day in letter.
 * 
 */

const dayNumberToDayLetter = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
  error : 'ER'
}  

const CustomXaxis = (day) => {
  if (dayNumberToDayLetter[day]) return dayNumberToDayLetter[day]
  return dayNumberToDayLetter.error
}


export default CustomXaxis