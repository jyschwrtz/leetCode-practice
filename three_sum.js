var threeSum = function(nums) {
    let results = [];
    nums.sort((x, y) => x - y);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let current = nums[i];
        let leftIdx = i + 1;
        let rightIdx = nums.length - 1;

        while (leftIdx < rightIdx) {
            let left = nums[leftIdx];
            let right = nums[rightIdx];
            let total = current + left + right;
            if (total === 0) {
                results.push([current, left, right]);
                leftIdx += 1;
                rightIdx -= 1;
            } else if (total < 0) {
                leftIdx += 1;
            } else if (total > 0) {
                rightIdx -= 1;
            }
            while (nums[rightIdx] === nums[rightIdx + 1]) {
              rightIdx -= 1;
            }
        }

    }

    return results;
};


// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.
//
// For example, given array S = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
