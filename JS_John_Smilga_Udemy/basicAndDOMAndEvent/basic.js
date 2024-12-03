/////////////////// Helper methods ///////////////////

// document.write('hello');
// alert('hello');
// console.log('hello');  // /Most useful

/*
document.write({name: 'write'});
alert({name: 'write'});
console.log({name: 'console'});
*/

////////////////// comments //////////////////////////

//single line comments
/*
multiple
line 
comments
*/

/////////////// Variables /////////////////////////////

// can contains digits,letters, underscore, and $
// can't start with digits
// can't be keyword
// case sensitive
// camelCase or under_score

/*
let _2$ran$5_ ="variable name rules"
console.log(_2$ran$5_);
*/

//var  : var is replaced by let and const in ES6
//let
//const : need to initiate when declared and can not reassign or modify

/*
var name="bhargav";
name="john";

let value="working";
value="completed";

const speed="consistent";
//speed="work";

console.log(name, value, speed);
*/

//////////////// Qutation Marks "" '' ``(ES6) //////////////////

/*
let value='hello\'s world';
value="hello's world"
console.log(value);
*/

/*
const website="google";
const url= "https://www."+website+".com";  //String concatenation with +
console.log(url);
*/

//////////////////// Numbers basics ////////////////////////////

//javascript: Loosely typed - don't declare type (we can make it strict using typescript)

/*
const number1=66;
const number3=5534.35;
let number2=452.52;
number2="decimal number contains . inbetween";

console.log(number1);
console.log(number3);
console.log(number2);

const add=number1+number3;
const sub=number1-number3;
const mul=number1*number3;
const div=number1/number3;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
*/

// +=,-=,*=,/=,++,--,%

/*
console.log(10/3); // quetient
console.log(10%3); // remainder

const random1=4+5-2*10;
const random2=(4+5-2)*10;

console.log(random1);
console.log(random2);
*/

//////////////////////// Implicit type conversion ///////////////////////////////

/*
const name="john";
const lastName="peter";
const fullName=name+" "+lastName;
console.log(fullName);

const num1=9;
const num2=4;
const total=num1+num2;
console.log(total);

const value=name-num1;    /// NaN
console.log(value);  

let num3=12;
let num4="4";
const result=num3+num4;   //Implicit type conversion
console.log(result);
*/

/*
const randomValue=23;
document.querySelector(".form").addEventListener("submit",
function(e){
  e.preventDefault();         // prevent default behaviour
  let value=document.getElementById("amount").value;  // value will be string 
  value=parseInt(value);   // can convert strint into int
  console.log(value);
  console.log(`sum is ${value+randomValue}`);  // using ``(ES6) template literals
})
*/

/////////////////////////// Data types /////////////////////////

//Primitive: String, Number, Boolean, Undifined, null, symbol(ES6)
//Object: Arrays, Functions, objects

//typeof - operator (typerof variable/value)

//null: typeof is object for null, bug from js from the initials days, they not gonna fix this

/*
let value=null;
console.log(typeof value);
*/

///////////////////////////////// Arrays ///////////////////////////////////

// Arrays - 0 index based
// collection of any data types

/*
const friends=["hello", "as", "bd", "56",'op','g',null,undefined,true];

console.log(friends);

let best=friends[4];
console.log(best);

friends[2]="one";

console.log(friends.length);
console.log(friends[9]);  // will give undefined if out of length - not giving out of boung exception
*/

////////////////////////// Functions ////////////////////////////////

// reusable block of code
// declare and invoke(call)
// parameter or placeholder
// arguments - when invoke/call/run

/*
//parameter
function greet(namea,second){   // even if function contains 1 parameter and invoke with 2 argument. it will run and take 1 argument
  console.log("hello "+namea+ second);
}

//console.log(namea);  // will give not defined error


//argument
greet("john","udemy");  
greet('smilga');
greet("angela");
*/

////////////////////////////// function return ///////////////////////////

// function default return is undefined
// code after return statement in function will not execute

/*
function calculate(value){
  return value*2.54;
  console.log("will not execute because of after return statement");
}

const width=calculate(50);
const height=calculate(100);

const dimension=[width,height];
console.log(dimension);
*/

//////////////////////////// function expression //////////////////////////////

// expression - another way to define function

/*
//function - declaration/defination
function addValues(one, two){
return one+two;
}

// function expression with fun name
const expressionFun=function addValues(one, two){
return one+two;
}

//function expression without fun name
const expression=function (one, two){
return one+two;
}

// arrow function(ES6)
const arrowFun=(one,two)=>one+two;

const array=[addValues(1,2),expressionFun(3,4), expression(5,6),arrowFun(7,8)];
console.log(array);
*/

///////////////////////////// Object //////////////////////////////////

// key:value pair and method
// can access by dot notation

/*
const person={
  name:"bhargav",
  age:23,
  status:"working",
  isFine:true,
  greeting1:function sayHello1(){
    console.log("hello world");
  },
  greeting2:function (){
    console.log("hello world "+person.age);
  },
  greeting (){
    console.log("method in ES6");
  }
}

console.log(person.name);
person.greeting2();
person.greeting();
*/

//////////////////////// Conditional statement //////////////////////////

// Comparision Operators
// >,<,>=,<=,==,===,!=,!==
// == check only value
// === check value and type

/*
const num1=30;
const num2=30;

if(num1>num2){
  console.log("first");
}else if(num1==num2){
  console.log("both");
}else{
  console.log("second");
}

if(!true){
  console.log("run");
}else{
  console.log("can run");
}
*/

/*
const num1=30;
const num2="30";

const value1=num1!=num2;
const value2=num1!==num2;

console.log(value1);
console.log(value2);
*/

/////////////////////// Logical Operator ////////////////////////

// ||(OR), &&(AND), !(NOT)

/*
const name="john";
const age=30;

if(name==="john" && age!==44){
  console.log("right value");
}else{
  console.log("wrong values");
}
*/

////////////////////////// switch statement ////////////////////////

// we can also use multiple if statements or else if ladder in place of switch statement or vice-versa

/*
const dice=2;

switch(dice){
case 1: console.log("one");
break;
default:console.log("u got except one and two");
break;
case 2: console.log("two");
break;
}
*/

///////////////////////// LOOPS ///////////////////////

// repeatedly run a block of code till condition is not false

// while loop

/*
let value=10;

while(value>0){
  console.log("value is "+value);
  value--;
}
*/

// do while loop
// run atleast one even if condition is false in the begining

/*
let value=15;

do{
  console.log("value is "+value);
  value++;
}while(value<10);
*/

//for loop

/*
// let i;
// for(i=0;i<10;i++){
//   console.log("value is "+i);
// }

// for(let j=10;j>=0;j--){
//   console.log("value is "+j);
// }
*/

////////////////////////// String properties and methods ///////////////////////////

/*
let text=" Bhargav   Ponkiy  ";

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length-1));
console.log(text.indexOf("a"));
console.log(text.lastIndexOf("a"));
console.log(text);
console.log(text.trim());  // trim() - remove all the leading and tailing space
console.log(text.trim().toLowerCase().startsWith("bhargav"));
console.log(text.includes("onk"));
console.log(text.slice(0,3));
console.log(text.trim().slice(-4,-2));
*/

/////////////////////// Template literals ``(ES6) ///////////////////////////////

// Backtick character - ``

/*
const name="bhargav";
const age=58;

console.log("Hello here's is name "+name +" and here's the age "+age);

//using ``(ES6)
console.log(`Hello here's is the name ${name} and here's the age ${age}. And i can write expression also ${4+6}.`);
*/

////////////////////////// Arrays properties and method ///////////////////////////

/*
let names=["bhargav","ask","any","thing",6,null,undefined, function funArr(){
  console.log("hello world")
},"life"]

//length
console.log(names.length);
console.log(names[names.length-1]);

//concat
const lastName=["Ponkiya","hello","world"];
const allNames=names.concat(lastName);

console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift
allNames.unshift("john");
allNames.unshift("susy");
console.log(allNames);

//shift
allNames.shift();
allNames.shift();
console.log(allNames);

//push
allNames.push("john");
allNames.push("jiven");
console.log(allNames);

//pop
allNames.pop();
allNames.pop();
console.log(allNames);

//invoke/call/run function stored in array
allNames[4]();


// splice - mutates original array
const someValue=allNames.splice(8,4);
console.log(someValue);
console.log(allNames);

//slice - return specific section of array, below 5 is not included. Don't mutates array
const slicedArr=allNames.slice(1,5);
console.log(slicedArr);
console.log(allNames);
*/

//////////////////////////////// Eg. Exercise ////////////////////////////

/*
const firstName=["bhargav","abc","ipl"];
const lastName="NoOne";
let newArray=[];

for(let i=0;i<firstName.length;i++){
  console.log(firstName[i]+" "+ lastName);
  newArray.push(`${firstName[i]} ${lastName}`);
}

console.log(firstName);
console.log(newArray);
*/

/*
const gas=[40,20,60,90];
const food=[10,30,50];

function calculateTotal(arr){
let total=0;
for(let i=0;i<arr.length;i++){
  total+=arr[i];
}

if(total>100){
  console.log("U r paying way to much "+total);
}else{
  console.log("u r paying in limits "+total);
}

return total;
}

console.log({
  gatTotal:calculateTotal(gas),
  foodTotal:calculateTotal(food),
  randomTotal:calculateTotal([42,536,747])
});
*/

////////////////////////// Value vs Reference //////////////////////

// primitive data types : String, Number,boolean, undefined, null, symbol ---> by values
// Non primitive data types: Arrays, functions, objects  ----> by reference

/*
//primitive datatypes ---> value
const number1=5;
let number2=number1;
number2=7;
console.log(number1);
console.log(number2);
*/

/*
/ object-> reference is used
//Non primitive datatypes ----> reference
const person1={name:"bhargav"};
const person3={...person1}; // copy values (ES6)

const person2=person1;  // reference
person2.name="jay";
person2.lastName="shri";

console.log(person1);
console.log(person2);
console.log(person3);
*/

//////////////////////////// NULL and Undefined ////////////////////////////

// both represent "no value"

// undefined - javascript can not find value for this
// variable without value
// missing function arguments
// missing object properties and we try to access that properties

// null - 'Developer sets the value'

/*
const number1=30+null;  // output: 30
console.log(number1);

const number2=30+undefined; // output: NaN
console.log(number2);
*/

/////////////////////////// Truthy and Falsy ///////////////////////////////

// Falsy --->  "", '', ``, 0, -0, NaN, false, null, undefined
// Truthy ----> all except above value are Truthy in js

/*
const text=undefined;

if (text){
  console.log("truthy");
}else{
  console.log("falsy");
}
*/

///////////////////////// Ternary Operator /////////////////////////////

/*
const value=40>6;

//ternary operator
value ? console.log("first") : console.log("second");
*/

///////////////////////// Globle Scope ///////////////////////////

// any variable outside code block{} is global variable
// can be access anywhere in the program

// NOTE: this is about let and const and NOT var.

/*
let name="Bhargav";
name="Ponkiya";

function changeName(){
  console.log(name);
  name="apple";
  function innerFun(){
    console.log(name);
    name="inner name";
  }
  innerFun();
}

changeName();

if(1){
  console.log(name);
  name="banana";
}

console.log(name);
*/

///////////////////// Local Scope ///////////////////////////////

// can not access outside code blocks

// NOTE: this is about let and const and NOT var.
// if - NOT VAR

/*
let name="bhargav";

function changeName(){
  const name="joey";
  const age=53;

  globalVar="Global var with out keywords"
}

//console.log(globalVar);  // output: error --> not defined

changeName();
console.log(globalVar);  // output: will give proper output after invoking function


if(1){
console.log(name);
}

{
  const friend="ross";
}

console.log(friend);  // output: error --> not defined
*/

////////////////////////// Variable lookup //////////////////

// here we will talk about function only
// but it is same for if block and {} block

// js start looking with local scope, if not found in local scope then it fallback to global scope

/*
const globalNum=5;

function calculate(num1, num2){

  const globalNum=10;
  const result= num1+num2+globalNum;

    function innerFun(){
      const globalNum=100;
      const multiply=result*globalNum;
      console.log(multiply);
    }
   // console.log(multiply);  /// output: error --> not defined

   innerFun();

  return result;
}

console.log(calculate(3,4));
*/

/////////////////////////// Callback function and Higher order function ///////////////////////////

// Higher order function - accepts another function as argument or return another function as a result
// Callback function - passed to another function as an argument and executed inside that function

/*
  return `Good Morning ${name}`;
}

function afternoon(name) {
  return `Good Afternoon ${name}`;
}

function higherOrderFun(name,cb) {
  const myName = "Bhargav";
  console.log(`${cb(name)}, my name is ${myName}`);
}

higherOrderFun("john",morning);
higherOrderFun("smilga",afternoon);
*/

////////////////////////// Array Iterators //////////////////////////

// Powerfull Array methods
// forEach, map, filter, find, reduce  ----> all iterates over array, no for loop required

// How they works?  --> Accepts CALLBACK function as an argument, calls Callback against each item in an array.

/////////////////////// forEach /////////////////////////////

// does not return new array

/*
const people = [{ name: "Bhargav", age: 23, role: "Developer" }, { name: "john", age: 37, role: "teacher" }, { name: "smilga", age: 5, role: "child" }];

// people.forEach(function (person) {
//   console.log(person.name);
// })

// function showPerson(person) {
//   console.log(person.role);
// }
// people.forEach(showPerson);
*/

///////////////////////// map ////////////////////////////////

// does return a new array
// does not change size of original array or size of new return array is same as size of original array
// uses value from original array when making new array

/*
const people = [{ name: "Bhargav", age: 23, role: "Developer" }, { name: "john", age: 37, role: "teacher" }, { name: "smilga", age: 5, role: "child" }];

// const ages = people.map(function (person) {
//   return person.age;
// })
// console.log(ages);

// const newNames = people.map(function (person) {
//   return { firstName: person.name.toUpperCase() , oldAge: person.age + 20};
// })
// console.log(newNames);


// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// })

// document.body.innerHTML = names.join('');

// console.log(names);
*/

///////////////////////// filter /////////////////////////////////

// does return a new array
// can manipulate size of an array
// return array based on condition

/*
const people = [{ name: "Bhargav", age: 23, role: "Developer" }, { name: "john", age: 37, role: "teacher" }, { name: "smilga", age: 5, role: "child" }];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 28;
// })
// console.log(youngPeople);

// // return empty array if condition doesn't match
// const developer = people.filter(function (person) {
//   return person.role === "boss";
// })
// console.log(developer);
*/

////////////////////////// find ///////////////////////////////

// return single instance - (in this case object)
// return first match
// if no match, then return undefined
// USED genarally for getting unique value

/*
const people = [{ name: "Bhargav", age: 23, role: "Developer", id:2 }, { name: "john", age: 37, role: "teacher",id:2 }, { name: "smilga", age: 5, role: "child",id:3 }];

const singelInstance = people.find(function (person) {
  return person.id === 2;
})
console.log(singelInstance);
*/

///////////////////////// reduce /////////////////////////////////////

// iterates over array, accept 2 callback function
// 1 parameter(acc) - accumulator -->total of all calculations
// 2 parameter(curr) - current element ---->current iteration/value
// reduce to single value - it can be --> number, array, object or anything

/*
const people = [{ name: "Bhargav", age: 23, role: "Developer", salary:300 }, { name: "john", age: 37, role: "teacher", salary:600 }, { name: "smilga", age: 5, role: "child", salary:100 }];

const totalSalary = people.reduce(function (acc, curr) {
  console.log(`total ${acc}`);
  console.log(`current money : ${curr.salary}`);
  acc += curr.salary;
  return acc;               // if no return statements then first time acc=0 and other time acc=undefined
},0)

console.log(`total salary using template literals is : ${totalSalary}`);
*/

/////////////////////////// Math Object ///////////////////////////////////

// Math - standard built-in object ---> always available

/*
const result1 = Math.floor(4.45456);
const result2 = Math.ceil(4.45456);
const result3 = Math.sqrt(100);
const minimum = Math.min(4, 6, 3, 7, 9, 3, 8);
const maximum = Math.max(4, 6, 3, 7, 9, 3, 8);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(minimum);
console.log(maximum);
console.log(Math.PI);

const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
*/

//////////////////////////// Date Object /////////////////////////////////

/*
const months = ["jan", "feb", "march", "april", "may", "june", "july", "august", "sept", "octo", "nov", "dec"];
const days = ["sun", "mon", "tues", "wed", "thur", "frid", "satur"];

const date = new Date();      // give current date 
//const date = new Date("7/18/2023");  // format --> month/date/year
//console.log(date);

const day = date.getDay();
console.log(days[day]);

const month = date.getMonth();
console.log(months[month]);

console.log(date.getDate());
console.log(date.getFullYear());


const sentence = `${date.getDate()} - ${months[month]} - ${date.getFullYear()}, ${days[day]}`;

console.log(sentence);
*/

//////////////////// DOM - Document Object Model /////////////////////////

// browser convert html into DOM - which is tree like structure

// select the element or group of element that u want to affect
// decide the effect that we want to apply to the seletion element or elements

/* <h1>hello world</h1>
<button class="btn" id="btn">BUTTON</button> */

// document.body.style.backgroundColor = "green";
// document.body.style.color = "orange";
// document.getElementById("btn").style.color = "blue";

// Global window object contains Document Object as a properties
// Document itself is giant object which contains properties and methods

//console.log(window);

// when we select any element, it returns a node object or a node list, wich is an arraylike object(means we can't use all methods of array)

/*
const btn = document.getElementById("btn");
const name = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(name);
console.log(css);
*/

/////////////////////////// Window and Document Object ////////////////////////

// window - (also name is browser api) --> provided by browser to work with browser --> provides properties(Object) and methods  (NOTE : here by window, we means current TAB)
// document - it is object which comes with window object --> window object provide document object  (NOTE: document represent the Document which we have - that's how we access html/body/head etc)

// if js not able to find properties or methods then it always look into window object

// window.alert("window alert");
// alert("no need to write window");

//console.log(document); // it only log html content

//console.dir(document);  // it log all the properties and methods of that object(here it is document)

/////////////////////// getElementById() //////////////////////

/* <h1 id="title">hello world</h1>
<button class="btn" id="btn">BUTTON</button> */

/*
const heading = document.getElementById("title");
heading.style.color = "red";

const button = document.getElementById("btn");
button.style.backgroundColor = "green";
button.style.color = "orange";
*/

/////////////////// getElementsByTagName() /////////////////////

// return node list --> array-like object
// array-like object means ---> can access index, length property but not array methods

/* <h1 >heading 1</h1>
    <h1>heading 2</h1>

    <ul> 
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
    </ul> 
*/

/*
const heading = document.getElementsByTagName("h1");
console.log(heading);

heading[1].style.backgroundColor = "blue";
console.log(heading.length);
*/

// const list = document.getElementsByTagName("li");
// list[1].style.backgroundColor = "green";

// node list can't access array methods
// list.forEach(function (item) {   // Output: error --> list.forEach is not a function
//   console.log(item);
// })

// using ...(ES6) spread operator, we copy data of list to newList
// const newList = [...list];

// newList.forEach(function (item) {
//   console.log(item);
// })

// console.log(list);
// console.log(newList);

/////////////////////// getElementsByClassName() //////////////////////

// return node-list --->array-like object
// can access index,length property but can't access array methods

// works same like getElementsByTagName()

/* <h1 >heading 1</h1>
    <h1>heading 2</h1>

    <ul> 
        <li>list 1</li>
        <li class="special">list 2</li>
        <li>list 3</li>
        <li class="special">list 4</li>
        <li>list 5</li>
    </ul> 
*/

/*
const items = document.getElementsByClassName("special");
console.log(items[1]);  //?????????????????????????????????????????????????????? why i am not able to use style property
*/

///////////////// querySelector() and querySelectorAll() //////////////////////////

// querySelector - selects single
// querySelectorAll - selects all

// we can use forEach loop with the result returned by querySelector or querySelectorAll

// id ---> #
// class ---> .

/* <h1 >heading 1</h1>
    <h1>heading 2</h1>

    <ul id="result"> 
        <li>list 1</li>
        <li class="special">list 2</li>
        <li>list 3</li>
        <li class="special">list 4</li>
        <li class="last">list 5</li>
    </ul>
 */

/*
const result = document.querySelector("#result");
result.style.backgroundColor = "green";

const item = document.querySelector(".special");
item.style.backgroundColor = "red";  

const lastItem = document.querySelector("li:last-child");
lastItem.style.color = "blue";

const list = document.querySelectorAll(".special");

list.forEach(function (item) {
  item.style.color = "yellow";
  console.log(item);
})
*/

///////////////////////// Navigate the Dom ////////////////////////////////////

//////////////////// Children ////////////////////////////

// childNodes - return all the childNode including whitespace which is treated as a text node

// children - return actual child, dosen't return whiltespace which is treated as a text node
// firstChild - return text node
// lastChild - return text node

{
  /* <h1 >heading 1</h1>
    <h1>heading 2</h1>

    <ul id="result"> 
        <li>list 1</li>
        <li class="special">list 2</li>
        <li>list 3</li>
        <li class="special">list 4</li>
        <li class="last">list 5</li>
    </ul> 
*/
}

/*
const result = document.querySelector("#result");
const allChildren = result.childNodes;
console.log(allChildren);   // return text node also

const actualChildren = result.children;
console.log(actualChildren);  // dosen't return text node

console.log(result.firstChild);  // return text node
console.log(result.firstElementChild);

console.log(result.lastChild);  // return text node
console.log(result.lastElementChild);
*/

/////////////////// Parent Element ////////////////////////////

// if there is no more parent element then we will get null as a result

{
  /* <div id="result">
        <h1>first heading</h1>
        <div class="second">
            <h2>second heading</h2>
            <h5>second heading</h5>
        </div>
</div> */
}

/*
const heading = document.querySelector("h2");
console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement);  // as there is no parent element for <html> -  we will get null as a result

const parent = heading.parentElement;
console.log(parent);

parent.style.color = "red";
*/

/////////////////////////// Sibling ////////////////////////

// previousSibling  // return whitespace which is treated as a text node
// nextSibling      // return whitespace which is treated as a text node

// previousElementSibling
// nextElementSibling

{
  /* <h1 >heading 1</h1>
    <h1>heading 2</h1>

    <ul id="result"> 
        <li class="first">list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
        <li id="last">list 5</li>
    </ul>
*/
}

/*
const first = document.querySelector(".first");
const second = first.nextSibling.nextSibling.style.color="red";
console.log(second);  // red will be printed in console

console.log(first.previousSibling.previousSibling);  // return null if no element is there

const last = document.querySelector("#last");
const lastSecond = last.previousSibling.previousSibling;
console.log(lastSecond);

console.log(last.nextSibling.nextSibling); // return null if no element found
*/

/*
const first = document.querySelector(".first");
const second = first.nextElementSibling.style.color="red";
console.log(second);  // red will be printed in console

console.log(first.previousElementSibling);  // return null if no element is there

const last = document.querySelector("#last");
const lastSecond = last.previousElementSibling;
console.log(lastSecond);

console.log(last.nextElementSibling); // return null if no element found
*/

///////////////////////// nodeValue and textContent ///////////////////////////

{
  /* <h1 id="special">this is special content</h1> */
}

/*
const item = document.querySelector("#special");
const value = item.firstChild.nodeValue
console.log(value);

const easyValue = item.textContent;
console.log(easyValue);
*/

/////////////////////// getAttribute() and setAttribute()  ////////////////////////

// getAttribute()
// setAttribute()

{
  /* <li class="first" id="special">i have class of first</li>
    <a href="first.html" id="link">random Link</a>
    <li>I have no attributes</li>
 */
}

/*
const first = document.querySelector(".first");
const getId = first.getAttribute("id");
console.log(getId);

const link = document.querySelector("#link");
const linkValue = link.getAttribute("href");
console.log(linkValue);

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "now, i also have class of first";
console.log(last);

const firstAll = document.querySelectorAll(".first")
console.log(firstAll);
*/

///////////////////// className and classList //////////////////////////

{
  /* <style>
    .colors{
      background-color: aqua;
      color:red;
    }
    .text{
      font-size: 3rem;
      letter-spacing: 1rem;
    }
    </style>
*/
}

{
  /* <h1 id="first" class="colors">first heading</h1>
    <h1 id="second">second heading</h1>
    <h1 id="third">third heading</h1>
*/
}

/*
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

console.log(first.className);
  
// second.className = "colors";
// second.className="text";

second.className = "colors text";

// third.classList.add("colors");
// third.classList.add("text");

third.classList.add("colors", "text");
third.classList.remove("text");

const result = third.classList.contains("colors");

if (result) {
  console.log("contains colors class");
} else {
  console.log("doesn't contains colors class");
}


const thirdClass = third.classList;
console.log(thirdClass);
*/

//////////////////////// createElement('element') ////////////////////

// createElement('element');
// createTextNode('text content');
// element.appendChild('childElement');   // append child at last

// element.insertBefore('element','location');  // insert child before location or at first

// replaceChild('new','old');     // replace old element with new element

{
  /* <style>
    .red{
      background-color: red;
      color:yellow;
    }
    .blue{
      background-color: blue;
      color:grey;
    }
    </style> 
*/
}

{
  /* <div id="result">
      <h1 class="red">Hello world</h1>
    </div> 
*/
}

/*
const result = document.querySelector("#result");

// append in body

//create empty element
const bodyDiv = document.createElement("div");

//create text node
const bodyDivText = document.createTextNode("a simple body div");

//append text node to created empty element
bodyDiv.appendChild(bodyDivText);

//append bodyDiv to body

//document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result);


// append in result div

//create empty element
const heading = document.createElement("h2");

//create text node
const headingText = document.createTextNode("a heading text")

//append text node to above empty element
heading.appendChild(headingText);

//add class in heading
heading.classList.add("blue");

//append heading to result div

//result.appendChild(heading);

const redClass = document.querySelector(".red");
result.insertBefore(heading,redClass );

// replaceChild(new,old)
const smallHeading = document.createElement("h5");
const smallHeadingText = document.createTextNode("i m here because of replceChild(new,old)");
smallHeading.appendChild(smallHeadingText);
smallHeading.classList.add("red");

document.body.replaceChild(smallHeading, bodyDiv);
*/

//////////////////////// innerText and prepend ///////////////////////////

// innerText
// prepend

/*
const heading = document.createElement("h2");
heading.innerText = "text using innerText";
document.body.prepend(heading);
*/

/////////////////// remove() and removeChild() ////////////////////////

// remove        // remove whole element or node
// removeChild   // remove only one child

{
  /* <h1>I am h1 heading</h1>

    <div id="result">
      <h1>I am second h1 heading</h1>
      <h1>i am h1 in result div</h1>
      <h2>i am h2 in result div</h2>
    </div>
*/
}

/*
const result = document.querySelector("#result");
//result.remove();      //remove whole result div

const heading = result.querySelector("h1");
result.removeChild(heading);     //remove only one child
*/

////////////////////// innerContent and innerHTML /////////////////////////

// innerContent   --> normal text
// innerHTML      --> text converted into HTML

{
  /* <ul id="first">
      <li class="item">list 1</li>
      <li>list 2</li>
    </ul>

  <div id="second">
    div #second text content
  </div> 
*/
}

/*
const first = document.querySelector("#first");
const div = document.querySelector("#second");

console.log(first.textContent);
console.log(first.innerHTML);

console.log(div.textContent);
console.log(div.innerHTML);

const templateLiterals="beauty of Template Literals (``) from ES6)"

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${templateLiterals}</li>
      <li>list 2</li><li class="item">list 3</li>
      <li>list 4</li>`;

document.body.appendChild(ul);

div.textContent=`<li class="item">${templateLiterals}</li>
      <li>list 2</li><li class="item">list 3</li>
      <li>list 4</li>`;
*/

/////////////////////// CSS ---> use classList() for style ///////////////////

{
  /* <style>
      
      .title{
        background-color: aquamarine;
        color: red;
        font-size: 3rem;
        text-transform: capitalize;
      }

    </style>\
 */
}

//  <div class="random">use classList.add() to add style in elements</div>

/*
const random = document.querySelector(".random");
random.classList.add("title");
*/

///////////////////////// Click Event /////////////////////////////////////////

// select element
// addEventListener(what event, what to do)

{
  /* <style>

      .red{
        background-color: aquamarine;
        color: red;
      }

      .green{
         background-color: blanchedalmond;
        color: green;
      }

      .blue{
         background-color: yellowgreen;
        color: blue;
      }

    </style>
*/
}

{
  /* <h2>Events in javaScript</h2>
  <button class="blue">Click Me</button>
  <p onclick="this.classList.add('green')">the old style----Don't use this now</p> 
*/
}

/*
const btn = document.querySelector(".blue");
const heading2 = document.querySelector("h2");

// using Anonymous function
// btn.addEventListener("click", function () {
//   heading2.classList.add("red");
// })

function changeColor() {
  const value = heading2.classList.contains("red");

  if (value) {
    heading2.classList.remove("red");
  } else {
    heading2.classList.add("red");  
  }

}

// using function as a Reference
btn.addEventListener("click", changeColor);
*/

////////////////// Mouse Events //////////////////////////////////

// click - fires after full action occurs  (down + up)
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

{
  /* <style>

      .red{
        background-color: aquamarine;
        color: red;
      }

      .green{
         background-color: blanchedalmond;
        color: green;
      }

      .blue{
         background-color: yellowgreen;
        color: blue;
      }

    </style>
*/
}

{
  /* <h2>Events in javaScript</h2>
  <button class="blue">Click Me</button>
  <p onclick="this.classList.add('green')">the old style----Don't use this now</p> 
*/
}

/*
const heading = document.querySelector("h2");
const btn = document.querySelector(".blue");

btn.addEventListener("click", function () {
  console.log("clicked");
})
btn.addEventListener("mousedown", function () {
  console.log("down");
})
btn.addEventListener("mouseup", function () {
  console.log("up");
})

heading.addEventListener("mouseenter", function () {
  heading.classList.add("red");
})

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("red");
})
*/

//////////////////////// Key Events ///////////////////////

// keypress - when key is pressed (down + released)
// keydown - when key is down
// keyup - whey key is released

{
  /* <input type="text" id="name"/> */
}

/*
const nameInput = document.querySelector("#name");

nameInput.addEventListener("keypress", function () {
 // console.log("key pressed");
})

nameInput.addEventListener("keydown", function () {
 // console.log("key down");
})

nameInput.addEventListener("keyup", function () {
  // console.log("key up");

  // console.dir(nameInput);

  console.log(nameInput.value);

})
*/

/////////////////////////////////// Event Object //////////////////////////////////////////

// event object argument e or evt or event
// event object gives us info about tirggered event
// event.type ---> for eg. click
// event.currentTarget  ---> gives us element on which addEventListener is attached
// this keyword ---> will work with Anonymous function, reference function -- this keyword for event will not work for arrow function
// preventDefault() ---> prevent default behaviour -- for eg. link click and form submit(page refresh when we submit form)

{
  /* <style>
     
     green{
      background-color: yellow;
      color: green;
     }

     a{
      display:inline-block;
      margin-top: 100rem;
     }

    </style> 
*/
}

{
  /* <button class="btn">Click Me</button>
  <h1>heading h1 1</h1>
  <a href="#">random link</a> 
*/
}

/*
const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.querySelector("a");

// currentTarget and type
heading.addEventListener("click", function (event) {
  event.currentTarget.classList.add("green");          // currentTarget gives as an element to whiche element is attached
  console.log(event.type);                         // event.type returns type of event  --> for eg. click
})

// preventDefault();
function funcReference(e) {
  e.preventDefault();
}

// using function reference
link.addEventListener("click", funcReference);


// this keyword in event
// heading.addEventListener("click", function (event) {
// console.log(event.currentTarget);
// console.log(this);  
// })

// this keyword in event will not work when there is Arrow function is used
heading.addEventListener("click",  (event) => {
console.log(event.currentTarget);
console.log(this);                      // this keyword in event will not work in Arrow function
})

*/

//////////////////// currentTarget vs target ////////////////////////////

// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

{
  /* <style>

     .green{
      background-color: yellow;
      color: green;
     }

    </style>
 */
}

//  <button class="btn">First</button>
//   <button class="btn">
//     second <strong> button <strong> more nested </strong></strong>
//   </button>
//   <button class="btn">third</button>

/*
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    // currentTarget
    // console.log(e.currentTarget);
    // e.currentTarget.classList.add("green");

    // target
    console.log(e.target);
    e.target.classList.add("green");

  })
})
*/

////////////////////////// Event Propagation, Bubbling, Capturing /////////////////////

// allow select dynamic element
// event propagation - order the events are fired
// event bubbling - cilcked element first then bubbles up -->by default  (target to window)
// event capturing - fires at the root and fires until reached target    (window to target)

{
  /* <div class="container">
   <ul class="list">
    <li class="item"><a href="#" class="link">link 1</a></li>
    <li class="item"><a href="#" class="link">link 2</a></li>
    <li class="item"><a href="#" class="link">link 3</a></li>
   </ul>
  </div>
*/
}

/*
const container = document.querySelector(".container");
const list = document.querySelector(".list");

function showBubbling(e) {
  console.log("current target ", e.currentTarget);
  console.log("target ", e.target);

  if (e.target.classList.contains("link")) {
    console.log("click on link");
  }

}

// stop propagation
function stopPropagation(e) {
  console.log("stop propagation after this tag or element");
  e.stopPropagation();
}

// list.addEventListener("click", showBubbling)
// container.addEventListener("click", stopPropagation)
// document.addEventListener("click", showBubbling)
// window.addEventListener("click", showBubbling)

// event capturing
list.addEventListener("click", showBubbling,{capture:true})
container.addEventListener("click", stopPropagation,{capture:true})
document.addEventListener("click", stopPropagation,{capture:true})
window.addEventListener("click", showBubbling,{capture:true})
*/

//////////////////// Event Propagation example ///////////////////////////

// allows select dynamic elements

{
  /* <div class="container">
    <!-- <h1 class="heading">i m h1 in div container</h1> -->
    </div>
    <button class="btn">click me</button>
*/
}

/*
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
//const heading = document.querySelector(".heading")



btn.addEventListener("click", function (e) {
  const element = document.createElement("h1");
  element.textContent = "I am added dynamically by click on button";
  element.classList.add("heading");
  container.appendChild(element);
})

function referenceFun(e) {
  console.log("hello world");
}

//heading.addEventListener("click", referenceFun);

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading")) {
    console.log("we can select dynamic element by event propagation and event bubbling");
  }
})

*/

//////////////////////////// form submit event //////////////////////////

// submit event listener
// e.preventDefault();            ---> in form, when we click on submit button, page automatically refresh, by default
// how to get a value from input

{
  /* <form action="" id="form">

   <label for="">Enter name</label>
   <input type="text" id="name"/>

   <label for="">Enter password</label>
   <input type="password" id="password"/>

   <input type="submit" id="submit"/>
   
  </form>
*/
}

/*
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {

  e.preventDefault();
  console.log("form ---> submit event");            // page is not refreshing with out using e.preventDefault(), when click on submit button. I think js have handle this.
   
  console.log(name.value);
  console.log(password.value);

})

*/

////////////////////////// Local and Session storage ////////////////////////

// Web storage API - provided by browser
// local storage - data remains in local storage even if we close browser or tab
// session storage - if we close or switch to other tab, then data deleted from session storage

// setItem, getItem, removeItem, clear  --> methods()

// localStorage.setItem("name", "john");              // data remains in local storage, if we switch to other tab
// sessionStorage.setItem("name", "smilga");          // data deleted from session storage, if we switch to other tab

/*
//setItem()
localStorage.setItem("name", "john");
localStorage.setItem("surname", "smilga");
localStorage.setItem("job", "teacher");

//getItem()
const job = localStorage.getItem("job");
console.log(job);

//removeItem()
localStorage.removeItem("surname");
console.log(localStorage.getItem("surname"));   // output: null - when we try to get key which doesn't exist or deleted(removed)

//clear()
localStorage.clear();

*/

///////////////////// Local Storage with multiple values ////////////////////////

// JSON.stringify()  - converts value into string
// JSON.parse()      - converts string back to value

/*
const friends = ["john", "jack", "jonny"];

//localStorage.setItem("friends", friends);
//const value = localStorage.getItem("friends");

localStorage.setItem("friends", JSON.stringify(friends));
const value = JSON.parse(localStorage.getItem("friends"));

console.log(value[0]);
*/

// example with multiple values

/*
let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
//fruits.push("apple");
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
*/

/////////////////////////////// setTimeout //////////////////////////////////////////

// setTimeout - run function once after specific time

// first argument: pass function reference
// second argument: pass duration in ms (1 second = 1000 ms)
// default duration(second argument) is 0
// return unique identifier
// clearTimeout is used to cancel setTimeout using unique identifier
// available on window object

/*
function sayHello() {
  console.log("Function reference");
}

// pass function as a reference
setTimeout(sayHello, 4000);

// will not work--> do not invoke function
//setTimeout(sayHello(), 4000);

// anonymous function
setTimeout(function () {
  console.log("Anonymous function");
}, 5000);

// pass arguments
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

setTimeout(showScore, 6000, "Bhargav", "30");

// setTimeout return unique identifier
const firstID = setTimeout(showScore, 1000, "sherlok", "67");
const secondID = setTimeout(showScore, 2000, "john", "88");

console.log(firstID, secondID);

// clear setTimeout using clearTimeout(unique-Identifier)
clearTimeout(firstID);
*/

////////////////////////////////// setInterval //////////////////////////////////

// setInterval - run function repeatedly, at specific intervals

// first argument: pass function reference
// second argument: pass duration in ms (1 second = 1000 ms)
// default duration(second argument) is 0
// return unique identifier
// clearInterval is used to cancel setInterval using unique identifier
// available on window object

/*
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

//setInterval(showScore, 2000, "bhargav", 34);

const firstID = setInterval(showScore, 1000, "john", 78);
const secondID = setInterval(showScore, 3000, "smith", 56);

clearInterval(firstID);
*/

//////////////////////////// Event - DOMContentLoaded /////////////////////////////////

// DOMContentLoaded - this event fires when the intial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

// can listen on window and document

/*

// const heading = document.querySelector("h1");
// console.log(heading);
// heading.style.color = "red";

window.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  console.log(heading);
  heading.style.color = "red";
});

*/

///////////////////////////// Event - load //////////////////////////////////////

// load - this event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

// can listen on window

/*
<body>
    <h1>JavaScript</h1>
    <img src="./Images/codeImage.jpg" alt="code Image" />

    <script src="./basic.js"></script>
</body>
*/

/*

window.addEventListener("load", function () {
  console.log("This is from load");
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("This is from DOMContentLoaded");
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

*/

////////////////////////////// Event - scroll ////////////////////////////////////

// scroll event - can listen on window or document

// scrollX - return the number of pixels scrolled along the horizontal axis(pageXOffset - depreacated)
// scrollY - return the number of pixels scrolled along the vertical axis(pageYOffset - depreacated)

/*
<body>
  <h1>JavaScript</h1>
  <img src="./Images/codeImage.jpg" alt="code Image" />

  <script src="./basic.js"></script>
</body>
*/

/*
window.addEventListener("scroll", function () {
  console.log(window.scrollX + " px");
  console.log(window.scrollY + " px");
});
*/

///////////////////// window property - innerWidth and innterHeight || Element.getBoundingClientRect() /////////////////////////////

// innerWidth - the Read-only Window property the interior width of the window in pixels
// innerHeight - the Read-only property of the window interface returns the interior height of the window in pixels

// Element.getBoundingClientRect() - method returns a DOMRect object providing information about the size of an element and its position relative to the viewport

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Js</title>

    <style>
      .btn {
        margin: 1rem;
        font-size: 1.5rem;
      }
      .box {
        margin: 1rem;
        width: 150px;
        height: 150px;
        background-color: red;
      }
    </style>
  </head>

  <body>
    <h1>JavaScript</h1>
    <button class="btn">click me</button>
    <div class="box"></div>

    <script src="./basic.js"></script>
  </body>
</html>
*/

/*
console.log(`width ${window.innerWidth}`);
console.log(`height ${window.innerHeight}`);
*/

/*
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
  const DOMRectObect = box.getBoundingClientRect();
  console.log(DOMRectObect);
});
*/

///////////////////////////// Event - resize /////////////////////////////////////////

// resize event - fires when the document view(window) has been resized.

/*
window.addEventListener("resize", function () {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
});
*/
