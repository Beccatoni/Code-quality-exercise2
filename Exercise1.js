/*
function calculateAverage(numbers) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }
  var average = sum / count;
  return average;
}
* */

const calculateAverage = numbers =>  {
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}
