/**
 * @param {string} s
 * @return {string}
 */
 var sortString = function(s) {
    let lookUp = {};
    let result = "";
    for (let char of s) {
        if (lookUp[char] === undefined) {
            lookUp[char] = 1;
        } else {
            lookUp[char] += 1;
        }
    }
    const lookUpSorted = Object.keys(lookUp).sort().reduce((obj, key) => { 
            obj[key] = lookUp[key]; 
            return obj;
    }, {});
    let nothingLeft = false;
    let turn = 1;
    while(!nothingLeft) {
        let found = false;
        let search = turn % 2 === 1 ? Object.keys(lookUpSorted) : Object.keys(lookUpSorted).reverse();
        for (let key of search) {
            if (lookUpSorted[key] >= 1) {
                result += key;
                found = true;
                lookUpSorted[key] -= 1;
            } else {
                delete lookUpSorted[key];
            }
        }
        turn++;
        nothingLeft = !found;
    }
    return result;
};