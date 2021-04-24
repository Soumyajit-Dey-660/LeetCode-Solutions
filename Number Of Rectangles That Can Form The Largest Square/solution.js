/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let maxSize = 0;
    let count = 0;
    rectangles.map((rectangle) => {
        let minValue = rectangle[0] > rectangle[1] ? rectangle[1] : rectangle[0];
        maxSize = minValue > maxSize ? minValue : maxSize;
    });
    rectangles.map((rectangle) => {
        let minValue = rectangle[0] > rectangle[1] ? rectangle[1] : rectangle[0];
        if (minValue === maxSize) count++;
    });
    return count;
};
