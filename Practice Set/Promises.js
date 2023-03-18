// how promises work ==> pending state by default, after then it would success of failure

function getStudent() {
  // promise accepts a function having 2 params: resolve and reject
  return new Promise(function (resolve, reject) {
    setTimeout(()=>{
        reject("Something went wrong");
    },500)
  });
}

console.log(getStudent());

getStudent().then(success, failure);

function success () {
  console.log("success");
};

function failure (errorMessage) {
  console.log("failure", errorMessage);
};

//
// promise vs callbacks
// promises are somewhat similar to the callbacks since they both can be used to handle asynchronous tasks
// main difference b/w both is error handling is very easy in promises, syntax is userfriendly and easy to read
