var findDuplicates = function(nums) {
  let counts = {};
  let result = [];
  nums.forEach( num => {
    if (counts[num]) {
      result.push(num);
    } else {
      counts[num] = true;
    }
  });
  return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]), [2,3]);
