/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let found = true;
        if (words[i].length >= searchWord.length) {
            for (let j = 0; j < searchWord.length; j++) {
                if (searchWord[j] !== words[i][j]) {
                    found = false;
                    break;
                }
            }
            if (found) return i + 1;
        }
    }
    return -1;
};