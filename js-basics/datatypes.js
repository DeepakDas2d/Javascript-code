"use strict"; // treat all JS code as newer version

// alert(3 + 3); // it's run on browser

let name = "Deepak";
let age = 18;
let isLoggedIn = true;
let city = null;
let state = undefined;
const sym = Symbol("description");
let largeNumber = 1234567890123456789012345678901234567890n;

// console.table([typeof name, typeof age, typeof isLoggedIn]);
// console.log(typeof largeNumber);

// Premitive Datatypes
// number -  2 to power 53
// bigInt
// string - " "
// Boolean - true/ false
// null - standalone value (Represents the intentional absence of any value or object.)
// undefined
// Symbol - unique

// Non-Premitive Datatypes
// object

// primitive types : These are the basic types of data in JavaScript, which are immutable (cannot be changed directly after creation) and are compared by their value.

// non-primitive (reference) types : These types are objects and are mutable (can be changed after creation). They are stored by reference, meaning if you assign an object to another variable, both variables refer to the same object.

// Object : A collection of key-value pairs, where the keys are strings and the values can be any data type.

let person = {
  name: "John",
  age: 30,
  isStudent: false,
};

// console.log(typeof person);

// Array : An ordered list of values, indexed by numbers (arrays are also objects).
let numbers = [1, 2, 3, 4];
let fruits = ["apple", "banana", "cherry"];

// Function : A function is a callable object. Functions are also objects in JavaScript.
function greet(name) {
  return `Hello, ${name}`;
}

// console.log(greet("Deepak"));

// Date : Represents dates and times.
let currentDate = new Date();
// console.log(typeof currentDate);

// RegExp (Regular Expression) : Represents a pattern used for matching text in strings.
let pattern = /abc/;
// console.log(pattern);

let str = "hello";
str = "H";
console.log(str);

// Note :
// Primitive types (like Number, String, Boolean, etc.): Immutable — once created, their values cannot be modified directly. You can only reassign a new value to the variable.

// Non-primitive types (like Object, Array, etc.): Mutable — you can change the contents of the object or array directly.
