/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    let noOfSteps = Math.floor(n / 2);
    let result = 0;
    if (n % 2 !== 0) {
        for (let i = 0; i < noOfSteps; i++) {
            result += 2 * i + 2;
        }
    } else {
        for (let i = 0; i < noOfSteps; i++) {
            result += 2 * i + 1;
        }
    }
    return result;
};