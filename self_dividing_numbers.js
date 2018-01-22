/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let results = [];
  for (let i = left; i <= right; i++) {

  }

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
    return separate(num / 10).push(num % 10);
  }
};

console.log(separate(5245));
