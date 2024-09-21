/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // nums = [1, 2, 3, 3]
    hasDuplicate(nums) {
        const map = new Map()
        for(const num of nums){
            if(map.has(num)){
                return true
            } else {
                map.set(num)
            }
        }
        return false
    }
}
