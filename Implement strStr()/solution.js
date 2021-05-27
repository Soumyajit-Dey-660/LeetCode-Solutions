/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let compare = '';
        for (let j = i; j < needle.length + i; j++) {
            compare += haystack[j];
        }
        if (compare === needle) return i;
    }
    return -1;
};