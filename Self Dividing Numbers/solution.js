/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = [];
    var digits = function (num) {
        let digitsArr = [];
        while (num > 0) {
            digitsArr.push(num % 10);
            num = Math.floor(num / 10);
        }
        return digitsArr;
    }

    var exists = function (arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) return true;
        }
        return false;
    }

    for (let i = left; i < right + 1; i++) {
        let digitsArr = digits(i);
        let flag = true;
        if (exists(digitsArr, 0)) continue;
        for (let j = 0; j < digitsArr.length; j++) {
            if (i % digitsArr[j] !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) result.push(i);
    }
    return result;
};