/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let allSmall = false;
    // First character small
    if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) allSmall = true;
    if (allSmall) {
        // all remaining character should be small
        for (let i = 1; i < word.length; i++) {
            if (!(word.charCodeAt(i) >= 97) && (word.charCodeAt(i) <= 122)) return false;
        }
    } else {
        // First character is Capital Letter
        // Case 1: Rest all should be Capital
        // case 2: Rest all should be small
        let remainingAllSmall = false;
        // Second letter is small
        if (word.charCodeAt(1) >= 97 && word.charCodeAt(1) <= 122) remainingAllSmall = true;
        if (remainingAllSmall) {
            // All letter from index 2 should be small
            for (let i = 2; i < word.length; i++) {
                // Capital letter
                if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) return false;
            }
        } else {
            // All letter from index 2 should be capital
            for (let i = 2; i < word.length; i++) {
                // Small letter
                console.log(word.charCodeAt(i))
                if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) return false;
            }
        }
    }
    return true;
};
