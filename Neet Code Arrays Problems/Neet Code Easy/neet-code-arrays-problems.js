// contains duplicate

const input = [1,2,3,1,4,5,2]
// const output = true or false

function containsDuplicate(input){
	// will set value of map to -1 once it finds the value
	const map = new Map
	const dup = []
	for (let i = 0; i < input.length; i++) {
		if(!map.has(input[i])){
			map.set(input[i], 1)
		} else {
			map.set(input[i], map.get(input[i])-1)
			dup.push(input[i])
		}	
	}
	return dup
}

const result = containsDuplicate(input)


function removeDuplicates(input){
	const map = new Map
	for (let index = 0; index < input.length; index++) {
		if(!map.has(input[index])){
			map.set(input[index], 1)
		} else {
			map.delete(input[index])
		}
	}
	return [...map.keys()]
}

const dups = removeDuplicates(input)
console.log({dups})