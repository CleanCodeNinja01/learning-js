// IIFE ( Immediately Invoked Function Expression )

(function(){
    const privateVar = 'I am private'
    function privateFunction(){
        console.log(`I am a private function`)
    }
    privateFunction()
})()

// its a function expression rather than declaration
// the ending () immediately calls / invokes the function
// variables inside the function are not accessed outside the function helping to prevent global namespace pollution



