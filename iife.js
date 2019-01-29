/* eslint-disable */
function greet(name) {
  console.log(`Hello ${  name}`);
}

greet('John');

var greetFunc = function (name) {
  console.log(`Hello ${  name}`);
};
greetFunc('John');

var greeting = (function (name) {
  return `Hello ${  name}`;
}('John'));

console.log(greeting);
