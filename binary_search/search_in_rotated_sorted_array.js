/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    } else if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        } else {
            return -1;
        }
    }
    let mid = Math.floor(nums.length / 2);

    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        if (nums[0] <= target || nums[0] > nums[mid]) {
            return search(nums.slice(0, mid), target);
        } else {
            let result = search(nums.slice(mid + 1), target);
            if (result === -1) {
                return -1;
            } else {
                return mid + 1 + result;
            }
        }
    } else {
        if (nums[nums.length - 1] >= target || nums[nums.length -1] < nums[mid]) {
            let result = search(nums.slice(mid + 1), target);
            if (result === -1) {
                return -1;
            } else {
                return mid + 1 + result;
            }
        } else {
            return search(nums.slice(0, mid), target);
        }
    }

};
