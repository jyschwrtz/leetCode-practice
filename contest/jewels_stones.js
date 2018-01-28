/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let sCounts = {};
    for (let i = 0; i < S.length; i++) {
        let stone = S[i];
        if (sCounts[stone]) {
            sCounts[stone] += 1;
        } else {
            sCounts[stone] = 1;
        }
    }
    let result = 0;

    for (let i = 0; i < J.length; i++) {
    let jewel = J[i];
        if (sCounts[jewel]) {
            result += sCounts[jewel];
        }
    }

    return result;
};
