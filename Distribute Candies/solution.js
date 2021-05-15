/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let differentTypes = {};
    for (const candy of candyType) {
        if (!differentTypes[candy]) differentTypes[candy] = true;
    }
    return Object.keys(differentTypes).length >= Math.ceil(candyType.length / 2) ? Math.ceil(candyType.length / 2) : Object.keys(differentTypes).length;
};