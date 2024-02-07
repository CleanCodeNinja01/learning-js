// Arrow Function example1
const example1 = a => {
    console.log(a)
  }

// const transformArray = () => {
//     const evens = [2,4,6,8,10];
//     evens.map(function(val){
//         console.log(val+1)
//     })
// }

// transformArray();

const evens = [2,4,6,8,10];

// map doesnt change the actual / original array values
// it keeps the changes and gives it to you

const odds = evens.map((val)=>
    val+1
)

console.log(odds)

// arrow function ==> if 1 liner no need to give return and remove curly braces as well

const filterOut = [1,2,3,4,5,6,7]
const filterOutOdd = filterOut.filter(val=> val%2==0)

console.log({filterOutOdd})

filterOut.forEach(val=>{
    if(val%3 == 0){
        console.log('3 ka multiple ')
    }
})

// this keyword ==> in arrow function


// rest parameter

// single liner => then remove curly brackets + return 

