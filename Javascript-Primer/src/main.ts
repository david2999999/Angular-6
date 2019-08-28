import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

// 1. The TypeScript compiler will detect the change to the main.ts file and compile
  // it to generate a new main.js file that can run in any browser. The code that is
  // produced is combined with the other JavaScript code produced by the compiler
  // into a single file called a bundle.

// 2. The development HTTP server detects the change to the bundle file and signals
  // the browser to reload the HTML document.

// 3. The browser reloads the HTML document and starts processing the elements
  // it contains. It loads the JavaScript files specified by the script elements in the
  // HTML document, including one that specifies the bundle file that contains the
  // statements from the main.ts file.

// 4. The browser executes the statements that were originally in the main.ts file,
  // which writes out two messages to the browser’s JavaScript console.

let myFunc = function(name, weather) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
};
myFunc("Adam", "sunny");

// There are two ways that you can modify a function to respond to a mismatch between the number
// of parameters it defines and the number of arguments used to invoke it. Default parameters deal with the
// situation where there are fewer arguments than parameters, and they allow you to provide a default value for
// the parameters for which there are no arguments,
let myFunc2 = function (name, weather = "raining") {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
};
myFunc2("Adam");


// The rest parameter must be the last parameter defined by the function, and its name is prefixed with an
// ellipsis (three periods, ...). The rest parameter is an array to which any extra arguments will be assigned.
let myFunc3 = function (name, weather, ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
};
myFunc3("Adam", "sunny", "one", "two", "three");


let myFunc4 = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName = (nameFunction, printFunction) => printFunction(myFunc4(nameFunction));
printName(function () { return "Adam" }, console.log);


// The let keyword is used to declare variables and, optionally, assign a value to the variable in a single
// statement. Variables declared with let are scoped to the region of code in which they are defined
let messageFunction = function (name, weather) {
  let message = "Hello, Adam";
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction("Adam", "raining");


// The inner function in this example is able to access the local variables of the outer function, including
// its name parameter. This is a powerful feature that means you don’t have to define parameters on inner
// functions to pass around data values, but caution is required because it is easy to get unexpected results
// when using common variable names like counter or index, where you may not realize that you are reusing a
// variable name from the outer function
let myFunc5 = function(name) {
  let myLocalVar = "sunny";
  let innerFunction = function () {
    return ("Hello " + name + ". Today is " + myLocalVar + ".");
  }
  return innerFunction();
};
console.log(myFunc5("Adam"));


// Template strings begin and end with backticks (the ` character), and data values are denoted by curly
// braces preceded by a dollar sign. This string, for example, incorporates the value of the weather variable into
// the template string
let messageFunction2 = function (weather) {
  let message = `It is ${weather} today`;
  console.log(message);
}
messageFunction2("raining");
