/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let lookUp = {};
    let words = s.split(' ');
    if (words.length !== [...pattern].length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        if (lookUp[pattern[i]] === undefined) {
            if (checkIfValExist(lookUp, words[i])) {
                return false;
            }
            lookUp[pattern[i]] = words[i];
        } else {
            if (lookUp[pattern[i]] !== words[i]){
                return false;
            }
        }
    }
    return true;
};

var checkIfValExist = function(lookUp, val) {
    let keys = Object.keys(lookUp);
    for (let i = 0; i < keys.length; i++) {
        if (lookUp[keys[i]] === val) {
            return true;
        }
    }
    return false;
}