/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];
    let prefix = "";
    let smaller = strs[0].length < strs[1].length ? strs[0].length : strs[1].length;
    for (let i = 0; i < smaller; i++) {
        if (strs[0][i] === strs[1][i]) {
            prefix += strs[0][i];
        } else {
            break;
        }
    }
    if (prefix === "") return "";
    for (let i = 2; i < strs.length; i++) {
        if (strs[i] === "") return "";
        if (prefix === "") return "";
        let temp = prefix;
        smaller = prefix.length < strs[i].length ? prefix.length : strs[i].length;
        prefix = "";
        for (let j = 0; j < smaller; j++) {
            if ((j === smaller - 1) && (strs[i].length === smaller)
                && (strs[i][j] === temp[j])) {
                prefix = strs[i];
            }
            else if (strs[i][j] === temp[j]) {
                prefix += temp[j];
            } else {
                break;
            }
        }
    }
    return prefix;
};