// Input: 
let strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
  let map = new Map();
  for (let word of strs) {
      let anag = word.split("").sort().join("");
      if (map[anag]) {
        map[anag].push(word);
      } else {
        map[anag] = [word]
      }
  }
  return Object.values(map);
  }

console.log("groupAnagrams",groupAnagrams(strs))