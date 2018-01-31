/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums, start = 0, end = nums.length - 1, turn = 1) {
  if (end === start) {
    return nums[start] * turn;
  }
  let firstNum = turn * nums[start] + (PredictTheWinner(nums, start + 1, end, -turn));
  let secondNum = turn * nums[end] + (PredictTheWinner(nums, start, end - 1, -turn));
  let result = turn * firstNum > turn * secondNum ? firstNum : secondNum;
  console.log("RESULT:", result);
  if (start === 0 && end === nums.length - 1) {
    return result >= 0;
  } else {
    return result;
  }
};

console.log(PredictTheWinner([1, 5, 8, 4]), 'true');
// console.log(PredictTheWinner([1, 5, 2]), 'false');
// console.log(PredictTheWinner([1, 5, 233, 7]), 'true');
