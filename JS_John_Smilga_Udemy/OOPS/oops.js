//////////////////////// Object basics /////////////////////////////////

// Objects are collection of key(property) value pair.
// Propery value can be String,numbers,boolean,arrays and function
// If propery value is function then it called a method

// object literals syntax, {}
// property can be accessed by dot notation

/*
const person = {
  name: "john",
  age: 25,
  sibling: ["ind", "pak"],
  greet: function (name) {
    console.log(`my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
};

console.log(person);

// access
console.log(person.name);

// update
person.age = 52;

// create
person.city = "tokyo";

// delete
const isDeleted = delete person.sibling;
console.log(isDeleted);

console.log(person);
*/

//////////////////////////////// Object Advanced //////////////////////////

// nested object
// set variable as property value
// dot notation VS bracket notation

/*
let age = 84;
let randomValue = "random-value";

const person = {
  name: "john",
  age: age,
  sibling: ["ind", "pak"],
  greet: function (name) {
    console.log(`my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
  job: {
    title: "automation developer",
    company: {
      name: "meditab",
      address: "US",
    },
  },
  "random-value": "random",
};


// // meditab
// console.log(person.job.company.name);

// // undefined
// console.log(person.job.salery);

// // TypeError
// console.log(person.jobby.company);


console.log(person["name"]);
console.log(person["random-value"]);
console.log(person[randomValue]);
*/

//////////////////////// this - keyword basic /////////////////////////////

// this - points to the left of the dot

/*
const john = {
  firstName: "john",
  lastName: "smilga",
  fullName() {
    console.log(this);
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  },
};

const prof = {
  firstName: "james",
  lastName: "anderson",
  fullName() {
    console.log(this);
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
prof.fullName();
*/

/////////////////////////// this - keyword Advanced /////////////////////////

// In Regular function (not arrow) "this" is determined by "HOW"!!! a function is invoked(left of .)

// if nothing is there at left of '.' then by default 'this' point to 'window' which is global

// window
//console.log(this);

/*
function showThis() {
  console.log(this);
}

const john = {
  name: "john",
  showThis: showThis,
};

const james = {
  name: "james",
  showThis: showThis,
};

john.showThis();
james.showThis();

// window
showThis();

// btns
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

// btn-1
btn1.addEventListener("click", showThis);

// btn-2
btn2.addEventListener("click", showThis);

// window
btn2.addEventListener("click", function () {
  showThis();
});
*/

/////////////////////////////// Factory function ///////////////////////////////////

// Factory function - Blue Print for creating object

/*
const john = {
  firstName: "john",
  lastName: "smilga",
  fullName() {
    console.log(this);
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  },
};

const prof = {
  firstName: "james",
  lastName: "anderson",
  fullName() {
    console.log(this);
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  },
};
*/

/*
// Factory function
function createFunction(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(`my name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const john = createFunction("john", "smilga");
john.fullName();
const chris = createFunction("chris", "jordon");
chris.fullName();
*/

//////////////////////////////// Constructor function ///////////////////////////

// new keyword - create new object, points to it and no need to use return keyword(omit return keyword)

/*
// Constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  };
  console.log(this);
}

const john = new Person("John", "smilga");
john.fullName();

const james = new Person("James", "Anderson");
james.fullName();
*/

///////////////////////////////// Constructor property /////////////////////////////////

// All Object in javaScript have access to constructor propery that returns a constructor function which created that Object

// there are some built in Constructor function (Object, Array, Function)
// Array and Function are Object in javaScript as we r able to access constructor property

/*
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  };
  console.log(this);
}

const john = new Person("john", "smilga");
console.log(john.constructor);

const harry = {};
console.log(harry.constructor);

const fruits = [];
console.log(fruits.constructor);

const operation = function () {};
console.log(operation.constructor);

const smith = new john.constructor("smith", "steve");
smith.fullName();
*/

///////////////////////////// Prototype Property ///////////////////////////////

// Prototypal Inheritance Model
// JavaScript uses Prototypla Inheritance Model. That means that every Constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be accessed by every instance.

// prototype proptery return Object

/*
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  //   this.bank = "ICICI";
  console.log(this);
}

const john = new Account("john", 200);
const smith = new Account("smith", 500);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Your balance is ${this.balance}`);
};

console.log(john.bank);
john.deposit(100);
smith.deposit(24);
*/

////////////////////////////// ES6 Class Syntax ///////////////////////////////////

/*
class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "CHASE";
  deposit(amount) {
    this.balance += amount;
    console.log(`Your balance is ${this.balance}`);
  }
}

const john = new Account("john", 200);
console.log(john);
console.log(john.bank);
john.deposit(100);

const smith = new Account("smith", 500);
console.log(smith);
console.log(smith.bank);
smith.deposit(400);
*/

/////////////////////////////// Call method ///////////////////////////////

// call - run instantly, arguments - list of items
// eg --> function.call(param) - now 'this' will points to param object
// call - it can change where 'this' is pointing to

/*
const john = {
  name: "john",
  age: 24,
  greet() {
    console.log(this);
    console.log(`my name is ${this.name}`);
  },
};

const smith = {
  name: "smith",
  age: 42,
};

function greet() {
  console.log(this);
  console.log(`my name is ${this.name}`);
}

//john.greet();

// below will fail

//smith.greet();
//greet();  //---> 'this' is 'window'

//const storeGreet = john.greet;
//storeGreet();  //---> 'this' is 'window'

// call
greet.call(john);
greet.call(smith);
greet.call({ name: "peter", age: "20" });

john.greet.call(smith);
*/

///////////////////////// Apply method, Argument ////////////////////////////

// apply - run instantly, arguments - array of items

/*
const john = {
  name: "john",
  age: 24,
};

const smith = {
  name: "smith",
  age: 42,
};

function greet(city, country) {
  console.log(this);
  console.log(`my name is ${this.name}. from ${city}, ${country}`);
}

// call - arguments--> list of items
greet.call(john, "tokyo", "japan");
greet.call(smith, "tokyo", "japan");

// apply - arguments--> array of items
greet.apply(john, ["LA", "USA"]);
greet.apply(smith, ["LA", "USA"]);
*/

/////////////////////////////////// Bind method /////////////////////////////////

// bind - assign, use or call it later, arguments - list of items
// bind - doesn't run instantly, we need to explicitly invoke

/*
const john = {
  name: "john",
  age: 24,
};

const smith = {
  name: "smith",
  age: 42,
};

function greet(city, country) {
  console.log(this);
  console.log(`my name is ${this.name}. from ${city}, ${country}`);
}

// bind - arguments---> list of items
const storeBind = greet.bind(smith, "paris", "france");
storeBind();
*/

///////////////////////////////// Button example //////////////////////////////////////

/*
const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn1 = document.querySelector(".btn-1");

// 'this' points to 'btn-1'
//btn1.addEventListener("click", counter.increment);

// some edge case --> what if we wanna remove callback function? We don't have reference of callback function
//btn1.addEventListener("click", counter.increment.bind(counter));

// no edge case

// store
const increment = counter.increment.bind(counter);

// add event
btn1.addEventListener("click", increment);

// remove event
btn1.removeEventListener("click", increment);
*/
