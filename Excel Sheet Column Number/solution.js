/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let compare = 'A';
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result += Math.pow(26, columnTitle.length - i - 1) * (columnTitle.charCodeAt(i) - compare.charCodeAt(0) + 1);
    }
    return result;
};