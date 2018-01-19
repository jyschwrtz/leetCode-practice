// Given a string containing just the characters
// '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// The brackets must close in the correct order,
// "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let checks = { "(": 0, "{": 0, "[": 0 };
    const openers = ["(", "{", "["];
    const closers = [")", "}", "]"];
    const opposites = { "(": ")", ")": "(", "{": "}", "}": "{", "[": "]", "]": "[" };
    let queue = [];
    let result = true;
    s.split("").forEach( el => {
        if (openers.includes(el)) {
            checks[el] += 1;
            let closer = opposites[el];
            queue.push(closer);
        } else if (closers.includes(el)) {
            let opener = opposites[el];
            if (checks[opener] < 1) {
                result = false;
            } else if (queue[queue.length - 1] !== el) {
                result = false;
            } else {
                queue.pop();
                checks[opener] -= 1;
            }
        }
    });

    Object.values(checks).forEach( num => {
        if (num > 0) {
            result = false;
        }
    });
    return result;
};
