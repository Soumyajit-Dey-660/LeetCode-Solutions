/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    let lookUp = {};
    for (let char of arr) {
        if (lookUp[char] === undefined) {
            lookUp[char] = 1;
        } else if (lookUp[char] === 1) {
            lookUp[char] += 1;
        }
    }
    for (let key in lookUp) {
        if (lookUp[key] !== 1) {
            delete lookUp[key];
        }
    }
    if (k > Object.keys(lookUp).length) return "";
    let i = 0;
    for (let key in lookUp) {
        i++;
        if (i === k) {
            return key;
        }
    }
};