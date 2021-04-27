/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let matches = 0;
    let heightsCopy = [...heights];
    heights.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    for (let i = 0; i < heights.length; i++) {
        if (heightsCopy[i] !== heights[i]) matches++;
    }
    return matches;
};