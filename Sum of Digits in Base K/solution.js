/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let digits = [];
    while (n >= k) {
        digits.push(n - (Math.floor(n / k)) * k);
        n = Math.floor(n / k);
    };
    digits.push(n);
    return digits.reduce((a, b) => a + b, 0);
};