// "use strict";

// // Initial Data
// const student = {
//   name: "Jane",
//   age: 18,
//   scores: {},
// };

// // const products = [
// //   { name: "Tablet", price: 300, categories: ["electronics", "gadgets"] },
// //   { name: "Shoes", price: 150, categories: ["clothing"] },
// //   { name: "Headphones", price: 100, categories: ["electronics", "audio"] },
// //   { name: "Book", price: 20, categories: ["books", "education"] },
// // ];

// // 😅 Easy Task 1: Update Student Name 😅
// // TODO: Write a function to update the student's name (You can mutate the original object)
// function updateName(student, newName) {
//   // your code here
//   student.name = newName;
// }

// updateName(student, "Emma");
// console.log("Updated Student:", student);

// // 😅 Easy Task 2: Add Product Price 😅
// // TODO: Write a function to add a price to the product (You can mutate the original object)
// function addPrice(product, price) {
//   // your code here
//   product.price = price;
// }

// addPrice(products[0], 350);
// console.log("Updated Product:", products[0]);

// // 😅 Easy Task 3: Check if Student is Adult 😅
// // TODO: Write a function to check if the student is 18 or older (return true if yes, false otherwise)
// function isStudentAdult(student) {
//   // your code here
//   if (student.age >= 18) {
//     return true;
//   }
//   return false;
// }

// const isAdult = isStudentAdult(student);
// console.log("Is Student Adult:", isAdult);

// // 🙂 Medium Task 4: Find Cheapest Product 🙂
// // TODO: Write a function to find the product with the lowest price
// function findCheapestProduct(products) {
//   // your code here
//   let cheapestProducto;
//   let lowPrice = products[0].price;
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     if (product.price < lowPrice) {
//       lowPrice = product.price;
//       cheapestProducto = product;
//     }
//   }
//   return cheapestProducto;
// }

// const cheapestProduct = findCheapestProduct(products);
// console.log("Cheapest Product:", cheapestProduct);

// // 🙂 Medium Task 5: Count Products Under a Certain Price 🙂
// // TODO: Write a function to count the number of products below a specified price
// function countProductsUnderPrice(products, priceLimit) {
//   // your code here
//   let counter = 0;
//   products.forEach((product) => {
//     if (product.price < priceLimit) {
//       counter++;
//     }
//   });
//   return counter;
// }

// const countUnder50 = countProductsUnderPrice(products, 50);
// console.log("Products under 50:", countUnder50);

// // 🙂 Medium Task 6: Add Score to Student 🙂
// // TODO: Write a function to add a score to the student for a given subject (You can mutate the original object)
// function addScore(student, subject, score) {
//   // your code here
//   student.scores[subject] = score;
// }

// addScore(student, "math", 90);
// console.log("Updated Student:", student);

const products = [
  { name: "Tablet", price: 300, categories: ["electronics", "gadgets"] },
  { name: "Shoes", price: 150, categories: ["clothing"] },
  { name: "Headphones", price: 100, categories: ["electronics", "audio"] },
  { name: "Book", price: 20, categories: ["books", "education"] },
];

// 🥵 Hard Task 7: Get Products by Multiple Categories 🥵
// TODO: Write a function to get products that belong to all provided categories
function getProductsByCategories(products, categorieso) {
  // your code here
  let arrayCategory = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productsCategories = product.categories;
    for (let j = 0; j < productsCategories.length; j++) {
      const productsCategory = productsCategories[j];
    }
    for (let j = 0; j < categorieso.length; j++) {
      const currentcategorieso = categorieso[j];
    }
    if (productsCategory === currentcategorieso) {
      arrayCategory.push(product);
    }
  }
  return arrayCategory;
}

const electronicsAndAudio = getProductsByCategories(products, [
  "electronics",
  "audio",
]);
console.log("Products in Electronics and Audio:", electronicsAndAudio);

// 🥵 Hard Task 8: Calculate Total Price of Products 🥵
// TODO: Write a function to calculate the total price of all products
function calculateTotalPrice(products) {
  // your code here
}

// const totalPrice = calculateTotalPrice(products);
// console.log('Total Price of Products:', totalPrice);

// 🥵 Hard Task 9: Capitalize Product Names 🥵
// TODO: Write a function to capitalize the first letter of each product name (return a new array)
function capitalizeProductNames(products) {
  // your code here
}

// const capitalizedProductNames = capitalizeProductNames(products);
// console.log('Capitalized Product Names:', capitalizedProductNames);
