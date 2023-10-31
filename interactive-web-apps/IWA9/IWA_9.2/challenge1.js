const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
}

const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100 /*turned the tax value into a number by using parseInt, and put tax 'key' of 913... because it's not a valid key but a number, we put it inside square brackets*/
const startingAfterTax = salary * (1 - taxAsDecimal) /*added the brackets to active BODMAS*/
const type = `${size}-${lodging}` /*Used template literals to get the same rent variable (to be exactly the same as the string in the rent object)*/
const balance =startingAfterTax- expenses.transport - expenses.food - rent[type] /*changed brackets to dot notation to call transport and food from the expenses object, put rent inside square brackets to call it as a number and not a string */
console.log("total:",`R ${balance.toFixed(2)}`) /*added .tofixed(2), the currency symbol, and template literals*/