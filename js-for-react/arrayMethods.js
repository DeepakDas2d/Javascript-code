// let n = [7, 9, 13];
// let NewArr = n.join(",");
// n.pop();
// // console.log(n);
// n.push([8, 10, 12]);
// // console.log(n.length);
// let m = [2, 5, 9];

// let o = n.concat(m);
// console.log(o);

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// numbers.splice(2, 1, 23, 24);
// console.log(numbers);

let num = numbers.slice(1, 4);
// console.log(num);

// forEach loop : The forEach() loop in JavaScript is used to iterate over the elements of an array and execute a provided function for each element. It doesn't return anything; it simply performs an action for every element in the array.

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element) {
//   console.log(element);
// });

// let arr2 = ["apple", "banana", "cherry"];

// arr2.forEach(function (element, index) {
//   console.log(index + ":" + element);
// });

// map method : The map() method in JavaScript is used to create a new array by applying a provided function to each element in an existing array. Unlike forEach(), which is used for executing side effects (e.g., logging or modifying the array), map() is designed to transform the elements of an array and return a new array with the transformed elements.

// The map() method does not modify the original array. Instead, it returns a new array with the transformed values.
// The new array will always have the same length as the original array.
// If no transformation is needed, map() still returns a new array (though the elements will remain unchanged).

// let arr3 = [1, 2, 3, 4, 5];

// let newArr3 = arr3.map((element) => {
//   return element * 3;
// });

// console.log(newArr3);

// Filter method : The filter() method in JavaScript is used to create a new array with all elements that pass a given condition (i.e., elements that satisfy the condition specified in a callback function). This method does not modify the original array; instead, it returns a new array containing only the elements that match the condition.

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr4 = arr4.filter((element) => {
//   return element % 2 === 0;
// });

// console.log(newArr4);

// Reduce Method : The reduce() method in JavaScript is a powerful tool used to reduce an array to a single value by applying a function to each element in the array (from left to right). This method takes a callback function and an optional initial value.

// syntax : array.reduce(function (accumulator, currentValue, index, array) {
//   // logic to reduce elements
// }, initialValue);

// Example 1: Summing the Elements of an Array
let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(sum);

// Example 3: Flattening an Array of Arrays
let arr10 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let flattened = arr10.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
});

// console.log(flattened);

let arr11 = [1, 2, 3, 4, 5, 6];

let grouped = arr11.reduce((accumulator, currentValue, index) => {
  if (index % 2 === 0) {
    accumulator.push([currentValue, arr11[index + 1]]);
  }
  return accumulator;
}, []);

// console.log(grouped);

for (i in arr11) {
  console.log(i);
}
