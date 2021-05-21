/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let startPrice = prices[0];
    let profit = 0
    let counter = 1;
    while (counter < prices.length) {
        if (prices[counter] <= startPrice) {
            startPrice = prices[counter];
            counter++;
        } else {
            while (counter < prices.length) {
                if (prices[counter] > prices[counter - 1]) {
                    counter++;
                } else {
                    break;
                }
            }
            profit += prices[counter - 1] - startPrice;
            startPrice = counter < prices.length ? prices[counter] : 0;
        }
    }
    return profit;
};