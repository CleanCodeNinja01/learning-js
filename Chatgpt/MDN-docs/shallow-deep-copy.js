// const a = Object.clone()

let original = { 
    name: "Alice", 
    address: { city: "Wonderland" } 
  };

let shallowCopy = Object.assign({}, original)

let deepCopy = JSON.parse(JSON.stringify(original))

// console.log({deepCopy})

// console.log({original})
// console.log({shallowCopy})

// write implementation of deepCopy function

const ifNotObject = (original) => {
    if (original == null || typeof original !== 'object'){
        return original
    }
}

const ifArray = (original) => {
    const resultArray = []
    for( let key of original){
        resultArray.push(original)
    }
    return resultArray
}

const ifObject = (original) => {
    let resultObject = {}
    for (let key in original){
        if (original.hasOwnProperty(key)){
            resultObject[key] = deepCopy(original[key])
        }
    }
    return resultObject
}

const deepCopyFn = (original) => {
    ifNotObject(original)

    if (Array.isArray(original)){

    }
}

let deepCopyObject = deepCopyFn(original)

const array2 = [1,3,5]

const accessingArray = (array1) => {
    for (let arrayElement of array1){
        console.log({arrayElement})
    }
}

// console.log(accessingArray(array2))

// map

const a = [2, 4, 6, 8, 10, 11, 14]

const result = a.map((element)=>{return element*2})

console.log({result})

// odd number filter

const resultFilter = a.filter((odd)=> {if(odd%2 !=0){return odd} })

// console.log({resultFilter})

// generate random number

const rand = (number) => {
    return Math.floor(Math.random()* number)
}

// console.log(rand(5))

const factorial = (number) => {
    let factProduct = 1
    if (number === 0 || number === 1){
        return 1;
    } else {
        for(let i=2; i<=number; i++){
            factProduct = factProduct * i // 1*4 
        }
    }
    return factProduct
}

console.log('hhh')
console.log(factorial(5))