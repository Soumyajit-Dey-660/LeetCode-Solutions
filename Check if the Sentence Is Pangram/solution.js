/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let letterCountMap = {};
  let totalLetterCount = 0;
  for (let i = 0; i < sentence.length; i++) {
    let iCount = letterCountMap[sentence[i]];
    if (iCount) {
      letterCountMap[sentence[i]] += 1;
    } else {
      letterCountMap[sentence[i]] = 1;
    }
  }
  for (key in letterCountMap) {
    totalLetterCount += 1;
  }
  let result = totalLetterCount === 26 ? true : false;
  return result;
};
