/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversed = 0;
    let isUnsigned = x < 0 ? true : false;
    x = Math.abs(x);
    while (x > 0) {
        rem = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed * 10 + rem;
    }
    reversed =
        reversed <= Math.pow(2, 31) - 1 && reversed >= -Math.pow(2, 31)
            ? reversed
            : 0;
    reversed = isUnsigned ? -reversed : reversed;
    return reversed;
};
