/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    if (s === '') return [0, 100];
    let totalLines = 1;
    let remaining = 100;
    let reference = 'a';
    for (let i = 0; i < s.length; i++) {
        if (widths[s.charCodeAt(i) - reference.charCodeAt(0)] <= remaining) {
            remaining -= widths[s.charCodeAt(i) - reference.charCodeAt(0)];
        } else {
            totalLines++;
            remaining = 100 - widths[s.charCodeAt(i) - reference.charCodeAt(0)];
        }
    }
    return [totalLines, 100 - remaining];
};