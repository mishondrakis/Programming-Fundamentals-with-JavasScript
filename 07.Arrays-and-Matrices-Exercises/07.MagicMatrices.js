function magicMatrices(matrix) {
    let matrixCol = 0;
    for (let row = 0; row < matrix.length; row++) {
        let colSum = 0;
        if (matrix.length == matrix[row].length) {
            for (let col = 0; col < matrix[row].length; col++) {
                colSum += Number(matrix[row][col]);
            }
        } else {
            return false;
        }

        if (row == 0) {
            matrixCol = colSum;
        }

        if (matrixCol != colSum) {
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])); //false