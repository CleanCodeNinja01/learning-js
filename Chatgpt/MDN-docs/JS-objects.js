// JS is a scripting language, interpreted ( gives result right away - JIT [ JUST IN TIME COMPILING ]) programming language, dynamic typed
// All things are objects in JS
    // JS primitive types: undefined, null, boolean, number, string, symbol
    //  Functions in JS are first class objects, meaning they can be assigned to variables
// all things are objects like arrays to browser objects

// JS API --> 1. 3rd party API 2. Browser API
        // Browser API ==> built into browser for doing complex operations.
                        // used for manipulating HTML and CSS
                        // 1. DOM API
                        // 2. audio & video API
                        // 3. 


let user = {
    name: 'saleha',
    age: 26
}

let clone = {}

for (let key in user){
    clone[key] = user[key]
}

clone.name = 'asim'
clone.age = 25

Object.assign('person', user)

console.log({clone})
console.log({user})
console.log({person})