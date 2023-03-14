// HOF ==> call krte hain aur ye in return ek function return krta hai
// JS men 1 function, dusre function ko bhi return krskta hai
// function1(){return function2(){return a}}

// addBy3 ek aur function ko closure men access krha hai
// very useful concept in HOF
const addBy3 = function(a){
    return function(b){
        return a + b;
    }
}

const secondFunc = addBy3(3);

console.log(secondFunc(5))

console.log(addBy3(3)(6)) // ==> addBy3(3) ==> inside func