/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let result = new Array(num_people).fill(0);
    let remainingCandies = candies;
    let currCandy = 1;
    while (true) {
        for (let i = 0; i < num_people; i++) {
            if (currCandy < remainingCandies) {
                result[i] += currCandy;
                remainingCandies -= currCandy;
                currCandy += 1;
            } else {
                result[i] += remainingCandies;
                return result;
            }
        }
    }
};