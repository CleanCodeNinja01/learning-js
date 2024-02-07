/*
 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {g
    let dict = {};
    let value = 1;
    for(let i = 0; i<nums.length; i++){
        if (!dict[nums[i]]){
            dict[nums[i]] = value
        } else {
            dict[nums[i]] = value++
        }
    }
    
    // console.log('dict.values: ', dict.values())
    // console.log('dict.size: ', dict.size)

    console.log('Object.values(dict): ', Object.values(dict))

    if(Object.values(dict)>1){
        return true;
    } else {
        return false;
    }
};

let nums = [1,2,3,1];
console.log('containsDuplicate: ', containsDuplicate(nums))