/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let currIndex = 0;
    let nextIndex = 0;
    let result = [];
    let flag = false;
    let lastIndex = 0;
    while (currIndex < s.length) {
        if (s[currIndex] === c) {
            flag = true;
            break;
        }
        currIndex++;
    }
    if (!flag) return [];
    if (currIndex === s.length - 1) {
        for (let i = s.length - 1; i >= 0; i--) {
            result.push(i);
        }
        return result;
    }
    for (let i = currIndex; i >= 0; i--) {
        result.push(i);
    }
    nextIndex = currIndex + 1;

    while (nextIndex < s.length) {
        if (s[nextIndex] === c) {
            for (let i = currIndex + 1; i < nextIndex + 1; i++) {
                result.push(Math.min(i - currIndex, nextIndex - i));
            }
            currIndex = nextIndex;
        }
        nextIndex++;
    }
    lastIndex = currIndex;
    currIndex++;
    while (currIndex < s.length) {
        result.push(currIndex - lastIndex);
        currIndex++;
    }
    return result;
};