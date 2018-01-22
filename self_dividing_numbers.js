/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let results = [];
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      results.push(i);
    } else {
      let arr = separate(i);
      let check = true;
      arr.forEach( num => {
        if (!divisible(num, i)) {
          check = false;
        }
      });
      if (check) {
        results.push(i);
      }
    }
  }
  return results;

};

const divisible = (n, total) => {
  if (n === 0) {
    return false;
  } else if (total % n === 0) {
    return true;
  } else {
    return false;
  }
};

const separate = (num) => {
  // input num, return array of digits
  if (num < 10) {
    return [num];
  } else {
    return separate(Math.floor(num / 10)).concat(num % 10);
  }
};
