/**
 * Implement a JavaScript function to find the sum of
 * all elements in an array recursively.
 */

const sumOfArrayElements = array => {
  if (array.length === 0) return 0;
  return array[0] + sumOfArrayElements(array.slice(1));
};
