/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let maxBracs = 0;
    let currBracs = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            currBracs += 1;
        }
        if (s[i] === ")") {
            currBracs -= 1;
        }
        maxBracs = currBracs > maxBracs ? currBracs : maxBracs;
    }
    return maxBracs;
};
