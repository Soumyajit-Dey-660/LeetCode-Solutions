/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let maxHeight = 0;
  let currentHeight = 0;
  gain.map((height) => {
    currentHeight += height;
    maxHeight = currentHeight > maxHeight ? currentHeight : maxHeight;
  });
  return maxHeight;
};
