// // // let sum = 0;
// // // const array = [2, 4, 6, 8];
// // // // const elnumbers = document.querySelector(".numbers");
// // // const elnumbers = document.createElement("ol");
// // // array.forEach((number) => {
// // //   const elli = document.createElement("li");
// // //   sum += number ** 2;
// // //   elli.innerText = sum;
// // //   elnumbers.appendChild(elli);
// // // });
// // // const docu = document.querySelector("body");
// // // docu.appendChild(elnumbers);
// // //

// // // const numbers = [2, 4, 6];
// // // const dubleNumbers = numbers.map((number) => {
// // //   returnnumber * 2;
// // // });

// // ////////////////////
// // // const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // // let passwords = [
// // //   "12345", // 5 תווים
// // //   "password123", // 11 תווים
// // //   "admin", // 5 תווים
// // //   "myp@ssw0", // בדיוק 8 תווים
// // //   "letmein", // 7 תווים
// // //   "qwerty", // 6 תווים
// // // ];

// // // const oneEight = passwords.some((password) =>
// // // if (password.length >= 8) {
// // //     password.forEach(element => {

// // //     });
// // // }
// // // );
// // // console.log(oneEight);
// // ///////////////
// // ///////////////
// // // const products = [
// // //   { name: "Laptop", price: 4000, quantity: 10 },
// // //   { name: "Smartphone", price: 2000, quantity: 5 },
// // //   { name: "Headphones", price: 150, quantity: 0 },
// // //   { name: "Keyboard", price: 100, quantity: 3 },
// // //   { name: "Smartwatch", price: 1800, quantity: 0 },
// // // ];
// // // let productPrice = 0;
// // // const first = products.find((product) => product.quantity === 0);
// // // const second = products.findIndex((product) => product.price > product.price);
// // // console.log(first);
// // // let price = 0;
// // // const findeexpe = function () {
// // //   for (let i = 0; i < products.length; i++) {
// // //     const product = products[i];
// // //     if (price < product.price) {
// // //       price = product.price;
// // //     }
// // //   }
// // //   return price;
// // // };
// // // console.log(findeexpe());
// // /////
// // const students = [
// //   { name: "David", averageGrade: 85 },
// //   { name: "Sara", averageGrade: 90 },
// //   { name: "Michael", averageGrade: 85 },
// //   { name: "John", averageGrade: 75 },
// //   { name: "Anna", averageGrade: 90 },
// //   { name: "Ben", averageGrade: 95 },
// // ];

// // // const oredrByHigherAvarage = students.sort((a, b) => {
// // //   if (b.averageGrade !== a.averageGrade) {
// // //     return b.averageGrade - a.averageGrade;
// // //   } else {
// // //     return a.name.localeCompare(b.name);
// // //   }
// // // });
// // // console.log(oredrByHigherAvarage);

// // // const order = students.sort((a, b) => {
// // //   b.averageGrade - a.averageGrade;
// // //   if (b.averageGrade === a.averageGrade) {
// // //     return a.name.localeCompare.b.name;
// // //   }
// // // });
// // // console.log(order);

// // const order = students.sort((a, b) => {
// //   if (a.averageGrade !== b.averageGrade) {
// //     return b.averageGrade - a.averageGrade;
// //   } else {
// //     return a.name.localeCompare(b.name);
// //   }
// // });
// // console.log(order);

// // let sum = 0;
// // const numbers = [1, 2, 3];
// // numbers.forEach((num) => (sum += num ** 2));
// // console.log(sum);
// // const ul = document.querySelector(".list");
// // const strt = ["1", "2", "3"];
// // const newA = strt.map((str) => {
// //   return +str;
// // });
// // newA.forEach((element) => {
// //   const elnewli = document.createElement("li");
// //   elnewli.innerText = element ** 2;
// //   ul.appendChild(elnewli);
// // });
// // console.log(newA);
// const englishLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const passwords = [
//   "hF5@",
//   "P2#x7T",
//   "4Lf$1j",
//   "R9*kZ",
//   "C7%q3U",
//   "3vW&m",
//   "n2#X6z",
//   "X1g$W8o9!",
// ];
// const check = passwords.some((str) => {
//   let itsALettesr = false;
//   let itsNumbers = false;
//   for (const char of str) {
//     itsALettesr = englishLetters.includes(char) ? true : itsALettesr;
//     itsNumbers = numbers.includes(char) ? true : itsNumbers;
//   }
//   return str.length > 8 && itsALettesr && itsNumbers;
// });
// console.log(check);
