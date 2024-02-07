// this keyword ==> very important concept, very powerful, and sometimes confusing
/* this can be changed in following methods:
    1. Default binding
    2. Call, apply
    3. methods
    4. Constructor
    5. Bind
    6. Arrow function ==> parent ka jo this hai wohi issk andar hona chahye
*/

// Link: https://www.youtube.com/watch?v=a2X6sRy5zDA&list=PLxnSeqQVewBMOriFCMbLQU9cCjuAD-1-4&index=2

// not specific to library but core JS

/*Default binding ==>  */

var name = "Saleha"

function foo(){
    console.log(this.name)
}

foo();

/*Call, apply */ 

// 1. this ka context 2. as an argument
foo.call({
    name: "React"
}, "Angular", "Vue")

foo();

// same as call but here argument is passed as array
foo.apply({
    name: "Apply React"
}, ["Angular", "Vue"])

/*call ==> 1. function ko run krhe hain 2. this ka context set horha hai */

/*Methods changing this value */

// jo function kisi object k upar hota hai hum usse method kehte hain

let employee = {
    name: "Saleha",
    sayName: function(){
        console.log(this.name)
    }
}

employee.sayName()

// agar method ko kisi variable men assign karen and then usse call karen tou this ki binding lost hojati hai jisko bind resolve krta hai
 // For Eg:

let showName = employee.sayName.bind({
    name: "Hi from bind"
});
showName(); 

// bind ==> this ka context set krk rkhskte hain 

/*Arrow function men context kis tarah se change hota hai */
// to make sure the inner function of the method points to the object rather than the global window object
// lexical meaning is vocabulary in context

// Arrow function is likeable due to some reasons:
// 1. compact way of writing
// 2. the lexical this scope inside of an arrow function points to its context rather than the global object meaning it doesnt bind its this but instead inherit it from its surrounding scope

var name = "global"


let employee2 = {
    name: "Saleha",
    sayName: function(){
        // var bar = () =>{
            // this ka value arrow function ki waja se employee ko point krha hai 
        //     console.log(this.name)
        // }
        // bar();
        setTimeout(()=>{
            console.log(this.name)
        },1000)
    }
} 


employee2.sayName();
