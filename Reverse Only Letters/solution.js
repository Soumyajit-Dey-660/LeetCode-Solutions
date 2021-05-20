/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let specials = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if ((s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
            (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122))
            result += s[i];
        else
            specials.push([i, s[i]]);
    }
    result = [...result].reverse().join("");
    for (const special of specials) {
        result = result.slice(0, special[0]) + special[1] + result.slice(special[0], result.length)
    }
    return result;
};