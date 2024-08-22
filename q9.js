/**
 * function calculateMatrixSum(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[i].length; j++)
      sum += matrix[i][j];
  return sum;
}
 */



function calculateMatrixSum(matrix){
    return matrix.flat().reduce((acc,curr)=> acc + curr, 0)
}

console.log(calculateMatrixSum( [
    [12, 14, 13],
    [18, 15, 16],
    [17, 11, 19],
]))