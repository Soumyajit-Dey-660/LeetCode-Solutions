/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    // balloon -> {'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1}
    let countMap = {};
    let maxBalloonCount = 0;
    for (const char of text) {
        if (countMap[char]) countMap[char]++;
        else countMap[char] = 1;
    }
    if ('b' in countMap && 'a' in countMap && 'l' in countMap && 'o' in countMap && 'n' in countMap) {
        maxBalloonCount = countMap['b'];
        if (countMap['a'] < maxBalloonCount) maxBalloonCount = countMap['a'];
        if (countMap['n'] < maxBalloonCount) maxBalloonCount = countMap['n'];
        if (Math.floor(countMap['l'] / 2) < maxBalloonCount) maxBalloonCount = Math.floor(countMap['l'] / 2);
        if (Math.floor(countMap['o'] / 2) < maxBalloonCount) maxBalloonCount = Math.floor(countMap['o'] / 2);
    }
    return maxBalloonCount;
};