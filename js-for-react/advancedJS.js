//  Advanced Concepts
// 1. Nested function's scope
// 2. Closures
// 3. Curring
// 4. this keyword
// 5. Prototype
// 6. Prototypal inheritance
// 7. Class
// 8. Iterables and Iterators
// 9. Generators

// Scope
// Block Scope - Variables declared inside a pair of curly braces cannot be accessed from outside the block

// Function Scope - Variables declared inside a function cannot be accessed form outside function

// Global Scope - Globally scoped variables can be accessed inside a block or function

// Nested function's scope
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     // console.log(a, b, c);
//   }
//   inner();
// }

// outer();

// Closure
// A closure is the combination of a function bundled together with reference to its surrounding state. clousres are every time a function is created, at function creation time.

// Example
let counter = 0;
function outer() {
  counter = 1;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
