// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My Initial Solution:
function reverse(str) {
  return str.split("").reverse().join("");
}

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// function reverse(str) {
//   return str.split("").reduce((acc, char) => char + acc, "");
// }

// recursion example:
// function reverse(str) {
//   if (str === "")
//     // This is the terminal case that will end the recursion
//     return "";
//   else return reverse(str.substr(1)) + str.charAt(0);
// }

module.exports = reverse;
