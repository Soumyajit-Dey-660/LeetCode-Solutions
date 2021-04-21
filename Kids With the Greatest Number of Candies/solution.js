/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let highestCandies = Math.max(...candies);
  let result = new Array(candies.length).fill(false);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= highestCandies) {
      result[i] = true;
    }
  }
  return result;
};
