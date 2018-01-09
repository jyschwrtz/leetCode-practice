var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = 0;
    let letters = [];
    s.split("").forEach(letter => {
        if (letters.length === 0) {
            current += 1;
            letters.push(letter);
        } else if (letters.includes(letter)) {
            let x = letters.findIndex( l => l === letter);
            letters = letters.slice(x + 1);
            letters.push(letter);
            current = letters.length;
        } else {
            letters.push(letter);
            current += 1;
        }
        console.log(letter);
        console.log(letters);
        console.log(current);
        if (current > longest) {
        longest = current;
        }
    });
    return longest;
};

let input = "abcabcbb";

console.log(lengthOfLongestSubstring(input));
