/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let result = [];
    let countMap = {};
    for (let i = 0; i < cpdomains.length; i++) {
        let visits = '';
        let fullDomain = '';
        let breakingIndex = 0;
        let subDomains = [];
        let make_domain = '';
        for (let j = 0; j < cpdomains[i].length; j++) {
            if (cpdomains[i][j] === ' ') {
                breakingIndex = j;
                break;
            }
        }
        for (let j = 0; j < breakingIndex; j++) {
            visits += cpdomains[i][j];
        }
        visits = Number(visits);
        for (let j = breakingIndex + 1; j < cpdomains[i].length; j++) {
            fullDomain += cpdomains[i][j];
        }
        subDomains = fullDomain.split(".");
        subDomains.reverse();
        for (let j = 0; j < subDomains.length; j++) {
            if (j !== 0) make_domain = subDomains[j] + '.' + make_domain;
            else make_domain = subDomains[j];
            if (countMap[make_domain]) countMap[make_domain] += visits;
            else countMap[make_domain] = visits;
        }
    }
    for (let key in countMap) {
        result.push(`${countMap[key]} ${key}`);
    }
    return result;
};