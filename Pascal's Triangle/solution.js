/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]];
    let result = [[1], [1, 1]];
    if (numRows === 2) return result;
    for (let i = 3; i <= numRows; i++) {
        let temp = [1];
        for (let j = 0; j < result[result.length - 1].length - 1; j++) {
            temp.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
        }
        temp.push(1);
        result.push(temp);
    }
    return result;
};