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

class MySubClass extends MyClass {
  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }
  printMessages() {
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}
let myData = new MySubClass("Adam", "sunny", "London");
myData.printMessages();

// The extends keyword is used to declare the class that will be inherited from, known as the superclass
// or base class. In the listing, the MySubClass inherits from MyClass. The super keyword is used to invoke the
// superclass’s constructor and methods. The MySubClass builds on the MyClass functionality to add support
// for a city
