/*
 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {
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

// let nums = [1,2,3,1];
// console.log('containsDuplicate: ', containsDuplicate(nums))


/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
*/

const removeDuplicate = (nums) => {
    const dict = {}
    const value = 1
    for(let i=0; i<nums.length; i++){
        if(dict[nums[i]]){
            dict[nums[i]] = dict[nums[i]]-1;
            console.log({dict})

        } else {
            dict[nums[i]] = value 
            console.log({dict})
        }
    }

    const sortedKeys = Object.keys(dict)
                .sort((a,b)=> dict[a]-dict[b])
                .map(Number)

    const numberOfPlaceholders = Object.values(dict);
    for (let i = 0; i < numberOfPlaceholders.length; i++) {
        if (numberOfPlaceholders[i] <1){
            console.log({sortedKeys})
            sortedKeys.push('_');
        }
    }

    return sortedKeys;
}

let nums = [1,2,3,1,2];
console.log('removeDuplicate: ', removeDuplicate(nums))