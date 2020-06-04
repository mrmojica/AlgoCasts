// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative O(n)
// function fib(n) {
//   let result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 1] + result[i - 2]);
//   }

//   return result[n];
// }

// recursive O(n^2) 'not that good runtime!'
// However we use memoization we can improve this function's runtime.
// - record/ store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed result, rather than running the function again.
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Slow Fib Function --> Memoizer --> Fast, Memoized Fib Function

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  // references the fib (memoized) instead of slowFib (will reference back to non memorized)
  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    // If the function has never been called with the current set of arguments we will
    // have to pass them to the original “slow” function that is the fn passed to memoize
    // as an argument and then save the result to cache. In order to pass an array of
    // arguments we need to use apply() method.
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fib = memoize(slowFib);

module.exports = fib;
