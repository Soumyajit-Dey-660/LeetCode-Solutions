/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    if (r * c !== mat.length * mat[0].length) return mat;
    let columnPointer = 0;
    let rowPointer = 0;
    let result = [];
    for (let i = 0; i < r; i++) {
        let tempRow = [];
        for (let j = 0; j < c; j++) {
            tempRow.push(0);
        }
        result.push(tempRow);
    }
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (columnPointer == c) {
                rowPointer++;
                columnPointer = 0;
            }
            result[rowPointer][columnPointer++] = mat[row][col];
        }
    }
    return result;
};