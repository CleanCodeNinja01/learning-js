// how a prototype works 
// what is prototype chaining
// how a prototype works?

// prototype inheritance is a concept in which objects can inherit props & methods from other objects
// every JS object has property [[prototype]] --> __proto__

const person = {
    isHuman: false,
    printIntro(){
        if(!this.isHuman){
            const a = `not` 
            console.log(`I am person and I am not a human`)
        } else{
            console.log(`I am person and I am a human`)
        }
    }
}

// const p = new Person()
const print = person.printIntro()