/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
    let totalEvenSum = 0;
    let result = [];
    nums.forEach(num => totalEvenSum = num % 2 === 0 ? totalEvenSum + num : totalEvenSum);
    for (let i = 0; i < queries.length; i++) {
        let temp = nums[queries[i][1]];
        nums[queries[i][1]] += queries[i][0];
        if ((nums[queries[i][1]]) % 2 === 0) {
            if (temp % 2 !== 0)
                totalEvenSum += nums[queries[i][1]];
            else
                totalEvenSum += queries[i][0];
        } else {
            if (temp % 2 === 0)
                totalEvenSum -= temp;
        }
        result.push(totalEvenSum);
    }
    return result;
};