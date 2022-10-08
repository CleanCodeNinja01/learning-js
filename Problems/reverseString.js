let x = 'saleha';
//OUTPUT ==> ahelas

const reverseString = (string1) => {
    let reversed = []
    for(let i = string1.length; i>=0; i--) {
        reversed.push(string1[i])
    }
    return reversed.join('')
}

console.log("reverseString",reverseString(x))