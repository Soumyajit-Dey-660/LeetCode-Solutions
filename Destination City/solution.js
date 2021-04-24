/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let start = [];
    let destination = [];
    let distinct = "";
    paths.map((cities) => {
        start.push(cities[0]);
        destination.push(cities[1]);
    });
    for (let i = 0; i < start.length; i++) {
        let flag = true;
        for (let j = 0; j < start.length; j++) {
            if (destination[i] === start[j]) {
                flag = false;
                break;
            }
        }
        if (flag) return destination[i];
    }
};
