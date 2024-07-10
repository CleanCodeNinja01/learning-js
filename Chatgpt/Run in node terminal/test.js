function Fox(color){
	this.color = color
}


// prototypal inheritance / prototypal chaining

// Object.prototype.hasOwnPropert

Fox.prototype.speak = function(){
	console.log("Iam"+ this.color)
}

var myf = new Fox('blue')
setTimeout(myf.speak, 1000)


function myfun (a,b){
	console.log(a,b)
	return a + b
}

(function foo(){
	console.log('foo')
})();

bar();
baz();
foo();

function bar(){
	console.log('bar')

}

const baz = function(){
	console.log('baz')
}



export default App;
