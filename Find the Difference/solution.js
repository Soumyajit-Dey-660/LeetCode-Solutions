/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let smallMap = {};
    let largeMap = {};
    for (const char of s) {
        if (smallMap[char]) smallMap[char]++;
        else smallMap[char] = 1;
    }
    for (const char of t) {
        if (largeMap[char]) largeMap[char]++;
        else largeMap[char] = 1;
    }
    for (const key in largeMap) if (largeMap[key] > smallMap[key] || !smallMap[key]) return key;
};

// Different Approach
var findTheDifference = function (s, t) {
    for (const char of s) {
        let ind = [...t].indexOf(char);
        t = [...t].slice(0, ind).join("") + [...t].slice(ind + 1).join("");
    }
    return t;
};