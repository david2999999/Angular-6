// The string concatenation operator (+) has a higher precedence than the addition operator (also +), which
// means JavaScript will concatenate variables in preference to adding.
let myData1 = 5 + 5;
let myData2 = 5 + "5";
console.log("Result 1: " + myData1);
console.log("Result 2: " + myData2);

// Notice that I placed the numeric value in parentheses, and then I called the toString method. This
// is because you have to allow JavaScript to convert the literal value into a number before you can call the
// methods that the number type defines. I have also shown an alternative approach to achieve the same effect,
// which is to call the String function and pass in the numeric value as an argument
let myData3 = (5).toString() + String(5);
console.log("Result: " + myData3);


// @ts-ignore
let firstVal = "5";
// @ts-ignore
let secondVal = "5";
let result = Number(firstVal) + Number(secondVal);
console.log("Result: " + result);
