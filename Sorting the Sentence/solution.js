/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let wordsWithNumbers = s.split(" ");
    let wordsInSequence = new Array(wordsWithNumbers.length).fill("");
    for (let i = 0; i < wordsWithNumbers.length; i++) {
        let index = Number(wordsWithNumbers[i][wordsWithNumbers[i].length - 1]) - 1;
        wordsInSequence[index] = wordsWithNumbers[i].substring(0, wordsWithNumbers[i].length - 1);
    }
    return wordsInSequence.join(" ");
};