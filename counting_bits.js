/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(binaryCount(i));
  }
  return result;
};

// const binaryConversion = (num) => {
//   let currentNum = num;
//   let result = [];
//   let power = 1;
//   while (currentNum > 0) {
//     if (currentNum % (Math.pow(2, power)) !== 0) {
//       result.unshift(1);
//       currentNum = currentNum - Math.pow(2, power - 1);
//     } else {
//       result.unshift(0);
//     }
//     power += 1;
//   }
//   return result;
// };

const binaryCount = (num) => {
  let currentNum = num;
  let result = 0;
  let power = 1;
  while (currentNum > 0) {
    if (currentNum % (Math.pow(2, power)) !== 0) {
      result += 1;
      currentNum = currentNum - Math.pow(2, power - 1);
    }
    power += 1;
  }
  return result;
};


console.log(countBits(7));
