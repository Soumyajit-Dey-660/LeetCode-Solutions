/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let result = "";
    let totalSpaces = 0;
    let noOfSpacesEncountered = 0;
    let wordArr = [...s];
    wordArr.map(
        (letter) =>
            (totalSpaces = letter === " " ? (totalSpaces += 1) : totalSpaces)
    );
    if (totalSpaces === k - 1) {
        return s;
    }
    if (k > totalSpaces) return;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            noOfSpacesEncountered += 1;
            if (noOfSpacesEncountered == k) return result;
        }
        result += s[i];
    }
};
