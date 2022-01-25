/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
    let gcd = (a, b) => {
        if (a === b)
            return a;
        if (a > b)
            return gcd(a - b, b);
        return gcd(a, b - a);
    }
    let lookUp = {};
    for (let card of deck) {
        if (lookUp[card] === undefined) {
            lookUp[card] = 1;
        } else {
            lookUp[card] += 1;
        }
    }
    let compare = lookUp[Object.keys(lookUp).sort()[0]];
    if (compare < 2) return false;
    for (let card in lookUp) {
        if (gcd(compare, lookUp[card]) === 1) {
            return false;
        }
        compare = gcd(compare, lookUp[card]);
    }
    return true;
};