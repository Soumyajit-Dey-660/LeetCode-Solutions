/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let store = new Array(26).fill(0);
    let compare = 'a';
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - compare.charCodeAt(0);
        store[index]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (store[s.charCodeAt(i) - compare.charCodeAt(0)] === 1) return i;
    }
    return -1;
};