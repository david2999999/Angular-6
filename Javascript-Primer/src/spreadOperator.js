// The spread operator is used to expand an array so that its contents can be used as function arguments or
// combined with other arrays
let myArray = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];
for (let i = 0; i < otherArray.length; i++) {
  console.log(`Array item ${i}: ${otherArray[i]}`);
}

let otherArray = [...myArray, 200, "Bob", false];
// Using the spread operator, I am able to specify myArray as an item when I define otherArray, with
// the result that the contents of the first array will be unpacked and added as items to the second array.
