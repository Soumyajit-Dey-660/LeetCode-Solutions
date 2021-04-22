/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let copy = [...s];
    let result = "";
    for (let i = 0; i < copy.length; i++) {
        copy[indices[i]] = s[i];
    }
    for (let i = 0; i < copy.length; i++) {
        result += copy[i];
    }
    return result;
};
