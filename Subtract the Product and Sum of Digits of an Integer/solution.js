/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    return product(n) - addition(n);
};

var product = function (n) {
    let productResult = 1;
    let rem = 0;
    while (n > 0) {
        rem = n % 10;
        n = Math.floor(n / 10);
        productResult *= rem;
    }
    return productResult;
};

var addition = function (n) {
    let additionResult = 0;
    let rem = 0;
    while (n > 0) {
        rem = n % 10;
        n = Math.floor(n / 10);
        additionResult += rem;
    }
    return additionResult;
};
