import {TempConverter} from "./Type Annotation Properties and Variables/MultipleOrAnyType";

// The cities variable is defined as an indexable type, with the key as a string and the data value
// as a [string, string] tuple. Values are assigned and read using array-style indexers, such as
// cities["London"].
let cities: { [index: string]: [string, string] } = {};

cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
