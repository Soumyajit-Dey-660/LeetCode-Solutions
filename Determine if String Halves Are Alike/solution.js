/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let firstHalfCount = 0;
    let secondHalfCount = 0;
    let result = false;

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (
            s[i].toLowerCase() == "a" ||
            s[i].toLowerCase() == "e" ||
            s[i].toLowerCase() == "i" ||
            s[i].toLowerCase() == "o" ||
            s[i].toLowerCase() == "u"
        ) {
            firstHalfCount += 1;
        }
    }

    for (let i = Math.floor(s.length / 2); i < s.length; i++) {
        if (
            s[i].toLowerCase() == "a" ||
            s[i].toLowerCase() == "e" ||
            s[i].toLowerCase() == "i" ||
            s[i].toLowerCase() == "o" ||
            s[i].toLowerCase() == "u"
        ) {
            secondHalfCount += 1;
        }
    }

    result = firstHalfCount === secondHalfCount ? true : false;
    return result;
};
