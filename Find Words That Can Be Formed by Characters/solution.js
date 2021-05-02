/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let eligibleLength = 0;
    let compareMap = {};
    var getMap = function (word) {
        let countMap = {};
        for (const letter of word) {
            if (countMap[letter]) countMap[letter] += 1;
            else countMap[letter] = 1;
        }
        return countMap;
    };
    for (const letter of chars) {
        if (compareMap[letter]) compareMap[letter] += 1;
        else compareMap[letter] = 1;
    }
    for (const word of words) {
        let newMap = getMap(word);
        let eligible = true;
        for (const key in newMap) {
            if (!compareMap[key] || compareMap[key] < newMap[key]) {
                eligible = false;
                break;
            }
        }
        if (eligible) eligibleLength += word.length;
    }
    return eligibleLength;
};