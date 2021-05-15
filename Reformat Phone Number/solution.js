/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let resultString = '';
    let newStr = '';
    let remaining = 0;
    for (const num of number) {
        if (num !== '-' && num !== ' ') newStr += num;
    }
    if (newStr.length < 3) return newStr;
    for (let i = 0; i < Math.floor(newStr.length / 3); i++) {
        resultString += newStr.slice(3 * i, 3 * (i + 1));
        if (i !== Math.floor(newStr.length / 3) - 1) resultString += '-';
    }
    resultString += newStr.slice(Math.floor(newStr.length / 3) * 3)
    remaining = newStr.length % 3;
    // If remaining is 0, then answer is resultString i.e., 123-456
    if (remaining === 0) return resultString;
    // If remaining is 1, then resultString is 123-4567
    //  So we have to put a '-' 2 indices before. Answer is 123-45-67
    // If remaining is 2, then resultString is 123-45678
    //  In this case also we have to put a '-' 2 indices before. Answer is 123-456-78
    else
        resultString = resultString.slice(0, resultString.length - 2) + '-' + resultString.slice(resultString.length - 2);
    return resultString;
};