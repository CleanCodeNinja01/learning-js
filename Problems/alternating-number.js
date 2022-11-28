// Alternating number : the parity (even / odd) of its digits are alternate

// Problem: check if the number is alternating number

// let s = 123; //alternating nuumber
// 246

// even odd even odd
const checkEvenOdd = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (i%2 ==0 && s[i]%2!=0){
            return 'Not Alternating number'
        } 
        if (i%2 ==1 && s[i]%2 !=1){
            return 'Not Alternating number'
        }
    }
    return 'Alternating number';
}

// odd even odd even
const checkOddEven = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (i%2 == 0 && s[i]%2 != 1){
            return 'Not Alternating number'
        } 
        if (i%2 == 1 && s[i]%2 != 0){
            return 'Not Alternating number'
        }
    }
    return 'Alternating number';
}

const checkAlternatingNumber = () => {
    let s = '124';
    return (checkEvenOdd(s) && checkOddEven(s))
}

console.log('checkAlternatingNumber: ', checkAlternatingNumber() )