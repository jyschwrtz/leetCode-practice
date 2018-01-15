var threeSumClosest = function(nums, target) {
    let result;
    let closest;
    nums.sort((a, b) => a - b );
    for (let i = 0; i < nums.length - 2; i++) {
        let leftIdx = i + 1;
        let rightIdx = nums.length - 1;
        while (leftIdx < rightIdx) {
            let left = nums[leftIdx];
            let right = nums[rightIdx];
            let total = nums[i] + left + right;
            let difference = Math.abs(total - target);

            if (difference < closest || !closest) {
                result = total;
                closest = difference;
            }
            if (total < target) {
                leftIdx += 1;
            } else if (total > target) {
                rightIdx -= 1;
            } else if (total === target) {
              return total;
            }

        }
    }

    return result;
};

// Tests
// console.log(threeSumClosest([0,1,2], 3)); // 3
// console.log(threeSumClosest([1,1,1,0], -100));  // 2
