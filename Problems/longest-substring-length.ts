//Input: 
let d = "abcabcbb"
let b = "pwwkew"
let c = "abbabc"
//Output: 3

function lengthOfLongestSubstring(arrayLetters: string): number {
    let max = 0;
    let map = new Map();
    for (let i=0; i<arrayLetters.length; i++){
        if (!(map.has(arrayLetters[i]))){
            map.set(arrayLetters[i], i)
        } else {
            i = map.get(arrayLetters[i]);
            map.clear();
        }
        if( max < map.size){
            max = map.size;
        }
    }
    return max;
};

console.log("lengthOfLongestSubstring",lengthOfLongestSubstring(d))