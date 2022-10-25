let promise = new Promise(function(reject,resolve){})

// Promise is always used with its constructor function
// promise constructor takes a function as an argument and also accepts 2 functions reject, resolve
// if the promise returned successfully resolve() function is called, reject otherwise

let count = true;
let countValue = new Promise(function(resolve, reject){
    if (count) {resolve('there is a value');} else {reject('no value')}
})
console.log("countValue",countValue);

// when u have to handle more than 1 async task u use chaining ==> then, catch, finally 
// then method is used with the callback function 
// then method is used to chain the functions to the promise

let countValue2 = new Promise(function(resolve, reject){
    resolve('countValue2')
})

countValue2
    .then(function successValue(result){
    console.log('result',result)
    })
    .then(function successValue1(){
        console.log('u can call multiple functions this way')
    })

// promise vs callbacks 
// promises are somewhat similar to the callbacks since they both can be used to handle asynchronous tasks
// main difference b/w both is error handling is very easy in promises, syntax is userfriendly and easy to read 