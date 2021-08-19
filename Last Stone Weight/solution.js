/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const getHighestTwoNums = arr => {
        let highest = arr[0] >= arr[1] ? arr[0] : arr[1];
        let secondHighest = arr[0] < arr[1] ? arr[0] : arr[1];
        let highestPointer = arr[0] >= arr[1] ? 0 : 1;
        let secondHighestPointer = arr[0] < arr[1] ? 0 : 1;
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] > secondHighest && arr[i] <= highest) {
                secondHighest = arr[i];
                secondHighestPointer = i
            } else if (arr[i] > highest) {
                secondHighest = highest;
                secondHighestPointer = highestPointer;
                highest = arr[i];
                highestPointer = i;
            }
        }
        return [highest, highestPointer, secondHighest, secondHighestPointer];
    }
    if (stones.length === 0) return 0;
    if (stones.length === 1) return stones[0];
    let highest = -1;
    let secondHighest = -1;
    let highestPointer = -1;
    let secondHighestPointer = -1;
    while (highest !== 0 && secondHighest !== 0) {
        [highest, highestPointer, secondHighest, secondHighestPointer] = getHighestTwoNums(stones);
        stones[secondHighestPointer] = 0;
        stones[highestPointer] = highest - secondHighest;
    }
    return stones.reduce((a, b) => a > b ? a : b);
};