//Find the max sum of k consecutive elements using O(n)
const arr = [9,3,7,-3,8,5,-1,2]
const k = 4

//Output => 16, 15, 17, 9, 14
//output => maxSum => 17

//Brute Force --> O(n^2)
const maxSum = (array, k) => {
    let sum = 0;
    let maxSum = 0;
    for (let i=0; i<array.length-1; i++) {
        sum = array[i] 
        for (let j=i+1; j<k+i && j<array.length; j++) {
            sum += array[j]
        }
        if (sum > maxSum) maxSum = sum
    }
    return maxSum;
}

console.log('maxSum', maxSum(arr, k));

//Optimized --> Sliding window --> O(n)

//1. calculate windowSum for the k elements in separate loop
//2. go lineraly for the array till it reaches end & keep track of max sum simultaneously.
//3. to get the current sum, add the last (current) element from the block and subtract the previous block

const maxSumOptimized = (array, k) => {
    let sum = 0;
    let windowSum = 0;
    for (let i=0; i<k; i++) {
        sum+=array[i];
        windowSum=sum;
    }
    for (let i=k; i<array.length-1; i++) {
        sum+=array[i]-array[i-k];
        if (sum>windowSum) windowSum=sum;
    }
    return windowSum;
}

console.log('maxSumOptimized', maxSumOptimized(arr, k));
