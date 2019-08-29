export class Name {
  private first: any;
  private second: any;

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
  get nameMessage() {
    return `Hello ${this.first} ${this.second}`;
  }
}

export class WeatherLocation {
  private weather: any;
  private city: any;
  
  constructor(weather, city) {
    this.weather = weather;
    this.city = city;
  }
  get weatherMessage() {
    return `It is ${this.weather} in ${this.city}`;
  }
}
