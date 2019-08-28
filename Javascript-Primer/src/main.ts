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
