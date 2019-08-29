// @ts-ignore
let firstVal = 5;
// @ts-ignore
let secondVal = "5";
// @ts-ignore
if (firstVal == secondVal) {
  console.log("They are the same");
} else {
  console.log("They are NOT the same");
}

// JavaScript is converting the two operands into the same type and comparing them. In essence, the
// equality operator tests that values are the same irrespective of their type. To help guard against this kind
// of error, the TypeScript compiler will generate a warning, although it will still generate the JavaScript code
// since this type of comparison is legal:
// Operator '==' cannot be applied to types 'number' and 'string'.
let firstVal2 = 5;
let secondVal2 = "5";
// @ts-ignore
if (firstVal2 === secondVal2) {
  console.log("They are the same");
} else {
  console.log("They are NOT the same");
}
