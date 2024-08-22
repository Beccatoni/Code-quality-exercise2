/*
Implement a JavaScript function to remove 
duplicate elements from an array.
*/

const removeDuplicates = array => {
  return Array.from(new Set(array));
};
