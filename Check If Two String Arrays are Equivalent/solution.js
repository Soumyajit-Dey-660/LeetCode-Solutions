/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let string1 = "";
  let string2 = "";
  word1.map((letter) => (string1 += letter));
  word2.map((letter) => (string2 += letter));
  if (string1 === string2) return true;
  return false;
};
