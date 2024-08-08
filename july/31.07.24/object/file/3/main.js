//
//
// //
// // //
// // // //
// // // //
// // // //1 omer.
// // function starLine(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let line = "";
// //     for (let j = 1; j <= i; j++) {
// //       line += "* ";
// //     }
// //     console.log(line);
// //   }
// // }
// // starLine(5);

// //2.

// function multiplication(g) {
//   for (let i = 1; i <= g; i++) {
//     let line = "";
//     for (let j = 1; j <= 5; j++) {
//       line += i * j + " ";
//     }
//     console.log(line);
//   }
// }
// // multiplication(5);

// //3.

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let target;
// // let found = false;
// function chekSameNumber(target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === target) {
//         console.log(`${target} found in cell: ${i} in value ${j}`);
//         // found = true;
//         // break;
//       }
//     }
//   }
//   // if (!found) {
// //   //   console.log(`"sorry we do'nt found match"`);
// //   // }
// // }
// // chekSameNumber(5);

// let array1 = ["string", "String1", "string2"];
// function bigCheck(checkchar) {
//   // let isFound = false;

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array1[i].length; j++) {
//       if (checkchar === array1[i][j]) {
// //         console.log(`row : ${i} column ${j}`);
// //         isFound = true;
// //       }
// //     }
// //     // if (isFound) {
// //     // //   break;
// //     // }
// //   }
// //   if (!isFound) {
// //     console.log(`sorry do'nt mactch`);
// //   }
// // }
// // bigCheck("r");
// let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let str = "hello";
// for (let i = 0; i < str.length; i++) {
//   // console.log(str[i]);
//   for (let j = 0; j < vowel.length; j++) {
//     if (str[i] === vowel[j]) {
//       console.log(`have match ${j} with ${i}`);
//     }
//   }
// }
// if (!str[i] === vowel[j]) {
//   console.log(`dont found match`);
// }

// let char = 0;

// function chekNumbCharSame(string) {
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         char++;
//         console.log(char);
//       }
//     }
//   }
// }
// chekNumbCharSame("hello");
