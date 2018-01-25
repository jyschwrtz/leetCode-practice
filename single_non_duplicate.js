/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  if (nums.length < 2) {
    return nums[0];
  }

  let midIdx = (nums.length - 1) / 2;
    if (nums[midIdx] === nums[midIdx + 1]) {
      if (midIdx % 2 === 0) { // even
        return singleNonDuplicate(nums.slice(midIdx + 2));
      } else {
        return singleNonDuplicate(nums.slice(0, midIdx));
      }
    } else if (nums[midIdx] === nums[midIdx - 1]) {
      if (midIdx % 2 === 0) { // even
        return singleNonDuplicate(nums.slice(0, midIdx - 1));
      } else {
        return singleNonDuplicate(nums.slice(midIdx + 1));
      }
    } else {
      return nums[midIdx];
    }

};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]), 2);
console.log(singleNonDuplicate([3,3,7,7,10,11,11]), 10);
