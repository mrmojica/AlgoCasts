// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let counter = 0;
//   let step = "";

//   for (let i = 0; i < n; i++) {
//     step = "#" + step;

//     while (step.length < n) {
//       step = step + " ";
//     }

//     console.log(step);
//     step = "";
//   }
// }

// notes:
// dealing with a 2d array i (row), j (column)
// From O to n (iterate through rows)
//     Create an empty string, 'stair'
//     From 0 to n
//         IF the current column is equal to or less than the current row
//             Add a '#' to 'stair'
//         ELSE
//             Add a space to 'stair'
//         Console.log 'stair'
// iterative solution
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair = stair + "#";
      } else {
        stair = stair + " ";
      }
    }

    console.log(stair);
  }
}

// Recursion Tips:
// If (row == n) then we have hit the end of our problem.
// If the 'stair' has a length === n then we are at the end of row.
// If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space.
// recursion solution
// function steps(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }

//   // We no longer want to continue any code if the step is completed
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   // create the step recursively
//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }

//   steps(n, row, stair);
// }

module.exports = steps;
