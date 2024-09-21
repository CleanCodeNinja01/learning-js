// Input: 
let strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
  let map = new Map();
  for (let word of strs) {
      let anag = word.split("").sort().join("");
      if (map[anag]) {
        console.log(' map[anag]', map[anag])
        const a = map[anag].push(word);
        // a.sort()
        console.log({a})
      } else {
        console.log([word])
        map[anag] = [word]
      }
  }
  return Object.values(map);
  }

// co

console.log("groupAnagrams",groupAnagrams(strs))