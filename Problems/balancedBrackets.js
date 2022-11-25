// Check for Balanced Brackets in an expression (well-formedness) using Stack

// Input: exp = “[()]{}{[()()]()}” 
// Output: Balanced

const input = '[()]{}{[()()]()}'
const stack =  [];

// [({[]})]
const parenthesis = (input) => {
    const obj = {'{': '}', '(': ')', '[': ']'};
    for (let i = 0; i < input.length; i++){
        let required = obj[stack[stack.length-1]];
        // if(stack[stack.length-1] == obj.get(input[i])){
        if (required == input[i]){
            stack.pop()
        }
        else{stack.push(input[i])}
        // [
    }
    console.log('stack.length:',stack.length)
    return !stack.length;
}

console.log('parenthesis', parenthesis(input))