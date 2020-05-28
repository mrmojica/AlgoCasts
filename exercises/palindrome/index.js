// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My initial solution:
function palindrome(str) {
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

// alternative solution but requires more work as it iterates unnecessary checks.
// function palindrome(str) {
//   return str.split("").every((char, index) => {
//     return char === str[str.length - index - 1];
//   });
// }

module.exports = palindrome;
