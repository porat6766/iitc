// const numbers = [1, 2, 3, 4, 5];
//1.
// numbers.forEach((number) => console.log(number));
//2.
// numbers.forEach((number) => console.log(number * 2));
//3.
// numbers.forEach(function (number) {
//   console.log(number ** 2);
// });
//4.

//create varieble in name sum and function that doing add to him and log
// let sum = 0;
// numbers.forEach((number) => {
//   sum += number;
// });

// console.log(sum);
// //reduce way
// const sumReduce = numbers.reduce((sum, number) => (sum += number));
// console.log(sumReduce);
// //5.like 4
// const typsOfStr = ["Hello", " ", "World", "!"];
// let whole = "";
// typsOfStr.forEach((str) => (whole += str));
// console.log(whole);
// //
// const all = typsOfStr.reduce((all, str) => {
//   return all + str;
// });
// console.log(all);
//6.

// const newArrayNumbers = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(newArrayNumbers);
// console.log(numbers);

//7.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const arrayOfLengthFruits = fruits.map((fruit) => fruit.length);
// console.log(arrayOfLengthFruits);

// console.log(fruits.map((fruit) => fruit.length));

//8.
// const numbers = [1, 4, 9, 16, 25];

// const newArray = numbers.map((number) => {
//   return Math.sqrt(number);
// });
// console.log(newArray);

//9.
// const strs = ["שלום", "עולם"];
// const newArray = strs.map((str) => {
//   return str.toUpperCase();
// });
// console.log(newArray);

//10.
// const booleans = [true, false, true];
// const newBoolean = booleans.map((boole) => {
//   return !boole;
// });
// console.log(newBoolean);

//11.
// const numbers = [1, 2, 3, 4, 5, 6];
// const newArray = numbers.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newArray);

//12.
// const strings = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
// const newArray = strings.filter((str) => {
//   return str.length > 5;
// });
// console.log(newArray);

//13.
// const numbers = [5, 10, 15, 20, 25];
// const newArray = numbers.filter((num) => {
//   return num > 10;
// });
// console.log(newArray);

//14.
// const fruits = ["תפוח", "בננה", "תפוז", "דובדבן"];
// const newArraySortByFirstChar = fruits.filter((fruit) => {
//   return fruit[0] === "ת";
// });
// console.log(newArraySortByFirstChar);

//15.
// const numbers = [1, 2, 3, 4, 5, 6];
// const numberPairIndex = numbers.filter((num, index) => {
//   if (index % 2 === 0) {
//     return num;
//   }
// });
// console.log(numberPairIndex);

//16.
// const numbers = [1, 2, 3, 4, 5];
// const sumnumbers = numbers.reduce((sumo, num) => {
//   return sumo + num;
// });
// console.log(sumnumbers);

//17.
// const numbers = [1, 2, 3, 4, 5];
// const sumDouble = numbers.reduce((calc, num) => {
//   return calc + num ** 2;
// });
// console.log(sumDouble);

//18.
// const numbers = [10, 5, 15, 20, 25];
// const biggerNum = numbers.reduce((current, num) => {
//   return current > num ? current : num;
// });
// console.log(biggerNum);
// //
// const smallerNum = numbers.reduce((current, num) => {
//   return current < num ? current : num;
// });

// console.log(smallerNum);

//19.
// const strs = ["שלום", " ", "עולם", "!"];
// const whole = strs.reduce((calc, str) => {
//   return calc + str + " ";
// });

// console.log(whole);

//20.
// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 2, 8];
// const counter = numbers.reduce((calc, num) => {
//   return calc[num] ? ++calc[num] : (calc[num] = 1), calc;
// }, {});
// const counter = numbers.reduce((calc, current) => {
//   return calc[current] ? calc[current]++ : (calc[current] = 1), calc;
// }, {});
// console.log(counter);
// const obj = {};
// const sjdhc = function () {
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (obj[number]) {
//       obj[number]++;
//     } else {
//       obj[number] = 1;
//     }
//   }
//   //   return obj;
// };
// sjdhc();
// console.log(obj);

//21.
