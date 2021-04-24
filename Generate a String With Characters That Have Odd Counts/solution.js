/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    let string = "";
    if (n % 2 === 0) {
        for (let i = 0; i < n - 1; i++) {
            string += "a";
        }
        string += "b";
    } else {
        for (let i = 0; i < n; i++) {
            string += "a";
        }
    }
    return string;
};
