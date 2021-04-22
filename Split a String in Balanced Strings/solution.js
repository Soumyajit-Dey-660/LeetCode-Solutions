/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let lCount = 0;
    let rCount = 0;
    let totalMatch = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            lCount += 1;
        } else if (s[i] === "R") {
            rCount += 1;
        }
        if (lCount === rCount) {
            lCount = 0;
            rCount = 0;
            totalMatch += 1;
        }
    }
    return totalMatch;
};
