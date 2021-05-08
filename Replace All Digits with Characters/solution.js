/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let resultStr = '';
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        resultStr += s[2 * i] + String.fromCharCode(s.charCodeAt(2 * i) + Number(s[2 * i + 1]));
    }
    resultStr += s.length % 2 != 0 ? s[s.length - 1] : '';
    return resultStr;
};