/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = '';
    let smaller = word1.length <= word2.length ? word1.length : word2.length;
    for (let i = 0; i < smaller; i++) {
        result += word1[i] + word2[i];
    };
    if (word1.length === word2.length) return result
    else if (word1.length < word2.length) {
        for (let i = word1.length; i < word2.length; i++) {
            result += word2[i];
        }
    } else {
        for (let i = word2.length; i < word1.length; i++) {
            result += word1[i];
        }
    }
    return result;
};