/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var PredictTheWinner = function(nums, start = 0, end = nums.length - 1, turn = 1) {
//   if (end === start) {
//     return nums[start] * turn;
//   }
//   let firstNum = turn * nums[start] + (PredictTheWinner(nums, start + 1, end, -turn));
//   let secondNum = turn * nums[end] + (PredictTheWinner(nums, start, end - 1, -turn));
//   let result = turn * firstNum > turn * secondNum ? firstNum : secondNum;
//   console.log("RESULT:", result);
//   if (start === 0 && end === nums.length - 1) {
//     return result >= 0;
//   } else {
//     return result;
//   }
// };

const PredictTheWinner = (nums) => {
  let memo = new Array(nums.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(nums.length);
  }

  let result = winner(nums, 0, nums.length - 1, memo);
  return result >= 0;
};

const winner = (nums, s, e, memo) => {
  if (memo[s][e]) {
    return memo[s][e];
  }

  if (s === e) {
    memo[s][e] = nums[s];
    return nums[s];
  }

  let left = nums[s] - winner(nums, s + 1, e, memo);
  let right = nums[e] - winner(nums, s, e - 1, memo);

  return left > right ? left : right;
};

// console.log(PredictTheWinner([1, 5, 8, 4]), 'true');
console.log(PredictTheWinner([1, 5, 2]), 'false');
console.log(PredictTheWinner([1, 5, 233, 7]), 'true');
