// DP - EASY 

// 1. understand the fundamentals
// 2. taking that brute force using memoization / caching the result
// 3. getting true dynamic programming solution
// 4. we are doing depth first search
// 5. bottom up dynamic programming
// 6. entire array that has size = n [ space = O(n)]

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


