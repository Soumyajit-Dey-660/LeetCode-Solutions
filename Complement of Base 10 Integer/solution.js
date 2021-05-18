/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    if (n === 0) return 1;
    // 5 returns [1, 0, 1]
    const getBinary = num => {
        let result = [];
        while (num > 0) {
            result.push(num % 2);
            num = Math.floor(num / 2);
        }
        result.reverse();
        return result;
    }
    // [1, 0, 1] returns [0, 1, 0]
    const getComplement = arr => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] === 1 ? 0 : 1;
        }
        return arr;
    }
    // [0, 1, 0] returns [1, 0, 1]
    const getDecimal = arr => {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i] === 1 ? Math.pow(2, arr.length - i - 1) : 0;
        }
        return result;
    }
    return getDecimal(getComplement(getBinary(n)))
};