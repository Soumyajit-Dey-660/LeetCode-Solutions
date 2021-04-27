/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let resultantString = '';
    let arr = s.split(/\s+/);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resultantString += arr[i][arr[i].length - j - 1];
        }
        if (i !== arr.length - 1) resultantString += ' ';
    }
    return resultantString;
};