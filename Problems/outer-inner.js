export function outerFunction(outerVariable){
	function innerFunction(innerVariable){
		console.log({outerVariable})
		console.log({innerVariable})
	}
}


