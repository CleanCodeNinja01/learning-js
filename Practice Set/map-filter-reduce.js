// map method: 1) a method on array object (2) works like for loop (3) HOF ==> kisi aur function ko value expect krta hai (4) immutable dat but returns a new array (5) jitna data dynamically add hoga ye uss pe bhi loop over karega

let input = [1, 2, 3];

const output = input.map(function (values, index, array) {
  return 2 * index;
});

console.log({ input });
console.log({ output });

// filter method: 1. it accepts an anonymous function ( function without a name)

const numbers = [1, 3, 5, 4, 2];

const numbersFiltered = numbers.filter(function (value) {
  return value > 2;
});

// reduce method: 1. takes 2 params: a. function b. initial state 2. prev ==> prev jo return krne pe aaya hai wo prev men set hojayega 3. give initial state

const values = [1, 3, 5];

const total = values.reduce(function (prev, next) {
  return prev + next;
}, 0);

console.log({ total });

const allValues = [
  [1, 2, 3],
  [4, 5, 6],
];

const flattenArray = allValues.reduce(function (prev, next) {
  return prev.concat(next);
}, []);
console.log({ flattenArray });

// reduce example 2 ==> find out the unique chars using reduce method
const chars = ["s", "a", "t", "s", "l", "e", "t"];

const charsInfo = chars.reduce(function (prev, next) {
  if (next in prev) {
    prev[next]++;
  } else {
    prev[next] = 1;
  }
  return prev;
}, {});

console.log({ charsInfo });
