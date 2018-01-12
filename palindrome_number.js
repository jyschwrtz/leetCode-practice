var isPalindrome = function(x) {
    if ( x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    let temp = x;
    let reverse = 0;
    while (temp !== 0) {
        let nextNum = temp % 10;
        reverse = reverse * 10 + nextNum;
        temp = Math.floor(temp / 10);
    }
    return reverse === x;
};

console.log(isPalindrome(1));
