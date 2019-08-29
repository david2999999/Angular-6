var MyClass = function MyClass(name, weather) {
  this.name = name;
  this.weather = weather;
}

MyClass.prototype.printMessages = function () {
  console.log("Hello " + this.name + ". ");
  console.log("Today is " + this.weather + ".");
};
var myData = new MyClass("Adam", "sunny");
myData.printMessages();

// Angular development is easier when using classes, which is the approach that I have taken throughout
// this book. A lot of the features introduced in ES6 are classified as syntactic sugar, which means
// they make aspects of JavaScript easier to understand and use. The term syntactic sugar may seem
// pejorative, but JavaScript has some odd quirks, and many of these features help developers avoid
// common pitfalls.
