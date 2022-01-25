/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let result = "";
    let lookUp = {};
    for (let char of s) {
        if (lookUp[char] === undefined) {
            lookUp[char] = 1;
        } else {
            lookUp[char] += 1;
        }
    }
    let sortedKeys = Object.keys(lookUp).sort((a, b) => {
        if (lookUp[b] > lookUp[a]) return 1;
        if (lookUp[b] < lookUp[a]) return -1;
        return 0;
    });
    for (let char of sortedKeys) {
        for (let i = 0; i < lookUp[char]; i++) {
            result += char;
        }
    } 
    return result;
};