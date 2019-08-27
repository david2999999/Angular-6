var model = {
  user: "Adam",
  items: [{ action: "Buy Flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect Tickets", done: true },
    { action: "Call Joe", done: false }]
};

// One of the most important features of TypeScript is that you can just write “normal” JavaScript code as
// though you were targeting the browser directly. In Listing 2-4, I used the JavaScript object literal syntax to
// assign a value to a global variable called model. The data model object has a user property, which provides
// the name of the application’s user, and an items property, which is set to an array of objects with action and
// done properties, each of which represents a task in the to-do list.

export class Model {
  user;
  items;
  constructor() {
    this.user = "Adam";
    this.items = [new TodoItem("Buy Flowers", false),
      new TodoItem("Get Shoes", false),
      new TodoItem("Collect Tickets", false),
      new TodoItem("Call Joe", false)]
  }
}

export class TodoItem {
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
