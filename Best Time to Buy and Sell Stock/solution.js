/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (let price of prices) {
        min = Math.min(min, price);
        max = Math.max(max, price - min);
    }
    return max;
};