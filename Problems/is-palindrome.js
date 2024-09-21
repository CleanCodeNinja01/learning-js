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

// console.log("isPalindrome",isPalindrome(x));

//This following approach is not iterating i to the end of the aray,
//instead only goes to the midpoint of the array + 1

const isPalindromeOptimized = (string2) => {
    const a = string2.toLowerCase()
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

// console.log("isPalindromeOptimized",isPalindromeOptimized(x))

var isPalindrome2 = function(s) {
    const removeNonAlphaNumeric = s.replace(/[^a-zA-Z0-9]/g, '');
    const lowerCase = removeNonAlphaNumeric.toLowerCase();
    const stringArray = lowerCase.split("");
    let j = stringArray.length - 1 // 7
    for(let i=0; i<j/2; i++){
        if(stringArray[i]==stringArray[j]){
            j--
        } else {
            return false
        }
    }
    return true;
};

const s = "Race a Car" //raceacar
// const s2 = "A man, a plan, a canal: Panama"
// console.log("isPalindrome2",isPalindrome2(s));

var isPalindrome2Optimized = function(s) {
    // const removeNonAlphaNumeric = s.replace(/[^a-zA-Z0-9]/g, '');
    // const lowerCase = removeNonAlphaNumeric.toLowerCase();
    // const stringArray = lowerCase.split("");
    // let j = stringArray.length - 1 - i// 7
    for(let i=0; i<s.length/2; i++){
        // console.log(s.length/2)
        console.log("i",s[i])
        console.log("s.length - 1 - i",s[s.length - 1 - i])

        if(s[i]!=s[s.length - 1 - i]){
            return false
        }
    }
    return true;
};

// const s3 = "Race a Car" //raceacar
const s2 = "A man, a plan, a canal: Panama"
const s3 = -121
console.log("isPalindrome2",isPalindrome2Optimized(s3));
