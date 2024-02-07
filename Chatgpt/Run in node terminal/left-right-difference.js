//2574. Left and Right Sum Differences

//Input: nums = [10,4,8,3]
//Output: [15,1,11,22]


var leftRightDifference = function(nums) {
    // left sum calculate
    const leftSum = [0]
    const rightSum = [0]

    for (let index = 0; index < nums.length - 1; index++) {
        leftSum.push(leftSum[index] + nums[index])
    }

    for (let index = 0; index < nums.length - 1; index++) {
        rightSum.push(rightSum[index] + nums[nums.length - 1 - index])
    }

    rightSum.reverse();

    const ans = []

    for (let index = 0; index < nums.length; index++) {
        ans.push(Math.abs(leftSum[index]-rightSum[index]))
    }

    return ans;
}

  const nums = [10,4,8,3]

  console.log(leftRightDifference(nums))
