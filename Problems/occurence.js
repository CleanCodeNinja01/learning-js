// let s = 'abcba'

const occurence = (s) => {
    let frequency = new Map();
    let value = 1;
    for (let i = 0; i < s.length; i++) {
        if (!frequency.has(s[i])){
            frequency.set(s[i], value)
        } else {
            frequency.set(s[i],value++)
        }
    }
    return frequency;
}

let s = 'abcbab';
console.log('occurence: ', occurence(s))