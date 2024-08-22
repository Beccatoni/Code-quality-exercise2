/*
Write a JavaScript function to check if a given number 
is prime or not.
*/

const checkPrime = (number) => {
  if (number === 1) return "One is not a prime number";
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
};
