/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let totalSum = 0;
    for (let i = 0; i < mat.length; i++) {
        totalSum += mat[i][i] + mat[i][mat.length - i - 1];
    }
    totalSum =
        mat.length % 2 !== 0
            ? totalSum - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
            : totalSum;
    return totalSum;
};
