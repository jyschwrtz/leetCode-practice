var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let h1, h2;
    let max = 0;
    while (i !== j) {
      h1 = height[i];
      h2 = height[j];
      let area;
      if (h1 < h2) {
        area = h1 * (j - i);
        i += 1;
      } else {
        area = h2 * (j - i);
        j -= 1;
      }
      max = area > max ? area : max;
    }
    return max;
};
// var maxArea = function(height) {
//     let max = 0;
//     height.forEach((h1, i) => {
//        for (let j = i + 1; j < height.length; j++) {
//            let h2 = height[j];
//            let lower = h1 < h2 ? h1 : h2;
//            let area = lower * (j - i);
//
//            if (area > max) {
//                max = area;
//            }
//        }
//     });
//     return max;
// };

console.log(maxArea([1,1]));
console.log(maxArea([2,3,1,4]));
