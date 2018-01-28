/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function(A) {
    let globalCount = 0;
    let localCount = 0;
    for (let i = 0; i < A.length; i++) {
        // if (A[i] > A[i+1]) {
        //   globalCount += 1;
        //   localCount += 1;
        // } else {
          for (let j = i + 2; j < A.length; j++) {
            if (A[i] > A[j]) {
              return false;
            }
          }
        // }
    }
    return true;
};


// [1,0,2]
// [1,2,0,3,4]

console.log(isIdealPermutation([1,0,2]), true);
console.log(isIdealPermutation([1,2,0]), false);
console.log(isIdealPermutation([2,0,1]), false);
