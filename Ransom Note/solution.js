/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let getCount = arr => {
        let lookUp = {};
        for (let char of arr) {
            if (lookUp[char] === undefined) {
                lookUp[char] = 1;
            } else {
                lookUp[char] += 1;
            }
        }
        return lookUp;
    }
    let ransomLookUp = getCount(ransomNote);
    let magazineLookUp = getCount(magazine);
    for (let key in ransomLookUp) {
        if (magazineLookUp[key] === undefined || magazineLookUp[key] < ransomLookUp[key]) {
            return false;
        }
    }
    return true;
};