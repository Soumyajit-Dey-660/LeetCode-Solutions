/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let trackMap = {};
    let result = [];

    for (let i = 0; i < groupSizes.length; i++) {
        if (trackMap[groupSizes[i]] === undefined)
            trackMap[groupSizes[i]] = [i];
        else
            trackMap[groupSizes[i]].push(i)
    }

    for (let key in trackMap) {
        let temp = [];
        for (let i = 0; i < trackMap[key].length; i++) {
            if ((i + 1) % Number(key) === 0) {
                temp.push(trackMap[key][i]);
                result.push(temp);
                temp = [];
            } else {
                temp.push(trackMap[key][i]);
            }
        }
    }
    
    return result;
};