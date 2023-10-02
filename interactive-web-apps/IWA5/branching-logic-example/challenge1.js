const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
// Zero was changed from a string to a number (we removed quotes)
const NONE_SELECTED = 0;

// All the below declared variables were moved from bottom to top (to allow code to run with JS flow)
// Included 'let' and removed qoutes from "1"
let customers = 1;
let location = "RSA";
// Made the currency an empty string to accomodate different currencies
let currency = "";
// Shipping value changed from 'null' to zero as a number
let shipping = 0;

// included 'let' in each of the below variables
let shoes = 300 * 1;
// change '-' on toys to '='
let toys = 100 * 5;
let shirts =
  150 * NONE_SELECTED; /* Removed strings from the value 'NONE_SELECTED'*/
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let total =
  shoes +
  toys +
  batteries +
  pens +
  shirts; /*added this total for the above line items*/
// Added brackets aroung Namibia's condition, and used '===' instead of '='
// condition values of RSA and NAM were changed into a string(i.e we added quotation marks), we used === instead of one '=' (assigning) on the conditions
if (location === "RSA") {
  shipping = 400;
  currency = "R";
} else if (location === "NAM") {
  shipping = 600;
  currency = "$";
  // added the below condition for North Korea
} else if (location === "NK") {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
  currency = "$";
}

/*put the encapsulating (brackets) over the 2 independent conditions to make them one. In general, we have the parents brackets and children brackets if we have >1 conditions */
if ((total >= 1000 && currency === "R") || (total >= 60 && currency === "$")) {
  if (location === "NAM" || location === "RSA") {
    if (customers === 1) {
      shipping = 0;
    } else {
      console.log(FREE_WARNING);
    }
  }
}
console.log("price:", currency + (total + shipping));

// Overall thought: approach with segmenting aspects of the code for countries, for items, shipping made it easier to tackle, instead of trying to fit in all conditions
