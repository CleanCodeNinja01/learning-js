const stringArray = 'kayak'
const isPalindromOptimized = (stringArray) => {
    let i = 0
    const lengthArray = stringArray.length
    let left
    let right
    const mid = Math.ceil(stringArray.length/2)
    while(stringArray[i] < stringArray[lengthArray-1-i]){
        // left = stringArray[i]
        // right = stringArray[lengthArray-1-i]
        console.log(mid)
        if(left==right){
            left++//a
            right--//a
        } else if(left != right){
            return false
        } 
    }
    return true;
}


console.log(isPalindromOptimized(stringArray))

const inputArray = 'kayak'

// check if it is a palindrome or not []

const checkForPal = (inputArray) => {
    const midpoint = Math.floor((inputArray.length/2)+1)
    let rightMost = inputArray.length - 1
    for (let index = 0; index < midpoint; index++) {
        if(inputArray[index]==inputArray[rightMost]){
            rightMost--
        } else {
            return false
        }
    }
    return true
}

console.log(checkForPal(inputArray))