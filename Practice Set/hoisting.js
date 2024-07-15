// hoisting ==> variables and functions move to the top of the scope
//          ==> during the compile phase it moves to the global scope or function scope
//          ==> 


// hoistedVarFunctionExpression()

// var hoistedVarFunctionExpression = function(){
//     console.log('this is a function expression')
// }

// hoistedLetFunctionExpression()

// const hoistedLetFunctionExpression = function(){
//     console.log('this is a function expression')
// }

// hoistedConstFunctionExpression()

// const hoistedConstFunctionExpression = function(){
//     console.log('this is a function expression')
// }

// mutating your input or adding states or dependencies make up to impure function

const impureAssoc = (key, value, object) => {
    object[key] = value;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const result = impureAssoc('shoeSize', 400, person);
  
  console.log({
    person,
    result
  });
  
// pure version

const pure = (key, value, object) => ({
    ...object,
    [key]: value
})

const person2 = {
    name: 'Bobo'
  };
  
  const result2 = pure('shoeSize', 400, person);
  
  console.log({
    person2,
    result2
  });
  