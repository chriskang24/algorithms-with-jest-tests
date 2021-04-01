// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startRow <= endRow && startCol <= endRow) {

    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++
    }
    startRow++;

    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++
    }
    endCol--;

    for (let k = endCol; k >= startCol; k--) {
      result[endRow][k] = counter;
      counter++
    }
    endRow--;

    for (let l = endRow; l >= startRow; l--) {
      result[l][startCol] = counter;
      counter++
    }
    startCol++;

  }
  return result;
}

matrix(6);
module.exports = matrix;