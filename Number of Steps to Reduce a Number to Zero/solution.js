/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let noOfSteps = 0;
    while (num != 0) {
        if (num % 2 == 0) {
            num = Math.ceil(num / 2);
            noOfSteps += 1;
        } else {
            num -= 1;
            noOfSteps += 1;
        }
    }
    return noOfSteps;
};
