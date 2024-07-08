// takes a higher order function memoize
// which takes fn as argument
// memoize function is used for enhancing performance by caching its return values based on inputs



function memoize(fn){
    let cache = {}
    return function(...args){
        console.log('args...', args)
        let key = args.join(',');
        console.log('key...', key)
        console.log('cache...', cache)

        if(key in cache){
            console.log('inside if', cache[key])
            return cache[key]
        }
        console.log('outside uf', key)
        console.log('outside uf', cache)
        console.log('cache[key]',cache[key])
        console.log('fn(...args)', fn(...args))
        cache[key] = fn(...args)
        console.log('after cache[key]',cache[key])
        return cache[key]
    }

}

// Define a sample function to be memoized
function add(a, b) {
    console.log('Performing addition...');
    return a + b;
}

// Memoize the 'add' function
const memoizedAdd = memoize(add);

// Call the memoized function with arguments
console.log(memoizedAdd(2, 3)); // Output: Performing addition... key 2,3 5
console.log(memoizedAdd(2, 3)); // Output: key 2,3 5 (Result fetched from cache)
console.log(memoizedAdd(5, 7)); // Output: Performing addition... key 5,7 12
console.log(memoizedAdd(5, 7)); // Output: key 5,7 12 (Result fetched from cache)


function Company(){
    this.employeeStack = 'frontend'

    setInterval(function(){
        this.employeeStack = 'fullstack'; // this refers to the global object
        console.log('stack changed to: ', this.employeeStack)
    }, 1000)
}

var company = new Company()

function CompanyWithArrowFunction(){
    this.employeeStack = 'backend'

    setInterval(()=>{
        this.employeeStack = 'fullstack' // this refers to the Company object
        console.log('stack changed to: ', this.employeeStack)
    }, 1000)
}

function objectLiteral(){
    return {
        name: 'saleha',
        age: '26'
    }
}

const objectLiteralWithArrowFunction = () => ({
    name: 'Saleha',
    age: 27
})