/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let last = -1;
    while (n > 0) {
        if (last === -1) {
            last = n % 2;
            n = Math.floor(n / 2);
            continue;
        }
        if (n % 2 === last) return false;
        last = n % 2;
        n = Math.floor(n / 2);
    }
    return true;
};