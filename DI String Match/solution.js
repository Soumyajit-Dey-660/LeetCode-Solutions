/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let high = s.length;
    let low = 0;
    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'D') {
            result.push(high);
            high -= 1;
        } else {
            result.push(low);
            low += 1;
        }
    }
    result.push(high);
    return result;
};