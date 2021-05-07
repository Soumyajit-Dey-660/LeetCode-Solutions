/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    var inSameRow = function (letter, row) {
        let found = false;
        for (const alphabet of row) {
            if (letter === alphabet) {
                found = true;
                break;
            }
        }
        return found;
    }

    const firstRow = "qwertyuiop";
    const secondRow = "asdfghjkl";
    const thirdRow = "zxcvbnm";
    let result = [];

    for (word of words) {
        let whichRow;
        let allInSame = true;
        if (inSameRow(word[0].toLowerCase(), firstRow)) whichRow = firstRow;
        if (inSameRow(word[0].toLowerCase(), secondRow)) whichRow = secondRow;
        if (inSameRow(word[0].toLowerCase(), thirdRow)) whichRow = thirdRow;
        for (let i = 1; i < word.length; i++) {
            if (!inSameRow(word[i].toLowerCase(), whichRow)) {
                allInSame = false;
                break;
            }
        }
        if (allInSame) result.push(word);
    }
    return result;
};