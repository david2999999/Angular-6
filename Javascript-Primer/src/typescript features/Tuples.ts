import {TempConverter} from "./Type Annotation Properties and Variables/MultipleOrAnyType";

let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoC("38")];

console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);

// Tuples are fixed-length arrays, where each item in the array is of a specified type. This is a vague-sounding
// description because tuples are so flexible
