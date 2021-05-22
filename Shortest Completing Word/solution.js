/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let newLicensePlate = '';
    let result = new Array(1000).fill('a').join('');
    let originalMap = {};
    licensePlate = licensePlate.toLowerCase()
    for (let i = 0; i < licensePlate.length; i++) {
        if (licensePlate.charCodeAt(i) >= 97 && licensePlate.charCodeAt(i) <= 122)
            newLicensePlate += licensePlate[i];
    }
    for (const char of newLicensePlate) {
        if (originalMap[char]) originalMap[char]++;
        else originalMap[char] = 1;
    }
    for (const word of words) {
        let tempMap = {};
        let eligible = true;
        for (const char of word) {
            if (tempMap[char]) tempMap[char]++;
            else tempMap[char] = 1;
        }
        for (const key in originalMap) {
            if (!tempMap[key] || tempMap[key] < originalMap[key]) {
                eligible = false;
                break;
            }
        }
        if (eligible && word.length < result.length) result = word;
    }
    return result;
};