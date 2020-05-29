// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My initial solution:
// function anagrams(stringA, stringB) {
// use RegExp to remove the spaces and extra characters .replace(/[^\w]/g, "") removes non characters to empty string.
// .toLowerCase() make strings low case.
//   let formattedStrA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   let formattedStrB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   let characters = {};

//   if (formattedStrA.length !== formattedStrB.length) {
//     return false;
//   }

//   for (let char of stringA) {
//     characters[char] = characters[char] + 1 || 1;
//   }

//   for (let char of stringB) {
//     if (characters[char] === 0) {
//       return false;
//     }
//     characters[char]--;
//   }

//   return true;
// }
// --------------------------------------------------

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// helper function
// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// --------------------------------------------------

function anagrams(stringA, stringB) {
  return cleanSortString(stringA) === cleanSortString(stringB);
}

// helper function
function cleanSortString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join(")");
}

module.exports = anagrams;
