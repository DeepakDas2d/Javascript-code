// log statement using console.log
// console.log("Hello from index.js");

// Variables

let age = 23;
const salary = 80000;
// salary = 40000; // TypeError : Assignment to constant variable
// console.log(age, salary);

// Data Types
// 1. Primitive Types - 7 Types
// 2. Non-Primitive Types - 1 Types

// Primitive Types
// String
// Number
// Boolean
// undefined
// Null
// BigInt
// Symbol

// Non-Primitive Types - Objects

const name = "Deepak";
const language = "Java";
const location = `Delhi`;

const total = 0;
const PI = 3.14;

const isNumber = true;

let result = undefined;
// console.log(result);

const data = null;

// console.table([
//   typeof name,
//   typeof total,
//   typeof isNumber,
//   typeof result,
//   typeof data,
// ]);

const person = {
  name: "deepak",
  lastName: "das",
  age: 23,
};

// console.log(person.name);

const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[0]);

// Operators : An operator is a special symbol used to perform operations on values and variables.
// Assignment
// Arithmetic
// Comparison
// Logical
// String
// Other

// Assignment Operators
let x = 5;
let y = 10;

// console.log(--x, ++y);

//Comparison
// console.log(x === y);

// Logical
// const isValidNum = x > 8 && 8 > y;
const isValidNum = x > 8 || 8 < y;
// console.log(isValidNum);

// string
// console.log("Deepak" + " " + "Das");

//Turnary Operator
const isEven = 10 % 2 === 0 ? true : false;
// console.log(isEven);

// Types Conversions
//  Implicit conversion : also known as type conversion where js itself will automatically convert the type

// Explicit conversion : where you manually convert the type

// Implicit conversion
// console.log("2" - "3");
// console.log(5 + "3");
// console.log("2" * "3");
// console.log(9 / "3");
// console.log(20 % "3");
// console.log("5" - true);
// console.log("5" - null);
// console.log("5" - undefined);

// Explicit conversion
let num = "5.10";
// console.log(Number(null));
// console.log(typeof num);
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(String(500));
// console.log(Boolean(10));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(" "));

// Equality
//  == (Allows coercion)
//  === (Does not allows coercion)

const var1 = "5";
const var2 = 5;

// console.log(var1 === var2);

// Conditional Statements
// if
// else
// else if
// switch

const numbers = 0;

// if (numbers > 0) {
//   console.log("It is a positive number");
// } else if (numbers < 0) {
//   console.log("It is  Negative");
// } else {
//   console.log("Number is zero");
// }

// console.log(numbers > 0 ? "Number is Positive" : "Number is negative");

const color = "orange";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   case "green":
//     console.log("Color is green");
//     break;
//   default:
//     console.log("Not a valid color");
// }

// Looping Code
// 1. For loop
// 2. While loop
// 3. Do .. While Loop
// 4. For..of Loop

// For Loop
// for (initializer; Condition; final-expression){
//   //Code
// }
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Number is :", i);
// }

// while loop

// initializer;
// while (condition) {
//   //Code to run
// final - expression;
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let fruits = ["apple", "banana", "oranges", "mango"];
// for (let fruit = 0; fruit < fruits.length; fruit++) {
//   console.log(fruits[fruit]);
// }

// Do..While Loop

// initializer
// do{
//   //Code to run
//   final-expression
// } while (condition)

// let i = 6;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// For..of loop
// used to loop over collection of data

// for (const item of array) {
//   //code to run
// }

// let fruits = ["apple", "banana", "oranges", "mango"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// Functiions
// A javaScript function is a block of code designed to perform a particular task.

// syntax : function name(parameter1, parameter2, parameter3){
//   // code to be executed
// }

function greet(username) {
  console.log("Good evening " + username);
}

function add(x, y) {
  return x + y;
}

const sum = add(10, 15);
// console.log("Sum is : " + sum);

// Arrow function
const arrowFunc = () => {
  console.log("New Function");
};
// arrowFunc();

// Scope in JS
// Scope basically detemines the accessibility or visibility of variables
// Types :
// 1. Block Scope
// 2. Function Scope
// 3. Global Scope

// Block scope example :
if (true) {
  const myName = "deepak";
}

//console.log(myName); //throw an error

//Function scope example :

function testFn() {
  const myName = "Deepak";
}

// console.log(myName);

// Global scope example :

if (true) {
  var myName = "Deepak";
}

console.log(myName);
