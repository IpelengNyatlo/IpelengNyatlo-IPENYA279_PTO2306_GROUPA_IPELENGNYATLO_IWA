// The following code is meant to run every hour of the day to check a user’s balance should be calculated. The only time the balance should be calculated is when it is the start of a new day (in other words midnight, when hourOfDay and minuteOfDay are both 0). However, there are cases where the time is not known (in which case both hourOfDay and minuteOfDay will be undefined. To prevent any bugs, the balance should not be calculated if the time is not known.
// Before calculating the cost, tax needs to be deduced as a percentage of the salary. After this is done all expenses should be subtracted such as food, transport and rent. The final result should be 274.0499. However, you are required to use toFixed(2) to only show cents (up to only 2 decimals) and prefix the value with a R symbol. This means that the final logged value should be R 274.05.

const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
// we removed one zero from the times of the day(because actual real numbers don't start with zero)
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line


let currecy = "R";
let balance = undefined

// I put the conditions in one brackets and removed the rest
if (hourOfDay === 0 && minuteOfDay === 0) {
  // removed '' from the value '100' and '1' to turn it from being a string to being a number and used ParseInt to convert '8%' to being a number
  const taxAsDecimal = parseInt(tax) / 100;
  const startingAfterTax =
    salary * (1 - taxAsDecimal); /* I put brackets around '1 - taxAsDecimal*/
   balance = startingAfterTax - transport - food - rent;
}
console.log(currecy, balance.toFixed(2));
// changed 3 to 2 to set # of decimal places and included 'currecy' which I declared above to be included in the balance read.
