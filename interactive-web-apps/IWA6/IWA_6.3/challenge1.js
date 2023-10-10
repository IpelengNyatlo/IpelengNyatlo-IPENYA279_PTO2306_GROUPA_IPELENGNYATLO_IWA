// it is useful to still do validation on number to confirm that they only contain numerical characters (even if they are strings). In the example below the user has accidently typed the alphabetical O character instead of the zero 0 number.
// This means that the primary validation should fail (resolving to false, however since the secondary number is correct it should pass (resolving to true). At the moment both values return false , in other words:
// Primary phone is valid numerical string: false
// Secondary phone is valid numerical string: false

const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

// isNaN(primaryPhone) checks if primaryPhone can be converted to a number. If it can't (i.e., it contains non-numeric characters), isNaN returns true, and primaryValid is set to false. If it can be converted to a number, isNaN returns false, and primaryValid is set to true.
// used isNaN to checks if the string only contains numerical characters
// Removed the 'typeof ==' and used isNaN to validate the strings
// isNaN is used to check if the result of parseFloat is not a number
const primaryValid = !isNaN(parseFloat(primaryPhone));
const secondaryValid = !isNaN(parseFloat(secondaryPhone));

// Alternatives: If isNaN returns true, ! (logical NOT) negates it to false, and if isNaN returns false, ! negates it to true. This way, you achieve the same result without the need for conditional ternary operators. This is a much cleaner code.
// const primaryValid = !isNaN(primaryPhone);
// const secondaryValid = !isNaN(secondaryPhone);

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);

// Concepts: Point of the exercise was for validating the type of number in the string and using braching logic (ternary conditions) that should
