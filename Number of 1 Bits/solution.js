/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let totalBits = 0;
    while (n > 0) {
        if (n % 2 === 1) totalBits += 1;
        n = Math.floor(n / 2);
    }
    return totalBits;
};