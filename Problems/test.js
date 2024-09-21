/*
Input: s = “i love programming very much” 
Output: s = “much very programming love i”

*/

const input = "i love programming very much"

const reverseWordsInAString = (input) => {
    return input.split(" ").reverse().join() // ['i', 'love', ]
    // const resultArray = []

    // for (let index = inputArrayWithoutSpace.length - 1; index >= 0; index--) {
    //    resultArray.push(inputArrayWithoutSpace[index])
        
    // }
    // return resultArray

    // const map = new Map()

    // for (let index = 0; index < inputArrayWithoutSpace.length; index++) {
    //     if (map.has(inputArrayWithoutSpace))
        
    // }

    // inputArrayWithoutSpace

}

const r = reverseWordsInAString(input)
console.log({r})