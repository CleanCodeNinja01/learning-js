/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container. 
Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 */

var maxArea = function(height) {
    let water = 0, calculateWater = 0, left = 0, right = height.length - 1;
    while(left<right){
        // minimum height and then multiply by difference from last (right) element to start (left) element
        calculateWater = Math.min(height[left], height[right])*(right-left);
        water = Math.max(water, calculateWater)
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    // when left == right 
    return water;
};

let height = [1,8,6,2,5,4,8,3,7]
console.log("maxArea",maxArea(height))

