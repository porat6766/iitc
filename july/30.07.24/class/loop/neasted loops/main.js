// // // ////1.

// // // function asterrisks(g) {
// // //   for (let i = 1; i <= g; i++) {
// // //     let line = "";
// // //     for (let j = 1; j <= g; j++) {
// // //       line += i * j;
// // //     }
// // //     console.log(line);
// // //   }
// // // }
// // // asterrisks(2);

// // // ////2.

// // // let count = 1;
// // // function counter(g) {
// // //   for (let i = 1; i <= g; i++) {
// // //     let line = "";
// // //     for (let j = 1; j <= g; j++) {
// // //       line += count + " ";
// // //       count++;
// // //     }
// // //     console.log(line);
// // //   }
// // // // }
// // // // counter(2);
// // // //

// // // function asterisks(g) {
// // //   for (let i = 1; i <= g; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= g; j++) {
// // //       row += "* ";
// // //     }
// // //     console.log(row);
// // //   }
// // // }
// // // asterisks(2);

// // let count = 1;
// // function numbersFollow(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let newLine = "";
// // //     for (let j = 1; j <= g; j++) {
// // //       newLine += count + "  ";
// // //       count++;
// // //     }
// // //     console.log(newLine);
// // // //   }
// // // // }
// // // // numbersFollow(2);

// function triangle(g) {
//   for (let i = 1; i <= g; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }
// triangle(3);

// // //4.

// // function indexes(g, f) {
// //   for (let i = 0; i < g; i++) {
// //     let line = "";
// //     for (let j = 0; j < f; j++) {
// //       line += i + j;
// //     }
// //     console.log(line);
// //   }
// // // }
// // // indexes(3, 3);

// // //5.

// // function multiplication(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let row = "";
// //     for (let j = 1; j <= g; j++) {
// //       row += i * j;
// //     }
// //     console.log(row);
// //   }
// // }
// // multiplication(3);

// ## Exercise 1
// Print a 2x2 grid of asterisks.

// // Hint: Use two nested loops, both running 2 times.

// // [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)
// for (let i = 1; i <= 2; i++) {
//   let row = "";
//   for (let j = 1; j <= 2; j++) {
//     row += "* ";
//   }
//   console.log(row.trim());
// }

// ## Exercise 2
// Print numbers from 1 to 4 in a 2x2 grid.

// Hint: Use a counter variable that increments in the inner loop.

// // [Learn about variables in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#loop_scope_and_closures)
// let counter = 1;
// for (let i = 0; i < 2; i++) {
//   let row = "";
//   for (let j = 1; j <= 2; j++) {
//     row += counter + " ";
//     counter++;
//   }
//   console.log(row);
// }
// ## Exercise 3
// Print a right-angled triangle of asterisks with 3 rows.

// Hint: The outer loop controls rows, the inner loop prints asterisks based on the row number.

// // [Learn about triangular patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// for (let i = 1; i <= 3; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j + " ";
//   }
//   console.log(line);
// }

// ## Exercise 4
// Print a 3x3 grid where each cell contains the sum of its indices.

// Hint: Use the loop variables as indices and add them.

// [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

// function sumIndex(m, g) {
//   for (let i = 0; i < m; i++) {
//     let row = "";
//     for (let j = 0; j < g; j++) {
//       row += i + j + " ";
//     }
//     console.log(row);
//   }
// }
// sumIndex(10, 5);

// ## Exercise 5
// Print a 3x3 multiplication table.

// Hint: Multiply the outer loop variable by the inner loop variable.

// [Learn about multiplication tables](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-62.php)

// function multiplierTable(x, y) {
//   for (let i = 1; i <= x; i++) {
//     let row = "";
//     for (let j = 1; j <= y; j++) {
//       row += i * j + " ";
//     }
//     console.log(row);
//   }
// }
// console.log(multiplierTable(3, 3));

// ## Exercise 6
// Print a square border of asterisks with side length 3.

// // Hint: Use conditional statements to print asterisks only on the border.

// // [Learn about conditional statements in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
// function square(x, y) {
//   for (let i = 1; i <= x; i++) {
//     let row = "";
//     for (let j = 1; j <= y; j++) {
//       if (i === 1 || i === x || j === 1 || j === y) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
// }
// square(3, 5);

// // ## Exercise 7
// Print numbers from 1 to 9 in a 3x3 grid.

// Hint: Use a single counter variable that increments in the inner loop.

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// function table(g, m) {
//   let newLine = "";
//   let count = 1;
//   for (let i = 1; i <= g; i++) {
//     for (let j = 1; j <= m; j++) {
//       newLine += count++;
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// }

// const tryOne = table(3, 9);
// console.log(tryOne);

// ## Exercise 8
// Print a 3x3 grid of even numbers starting from 2.

// Hint: Start with 2 and increment by 2 in each iteration.

// [Learn about arithmetic in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// function tableEven(m, n) {
//   let newLine = "";
//   let count = 2;
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       newLine += count;
//       count += 2;
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// }
// const enenTable = tableEven(3, 3);
// console.log(enenTable);

// ## Exercise 9
// Print a right-angled triangle of numbers with 3 rows.

// Hint: Use the inner loop variable as the number to print.

// [Learn about nested loops for patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)
// function triangle(m) {
//   let newLine = "";
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= i; j++) {
//       newLine += j;
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// }
// const trian = triangle(3);
// console.log(trian);

// ## Exercise 10
// Print a 3x3 checkerboard pattern of 0s and 1s.

// Hint: Use the sum of indices and the modulo operator to determine whether to print 0 or 1.

// [Learn about the modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

// function checkboard(g, m) {
//   let board = "";
//   for (let i = 0; i < g; i++) {
//     let newLine = "";
//     for (let j = 0; j < m; j++) {
//       if ((i + j) % 2 === 0) {
//         newLine += 1;
//       } else if ((i + j) % 2 === 1) {
//         newLine += 0;
//       }
//     }
//     board += newLine + `\n`;
//   }
//   return board;
// }

// firstCheck = checkboard(20, 20);
// console.log(firstCheck);

// ## Exercise 11
// Print a 3x3 grid where each cell contains its row number.

// Hint: Use the outer loop variable as the number to print.

// // [Learn about accessing loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// function cellPlace(n, m) {
//   let newLine = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       newLine += i;
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// // }
// const caii = cellPlace(3, 3);
// console.log(caii);

// // ## Exercise 12
// Print a 3x3 grid where each cell contains its column number.

// Hint: Use the inner loop variable as the number to print.

// [Learn about nested loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// function column(n, m) {
//   let newLine = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       newLine += j + " ";
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// }

// const caii = column(3, 3);
// console.log(caii);

// ## Exercise 13
// Print a 4x4 grid of alternating X and O.

// Hint: Use the sum of indices and the modulo operator to determine whether to print X or O.

// [Learn about conditional operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator)

// function gridAlternativ(n, m) {
//   let newLine = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if ((i + j) % 2 === 0) {
//         newLine += "x";
//       } else if ((i + j) % 2 === 1) {
//         newLine += "o";
//       }
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// }

// const caii = gridAlternativ(4, 4);
// console.log(caii);

// function gridAlternativ(n, m) {
//   let newLine = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (j % 2 === 0) {
//         newLine += "x";
//       } else if (j % 2 === 1) {
//         newLine += "o";
//       }
//     }
//     newLine += `\n`;
//   }
//   return newLine;
// }

// const caii = gridAlternativ(4, 4);
// console.log(caii);

// ## Exercise 14
// Print a right-angled triangle of odd numbers with 4 rows.

// Hint: Use a counter that starts at 1 and increments by 2.

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// function triangle(m) {
//   let counter = 1;
//   let line = "";
//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= i; j++) {
//       line += counter;
//       counter += 2;
//     }
//     line += `\n`;
//   }
//   return line;
// }
// const trianglKind = triangle(4);
// console.log(trianglKind);

// ## Exercise 15
// Print a 3x3 grid where each cell contains the absolute difference between its row and column indices.

// Hint: Use Math.abs() to calculate the absolute difference.

// [Learn about Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

// function absGrid(x, y) {
//   let grid = "";
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j < y; j++) {
//       grid += Math.abs(i - j) + " ";
//     }
//     grid += `\n`;
//   }
//   return grid;
// }

// const grid = absGrid(3, 3);
// console.log(grid);

// ## Exercise 16
// Print a hollow right-angled triangle of asterisks with 4 rows.

// Hint: Print asterisks only when it's the first or last column, or the last row.

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// function triangle(x) {
//   let tri = "";
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (j === 0 || j === i || i === x - 1) {
//         tri += "*";
//       } else {
//         tri += " ";
//       }
//     }
//     tri += `\n`;
//   }
//   return tri;
// }
// const hollow = triangle(10);
// console.log(hollow);

// ## Exercise 17
// Print a 4x4 grid where each cell contains the smaller of its row or column index.

// Hint: Use Math.min() to compare row and column indices.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// function gridPlace(x, y) {
//   let grid = "";
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j < y; j++) {
//       grid += Math.min(i, j) + " ";
//     }
//     grid = grid.trim() + `\n`;
//   }
//   return grid;
// }
// const trt = gridPlace(4, 4);
// console.log(trt);

// ## Exercise 18
// Print a 4x4 grid where each cell contains the larger of its row or column index.

// Hint: Use Math.max() to compare row and column indices.

// [Learn about Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

// function gridPlace(x, y) {
//   let grid = "";
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j < y; j++) {
//       grid += Math.max(i, j) + " ";
//     }
//     grid = grid.trim() + `\n`;
//   }
//   return grid;
// }
// const trt = gridPlace(4, 4);
// console.log(trt);

// ## Exercise 19
// Print a right-angled triangle of consecutive letters (A-Z) with 4 rows.

// Hint: Use String.fromCharCode() to convert numbers to letters.

// [Learn about String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

// function triangle(x) {
//   let trian = "";
//   let corretCharCode = 65;
//   for (let i = 0; i <= x; i++) {
//     for (let j = 0; j < i; j++) {
//       trian += String.fromCharCode(corretCharCode) + " ";
//       corretCharCode++;
//       if (corretCharCode > 90) {
//         corretCharCode = 65;
//       }
//     }
//     trian += `\n`;
//   }
//   return trian;
// }
// const trt = triangle(4);
// console.log(trt);

// ## Exercise 20
// Print a 3x3 grid where each cell contains the sum of all numbers from 1 to the product of its indices.

// Hint: Use a nested loop to calculate the sum for each cell.

// [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// function grid(x, n) {
//   let grid = "";
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j < n; j++) {
//       let ceilMultiplie = i * j;
//       grid += (ceilMultiplie * (ceilMultiplie + 1)) / 2 + " ";
//     }
//     grid += `\n`;
//   }
//   return grid;
// }
// const firstRunGrid = grid(3, 3);
// console.log(firstRunGrid);

//anotherWAY:

// function grid(x, n) {
//   let grid = "";
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j < n; j++) {
//       let counter = 0;
//       let ceilMultiplie = i * j;
//       for (let k = 1; k <= ceilMultiplie; k++) {
//         counter += k;
//       }
//       grid += counter + " ";
//     }
//     grid += `\n`;
//   }
//   return grid;
// }
// const firstRunGrid = grid(3, 3);
// console.log(firstRunGrid);

// // ## Exercise 21
// // Print a 4x4 grid of ascending numbers in a spiral pattern.

// // Hint: Use a 2D array and fill it in a spiral pattern.

// // [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

function gridN(x, y) {
  let grid = Array.from({ length: x }, () => Array(y).fill(0));

  let print = 1;
  let top = 0;
  let bottom = x - 1;
  let left = 0;
  let right = y - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      grid[top][i] = print++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      grid[i][right] = print++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      grid[bottom][i] = print++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      grid[i][left] = print++;
    }
    left++;
  }
  grid.forEach((row) => console.log(row.join(" ")));
}
gridN(4, 4);

// ## Exercise 22
// Print a diamond pattern of asterisks with maximum width 5.

// Hint: Combine an increasing triangle with a decreasing triangle.

// [Learn about complex patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 23
// Print a 4x4 grid where each cell contains the result of its row index raised to the power of its column index.

// Hint: Use the ** operator for exponentiation.

// [Learn about the exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

// ## Exercise 24
// Print a right-angled triangle of descending numbers with 4 rows, starting from 10.

// Hint: Initialize a counter with 10 and decrement it in each iteration.

// [Learn about decrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 25
// Print a 4x4 grid where each cell contains the result of (row index * 2) + column index.

// Hint: Use arithmetic operations with the loop variables.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// ## Exercise 26
// Print a hollow square of hash symbols (#) with side length 5.

// Hint: Print hash symbols only when it's the first or last row, or the first or last column.

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// ## Exercise 27
// Print a 4x4 grid where each cell contains the smaller of: the product of its indices or 5.

// Hint: Use Math.min() to compare the product with 5.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// ## Exercise 28
// Print a right-angled triangle of asterisks with 5 rows, but skip the third row.

// Hint: Use an if statement to skip printing when the row index is 3.

// [Learn about if statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

// ## Exercise 29
// Print a 5x5 grid where cells on the main diagonal (where row index equals column index) contain 1, and all other cells contain 0.

// Hint: Use an if statement to check if row index equals column index.

// [Learn about equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

// ## Exercise 30
// Print a 4x4 grid where each cell contains the sum of its row index, column index, and the number 1.

// Hint: Add the  row index, column index, and 1 for each cell.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

//// map create new array// and we have for-of to acihve data ffrom the array

// let array = [1, 2, 3, 4];
// // for (element of array) {
// //   console.log(element);
// // }
// for (element of array) {
//   console.log(element * element);
// }

// let array2 = array.map((num) => num * 2);
// console.log(array2);

// let array3 = array.map(function (rtr, tpt) {
//   if (tpt === 1 || tpt === 3) {
//     console.log(rtr * rtr);
//   }
// });
