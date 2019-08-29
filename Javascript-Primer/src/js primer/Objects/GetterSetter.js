class MyClass {
  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }
  set weather(value) {
    this._weather = value;
  }
  get weather() {
    return `Today is ${this._weather}`;
  }
  printMessages() {
    console.log("Hello " + this.name + ". ");
    console.log(this.weather);
  }
}

let myData = new MyClass("Adam", "sunny");
myData.printMessages();

// The getter and setter are implemented as functions preceded by the get or set keyword. There is no
// notion of access control in JavaScript classes, and the convention is to prefix the names of internal properties
// with an underscore (the _ character). In the listing, the weather property is implemented with a setter that
// updates a property called _weather and a getter that incorporates the _weather value in a template string
