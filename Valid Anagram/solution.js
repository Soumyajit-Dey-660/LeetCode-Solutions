/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let sMap = {};
    let tMap = {};
    for (const char of s) {
        if (sMap[char]) sMap[char]++;
        else sMap[char] = 1;
    }
    for (const char of t) {
        if (tMap[char]) tMap[char]++;
        else tMap[char] = 1;
    }
    for (const key in sMap) {
        if (sMap[key] !== tMap[key]) return false;
    }
    for (const key in tMap) {
        if (tMap[key] !== sMap[key]) return false;
    }
    return true;
};