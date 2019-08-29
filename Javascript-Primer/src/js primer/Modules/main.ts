import {Name, WeatherLocation} from "./NameAndWeather";
import { Name as OtherName } from "./DuplicateName";

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");
let other = new OtherName();

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);

// This is the way that I use the import keyword in most of the examples in this book. The keyword is
// followed by curly braces that contain a comma-separated list of the features that the code in the current files
// depends on, followed by the from keyword, followed by the module name. In this case, I have imported the
// Name and WeatherLocation classes from the NameAndWeather module in the modules folder. Notice that the
// file extension is not included when specifying the module.
