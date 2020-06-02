// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My initial solution:
function vowels(str) {
  const vowelsList = ["a", "e", "i", "o", "u"];
  let total = 0;

  for (let char of str.toLowerCase().split("")) {
    // note: includes checks strings and arrays so 'aeiou' would work too!
    if (vowelsList.includes(char)) {
      total++;
    }
  }

  return total;
}

// Regex solution:
// function vowels(str) {
// [] is basically checking if contains anything within the brackets
// g make sure you don't stop after the first match found (checks all)
// i means incensitive, which will handle cases.
// match() if it finds a match it will return an array of matches it found
// match() will return an array or null
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0;
// }

module.exports = vowels;
