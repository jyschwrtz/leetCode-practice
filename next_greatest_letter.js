/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target, start = 0, length = letters.length) {
    if (length < 2) {
        if (start === letters.length - 1) {
            if (letters[start] <= target) {
                return letters[0];
            }
        } else {
            return letters[start];
                }
    }
    let mid = Math.floor(length / 2);
    if (letters[start + mid] === target) {
        if (start + mid === letters.length - 1) {
            return letters[0];
        } else {
            return nextGreatestLetter(letters, target, start + mid + 1, length - mid - 1);
        }
    } else if (letters[start + mid] > target) {
        if (letters[start + mid - 1] <= target) {
            return letters[start + mid];
        } else {
            return nextGreatestLetter(letters, target, start, mid);
        }
    } else if (letters[start + mid] < target) {
        return nextGreatestLetter(letters, target, start + mid, length - mid);
    }
};
