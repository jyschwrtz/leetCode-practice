/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    
};


// [1,2,3],
// [4,0,5]
// ==> 1

// [1,2,3],
// [5,4,0]
// ==> -1

// [4,1,2],
// [5,0,3]
// ==> 5
// After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]

// [3,2,4],
// [1,5,0]
//  ==> 14
