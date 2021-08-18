/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let count_map = {};
    for (let i = 0; i < s.length; i++) {
        if (count_map[s[i]] === undefined) {
            count_map[s[i]] = 1;
        } else {
            count_map[s[i]] += 1;
        }
    }
    let check = count_map[s[0]];
    for (let key in count_map) {
        if (count_map[key] !== check) {
            return false;
        }
    }
    return true;
};