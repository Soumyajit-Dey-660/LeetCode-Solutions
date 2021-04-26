/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    var getDigits = function (num) {
        let digits = [];
        while (num > 0) {
            digits.push(Math.floor(num % 10));
            num = Math.floor(num / 10);
        }
        return digits;
    }
    let lookup = {};
    let maximum = -1;
    for (let i = lowLimit; i < highLimit + 1; i++) {
        let totalSum = getDigits(i).reduce((a, b) => a + b, 0);
        if (lookup[totalSum]) lookup[totalSum] += 1;
        else lookup[totalSum] = 1
    }
    for (let key in lookup) maximum = lookup[key] > maximum ? lookup[key] : maximum;
    return maximum;
};