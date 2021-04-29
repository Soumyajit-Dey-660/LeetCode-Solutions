/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let result = [];
    let comparePointer = 0;
    while (comparePointer < matrix[0].length) {
        let maxNum = matrix[0][comparePointer];
        let maxIndex = 0;
        for (let i = 1; i < matrix.length; i++) {
            if (matrix[i][comparePointer] > maxNum) {
                maxNum = matrix[i][comparePointer];
                maxIndex = i;
            }
        }
        if (maxNum === Math.min(...matrix[maxIndex])) result.push(maxNum);
        comparePointer += 1;
    }
    return result;
};