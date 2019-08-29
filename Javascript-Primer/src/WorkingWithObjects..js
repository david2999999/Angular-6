let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";

console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");


let myData = {
  name: "Adam",
  weather: "sunny"
};

console.log("Hello " + myData.name + ". ");
console.log("Today is " + myData.weather + ".");

let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: function () {
    console.log("Hello " + this.name + ". ");
    console.log("Today is " + this.weather + ".");
  }
};
myData.printMessages();
