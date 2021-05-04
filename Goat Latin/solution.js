/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    let finalLatinWord = '';
    const words = S.split(" ");
    for (let i = 0; i < words.length; i++) {
        let isFirstLetterVowel = false;
        let temp;
        if (words[i][0].toLowerCase() === 'a' || words[i][0].toLowerCase() === 'e' || words[i][0].toLowerCase() === 'i' || words[i][0].toLowerCase() === 'o' || words[i][0].toLowerCase() === 'u') {
            isFirstLetterVowel = true;
            finalLatinWord += words[i][0];
        } else {
            temp = words[i][0];
        }
        for (let j = 1; j < words[i].length; j++) {
            finalLatinWord += words[i][j];
        }
        if (!isFirstLetterVowel) finalLatinWord += temp;
        finalLatinWord += 'ma';
        for (let j = 0; j < i + 1; j++) {
            finalLatinWord += 'a'
        }
        if (i !== words.length - 1) finalLatinWord += ' ';
    }
    return finalLatinWord;
};