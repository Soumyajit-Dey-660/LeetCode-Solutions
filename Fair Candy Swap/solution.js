/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((a, b) => a + b, 0);
    const bobTotal = bobSizes.reduce((a, b) => a + b, 0);
    const middle = Math.floor((aliceTotal + bobTotal) / 2);
    for (const candy of aliceSizes) {
        if (bobSizes.indexOf(middle + candy - aliceTotal) >= 0) return [candy, middle + candy - aliceTotal];
    }
};