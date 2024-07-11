// hoisting ==> variables and functions move to the top of the scope
//          ==> during the compile phase it moves to the global scope or function scope
//          ==> 


hoistedVarFunctionExpression()

var hoistedVarFunctionExpression = function(){
    console.log('this is a function expression')
}

hoistedLetFunctionExpression()

const hoistedLetFunctionExpression = function(){
    console.log('this is a function expression')
}

hoistedConstFunctionExpression()

const hoistedConstFunctionExpression = function(){
    console.log('this is a function expression')
}
