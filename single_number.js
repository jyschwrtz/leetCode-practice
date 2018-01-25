/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};



// var singleNumber = function(nums) {
//     let counts = {};
//     for (let i = 0; i < nums.length; i++) {
//         let current = nums[i];
//         if (counts[current]) {
//             counts[current] = false;
//         } else {
//             counts[current] = true;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (counts[nums[i]]) {
//           return nums[i];
//         }
//     }
// };
