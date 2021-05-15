/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const words1 = s1.split(' ');
    const words2 = s2.split(' ');
    let words1_map = {};
    let words2_map = {};
    let result = [];

    for (const word of words1) {
        if (words1_map[word]) words1_map[word] += 1;
        else words1_map[word] = 1;
    }

    for (const word of words2) {
        if (words2_map[word]) words2_map[word] += 1;
        else words2_map[word] = 1;
    }

    for (const key in words1_map) {
        if (words1_map[key] === 1 && !words2_map[key]) result.push(key);
    }

    for (const key in words2_map) {
        if (words2_map[key] === 1 && !words1_map[key]) result.push(key);
    }

    return result;
};