/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const getIthIteration = index => {
        let previousIteration = [1, 1];
        for (let i = 2; i <= index; i++) {
            let currentIteration = [1];
            for (let j = 0; j < previousIteration.length - 1; j++) {
                currentIteration.push(previousIteration[j] + previousIteration[j + 1]);
            }
            currentIteration.push(1);
            previousIteration = currentIteration;
            if (i === index) {
                return currentIteration;
            }
        }
    }

    if (rowIndex === 0) {
        return [1]
    } else if (rowIndex === 1) {
        return [1, 1];
    } else {
        return getIthIteration(rowIndex);
    }
};