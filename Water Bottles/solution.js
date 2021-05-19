/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let drank = numBottles;
    let empty = numBottles;
    while (empty >= numExchange) {
        drank += Math.floor(empty / numExchange);
        empty = Math.floor(empty / numExchange) + empty % numExchange;
    }
    return drank;
};