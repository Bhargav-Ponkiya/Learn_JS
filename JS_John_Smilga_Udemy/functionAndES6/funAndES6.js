///////////////////////// IIFE /////////////////////////////////////////

// IIFE - Immediately-Invoked Function Expression
// this is older approach now. Nowadays we use Modules from ES6
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it

/*
// normal function
const num1 = 26;
const num2 = 64;

function add() {
  console.log(`sum is ${num1 + num2}`);
}

add();

// IIFE
(function (num3, num4) {
  console.log(`sum using IIFE is ${num3 + num4}`);
})(24, 86);
*/

//////////////////////////////// Hoisting /////////////////////////////////

// function and var declaration are hoisted
// js move function and var declaration to the top of code
// NOTE: safer to access only after initialized

/*
display(); //---> output: hello world
moreComplex(); // error if this function access const or let. var will give undefined
//console.log(firstName);  // error
//console.log(lastName);   // error
console.log(random); ///---> output: undefined

const firstName = "john";
let lastName = "smilga";
var random = "random";

function display() {
  console.log("hello world");
}

function moreComplex() {
  console.log(`hello ${firstName} ${lastName}. how ${random}`);
}
*/

////////////////////////////// Closure /////////////////////////////////////////

// closure - gives you an access to an outer function's scope from an inner function
// make private variable with closure

/*
function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is: ${privateVar}`);
  }
  return inner;
}

// 1 way
outer()();

//2 way
const storeInner = outer();
storeInner();
*/

//////////////////////////////// Closure example //////////////////////////////

/*
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount("susan", 22)();

const john = newAccount("john", 89);
const james = newAccount("james", 43);

john();
james();
*/

/*
function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  function deposit(amount) {
    if (amount <= 0) {
      console.log(`${amount} is not valid amount to deposit`);
      return;
    }
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`${amount} is not valid amount for withdrow. less balance`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance, deposit, withdraw };
}

//newAccount("susan", 100).showBalance();

const john = newAccount("john", 200);
const james = newAccount("james", 300);

john.showBalance();
john.deposit(400);
john.deposit(100);
john.withdraw(200);
john.withdraw(3000);
james.showBalance();
*/

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////// ES6 ///////////////////////////////////////////

// ES6 - last major update - in 2015

///////////////////////////// var, let, const /////////////////////////////////

// define, update, redefine
// const - can't mutate primitive type but it can mutate not-primitive type

/*
// define
var number = 122;
console.log(number);

// update
number = 44;
console.log(number);

// redefine
var number = "orange";
console.log(number);

// define
let amount = 55;
console.log(amount);

// update
amount = 59;
console.log(amount);

// redefine
//let amount = "33"; //--> error

// define
const total = 100;
console.log(total);

// update
//total = 99;          //--> error

// redefine
//const total = "hello"; //--> error

//////////// const - can mutate non-primitive type
const person = { name: "john", age: 20 };

// update
person.name = "james";

// add
person.city = "tokyo";

// assign
//person = { amount: 222 };   //--> error

console.log(person);
*/

//////////////////////////// Function Scope and Block Scope ////////////////////////

// var - function scoped
// let, const - blocked scoped {} - anything within {}

/*
// global scope
var amount = 100;

function greet() {
  // local scope
  var amount = 40;
  console.log(`your amount is ${amount}`);  // 40
}
greet();

console.log(amount);  // 100
*/

/*
var amount = 100;
if (true) {
  var amount = 22;
  console.log(`your amount is ${amount}`);  // 22
}
console.log(amount); // 22
*/

/*
// global scope
let total = 100;

if (true) {
  // local scope
  let total = 22;
  console.log(`your total is ${total}`); // 22
}
console.log(total); // 100
*/

/*
// global scope
let total = 100;
{
  // local scope
  let total = 99;
  console.log(total); // 99
}
console.log(total); // 100
*/

//////////////////////////////// Template String ////////////////////////////////

// Template String/Literal
// ``(backticks)

/*
const name = "john";
const age = 43;

const phrase = "Hello " + name + ". What's your plan at age " + age;
console.log(phrase);

const phrase2 = `Hello ${name}. What's your plan at age ${age}`;
console.log(phrase2);
*/

/////////////////////////////// Template String - HTML /////////////////////////

// body of HTML
/*
<body>
  <h1>Function and ES6</h1>
  <div id="result"></div>
  <script src="funAndES6.js"></script>
</body>;
*/

/*
const person = {
  name: "john",
  job: "developer",
  hobbies: ["surfing", "baking", "bowling"],
};

const result = document.getElementById("result");

result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map(function (item) {
    return `<li>${item}</li>`;
  })
  .join("")}</ul>
`;
*/

////////////////////////////// Arrow Functions - Basics ////////////////////////

// Arrow function or Fat Arrow function
// no name
// always need to use expression, assigne to variable
// no function keyword

/*
// normal function
function sayHello() {
  console.log("hello world");
}
sayHello();

// function expression
const hello = function (name) {
  console.log(`hello ${name}`);
};
hello("john");

// with parameters
function twoParam(num1, num2) {
  return num1 - num2;
}

const result = twoParam(43, 3);
console.log(result);
*/

/*
const sayHello = () => console.log("hello world");
sayHello();

const double = (num) => num * 2;
const doubleValue = double(6);
console.log(doubleValue);

// two parameter and more than one line in function body
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more codes here
  return result;
};
const mul = multiply(2, 4);
console.log(mul);
*/

/*
////////// return Object - add parenthesis ({object})
const obj = () => ({ name: "john", age: 32 });
console.log(obj());

/////////// Arrow functions as a callback function
const numbers = [1, 2, 3, 4, 5, 6];
const biggerThanTwo = numbers.filter((num) => num > 2);
console.log(biggerThanTwo);

const numbers1 = [1, 2, 3, 4, 5, 6];
const biggerThanTwo1 = numbers1.filter((num, index) => {
  console.log(index);
  return num > 2;
});
console.log(biggerThanTwo1);

////////////// Arrow function in event listener
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("button clicked"));
*/

///////////////////// Arrow function - Object and 'this' /////////////////////////////

// regular function - 'this' refers to parent or left of the dot(.)
// arrow function - 'this' refers to it's current surrounding scope

/*
const will = {
  firstName: "will",
  lastName: "smith",
  sayName: function () {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

const john = {
  firstName: "john",
  lastName: "anderson",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

will.sayName();
john.sayName();
*/

/*
const will = {
  firstName: "will",
  lastName: "smith",
  sayName: function () {
    console.log(this);

    //////// Regular function
    // setTimeout(function () {
    //   console.log(this);  // here, 'this' points to window
    //   console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    // }, 2000);

    //////// Arrow function
    setTimeout(() => {
      console.log(this); // here, 'this' points to 'will' Object
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

will.sayName();
*/

///////////////////////// Arrow function - Select Element and 'this' eg. /////////////////////

//const btn = document.querySelector(".btn");

/*
btn.addEventListener("click", function () {
  this.style.color = "blue";   // here, 'this' points to a btn element
});
*/

/*
btn.addEventListener("click", () => {
  this.style.color = "blue";  // here, 'this' points to window, so error is coming
});
*/

/*
btn.addEventListener("click", function () {
  setTimeout(function () {
    this.style.color = "blue"; // here, 'this' points to window, so error is coming
  }, 2000);
});
*/

/*
btn.addEventListener("click", function () {
  setTimeout(() => {
    this.style.color = "blue"; // here, 'this' points to btn element
  }, 2000);
});
*/

//////////////////////// Default Parameters and Hoisting of Arrow function ///////////////////

/*
const john = "john";
const james = "james";

// regular function hoisting
sayHi(john); // work

// default parameter
function sayHi(person = "joey") {
  console.log(`hi, ${person}`);
}

// Arrow function hoisting - not possible
sayHello(); // not work - give error

// default parameter
const sayHello = (person = "ross") => console.log(`hello, ${person}`);

//sayHi();
//sayHello("rahul");
*/

////////////////////////////// Array Destructuring ////////////////////////////

// faster/easier way to access/unpack values

// const friends = ["joey", "ross", "pheobe", "rachel"];

// const [fr1, fr2, fr3, fr4] = friends;
// console.log(fr1, fr2, fr3, fr4);

// const [fr1, fr2, fr3, fr4, fr5] = friends;
// console.log(fr1, fr2, fr3, fr4, fr5);

// const [fr1, , , fr4] = friends;
// console.log(fr1, fr4);

////////////////////////////// Swap Variables ////////////////////////////////

/*
let first = "john";
let second = "smilga";

[first, second] = [second, first];
console.log(first, second);
*/

///////////////////////// Object Destructuring //////////////////////////////////

// NOTE: variable name should match with key(property) in Object

/*
const john = {
  name: "john",
  age: 53,
  city: "tokyo",
  siblings: {
    sister: "berlin",
  },
};

// const {
//   name,
//   age,
//   city,
//   siblings: { sister },
// } = john;
// console.log(name, age, city, sister);

///////////////// here we can change variable name
const {
  name: firstName,
  age,
  siblings: { sister },
} = john;
console.log(firstName, age, sister);
*/

//////////////////////// Destructuring function Parameters /////////////////////////

/*
const john = {
  name: "john",
  age: 53,
  city: "tokyo",
  siblings: {
    sister: "berlin",
  },
};

// function printPersonInfo(person) {
//   console.log(person.name, person.age, person.city);
// }

// function printPersonInfo(person) {
//   const { name, age, city } = person;
//   console.log(name, age, city);
// }

// Destructuring function Parameters
function printPersonInfo({ name, age, city }) {
  console.log(name, age, city);
}

printPersonInfo(john);
*/

///////////////////////// new String methods //////////////////////////////////////

// startsWith(), endsWith(), includes(), repeat()

/*
const person = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JON-DOE";

// startsWith()
// console.log(person.startsWith("Pet"));
//console.log(employee.startsWith("EMP", 6)); // give starting index

// endsWith()
// console.log(manager.endsWith("DOE"));
// console.log(manager.endsWith("MAN", 9));    // give length

// includes()
// console.log(employee.includes("EMP"));
// console.log(manager.includes("JON"));

// repeat()
const multiplyPeople = (people, times) => people.repeat(times);
const value = multiplyPeople(person, 5);
console.log(value);
*/

////////////////////////////// 'for of' - loop ///////////////////////////////

// 'for of' - loop through the values of an iterable object
// String, Array, Map, Set etc --> work
// not Object -> not work on object
// unlike forEach - we can use brake, continue in 'for of' loop

/*
const longName = "Bhar Gav Pon Kiya";
let nameWithoutSpace = "";

for (const singleWord of longName) {
  if (singleWord === " ") {
    continue;
  }
  nameWithoutSpace += singleWord;
}

console.log(nameWithoutSpace);
*/

/*
const fruits = ["apple", "orange", "banana", "grapse"];

for (const fruit of fruits) {
  if (fruit === "banana") {
    break;
  }
  console.log(fruit);
}
*/

/////////////////////////////// Spread Operator - Basics //////////////////////

// Spread operator ----> ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them

/*
const udemy = "udemy";
const letters = [...udemy];
console.log(letters);
*/

/*
const boys = ["joey", "ross", "chandler"];
const girls = ["pheobe", "reachel", "monica"];
const bestFriend = "zendaya";

const allItems = [...boys, bestFriend, ...girls];
console.log(allItems);

// reference, both points to the same data in memory
// const newFriends = allItems;

// copy values
const newFriends = [...allItems];
newFriends[0] = "john";
console.log(newFriends);
console.log(allItems);
*/

////////////////////////// Spread Operator - Object //////////////////////

// from ES2018 - ES8, we can use Spread Operator(...) on Object also

/*
const person = { name: "john", age: 33 };
const newPerson = { ...person, city: "tokyo", name: "ross" };
console.log(person);
console.log(newPerson);
*/

//////////////////////////// Spread Operator - DOM Element /////////////////////////

// we can convert nodelist(returned by querySelectorAll) into array using Spread operator(...)

/*
<body>
  <h1>Function and ES6</h1>
  <h1>javaScript</h1>
  <h1>HTML</h1>
  <h1>CSS</h1>
  <h2 id="result"></h2>
  <button class="btn">click me</button>
  <script src="funAndES6.js"></script>
</body>;
*/

/*
const headings = document.querySelectorAll("h1");
const result = document.querySelector("#result");

const combineText = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join("");

result.innerHTML = combineText;
*/

//////////////////////// Spread operator - Function Arguments /////////////////////

/*
const numbers = [3, 2, 6, 7, 37, 3];
console.log(Math.max(...numbers));
*/

/*
const name = ["john", "smilga"];

const sayHello = (first, last) => console.log(`Hello, ${first} ${last}`);

sayHello(...name);
*/

///////////////////////// Rest operator /////////////////////////////////////

// Rest operator ----> ...
// used when destructuring and as function parameter(variable number of parameter)

/*
// arrays destructuring
const fruits = ["apple", "banana", "grapes", "orange"];
const [first, second, ...restFruits] = fruits;
console.log(first, second, restFruits);
*/

/*
// object destructuring
const person = { name: "john", age: 34, job: "developer" };
const { age, ...restProperty } = person;
console.log(age, restProperty);
*/

/*
// use Rest operator(...) at function parameters
const getAverage = (name, ...scores) => {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage("john", 23, 45, 64, 26);

const allScore = [53, 63, 22, 26, 83, 77];

// pass Spread opeator(...) as a function argument
getAverage("ross", ...allScore);
*/

//////////////////////////// Array.of ////////////////////////////////////////

// Arrow.of and Arrow.from ---> NOT on the prototype
// Arrow.of - creates a new Array instance from a variable number of arguments

/*
const example = ["one", "two", "three"];
console.log(example);
console.log(example.map);
console.log(example.of);   // ---> undefined, because not available on prototype
console.log(example.from); // ---> undefined, because not available on prototype
*/

/*
const person = Array.of("John", 34, true);
console.log(person);
*/

///////////////////////////// Array.from - String and Argument Object(in function) ////////////////////

// Array.from - not available on prototype
// Array.from - returns Array Object from any object with a length property or an iterable object
// Arrah.from - turns array-like/ish(String, nodelist, Set) into array

/*
const udemy = "udemy";
console.log(Array.from(udemy));
*/

/*
function countTotal() {
  // 'arguments' object available in function
  console.log(arguments);  // it is array-like/ish

  const sum = Array.from(arguments).reduce(
    (total, currentItem) => (total += currentItem),
    0
  );

  console.log(sum);
}

countTotal(1, 2, 3, 4, 5);
*/

/////////////////////////// Array.from - DOM Element(NodeList) /////////////////////////

/*
<body>
  <p>john</p>
  <p>smith</p>
  <p>ross</p>
  <h1 id="first"></h1>
  <h2 id="second"></h2>
  <script src="funAndES6.js"></script>
</body>;
*/

/*
const p = document.querySelectorAll("p");
const first = document.getElementById("first");
const second = document.getElementById("second");

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join("|");
first.innerHTML = newText;

// 'second' argument in Array.from() is 'map' method
const text = Array.from(p, (item) => `<span>${item.textContent}</span>`).join(
  " "
);
second.innerHTML = text;
*/

////////////////////////// [find, findIndex, every, some] ---> Array methods /////////////////////////

// find - get specific item - return instance
// findIndex - get index of item - return number
// every - every item in array - return boolean
// some - at least one item in array - return boolean

/*
const people = [
  { id: 1, name: "john" },
  { id: 2, name: "ross" },
  { id: 3, name: "joey" },
];

const grades = ["A", "B", "C", "B", "A"];
const goodGrades = ["A", "B", "B", "A"];
*/

// filter method - always return array[] even if there is one item
/*
const ross = people.filter((item) => item.name === "ross");
console.log(ross);
console.log(ross[0].name);
*/

// find - return single intance
/*
const ross = people.find((item) => item.name === "ross");
console.log(ross.name);
*/

// findIndex
/*
const index = people.findIndex((item) => item.id === 3);
console.log(index);
const newPeople = people.slice(0, index);
console.log(newPeople);
*/

// every
/*
const allGoodGrades = grades.every((item) => item !== "C");
console.log(allGoodGrades);

const allGoodGrades1 = goodGrades.every((item) => item !== "C");
console.log(allGoodGrades1);
*/

// some
/*
const oneBadGrade = grades.some((item) => item === "C");
console.log(oneBadGrade);

const oneBadGrade1 = goodGrades.some((item) => item === "C");
console.log(oneBadGrade1);
*/

/////////////////////////// for in - method //////////////////////////////

// "for in" loop - iterate over object properties(keys)
// not advised to use it on arrays, especially if the 'order' is important
// on Array use "for of" loop instead

// Object
/*
const person = {
  name: "ross",
  age: 32,
  city: "tokyo",
};

for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
*/

// Array
/*
const friends = ["ross", "joey", "pheoby"];

for (const friendIndex in friends) {
  console.log(friends[friendIndex]);
}
*/

//////////////////////// Object.keys() //////////////////////////////////////////////

// Below methods convert Object into Array

// Object.keys() - converts property(key) names into array
// Object.values() - converts property values into array
// Object.entries() - converts both - property and value of property into array

/*
const person = { name: "ross", age: 25, city: "tokyo" };

// keys
// const arrKeys = Object.keys(person);
// console.log(arrKeys);

// values
// const arrValues = Object.values(person);
// console.log(arrValues);

// entries
const both = Object.entries(person);
console.log(both);

// map method
const keys = both.map(([first, second]) => {
  // const [first, second] = item;
  console.log(first, second);
  return first;
});
console.log(keys);

// for of method
for (const [first, second] of both) {
  console.log(first, second);
}
*/

/////////////////////////////// new Set() - General overview ///////////////////////

// Set Object - stores a collection of Unique values of Any Type

// new Set()
// add(value) - add single item
// delete(value) - delete single item - return boolean
// clear() - delete all item - doesn't return boolean
// has(value) - return boolean

/*
// define Set Object
const unique = new Set();

const randomVariable = "random";

// add()
unique.add("first");
unique.add("second");
unique.add(randomVariable);
unique.add("first");
unique.add("8");
unique.add(8);
unique.add(8);

console.log(unique);

// delete()
const isDeleted = unique.delete(randomVariable);
console.log(isDeleted);
console.log(unique);

// has()
const hasValue = unique.delete("second");
console.log(hasValue);
console.log(unique);

// clear()
const deleteAll = unique.clear();
console.log(deleteAll);
console.log(unique);
*/

////////////////////////// new Set() - use case ///////////////////////////////////

// new Set() - accepts iterable objects

/*
const products = [
  { company: "tcs", product: "react" },
  { company: "wipro", product: "angular" },
  { company: "google", product: "api" },
  { company: "info", product: "angular" },
];

// store all product into array
const productArray = products.map((item) => item.product);

// get unique product from array of all product
const uniqueProduct = new Set(productArray);

// convert Set into Array
const setToArray = ["all", ...uniqueProduct];

console.log(setToArray);

// In 1 line
const uniqueProductsInOneLine = [
  "all",
  ...new Set(products.map((item) => item.product)),
];

console.log(uniqueProductsInOneLine);
*/

/////////////////////////// String includes() ////////////////////////////////////

// String includes() - checks if a string contains another string

/*
const firstName = "Bhargav";
const result = firstName.includes("Bhar");
console.log(result);
const result1 = firstName.includes("r", 4);
console.log(result1);
*/

/*
const friends = [
  { name: "John Smilga" },
  { name: "Ross Galler" },
  { name: "Raechal Grenn" },
  { name: "Monica Galler" },
];

const text1 = "g";
const text2 = "galler";
const text3 = "j";

const result1 = friends.filter((item) =>
  item.name.toLocaleLowerCase().includes(text1)
);
console.log(result1);

const result2 = friends.filter((item) =>
  item.name.toLocaleLowerCase().includes(text2)
);
console.log(result2);

const result3 = friends.filter((item) =>
  item.name.toLocaleLowerCase().includes(text3)
);
console.log(result3);
*/

/////////////////////////// Array includes() ///////////////////////////////////////

// Array includes() - checks if the item is in array

/*
const fruits = ["apple", "banana", "grapes", "musk", "apple", "watermelon"];

const result1 = fruits.includes("apple");
const result2 = fruits.includes("grapes", 3);
const result3 = fruits.includes("water");

console.log(result1, result2, result3);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
