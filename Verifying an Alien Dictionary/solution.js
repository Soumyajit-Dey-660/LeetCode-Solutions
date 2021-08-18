/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const isSorted = (word1, word2) => {
        for (let i = 0; i < word1.length; i++) {
            try {
                if (order.indexOf(word1[i]) === order.indexOf(word2[i])) {
                    continue;
                } else if (order.indexOf(word1[i]) < order.indexOf(word2[i])) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        }
        return true;
    }
    for (let i = 1; i < words.length; i++) {
        if (!(isSorted(words[i - 1], words[i]))) {
            return false;
        }
    }
    return true;
};