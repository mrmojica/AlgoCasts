// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Notes:
// Create empty array called 'results'
// Create a counter variable, starting at 1
// As long as (start column <= end column) AND (start row <= end row)
//  Loop from start column to end column
//      As results[start_row][i] assign counter variable
//      Increment counter
//  Increment start row
//  Loop from start row to end row
//      At results[i][end_column] assign counter variable
//      Increment counter
//  Decrement end column
//  ...repeat for two sides

// Need to create the nested arrays to represent matrix shape.
// Think of an condition 'while' to loop around the matrix spiral
// Create a counter to keep track of the #'s
// Create a variable to keep track of row/columns (start/end)
// Loop through each row/column in the spiral, make sure to increment/decrement when a row or column is completed.
// Update counter variables when finishing a row/column

function matrix(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let start_column = 0;
  let end_column = n - 1;
  let start_row = 0;
  let end_row = n - 1;

  while (start_column <= end_column && start_row <= end_row) {
    // Top Row
    for (let i = start_column; i <= end_column; i++) {
      result[start_row][i] = counter;
      counter++;
    }

    start_row++;

    // Right Column
    for (let i = start_row; i <= end_row; i++) {
      result[i][end_column] = counter;
      counter++;
    }

    end_column--;

    // Bottom Row
    for (let i = end_column; i >= start_column; i--) {
      result[end_row][i] = counter;
      counter++;
    }

    end_row--;

    // Start Column
    for (let i = end_row; i >= start_row; i--) {
      result[i][start_column] = counter;
      counter++;
    }

    start_column++;
  }
  console.log(result);

  return result;
}

module.exports = matrix;
