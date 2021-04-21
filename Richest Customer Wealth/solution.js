/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let arraySum = accounts[i].reduce((a, b) => a + b, 0);
    max = arraySum > max ? arraySum : max;
  }
  return max;
};
