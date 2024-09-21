// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    if (strs.length == 0 ) return ""
    let prefix = strs[0]
    for(let i=1; i<strs.length; i++){
        // while ocndition jab tak 0 k barabar nai hojati this will run, and 0 k barabar sirf tab hogi jab prefix match karega
        while(strs[i].indexOf(prefix) !== 0){
            console.log('ceh',strs[i])
            console.log('b', strs[i].indexOf(prefix))

            console.log({prefix})
            prefix = prefix.substring(0, prefix.length-1)
            console.log({prefix})
            if (prefix==""){
                return ""
            }
        }
    }
    return prefix
};

const strs = ["flower", "flowht", "flowht1"];
console.log(longestCommonPrefix(strs)); // Output: "fl"