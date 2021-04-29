/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let pointer = 0;
    let deleteColumn = 0;
    while (pointer < strs[0].length) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i - 1][pointer] > strs[i][pointer]) {
                deleteColumn++;
                break;
            }
        }
        pointer++;
    }
    return deleteColumn;
};