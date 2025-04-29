var isValid = function(s) {
    const stack = []
    let mappings = {"(":")", "[": "]", "{": "}"};
    for (let i=0; i<s.length; i++){
        const bracket = s[i];
        if (bracket == "(" || bracket == "[" || bracket == "{"){
            stack.push(s[i])
        } else {
            if (stack.length == 0 || mappings[stack.pop()] !== bracket){
                return false
            }
        }
    }
    return stack.length === 0
};

const s = "({[})";
console.log('%cProblems/isValidParenthesis.js:17 object', 'color: #007acc;', isValid(s));