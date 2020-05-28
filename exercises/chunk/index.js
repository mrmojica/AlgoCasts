// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My initial solution:
// function chunk(array, size) {
//   let result = [];
//   let chunk = [];

//   for (let i = 0; i < array.length; i++) {
//     if (chunk.length === size) {
//       result.push(chunk);
//       chunk = [];
//     }

//     chunk.push(array[i]);
//   }
//   result.push(chunk);

//   return result;
// }

// function chunk(array, size) {
//   let chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

function chunk(array, size) {
  let chunked = [];
  let i = 0;

  while (i < array.length) {
    // slice makes a copy of the sliced array (between the first ans econd argument indices).
    chunked.push(array.slice(i, i + size));
    i = i + size;
  }

  return chunked;
}

module.exports = chunk;
