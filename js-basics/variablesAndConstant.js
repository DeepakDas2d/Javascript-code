const accountId = 230;
let accountEmail = "deepakdas@gmail.com";
var accountPassword = "123456789";
accountCity = "Delhi";
let accountState;
// accountId = 1254;  Assignment to constant variable.

accountEmail = "deepakdas@gmail.com";
accountPassword = "1234";
accountCity = "Kolkata";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// or
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Feature
var: Function or global scope
let: Block scope
const: Block scope

Reassignable
var: Yes
let: Yes
const: No (but properties of objects/arrays can be modified)

Redeclarable
var: Yes (within same scope)
let: No (in same scope)
const: No (in same scope)

Hoisting
var: Hoisted (initialized to undefined)
let: Hoisted (TDZ until declaration)
const: Hoisted (TDZ until declaration)

*/
