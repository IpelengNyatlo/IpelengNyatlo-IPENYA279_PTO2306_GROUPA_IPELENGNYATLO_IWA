// changed : to '=' for the date and status variables and changed 'date' to year
const year = 2050;
// Changed const to 'let' for status and count
let status = "student";
let count = 0;

// Should be in one bracket: There 
// 1 = : you're assigning a variable. 3 = signs means comparing
if (year === 2050) {
  // Added a closing bracket for 1st console log
  console.log("January", "New Year’s Day");
  console.log("March", "Human Rights Day");
  //   I don't have to write let or const for the below line because it's within a local scope.
  date = "April";
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  //   Removed let from the below: because it would be basically redeclaring let and overriding the first 'let' that was declared at the top initially
  //  changed  count = count + 4; to  count += 4; NB! + and = but be right next to each other
  count += 4;

  if (status === "student") {
    console.log("June", "Youth Day");
    // Changed count = count + 1 to  count++
    count++;
  }

  console.log("August", "Women’s Day");
  console.log("September", "Heritage Day");
  date = "December";
  console.log(date, "Day of Reconciliation");
  //   I removed let from function below
  count = count + 3;

  if (status === "parent") {
    console.log(date, "Christmas Day");
    // This let below does not have an error as the other ones because it is within the function (local scope)
    // I removed 'let' and Changed count = count + 1 to  count++
    count++;
  }

  console.log(date, "Day of Goodwill");
  //   I removed 'let' and Changed count = count + 1 to  count++
  count++;
}

console.log("Your status is:", status);
console.log("The year is:", date);
console.log("The total holidays is:", count);
