// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charsMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charsMap[char] = charsMap[char] + 1 || 1;
  }

  console.log(charsMap);

  //   Object.keys(charsMap).forEach((char) => {
  //     if (charsMap[char] > max) {
  //       max = charsMap[char];
  //       maxChar = char;
  //     }
  //   });

  // Note: to iterate an object using for loop use 'in' for arrays use 'of'
  for (let char in charsMap) {
    if (charsMap[char] > max) {
      max = charsMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
