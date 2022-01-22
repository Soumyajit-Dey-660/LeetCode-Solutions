/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    let lookUp1 = {};
    let lookUp2 = {};
    let result = 0;
    for (let word of words1) {
        if (lookUp1[word] === undefined) {
            lookUp1[word] = 1;
        } else {
            lookUp1[word] += 1;
        }
    }
    for (let word of words2) {
        if (lookUp2[word] === undefined) {
            lookUp2[word] = 1;
        } else {
            lookUp2[word] += 1;
        }
    }
    for (let key in lookUp1) {
        if (lookUp1[key] === 1 && lookUp2[key] != undefined) {
            if (lookUp2[key] === 1) {
                result += 1;
            }
        }
    }
    return result;
};