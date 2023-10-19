const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

// inserted dollar signs, removed + signs between the names and used backtick to complete the syntax for the literal template.
// removed the backslashes before the quotes because I used backticks, which allow me to use quotes within a string without needing to escape the quotes using a backslash

const owed = parseInt(leoBalance) + parseInt(sarahBalance); /*Removed R parsed the balances from a string to a number using parseInt*/
const leo = `${leoName} ${leoSurname} Owed R ${Math.abs(parseFloat(leoBalance)).toFixed(2)}`; /*Changed the balance to 'leoBalance' from 'sarahBalance', Used parseFloat to allow the balance to have decimals and used Math.abs() to convert the negative value into a positive value*/
const sarah = `${sarahName} ${sarahSurname} Owed R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)}`; /*fixed the variable names related to sarah within the template literals*/
const total = 'Total amount owed: ';
const result = `${leo}\n${sarah}\n\n${divider}\n\t${total}\tR ${Math.abs(owed).toFixed(2)}\n${divider}`; /*used the .toFixed(2) to set decimal places to 2, used \t to indent two empty spaces at the beginning and end of the total */

console.log(result);