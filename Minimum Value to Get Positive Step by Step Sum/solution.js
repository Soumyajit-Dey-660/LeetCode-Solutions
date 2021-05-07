/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let minSum = 10e6 + 7;
    let currSum = 0;
    for (const val of nums) {
        currSum += val;
        if (currSum < minSum) minSum = currSum;
    }
    return (minSum < 0) ? 1 - minSum : 1;
};