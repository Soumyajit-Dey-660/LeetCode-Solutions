/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let oddIndexedCoins = 0;
    let evenIndexedCoins = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            evenIndexedCoins += 1;
        } else {
            oddIndexedCoins += 1;
        }
    }
    let result = evenIndexedCoins < oddIndexedCoins ? evenIndexedCoins : oddIndexedCoins;
    return result;
};