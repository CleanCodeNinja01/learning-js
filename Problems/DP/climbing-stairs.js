/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/


/* Explaination: A decision tree to visualize
--> on every given point, we have 2 decisions to make we can climb 1 step or 2 steps
--> depending on the decision that we make, each of these would lead us to different path 
--> our base case, we're gonna solve this recursively

*/

// Approach #01: Iterative 
function climbingStairs(n){
    // for 8 steps the output would be: 7 steps + 1
    let one = two = temp = 1
    for (let index = n - 1; index > 0; index--) {
        temp = one
        one = one + two
        two = temp
    }
    return one
}

// Approach #02: Recursive

const climbingStairsRecursive = (n) => {
    if (n==1 || n==2) {
        return n
    } else {
        return climbingStairsRecursive(n-1) + climbingStairsRecursive(n-2)
    }

}

const input = 6
console.log(climbingStairsRecursive(input))


module.exports = {climbingStairs, climbingStairsRecursive}
