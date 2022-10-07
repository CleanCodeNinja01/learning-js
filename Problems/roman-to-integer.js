/*
Input: s = "III"
Output: 3
Explanation: III = 3.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

//INPUT
let string1 = "CMIX"
//OUTPUT => 5+9+100+4+1000=1118
//OUTPUT => 9+900 => 909

var romanToInt = (str) => {
    let map = new Map();
    let sum = 0;
    map.set("I",1).set("V",5).set("X",10).set("L",50).set("C",100).set("D",500).set("M",1000)
    for (let i=0; i<str.length; i++){
        if(map.has(str[i])){
            if(map.get(str[i+1])>map.get(str[i])){
                sum+=map.get(str[i+1])-map.get(str[i])
                i++;
            }
            else{
                sum+=map.get(str[i])
            }
        }
    }
    return sum;
}

console.log("romanToInt",romanToInt(string1));