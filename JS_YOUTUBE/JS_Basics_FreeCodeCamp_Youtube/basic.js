
///////////////////// Comments in JS /////////////////////////

//const number = 1; // in-line comments

/*
multi
line 
comments
*/


///////////////////// Data types and Variables /////////////////

// Data types: undefined, null, boolean, string, number, symbol, object

/*
let nameVar = "bhargav";
nameVar = "freecodecamp";

let fromES6 = "let is block scoped"; 
console.log(fromES6);

const canNotChange = 1;
canNotChange = 3;           // Output: error - can't assign to constant variable

console.log(canNotChange);
*/

// declaring and initializing or assigning variable

/*
var value;               // only declaration
var result = 6;          // both declaration and initialization or assignment

console.log(value);     // outPut: undefined

value = 9;

value++;     // increment by 1
value--;     // decrement by 1
 
console.log(value);
*/



////////////////// Arithematic operation(%) /////////////////

// % - modulus --->gives remainder after interger division

/*
var remainder = 11 % 3;
console.log(remainder);
*/


////////////////// Compound operator ////////////////////

/*
var a = 4;
var b = 2;

//a = a + b;
a += b;    // using compound operator

console.log(a);
*/



/////////////// String - Escaping Literal Quotes //////////////


//  \  ---> escape character

// "  ''  "
// '  ""  '

// `   ""  '' ${dynamic variable}    `   ---> from ES6(Template literals ``)

/*
const value = "bhargav \"bhai\"";
console.log(value);
*/


////////////////// Escape sequences ////////////////////////////

// \'   --> single quote
// \"   --> double quote
// \\   --> backslash
// \n   --> newline
// \r   --> carriage return
// \t   --> tab
// \b   --> backspace
// \f   --> form feed

/*
var myStr = "hello \"jay\".\nHow r u?\t fine?";
console.log(myStr);
*/



//////////////// Concatenation of String and add variable in String ///////////////////////

/*
var str = "hello";
str += " world";
console.log(str);

var name = "Bhargav";
var addVar = "hello " + name;
console.log(addVar);
*/




//////////////// String immutablity //////////////////////////////

/*
var str = "jello world";
str[0] = "H";               // we can not change string character(because of String immutability), but we can change whole string

console.log(str[0], str, str.length);

str = "Hello world";
console.log(str);          // we can change whole string
*/



////////////////////// Arrays ///////////////////////////////////////////


// store multiple value with different data types

/*
var ourArray = ["john", 5, 4.3, null, true, undefined,[3,6,7,"nested array","multiple dimension array"]];
console.log(ourArray[0],ourArray.length,ourArray);

ourArray[0] = "can modify array value";
console.log(ourArray);
*/

// access multi-dimensional array

/*
var multiDim = [[1, 2, 3], [[4, 5, 6], [9, 7, 8]]];
console.log(multiDim[1][1][1]);
*/

// push() ---> append element at last in array

/*
var arr = [1, 2, 3];
arr.push(4);
console.log(arr);
arr.push(["can also push another nested array", true]);
console.log(arr);
*/

// pop()  --> remove last element from array

/*
var arr = [1, 2, 3];
arr.pop();
arr.pop();
console.log(arr);
*/

// shift()  --> remove first element from array

/*
var arr = [1, 2, 3];
arr.shift();
arr.shift();
console.log(arr);
*/


// unshift()  --> add element at the begining of an array

/*
var arr = [1, 2, 3];
arr.unshift("unshift() add element at the begining of an array");
console.log(arr);
*/



/////////////////////// function //////////////////////////////////////

// function --> reusable block of code

// parameter  --> passed during function call/invoke/run   ----->()
// argument   ---> placeholder - during function defination

/*
function addTwoNumber(a,b) {  // a,b --> argument
    return a + b;
}

var result=addTwoNumber(2, 4);  // 2,4 --> parameter
console.log(result);
*/



/////////////////// Global Scope ////////////////////////////

/*
var myGlobal = 13;

function fun1() {
   var oopsGlobal = 5;       // local variable
   // oopsGlobal = 5;        // if we don't write var,let,const then ---> variable automatically become Global variable
}

function fun2(){

    var result = "";

    if (typeof myGlobal !== "undefined") {
        result += myGlobal+"\n";
    }
 
    if (typeof oopsGlobal !== "undefined") {
        result += oopsGlobal;
    }

   console.log(result);
}

fun1();                // if we don't invoke fun1(), then oopsGlobal = 5; will not become global variable
fun2();

*/



/////////////////////// Local scope ///////////////////

/*
function localScope() {
    var local = "local variable only accessible in its specific block";
    console.log(local);
}

localScope();
console.log(local);            // output: local is not defined
*/



/////////////////////// Global scope vs Local scope ////////////////////////////////


// local have more priority then global inside block

/*
var global = "real global";

function scope() {
    var global = "local have more priority then global inside block";
    return global;
}

console.log(scope());
console.log(global);

*/


////////////////////////// return in function  //////////////////////////

// by default ---> function return undefined



//////////////////// example ////////////////////////////////////////////

/*
var arr = [8, 1, 4, 2, 3, 6];

function firstLast(arr,item) {
    arr.push(item);
    return arr.shift();
}

console.log("Before: ", JSON.stringify(arr));
console.log(firstLast(arr, 5));
console.log("After: "+ JSON.stringify(arr));
*/



/////////////// Equality operator /////////////////////////

// 10 == "10"  -----> only check value
// 10 === "10"  -----> check value and typeof

/*
var a = 10;
var b = "10";

if (a == b) {
    console.log("value is equal");
}

if (a === b) {
    console.log("value and typeof are equal");
}

*/



///////////////////////// Logical operator ////////////////

//  && --> AND
//  || --> OR
//  ! ==> NOT

/////////////////////////// switch case /////////////////////

// keywords in switch  --> switch, case, break, default

// we can pass number or string to case in switch case statement

// case 1:                --> number
// case "Bhargav":        --> string


/*
function cardCount(value) {

    var count = 0;

    switch (value) {
        case 2:
        case 3:
        case 4:
        case 5: count++;
            break;
        case 9:
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A": count--;
            break;
    }

    var holdBet = "hold";
    if (count >= 0) {
        holdBet="Bet"
    }

    return count + " " + holdBet;
    
}

cardCount(2);
cardCount(5);
cardCount(9);
cardCount("A");
console.log(cardCount("Q"));
*/



//////////////////////// js object ///////////////////////////

// key-value pair

/*
// we can write key as a string also
var dog = {
    "name": "free",
    "age": 45,
    "object":{"nested":'object'}
}

console.log(dog);

// we can write key without string
var human = {
    name: "Bhargav",
    age: 23,
    role:"learner"
}

console.log(human);
*/


// accessing object properties using Bracket notation(space in key name)

/*
var dog = {
    "real name": "free",
    "age": 45,
    "object":{"nested":'object'}
}

// we can access object properties having space with []
console.log(dog["real name"]);
*/


// other use of Bracket notation

/*
var bracketNotation = {
    1: "hello",
    2: "world",
    3: "welcome",
    4:"home"
}

var result = 3;

//console.log(bracketNotation.3);    // output: error

console.log(bracketNotation.result);  // output: undefined

console.log(bracketNotation[result]);  // output: welcome
*/



///////////////////// Object ///////////////////////////

// CRUD


/*
var dog = {
    "name": "free",
    "age": 45,
    "object":{"nested":'object'}
}

// update properties

console.log(dog);
dog.name = "freedom";
console.log(dog);

// add properties

console.log(dog);
dog.sound = "bark";
dog['happy dog'] = true;    // if key contains space --> use [] bracket notation
console.log(dog);

// delete properties

console.log(dog);
delete dog['happy dog']
delete dog.sound;
console.log(dog);

*/



/////////////////// Object for Lookups //////////////////

// using bracket [] notation

/*
function objectForLookup(variable) {
    var result = "";

    var lookups = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f"     
   }

    result = lookups[variable];
    
    console.log(result);
}

objectForLookup("3");  // ---> c
objectForLookup(5);    // ---> e
objectForLookup(7);    // ---> undefined

*/



/////////////// obj.hasOwnProperty(property) ///////////////////////


/*
var dog = {
    name: "honey",
    age: 23,
    single:true
}

function checkProperty(checkProp) {
    if (dog.hasOwnProperty(checkProp)) {
        return dog[checkProp];
    } else {
        return `object dosen't have ${checkProp} property`
    }
}

console.log(checkProperty("age"));   //---> 23
console.log(checkProperty("hello")); // ---> object dosen't have hello property

*/



//////////////////// Accessing nested Object ////////////////////

/*
var car = {
    bmw: {
        range: 66,
        "value here india": "so much",
        color:"red"
    },
    odi: {
        odiArr: [1, 3, 5, 6, "hello", {
            odiValue: 3000000,
            "four wheelers":true
        }]
    }
}

// use bracket [] notation instead of .(dot) where key contains space in between

console.log(car.bmw.color);                      // --->red
console.log(car.bmw["value here india"]);           // ---> so much  

console.log(car.odi.odiArr[5]["four wheelers"]);   // ---> true

*/




////////////////////////// Accessing nested Array /////////////////////////////

/*
var nestedArr = [
    {
        type: "dog",
        list1: [
            "i",
            "n",
            "t"
        ]
    },

    {
        value: "string",
        list2: [
            "s",
            "t",
            "r"
        ]
    }
];

console.log(nestedArr[1].list2[0]);   // ---> s

*/




////////////// random number between range //////////////////


/*
function randomNumBtwRange(min,max) {
    
    return min + Math.floor(Math.random() * (max - min + 1));

}

console.log(randomNumBtwRange(1,4));  //-->1,2,3,4
console.log(randomNumBtwRange(4,1));  //-->2,3,4
*/



//////////////// parseInt() ///////////////////////////////


/*
const int = parseInt("52"); //--> convert string into integer or number
console.log("52");   // --> string 52
console.log(int);    // ---> number 52

const parseAndRadix = parseInt("1010", 2);  // ----> by default, base or radix is 10
console.log(parseAndRadix);
*/


///////////////////////// nested Ternary operator ///////////////////////


/*
function nestedTernary(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
 
console.log(nestedTernary(2));  // ---> positive
console.log(nestedTernary(-2)); // ---> negative
console.log(nestedTernary(0));  // ---> zero
*/




////////////////////// var vs let vs const //////////////////////////


/*
var value = "bhargav";
var value = "john";          // ---> can declare with same name in var

let result = "good";
//  let result = "bad";       // --> can't declare with same name in let
*/

// var is global variable and its scope is global when declared outside and scope is limited to function when declared inside function or function's nested block
// let scope is limited to block only

/*
function variable() {
    if (true) {
        var i = 1;          
        console.log(i);   //---> 1
    } 
    console.log(i);       //---> 1  -  var i is accessible inside function
}

variable();
//console.log(i);   // output: i is not defined

*/


// can not re-assign value to const

/*
const notChange = "hello"; 
notChange = "world";          // ---> output: error
console.log(notChange); 
*/

/*
const arr = [1, 2, 3];
//arr = [4, 5, 6];             // ---> output: error
console.log(arr);      

arr[0] = 7;
arr[1] = 8;                // still, i can change/update/mutates array using index
arr[2] = 9;

console.log(arr);
*/



////////////////////  prevent object mutation  /////////////////////////////////

/*
var pi = {
    value: 3.14
}

pi.addNewProp = "freeze() prevent modification of object"; 

Object.freeze(pi);          // ---> Object.freeze() ---> prevent modification of object property and object itself

pi.value = 5252;

console.log(pi);
*/


////////////////////////// Arrow function (from ES6) ///////////////////////////

/*
// function with name
const fun = function concate(arr1, arr2){
    return arr1.concat(arr2);
}
console.log(fun([1,2],[3,4,5]));

// anonymous function
const anonymousFun = function (arr1, arr2){
    return arr1.concat(arr2);
}
console.log(anonymousFun([1, 2], [3, 4, 5]));

// arrow function
const arrowFun =  (arr1, arr2) => arr1.concat(arr2);
console.log(arrowFun([1,2],[3,4,5]));
*/





/////////////////////// Arrow function eg (from ES6) ///////////////////////

/*
var realNumArray = [3, -5, 7, -2, 6, 0, -5.25, 62.222];

function positiveSquare(arr) {
    const result = arr.filter(a => Number.isInteger(a) && a > 0).map(a => a * a);
    console.log(result);
}

positiveSquare(realNumArray);
*/



//////////////////// Default parameter in function argument (from ES6) ///////////////////////

/*
function defaultArgument(a, b = 2) {      // ---> b = 2 is default argument
     console.log(a+b);
}

defaultArgument(4,6);
defaultArgument(6);
*/


/////////////////// Rest operator (...) in function argument (from ES6) ///////////////


// (...) --->  we can pass variable number of arguments


/*
const restOperator = function (...values) {
    return values.reduce((a, b) => a + b, 0);
}

console.log(restOperator(1, 2, 3));
console.log(restOperator(4, 5, 6, 7, 8, 9));   // can pass any number of argument
console.log(restOperator());                   // can pass any number of argument

*/




//////////////// spread operator [...] for Arrays (from ES6) ///////////////////////

/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;
arr1[0] = 9;             // both value will change
console.log(arr1);
console.log(arr2);
*/

/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];         // just copy elements
arr1[0] = 9;
console.log(arr1);
console.log(arr2);
*/

/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 8, ...arr1];    // add elements of arr1
console.log(arr2);
*/



//////////////////// Destructuring with object (from ES6) //////////////////////

/*
const destructureObject= {
    a: 1,
    b: 2,
    c: 3
}

// {key:variable}=object;
const { a: x, b: y, c: z } = destructureObject;

console.log(x,y,z);
/*

/*
const temprature = {
    today:33,
    tomorrow:44
}

function returnTemprature(obj) {
    const { tomorrow: kal } = obj;
    console.log(kal);
}

returnTemprature(temprature);
*/




////////////////////// Destructuring with nested object (from ES6) /////////////////////////


/*
const nestedObj = {
    today: { min: 1, max: 5 },
    tomorrow: { min: 7, max: 12 }
}

// need tomorrow --> max

const { tomorrow: { max: tomorrowMax } } = nestedObj;

console.log(tomorrowMax);  // ---> 12
*/




//////////////////// Destructuring with Array (from ES6) //////////////////////////////


/*
const arr = [1, 2, 3, 4, 5];
const [x, , , y] = arr;
console.log(x,y);
*/

/*
let a = 3, b = 6;
console.log(a, b);

[a, b] = [b, a];

console.log(a,b);
*/


//////////////////////// Destructuring example  //////////////////////////////

/*
const source = [1, 2, 3, 4, 5];

function removeFirstTwo(arr) {
    const [, , ...removed] = arr;          // destructure and spread operator for Array
    return removed;
}

console.log(source);                  // ----> 1,2,3,4,5
console.log(removeFirstTwo(source));   // ----> 3,4,5

*/

/*
const stats = {
    name: "bhargav",
    state: "stable",
    age: 23,
    min: 22,
    max:70
}

function destrucure({min,max}) {        // destructuring of object
    return min + max;
}

console.log(destrucure(stats));
*/



///////////////////////// Template Literals `` (From ES6) ///////////////////////////////

/*
const tempLiterals = `Hello, I'm Bhargav "Ponkiya".  
My age is ${3 + 62}.`;                                    // output --> this line will be new line

console.log(tempLiterals);
*/

/*
const objOfArr = {
    1: [2, 3, 4],
    2: [3, 4, 5,6,7,8,9],
    3: [4,5,6]
}

function tempLitls(arr) {

    const newArr = [];

    for (let i = 0; i < arr.length;i++){
        newArr.push(`<li class="temp">${arr[i]}</li>`);
    }
    return newArr;
}

console.log(tempLitls(objOfArr[2]));
*/



//////////////////////////// Example ///////////////////////////////////

/*
const createFun = (name, age)=>{
    return {
        name: name,
        age:age
    }
}

console.log(createFun("Bhargav",53));
*/


/*
const createFun = (name, age) => ({ name, age });

console.log(createFun("Bhargav",53));
*/



//////////////////// Function inside Object /////////////////////

/*
const bicycle = {
    name: "by",
    model: "C",
    fun1: function () {             // we can write function like this 
        return this.name;
    },
    setModel(model){                // we can write function like this
        this.model = model;
        return this.model;
    }
}

console.log(bicycle.fun1());
console.log(bicycle.setModel("D"));
*/



//////////////////////// Ways to Create Object ///////////////////////////////

/*
const firstWay = function (name) {
    this.name = name;
}

var obj = new firstWay("Bhargav");     // write new keyword before function calling to create object

console.log(obj.name);
*/



/*
class secondWayUsingClass{

    constructor (name) {
    this.name = name;
    }

}

var obj = new secondWayUsingClass("Bhargav");  // whenever we create object, constructor() get automatically invoked and constuctor() initialize object

console.log(obj.name);
*/


/*
function makeClass() {

    class makeObject{

        constructor(name) {
            this.name = name;
        }

    }

    return makeObject;
}

const returnClass = makeClass();
const obj = new returnClass("Bhargav");
console.log(obj.name);
*/




////////////////// getters and setters in class ///////////////////////////////

// get and set act as a properties of object  ---> because we can use it or call it without using ()


/*
function makeClass() {
    
    class Temprature{
         
        constructor(temp) {
            this.temprature = temp;
        }

        get getTempr() {
            return this.temprature;
        }

        set setTempr(temp) {
            this.temprature = temp;
            return this.temprature;
        }

    }
    
    return Temprature;
}


const returnedClass = makeClass();
const obj = new returnedClass(33);
console.log(obj.temprature);
console.log(obj.getTempr);                   // we haven't used () for get
console.log(obj.setTempr=55);                // we haven't used () for set

*/




//////////////////////// import and export ///////////////////////////

/*
// index.js --> file name
import {capital} from "./other.js"

const cap = capital("hello");
console.log(cap);


// other.js ---> file name
export const capital = str => str.toUpperCase();
*/

/*
// import everything from other.js file

import * as ObjectName from "other";
*/


/*
// export default and import default

// other.js ---> file name
const PI = 3.14;
export default PI;              // export only one thing from this file by specifying default keyword


// index.js --> file name
import PI from "other";               // no need to give {PI} curley brecket when u r importing export default

console.log(PI);
*/
























































































































































