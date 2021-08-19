/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let alphaNumStr = '';
    const isAlphaNumeric = char => {
        if ((char >= 48 && char <= 57) ||
            (char >= 65 && char <= 90) ||
            (char >= 97 && char <= 122)) {
            return true;
        } else {
            return false;
        }
    }
    let reverseString = '';
    for (let i = 0; i < s.length; i++) {
        if (isAlphaNumeric(s.charCodeAt(i))) {
            alphaNumStr += s[i].toLowerCase();
        }
    }
    for (let i = alphaNumStr.length - 1; i >= 0; i--) {
        reverseString += alphaNumStr[i];
    }
    return reverseString === alphaNumStr;
};