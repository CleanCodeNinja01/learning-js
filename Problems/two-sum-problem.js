let numbers = [2,15,11,7];
let target = 9

// Brute force => complexity O(n^2)
let twoSum = (numbers, target) => {
    for (let i=0 ; i<numbers.length-1 ; i++) {
        for(let j=1 ; j<numbers.length ; j++){
            if(numbers[i]+numbers[j]==target){
                return [i,j];
            }
        }
    }
}

// Optimized => complexity O(n)
let twoSumOptimized = (numbers, target) => {
    let map = new Map()
    for(let i=0; i<numbers.length; i++) {
        if(map.has(target-numbers[i])) {
            return [map.get(target-numbers[i]), i]
        }
        else {
            map.set(numbers[i], i)
        }
    }
}

console.log('twoSumOptimized: ', twoSumOptimized(numbers, target))