import * as NameAndWeatherLocation from "./NameAndWeather";
import { Name as OtherName } from "./DuplicateName";

let name = new NameAndWeatherLocation.Name("Adam", "Freeman");
let loc = new NameAndWeatherLocation.WeatherLocation("raining", "London");
let other = new OtherName();

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);

// The import statement in this example imports the contents of the NameAndWeather module and creates
// an object called NameAndWeatherLocation. This object has Name and Weather properties that correspond to
// the classes defined in the module.
