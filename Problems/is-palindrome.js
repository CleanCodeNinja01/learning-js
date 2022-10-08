let x = 'abccba'

const isPalindrome = (string1) => {
    let j = string1.length - 1;
    for(let i=0; i<string1.length; i++) {
        if(string1.charAt(i) === string1.charAt(j)){
            j--
        }
        else{
            return false
        }
    }
    return true
}

console.log("isPalindrome",isPalindrome(x));

//This following approach is not iterating i to the end of the aray,
//instead only goes to the midpoint of the array + 1

const isPalindromeOptimized = (string2) => {
    let j = string2.length - 1;
    let midpoint = (string2.length/2)+1
    for(let i=0; i<midpoint; i++) {
        if(string2[i]==string2[j]){
            j--;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log("isPalindromeOptimized",isPalindromeOptimized(x))