/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let transposeMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposeMatrix.push(new Array(matrix.length).fill(0));
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            transposeMatrix[i][j] = matrix[j][i];
        }
    }
    return transposeMatrix;
};