/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let check = 0;
    let match = false;
    let x = 0;
    while (check < n) {
        check = Math.pow(2, x);
        if (check === n) {
            match = true;
            break
        }
        x += 1;
    }
    return match;
};