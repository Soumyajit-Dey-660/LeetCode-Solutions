/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    if (target < matrix[0][0]) return false;
    if (target > matrix[matrix.length - 1][matrix[0].length - 1]) return false;
    let rowPosition = -1;
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][0] === target) return true;
        if (matrix[row][0] > target) {
            rowPosition = row - 1;
            break;
        }
    }
    if (rowPosition === -1) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[matrix.length-1][col] > target) break;
            if (matrix[matrix.length-1][col] === target) return true;
        }
    } else {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[rowPosition][col] > target) break;
            if (matrix[rowPosition][col] === target) return true;
        }
    }
    return false;
};