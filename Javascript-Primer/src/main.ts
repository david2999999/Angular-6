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

let myFunc = function () {
  console.log("This is a statement");
};

myFunc();
