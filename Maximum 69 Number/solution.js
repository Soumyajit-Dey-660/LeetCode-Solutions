/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let maxNumber = 0;
    let digits = [];
    let flag = false;
    while (num > 0) {
        digits.push(Math.floor(num % 10));
        num = Math.floor(num / 10);
    }
    digits.reverse();
    for (let i = 0; i < digits.length; i++) {
        if (!flag) {
            if (digits[i] == 6) {
                flag = true;
                maxNumber = maxNumber * 10 + 9;
                continue;
            }
        }
        maxNumber = maxNumber * 10 + digits[i];
    }
    return maxNumber;
};
