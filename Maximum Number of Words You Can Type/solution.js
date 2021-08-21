/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let totalWordsCanBeWritten = 0;
    text = text.split(" ");
    if (brokenLetters.length === 0) {
        return text.length;
    }
    for (let word of text) {
        let canWordBeWritten = true;
        for (let char of word) {
            if (brokenLetters.indexOf(char) !== -1) {
                canWordBeWritten = false;
                break;
            }
        }
        totalWordsCanBeWritten = canWordBeWritten ? totalWordsCanBeWritten + 1 : totalWordsCanBeWritten;
    }
    return totalWordsCanBeWritten;
};