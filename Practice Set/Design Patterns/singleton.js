// singleton => a class can only 1 instance and provides a global point of access to that instance

// singleton thru closures

const singleton = (function(){
        let instance;

        function singletonClass(){
            this.value = `I am the singleton instance`
        }

        return {
            getInstance: function(){
                if(!instance){
                    instance = new singletonClass();
                }
                return instance;
            }
        }
}
    )()

const instance1 = singleton.getInstance()


// singleton thru class

class Singleton {
    constructor(){
        if (Singleton.instance){
            return Singleton.instance
        }

        this.value = `I am a singleton instance`

        Singleton.instance = this
        return this
    }
}

const instance2 = new Singleton()

// console.log({instance2})

// both above approaches ensure only 1 object is created, providing a global point of access to that instance


// simple closure

function outer(){
    let secret = "🔐";
    return function inner(){
        console.log('secret is: ', secret);
    }
}

const reveal = outer();
reveal(); // 🔐