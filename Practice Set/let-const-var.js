// let keyword: block level scope ==>
// transpiler ==> convert es6 to es5
// closure ==>

function myFunc() {}

// const keyword ==> immutable reference
// const primitive dene pe change nai krparha par
// reference

/* Let use-case:  */

// JS has functional scope
// Time: 7:54 pm 18th March

function checkVar() {
  for (var i = 0; i < 10; i++) {
    console.log({ i });
  }
  console.log("outside loop with var", i);
}

// checkVar();

function checkLet() {
  for (let i = 0; i < 10; i++) {
    console.log({ i });
  }
  console.log("outside loop with let", i);
}

// checkLet();

// Let keyword ==> block level scope
// ES6 / Babel ==> transpiler that converts ES6 to ES5 ==>

/*CLOSURE ==>  */

function checkClosureWithVar() {
  var myFunc = [];
  for (var i = 0; i < 10; i++) {
    myFunc.push(function () {
      console.log({ i });
    });
  }
  myFunc.forEach((element) => {
    element();
  });
}

checkClosureWithVar();

function checkClosureWithLet() {
  var myFunc = [];
  for (let i = 0; i < 10; i++) {
    myFunc.push(function () {
      console.log({ i });
    });
  }
  myFunc.forEach((element) => {
    element();
  });
}

checkClosureWithLet();


// closure ==> inner function to give access to its outer function scope

// data privacy 
function createCounter(){
  let counter = 0

  return {
    increment(){
      counter++;
      return counter
    },
    decrement(){
      counter--;
      return counter
    },
    getCount(){
      return counter
    }
  }
}

const counter = createCounter()
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.getCount())

// closure can create function factories

function multiplier(multiplier){
  return function(number){
    return number*multiplier
  }
}

const multiplyPrint = multiplier(5)

console.log(multiplyPrint(3))

// closures are powerful features that allow functions to access variables from their lexical scope

// lexical scope ==> variable that is valid till that