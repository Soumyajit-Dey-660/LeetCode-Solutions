/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const fivePercent = Math.floor(arr.length / 20);
    arr.sort((a, b) => a - b);
    arr = arr.slice(fivePercent, arr.length - fivePercent);
    let totalSum = arr.reduce((a, b) => a + b, 0);
    return totalSum / arr.length;
};