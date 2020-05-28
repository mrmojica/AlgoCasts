// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversedN = parseInt(n.toString().split("").reverse().join(""));
  // Math.sign() will return 1 or -1 (to maintain
  // If we didn't know about Math.sign() we can check if n < 0 and multiply by -1
  return Math.sign(n) * reversedN;
}

module.exports = reverseInt;
