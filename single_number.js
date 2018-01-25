/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (counts[current]) {
            counts[current] = false;
        } else {
            counts[current] = true;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (counts[nums[i]]) {
          return nums[i];
        }
    }
};
