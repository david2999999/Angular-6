class MyClass {
  constructor(name, weather) {
    this.name = name;
    this.weather = weather;
  }
  printMessages() {
    console.log("Hello " + this.name + ". ");
    console.log("Today is " + this.weather + ".");
  }
}

let myData = new MyClass("Adam", "sunny");
myData.printMessages();

// JavaScript classes will be familiar if you have used another mainstream language such as Java or C#.
// The class keyword is used to declare a class, followed by the name of the class, which is MyClass in this case.
// The constructor function is invoked when a new object is created using the class, and it provides
// an opportunity to receive data values and do any initial setup that the class requires. In the example, the
// constructor defines name and weather parameters that are used to create variables with the same names.
// Variables defined like this are known as properties.
