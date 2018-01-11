var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let str = ("" + x).split("");

    a = str.slice(0).reverse();
    if (a.join("") == str.join("")) {
        return true;
    } else {
        return false;
    }
};
