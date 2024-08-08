// //
// //
// // //
// // // //
// // // //
// // // // // "use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};
// // // // TODO: Write a function to update the person's city
// // // // // function updateCity(person, newCity) {
// // // // // your code here}

// function updateCity(person, newCity) {
//   person.address.city = newCity;
//   return person;
// }

// console.log(updateCity(person, "asdod"));

// // // updateCity(person, "Los Angeles");
// // // console.log("Updated Person:", person);

// // // console.log(updateCity(person, "los angels"));

// // /////////////////////////////////////////////////////

// // // // TODO: Write a function to return an array of student names
// // // // function getStudentNames(students) {
// // // //   // your code here
// // // // }

// let students = [
//   { id: 1, name: "Alice", age: 20 },
//   { id: 2, name: "Bob", age: 22 },
//   { id: 3, name: "Charlie", age: 19 },
// ];

// function getStudentNames(students) {
//   let arrayNamees = [];
//   for (let i = 0; i < students.length; i++) {
//     keyName = students[i].name;
//     arrayNamees.push(i, keyName);
//   }
//   return arrayNamees;
// }
// getStudentNames(students);
// console.log("student name: ", students);

// // // let names = getStudentNames(students);
// // // console.log("Student Names:", names);

// // // TODO: Write a function to find a student by ID
// // function getStudentById(students, id) {
// //   // your code here
// // }

// // // // let student = getStudentById(students, 2);
// // // // console.log("Found Student:", student);

// // function getStudentById(students, idd) {
// //   for (let i = 0; i < students.length; i++) {
// //     let callKeyId = students[i].id;
// //     if (idd === callKeyId) {
// //       return students[i];
// //     }
// //   }
// // }
// // console.log(getStudentById(students, 2));
// // console.log(getStudentById(students, 3));

// // // TODO: Write a function to find a student by ID
// // function getStudentById(students, id) {
// //   for (let i = 0; i < students.length; i++) {
// //     if (students[i].id === id) {
// //       return students[i];
// //     }
// //   }
// //   return null;
// // }

// // // let student = getStudentById(students, 2);
// // // console.log("Found Student:", student);

// // // TODO: Write a function to add a new student to the array
// // function addStudent(students, newStudent) {
// //   // your code here
// // }

// // // addStudent(students, { id: 4, name: "Charlie", age: 19 });
// // // console.log("Updated Students:", students);
// // function toggleAvailability(product) {
// // // /////////////////////////////////////////////////////

// function addStudent(students, newStudent) {
//   students.push(newStudent);
//   return students;
// }
// let newOne = { id: 4, name: "Charlie", age: 21 };
// console.log(addStudent(students, newOne));

// // TODO: Write a function to toggle the product's availability
//   // your code here
// }

// // toggleAvailability(product);
// // console.log("Updated Product:", product);

// function toggleAvailability(product) {
//   product.isAvailable = false;
//   return product;
// }
// console.log(toggleAvailability(product));

// // // TODO: Write a function to update the product's price
// // function updatePrice(product, newPrice) {
// //   // your code here
// // }

// function updatePrice(product, newPrice) {
//   product.price = newPrice;
// //   return product;
// // }
// // console.log(updatePrice(product, 1500));

// // // updatePrice(product, 1500);
// // // console.log("Updated Product:", product);

// // // TODO: Write a function to remove a category from the product
// // function removeCategory(product, category) {
// //   // your code here
// // // }

// let product = {
//   name: "Laptop",
//   price: 1200,
//   isAvailable: true,
//   categories: ["electronics", "computers", "tech"],
// };

// function removeCategory(product, value) {
//   let wayToTheKey = product.categories;
//   for (let i = 0; i < wayToTheKey.length; i++) {
//     if (wayToTheKey[i] === value) {
//       product.categories.splice(i, 1);
//       break;
//     }
//   }
//   return product;
// }
// console.log(removeCategory(product, "tech"));

// // function removeCategory(product, category) {
// //   if (Array.isArray(product.categories)) {
// //     for (let i = 0; i < product.categories.length; i++) {
//       if (product.categories[i] === category) {
//         product.categories.splice([i]);
//       }
//     }
//   }
//   return product;
// }
// console.log(removeCategory(product, "tech"));

// // removeCategory(product, "tech");
// // console.log("Updated Product:", product)
/////////////////////////////////////////////////////

// // // TODO: Write a function to find the most expensive product
// // function findMostExpensiveProduct(products) {
// //   // your code here
// // }

// function expensiveProduct(products) {
//   let expensiveName = "";
//   let maxPrice = -Infinity;
//   for (let i = 0; i < products.length; i++) {
//     let currentPrice = products[i].price;
//     if (currentPrice > maxPrice) {
//       maxPrice = currentPrice;
//       expensiveName = products[i].name;
//     }
//   }
//   return expensiveName;
// }
// console.log(expensiveProduct("most expensive product", products));

// // let expensiveProduct = findMostExpensiveProduct(products);
// // console.log("Most Expensive Product:", expensiveProduct);

// // // TODO: Write a function to return an array of only available product sizes
// // function getAvailableSizes(products) {
// //   // your code here
// // }

// let products = [
//   { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
//   { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
//   { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
// ];

// function getAvailableSizes(products) {
//   let availableSizes = [];
//   for (let i = 0; i < products.length; i++) {
//     let isAvailablePlace = products[i].isAvailable;
//     let sizePlace = products[i].sizes;
//     if (isAvailablePlace === true) {
//       availableSizes.push(sizePlace);
//     }
//   }
//   return availableSizes;
// }
// console.log(getAvailableSizes(products));

// // let sizes = getAvailableSizes(products);
// // console.log("Available Sizes:", sizes);

// // /////////////////////////////////////////////////////

// let student = {
//   name: "Alice",
//   age: 20,
// };

// // // TODO: Write a function to add a new property to the student object
// // function addProperty(student, key, value) {
// //   // your code here
// // }

// function addProperty(student, key, value) {
//   student[key] = value;
//   return student;
// }
// addProperty(student, "job status", "work");
// console.log(student);

// // addProperty(student, "grade", "A");
// // console.log("Updated Student:", student);

// // /////////////////////////////////////////////////////

// // // TODO: Write a function to update a student's grade in a subject
// // function updateStudentGrade(school, studentId, subject, newGrade) {
// //   // your code here
// // }
// let school = {
//   name: "Greenwood High",
//   address: {
//     city: "Springfield",
//     zip: "12345",
//   },
//   students: [
//     { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
//     { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
//   ],
// };
// // function updateStudentGrade(school, studentId, subject, newGrade) {
// //   school.students[studentId - 1].grades[subject] = newGrade;
// // }
// // updateStudentGrade(school, 1, "math", 90);
// // // console.log(school);

// // function updateStudentGrade(school, studentId, subject, newGrade) {
// //   school.students[studentId - 1].grades[subject] = [newGrade];
// // }

// // updateStudentGrade(school, 1, "math", 90);
// // console.log(school);

// // // updateStudentGrade(school, 1, "math", 90);
// // // console.log("Updated School:", school);

// // /////////////////////////////////////////////////////

// // // TODO: Write a function to return an array of only delivered orders
// // function getDeliveredOrders(orders) {
// //   // your code here
// // }
// // // let deliveredOrders = getDeliveredOrders(orders);
// // // console.log("Delivered Orders:", deliveredOrders);

// function getDeliveredOrders(orders, x) {
//   let deliverdArray = [];
//   for (let i = 0; i < orders.length; i++) {
//     keyStatus = orders[i].status;
//     if (keyStatus === x) {
//       deliverdArray.push(orders[i]);
//     }
//   }
//   return deliverdArray;
// }
// console.log(getDeliveredOrders(orders, "delivered"));

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];
// // TODO: Write a function to count the occurrences of each product in the orders
// function countProductOccurrences(orders) {
//   // your code here
// }

function countProductOccurrences(orders) {
  let occurrencesObjects = {};
  for (let i = 0; i < orders.length; i++) {
    kindOfProduct = orders[i].product;
    if (!occurrencesObjects[kindOfProduct]) {
      occurrencesObjects[kindOfProduct] = 1;
    } else {
      occurrencesObjects[kindOfProduct]++;
    }
  }
  return occurrencesObjects;
}
console.log(countProductOccurrences(orders));

// // let productCounts = countProductOccurrences(orders);
// // console.log("Product Counts:", productCounts);
// /*
//   Output:
//   {
//     Laptop: 2,
//     Mouse: 1,
//     Keyboard: 1,
//     Monitor: 1
//   }
//   */
