// // https://docs.google.com/document/d/1yB6ErFdyjXWh7INfikVXyVpZ5sTM-htDnYth5FXK0sM/edit?usp=sharing

// "use strict";

// // count the char in a string
// function countChar(string, char) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     let currentChar = string[i];
//     if (char === currentChar) {
//       count++;
//     }
//   }

//   console.log(`count of ${char}: ${count} in ${string}`);
// }

// // countChar("hello", "l");

// //////////////////////////////////////////////////////////

// // count the char in a strings array (Verbose)
// function countCharInArrayVerbose(elements, char) {
//   let count = 0;

//   for (let i = 0; i < elements.length; i++) {
//     let currentElement = elements[i];

//     for (let j = 0; j < currentElement.length; j++) {
//       let currentChar = currentElement[j];
//       if (char === currentChar) {
//         count++;
//       }
//     }
//   }

//   console.log(`count of ${char}: ${count}`);
// }

// // count the char in a strings array
// function countCharInArray(elements, char) {
//   let count = 0;
//   for (let i = 0; i < elements.length; i++) {
//     for (let j = 0; j < elements[i].length; j++) {
//       if (char === elements[i][j]) {
//         count++;
//       }
//     }
//   }

//   console.log(`count of ${char}: ${count}`);
// }

// let names = ["sasha", "omer", "sason", "shai"];
// // countCharInArray(names, "s");
// // countCharInArray(names, "a");
// // countCharInArray(names, "b");

// //////////////////////////////////////////////////////////

// function sumInArray(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log("i", i);
//     let currentNumber = nums[i];
//     console.log("currentNumber", currentNumber);
//     sum = sum + currentNumber;
//   }

//   console.log(`sum is: ${sum}`);
// }

// // sumInArray([10, 4, 5]);

// //////////////////////////////////////////////////////////

// function sumNestedNumbersArray(nestedNumbers) {
//   let sum = 0;

//   for (let i = 0; i < nestedNumbers.length; i++) {
//     let currentArray = nestedNumbers[i];
//     console.log("currentArray", currentArray);
//     for (let j = 0; j < currentArray.length; j++) {
//       let currentNumber = currentArray[j];
//       console.log("currentNumber", currentNumber);
//       sum = sum + currentNumber;
//       console.log("sum", sum);
//     }
//   }

//   console.log(`sum is: ${sum}`);
// }

// // sumNestedNumbersArray([[5, 2], [3, 20, 10], [1]]); // 41

// //////////////////////////////////////////////////////////

// /*Exercise 1: Star Pattern
// Objective: Create a program that prints a right triangle pattern of stars (*).
// Instructions:
// Use two nested loops. The outer loop should iterate through numbers 1 to 5 (representing the row number).
// The inner loop should print stars equal to the current row number.
// Each row should end with a new line.
// Example Output:
// *
// **
// ***
// ****
// *****

// */

// function starPattern_1() {
//   for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }

// function starPattern_2() {
//   let stars = "";
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     stars += " ";
//   }
//   console.log(stars);
// }

// function starPattern_3() {
//   let stars = "";
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     stars += "\n";
//   }
//   console.log(stars);
// }

// // starPattern_1();
// // starPattern_2();
// // starPattern_3();

// /*
// Exercise 2: Multiplication Table
// Objective: Write a program that prints a multiplication table for numbers 1 through 5.
// Instructions:
// Use two nested for loops. The outer loop should iterate through numbers 1 to 5.
// The inner loop should also iterate through numbers 1 to 5.
// Multiply the numbers from the outer and inner loops and print the result.
// Example Output:
// Copy code
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25
// */

// function makeMultTable() {
//   for (let i = 1; i <= 10; i++) {
//     let row = `Mult of ${i} --- `;
//     for (let j = 1; j <= 10; j++) {
//       row += i * j + " ";
//     }
//     console.log(row);
//   }
// }

// // makeMultTable();
// /*
// Exercise 3: Array Search
// Objective: Find a specific number in a 2D array and print its position.
// Instructions:
// Create a 2D array (e.g., let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];).
// Use two nested loops to iterate over the elements of the array.
// Check each element to see if it matches the target number.
// If the target number is found, print its position (row and column).
// Example Output:
// For target = 5, output: Found 5 at position (1, 1)
// For target = 7, output: Found 7 at position (2, 0)
// */

// function searchInArray(array_2D, target) {
//   let row = null;
// //   let col = null;

// //   for (let i = 0; i < array_2D.length; i++) {
// //     let currentArray = array_2D[i];
// //     console.log("currentArray", currentArray);

// //     for (let j = 0; j < currentArray.length; j++) {
// //       let currentNumber = currentArray[j];
// //       console.log("currentNumber", currentNumber);
// //       if (currentNumber === target) {
// //         row = i;
// //         col = j;
// //         break;
// //       }
// //     }
// //     if (row !== null || col !== null) {
// //       break;
// //     }
// //   }

// //   if (row !== null || col !== null) {
// //     console.log(
// //       `For target = ${target}, output: Found ${target} at position (${row}, ${col})`
// //     );
// //   } else {
// //     console.log(`Target ${target} not found`);
// //   }
// // }

// // let arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];
// // searchInArray(arr, 6);

// //1.

// // function StarPattern(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //       row += "* ";
// //     }
// //     console.log(row);
// //   }
// // }
// // // StarPattern(5);

// // //2.

// // function multiplication(f) {
// //   for (let i = 1; i <= f; i++) {
// //     row = "";
// //     for (let j = 1; j <= f; j++) {
// //       row += i * j;
// //     }
// //     console.log(row);
// //   }
// // }
// // multiplication(5);

// // //3.
// // let arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // function searchInArrayPlace(g) {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[i].length; j++) {
// //       if (g === arr[i][j]) {
// //         console.log(`${g} number found in row ${i} in column${j}`);
// //       }
// //     }
// //   }
// // }
// // searchInArrayPlace(1);

// //4.

// function vowelsOrConstant(str) {
//   let vowelsCount = 0;
//   let countConstant = 0;
//   let vowel = "aeouiAOUIE";

// //   for (let i = 0; i < str.length; i++) {
// //     if (vowel.includes(str[i])) {
// //       vowelsCount++;
// //     } else {
// //       countConstant++;
// //     }
// //   }
// // //   console.log(countConstant);
// // //   console.log(vowelsCount);
// // // }
// // // vowelsOrConstant("hello world");

// // //5.

// // function strSwich(str) {
// //   let line = "";
// //   for (let i = 0; i < 1; i++) {
// //     for (let j = str.length - 1; j >= 0; j--) {
// //       line += str[j];
// //     }
// //   }
// //   console.log(line);
// // }
// // strSwich("hello");
// // // strSwich("natan");

// // // //

// // //6.

// // function pyramid(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //       row += j;
// //     }
// //     console.log(row);
// //   }
// // }
// // // pyramid(5);

// // //7.

// // arr = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6],
// // ];
// // function sumArrayNumb(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[i].length; j++) {
// //       sum += arr[i][j];
// //     }
// //   }
// //   console.log(sum);
// // }
// // sumArrayNumb(arr);

// //8.

// function stringCheck(string) {
//   for (let i = 0; i < string.length; i++) {
//     let count = 1;
//     for (let j = 0; j < string[i].length; j++) {
//       if (string[i] === string[j]) {
//         count++;
//       }
//     }
//     if (count.includes(str[i])) {
//       console.log(`${string[i]} exist ${count} times`);
//     }
//   }
// }
// stringCheck("slomo");

// // //9.

// function oneDionmantional(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       newArray.push(array[i][j]);
//     }
//   }
//   console.log(newArray);
// }

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// oneDionmantional(arr);

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function newArray(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array2.push(array[i][j]);
    }
  }
  console.log(array2);
}
newArray(arr);
