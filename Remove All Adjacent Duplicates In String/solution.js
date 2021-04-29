/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let madeChanges = true;
    while (true) {
        if (!madeChanges) return S;
        madeChanges = false;
        for (let i = 1; i < S.length; i++) {
            if (S[i] === S[i - 1]) {
                madeChanges = true;
                let newString = '';
                for (let j = 0; j < i - 1; j++) {
                    newString += S[j];
                }
                for (let j = i + 1; j < S.length; j++) {
                    newString += S[j];
                }
                S = newString;
                break;
            }
        }
    }
};