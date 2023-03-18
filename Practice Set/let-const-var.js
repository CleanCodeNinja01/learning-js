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
