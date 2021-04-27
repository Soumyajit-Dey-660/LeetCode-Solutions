/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let matches = 0;
    var getBits = function (num) {
        let digits = [];
        while (num > 0) {
            digits.push(Math.ceil(num / 2) * 2 - (num));
            num = Math.floor(num / 2);
        }
        return digits.reverse();
    }
    let xArr = getBits(x);
    let yArr = getBits(y);
    let greaterLength = xArr.length > yArr.length ? xArr.length : yArr.length;
    if (xArr.length !== greaterLength) {
        let temp = [];
        for (let i = 0; i < greaterLength - xArr.length; i++) {
            temp.push(0);
        }
        xArr.unshift(...temp);
    } else {
        let temp = [];
        for (let i = 0; i < greaterLength - yArr.length; i++) {
            temp.push(0);
        }
        yArr.unshift(...temp);
    }
    for (let i = 0; i < greaterLength; i++) {
        if (xArr[i] !== yArr[i]) {
            matches++;
        }
    }
    return matches;
};