export class Name {
  constructor(private first: string, private second: string) {}

  get nameMessage() : string {
    return `Hello ${this.first} ${this.second}`;
  }
}

export class WeatherLocation {
  constructor(private weather: string, private city: string) {}

  get weatherMessage() : string {
    return `It is ${this.weather} in ${this.city}`;
  }
}

// Properties are declared with a type annotation, following the same pattern as for parameter and result
// annotations. The changes in Listing 6-17 resolve the remaining errors reported by the TypeScript compiler, which
// was complaining because it didn’t know what the types were for the properties created in the constructors.
