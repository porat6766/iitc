// //13.

// // const stringso = [
// //   "baba",
// //   "my success",
// //   "no more lives",
// //   "and of session",
// //   "good discussion",
// // ];

// function spaceoccurence(strings) {
//   let sumGroups = {};
//   for (let i = 0; i < strings.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < strings[i].length; j++) {
//       if (strings[i][j] === " ") {
//         counter++;
//       }
//     }
//     if (!sumGroups[counter]) {
//       sumGroups[counter] = [];
//     }
//     sumGroups[counter].push(strings[i]);
//   }
//   return sumGroups;
// }
// const excute = spaceoccurence(stringso);
// console.log(excute);

//14.

// const stringso = [
//   "baba",
//   "dada",
//   "my success",
//   "no more lives",
//   "and of session",
//   "good discussion",
// ];

// function longString(strings) {
//   let sumLongString = {};
//   for (let i = 0; i < strings.length; i++) {
//     let counterchar = 0;
//     for (let j = 0; j < strings[i].length; j++) {
//       counterchar++;
//     }
//     if (!sumLongString[counterchar]) {
//       sumLongString[counterchar] = [];
//     }
//     sumLongString[counterchar].push(strings[i]);
//   }
//   return sumLongString;
// }
// const excutep = longString(stringso);
// console.log(excutep);

// 🥵 Task 15: Capitalize Strings 🥵

// // TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// // Bonus: Capitalize the first letter of each word in the string (split by space)

// function capitalizeFirstLetter(strings) {
//   let newArray = [];
//   for (let i = 0; i < strings.length; i++) {
//     let boolean = true;
//     let newString = "";
//     for (let j = 0; j < strings[i].length; j++) {
//       if (strings[i][0] || boolean) {
//         newString = strings[i][0].toUpperCase();
//         boolean = false;
//       } else if (strings[i][j] === " ") {
//         newString += strings[i][j];
//         boolean = true;
//       } else {
//         newString += strings[i][j];
//       }
//     }
//     newArray.push(newString);
//   }
//   return newArray;
// }
// const excute = capitalizeFirstLetter(stringso);
// console.log(excute);

const stringso = [
  "baba",
  "dada",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];
