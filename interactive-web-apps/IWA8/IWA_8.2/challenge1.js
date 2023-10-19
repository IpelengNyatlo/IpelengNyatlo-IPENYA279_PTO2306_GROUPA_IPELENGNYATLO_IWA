const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line
// Inserted an '=' sign to declare 'leo'. Replaced all the '=' inside the object with colons. I put commmas at the end of each object value to separate them
const leo = {
	name : leoName, /* removed leoSurname because leoName is includes both name and surname*/
	balance : Math.abs(parseFloat(leoBalance)), /*added Math.abs and parseFloat to convert the number into a positive value*/
	access_id : `47afb389-8014-4d0b-aff3-e40203d2107f`, /*used snake naming convention for the id and put backtickcs on the value to turn it into a string*/
	age : 24,
	address : {
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal
	}
};

const sarah =  {
	name : sarahName.trim() +' '+ sarahSurname, /*added 'h' to saraName and Surname, added .trimEnd to remove the space in Sarah's string*/
	age : 62,
	access_id : `6b279ae5-5657-4240-80e9-23f6b635f7a8`,
	balance: Math.abs(parseFloat(sarahBalance)),
	address :{
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal /* N2S you don't have to put a commma at the end of the last instruction*/
	}
};

// removed the other details that followed leo and sarah in the console log
console.log(leo, leo.address.postalCode); 
console.log(sarah, sarah.address.postalCode);

// Point of the exercise: to fix the syntax for objects (E.g const variable = { key : object value,}
// PS Think of objects as folders where you can have 'sub folders'

