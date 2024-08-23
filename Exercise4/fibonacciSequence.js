// fibonacci sequence

// Implement a JavaScript function to calculate 
// the Fibonacci sequence up to a given number.

const fibonacciSequence = number => {
    const fibonacciArr = [1,1];
    for (let i = 2; i < number; i++) {
        fibonacciArr.push(fibonacciArr[i-1] + fibonacciArr[i-2])
}

return fibonacciArr
}

console.log(fibonacciSequence(5))