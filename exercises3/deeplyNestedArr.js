/*


*/

const checkNestingLevel = (array) => {
  let level = 0;
  if (!Array.isArray(array)) return 0;

  for (const element of array) {
    level = Math.max(level, checkNestingLevel(element));
  }

  return level + 1;
};
