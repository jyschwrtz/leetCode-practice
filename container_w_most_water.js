var maxArea = function(height) {
    let max = 0;
    height.forEach((h1, i) => {
       for (let j = i + 1; j < height.length; j++) {
           let h2 = height[j];
           let lower = h1 < h2 ? h1 : h2;
           let area = lower * (j - i);
           console.log(i, j);

           if (area > max) {
               max = area;
           }
       }
    });
    return max;
};

console.log(maxArea([1,1]));
