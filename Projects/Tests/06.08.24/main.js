// "use strict";

// const student_1 = {
//   name: "John",
//   age: 17,
//   grades: {},
// };

// const product_1 = {
//   name: "Phone",
//   categories: ["electronics"],
//   isAvailable: false,
// };

// const students = [
//   { id: 1, name: "Alice", age: 20 },
//   { id: 2, name: "Bob", age: 22 },
//   { id: 3, name: "Charlie", age: 19 },
// ];

// // const strings = [
// //   "baba",
// //   "my success",
// //   "no more lives",
// //   "and of session",
// //   "good discussion",
// // ];

// // 😅 Task 1: Update Student Age 😅
// // TODO: Write a function to update the student's age (You can mutate the original object)
// function updateAge(student, newAge) {
//   student.age = newAge;
// }

// updateAge(student_1, 18);
// console.log("Updated Student:", student_1);

// // 😅 Task 2: Add Product Category 😅
// // TODO: Write a function to add a new category to the product (You can mutate the original object)
// function addCategory(product, category) {
//   product[category] = "ring";
// }

// addCategory(product_1, "gadgets");
// console.log("Updated Product:", product_1);

// // 😅 Task 3: Check Product Availability 😅
// // TODO: Write a function to check if the product is available (return true if available, false otherwise)
// function isProductAvailable(product) {
//   if (product.isAvailable === true) {
//     product = true;
//   } else {
//     product = false;
//   }
//   return product;
// }

// const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable);

// // 🙂 Task 4: Find Product by Name 🙂
// // TODO: Write a function to find a product by name
// function findProductByName(products, productName) {
//   let productFound = "";
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === productName) {
//       productFound = products[i];
//     }
//   }
//   return productFound;
// }

// // const foundProduct = findProductByName(myProducts, "Phone");
// // console.log("Found Product:", foundProduct);

// // 🙂 Task 5: Count Products in Category 🙂
// // TODO: Write a function to count the number of products in a category
// function countProductsInCategory(products, category) {
//   let counto = 0;
//   for (let i = 0; i < products.length; i++) {
//     for (let j = 0; j < products[i].categories.length; j++) {
//       if (category === products[i].categories[j]) {
//         counto += 1;
//       }
//     }
//   }
//   return counto;
// }

// const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);

// // 🙂 Task 6: Get Student Ages 🙂

// // TODO: Write a function to get an array of student ages
// function getStudentAges(students) {
//   let collectionAges = [];
//   for (let i = 0; i < students.length; i++) {
//     collectionAges.push(students[i].age);
//   }
//   return collectionAges;
// }

// const ages = getStudentAges(students);
// console.log("Student Ages:", ages);

// const myProducts = [
//   { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//   { name: "Shirt", price: 500, categories: ["clothing"] },
//   { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
// ];
// // 🤨 Task 7: Get Products by Category 🤨
// // TODO: Write a function to get products by category
// let productsCategory = [];
// function getProductsByCategory(products, category) {
//   for (let i = 0; i < products.length; i++) {
//     if ((category = products[i].categories)) {
//       productsCategory.push(products[i]);
//     }
//   }
//   return productsCategory;
// }

// const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);

// // // 🤨 Task 8: Get Average product prices 🤨
// // // TODO: Write a function to get the average price of all products
// function getAveragePrice(products) {
//   let averagePrice = 0;
//   let numbersPrices = 0;
//   for (let i = 0; i < products.length; i++) {
//     numbersPrices += products[i].price;
//     averagePrice = numbersPrices / products.length;
//   }
//   return averagePrice;
// }

// const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);

// // // 🤨 Task 9: Add Grade to Student 🤨
// // // TODO: Write a function to add a grade to a student (You can mutate the original object)
// function addGrade(student, subject, grade) {
//   student[subject] = grade;
// }

// addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1);

// // 😥 Task 10: Count Occurrences of a Character 😥
// // // TODO: Write a function to count the occurrences of the character 's'
// // function countCharacterOccurrences(strings, char) {
// //   let counter = 0;
// //   for (let i = 0; i < strings.length; i++) {
// //     if ((strings[i] = char)) {
// //       counter++;
// //     }
// //   }
// //   return counter;
// // }

// // const s_count = countCharacterOccurrences(strings, "s");
// // const c_count = countCharacterOccurrences(strings, "c");
// // console.log("Occurrences of 's':", s_count);
// // console.log("Occurrences of 'b':", c_count);

// // // // 😥 Task 11: Update Product Price by Name 😥
// // // // TODO: Write a function to update the price of a
// product by name (You can mutate the original object)

// function updatePriceByName(products, productName, newPrice) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === productName) {
//       products[i].price = newPrice;
//     }
//   }
//   return newPrice;
// }

// updatePriceByName(myProducts, "Phone", 550);
// console.log("Updated Products:", myProducts);

// // // // // // 😥 Task 12: Get Uppercase Strings 😥
// // // // // TODO: Write a function to get an array of uppercase strings (You should return a new array)

// function getUppercaseStrings(strings) {
//   let upperString = [];
//   for (let i = 0; i < strings.length; i++) {
//     let upper = strings[i].toUpperCase();
//     upperString.push(upper);
//   }
//   return upperString;
// }

// const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);

// // 🥵 Task 13: group strings by spaces occurences 🥵
// // TODO: Write a function to group strings by the number of spaces in the string.
// // // The function should return an object where keys are the number of spaces and values are arrays of strings.

// const strings = [
//   "baba",
//   "my success",
//   "no more lives",
//   "and of session",
//   "good discussion",
// ];

// function groupStringsBySpaces(strings) {
//   let sumSpaceString = {};

//   for (let i = 0; i < strings.length; i++) {
//     let counterSpace = 0;
//     for (let j = 0; j < strings[i].length; j++) {
//       let placeChar = strings[i][j];
//       if (placeChar === " ") {
//         counterSpace++;
//       }
//     }
//     if (!sumSpaceString[counterSpace]) {
//       sumSpaceString[counterSpace] = [];
//     }
//     sumSpaceString[counterSpace].push(strings[i]);
//   }
//   return sumSpaceString;
// }

// const groupedStrings_1 = groupStringsBySpaces(strings);
// console.log("Grouped Strings By Spaces:", groupedStrings_1);

// function groupSpace(string) {
//   let objstr = {};
//   for (let i = 0; i < string.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < string[i].length; j++) {
//       let charPlace = string[i][j];
//       if (charPlace === " ") {
//         counter++;
//       }
//     }
//     if (!objstr[counter]) {
//       objstr[counter] = [];
//     }

//     objstr[counter].push(string[i]);
//   }
//   return objstr;
// }

// const groupedStrings_1 = groupSpace(strings);
// console.log("Grouped Strings By Spaces:", groupedStrings_1);
// // 🥵 Task 14: group strings by length 🥵
// // TODO: Write a function to group strings by length.
// // The function should return an object where keys are the length of the strings and values are arrays of strings.

// function groupStringsByLength(strings) {
//   let newGroupAcorrdingLength = {};
//   for (let i = 0; i < strings.length; i++) {
//     let lengthString = strings[i].length;
//     if (!newGroupAcorrdingLength[lengthString]) {
//       newGroupAcorrdingLength[lengthString] = [];
//     }
//     newGroupAcorrdingLength[lengthString].push(strings[i]);
//   }
//   return newGroupAcorrdingLength;
// }

// const groupedStrings_2 = groupStringsByLength(strings);
// // console.log("Grouped Strings By Length:", groupedStrings_2);
// // 🥵 Task 15: Capitalize Strings 🥵

// // TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// // Bonus: Capitalize the first letter of each word in the string (split by space)
// function capitalizeStrings(strings) {
//   let stringsBigChar = [];
//   let cher = true;
//   for (let i = 0; i < strings.length; i++) {
//     let newString = "";
//     for (let j = 0; j < strings[i].length; j++) {
//       let charCheck = strings[i][j];
//       if (j === 0 || cher) {
//         newString += strings[i][j].toUpperCase();
//         cher = false;
//       } else if (charCheck === " ") {
//         newString += strings[i][j];
//         cher = true;
//       } else {
//         newString += charCheck;
//       }
//     }
//     stringsBigChar.push(newString);
//   }
//   return stringsBigChar;
// }
// const capitalizedStrings1 = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings1);

// // const strings = [
//   "baba",
//   "my success",
//   "no more lives",
//   "and of session",
//   "good discussion",
// ];

// function capitalizeStrings(strings) {
//   let stringsBigChar = [];

//   for (let i = 0; i < strings.length; i++) {
//     let newString = "";
//     let capitalizeNext = true; // Flag to indicate if the next character should be capitalized

//     for (let j = 0; j < strings[i].length; j++) {
//       let char = strings[i][j];

//       if (j === 0 || capitalizeNext) {
//         // Capitalize the first character of the string or the character after a space
//         newString += char.toUpperCase();
//         capitalizeNext = false; // Reset the flag after capitalizing
//       } else if (char === " ") {
//         newString += char; // Add the space as is
//         capitalizeNext = true; // Set the flag so the next character will be capitalized
//       } else {
//         newString += char; // Add the character as is
//       }
//     }

//     stringsBigChar.push(newString); // Add the updated string to the result array
//   }

//   return stringsBigChar;
// }

// const capitalizedStrings1 = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings1);

// for (let i = 0; i < strings.length; i++) {
//   let newCheckString = "";
//   let charcurrent = true;
//   for (let j = 0; j < strings[i].length; j++) {
//     let char = strings[i][j];
//     if (j === 0 || charcurrent) {
//       newCheckString += char.toUpperCase();
//       charcurrent = false;
//     } else if (char === " ") {
//       newCheckString += char;
//       charcurrent = true;
//     } else {
//       newCheckString += char;
//     }
//   }
//   stringsBigChar.push(newCheckString);
// }
// return stringsBigChar;
// }

// // function capitalizeStringS
