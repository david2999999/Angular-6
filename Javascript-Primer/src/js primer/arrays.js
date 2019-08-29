// I have created a new array by calling new Array(). This creates an empty array, which I assign to the
// variable myArray. In the subsequent statements, I assign values to various index positions in the array.
let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;


let myArray = [100, "Adam", true];
myArray[0] = "Tuesday";
console.log("Index 0: " + myArray[0]);

// The JavaScript for loop works just the same way as loops in many other languages. You determine how
// many elements there are in the array by using the length property.
// The function passed to the forEach method is given two arguments: the value of the current item
// to be processed and the position of that item in the array. In this listing, I have used an arrow function as
// the argument to the forEach method, which is the kind of use for which they excel
let myArray = [100, "Adam", true];
for (let i = 0; i < myArray.length; i++) {
  console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach((value, index) => console.log("Index " + index + ": " + value));
