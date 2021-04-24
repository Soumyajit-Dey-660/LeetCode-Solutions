/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    image.map((row) => {
        for (let i = 0; i < Math.floor(row.length / 2); i++) {
            let temp = row[i];
            row[i] = row[row.length - i - 1];
            row[row.length - i - 1] = temp;
        }
    });

    image.map((row) => {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 0) row[i] = 1;
            else row[i] = 0;
        }
    });
    return image;
};
