/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var checkAlmostEquivalent = function(word1, word2) {
    let lookUp1;
    let lookUp2;
    let getCount = (arr, countObj) => {
        for (let char of arr) {
            if (countObj[char] === undefined) {
                countObj[char] = 1;
            } else {
                countObj[char] += 1;
            }
        }
        return countObj;
    }
    let checkEquivalence = (obj1, obj2) => {
        for (let key in obj1) {
            if (obj2[key] === undefined && obj1[key] > 3) {
                return false;
            } else if (obj2[key] !== undefined) {
                if (Math.abs(obj1[key] - obj2[key]) > 3) {
                    return false;
                }
            }
        }
        return true;
    }
    lookUp1 = getCount(word1, {});
    lookUp2 = getCount(word2, {});
    return checkEquivalence(lookUp1, lookUp2) && checkEquivalence(lookUp2, lookUp1);
};