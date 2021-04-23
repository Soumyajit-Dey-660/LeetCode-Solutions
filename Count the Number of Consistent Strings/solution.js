/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let consistentCount = 0;
    let allowedSet = new Set(allowed);
    for (let i = 0; i < words.length; i++) {
        let flag = true;
        for (let j = 0; j < words[i].length; j++) {
            if (!allowedSet.has(words[i][j])) {
                flag = false;
                break;
            }
        }
        if (flag) consistentCount += 1;
    }
    return consistentCount;
};
