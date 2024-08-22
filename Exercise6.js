/**
 * function maxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
}
  
 */

const largestNumber = (num1, num2, num3) => Math.max(num1, num2, num3)