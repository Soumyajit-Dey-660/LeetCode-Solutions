/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let forbiddenRow = {};
    let forbiddenColumn = {};
    let specialCount = 0;
    for (let row = 0; row < mat.length; row++) {
        for (let column = 0; column < mat[0].length; column++) {
            if (mat[row][column] === 1) {
                // Add row
                if (forbiddenRow[row]) forbiddenRow[row]++;
                else forbiddenRow[row] = 1;
                // Add column
                if (forbiddenColumn[column]) forbiddenColumn[column]++;
                else forbiddenColumn[column] = 1;
            }
        }
    }
    for (let row = 0; row < mat.length; row++) {
        for (let column = 0; column < mat[0].length; column++) {
            if (mat[row][column] === 1 && forbiddenRow[row] === 1 && forbiddenColumn[column] === 1)
                specialCount += 1
        }
    }
    return specialCount;
};