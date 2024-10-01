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
// const strs = ["hello", "world"];
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
// const numbers = [1, 2, 3, 4, 5];
// newNum = numbers.some((number) => {
//   return number > 3;
// });
// console.log(newNum);

//22.
// const numbers = [2, 4, 6, 8, 10];
// const funNumbers = numbers.every((num) => num % 2 === 0);
// console.log(funNumbers);

//23.
// const strts = ["תפוח", "בננה", "דובדבן"];
// const chekLengthFun = strts.some((str) => {
//   return str.length > 6;
// });
// console.log(chekLengthFun);
//24./////////////////////////////////////////////////////////////
// const animalsInEnglish = ["Cat", "Dog", "tlephant"];
// const consonants = "bcdfghjklmnpqrstvwxyz";
// const checkFun = animalsInEnglish.every((str) => {
//   return consonants.includes(str[0].toLowerCase());
// });
// console.log(checkFun);
// const check = animalsInEnglish.every((str) => {
//   return consonants.includes(str.forEach.toLowerCase());
// });
// console.log(check);
// const checkTwo = animalsInEnglish.every((str) => {
//   return str.split("").every((char) => {
//     return consonants.includes(char.toLowerCase());
//   });
// });
// console.log(checkTwo);

//25.
// const boolean = [false, false, true, false];
// const check = boolean.some((bool) => {
//   return bool !== false;
// });
// console.log(check);

//26.
// const numbers = [1, 2, 3, 4, 5];
// const check = numbers.find((num) => {
//   return num > 3;
// });
// console.log(check);

//27.///////////////////////////////
// const numbers = [1, 3, 5, 2, 4, 6];
// const check = numbers.filter((num) => num % 2 === 0);
// console.log(check);

// const checkTwo = numbers
//   .map((num, index) => {
//     return num % 2 === 0 ? index : -1;
//   })
//   .filter((num) => {
//     return num !== -1;
//   });
// console.log(checkTwo);

// for (let i = 0; i < check.length; i++) {
//   console.log(`${check[i]} index: ${checkTwo[i]}`);
// }

//28.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const check = fruits.find((str) => {
//   return str.length > 5;
// });
// console.log(check);

//29.
// const fruits = ["תפוח", "בננה", "דובדבן", "תמר"];
// const check = fruits.findIndex((str) => str === "דובדבן");
// console.log(check);

// //30.
// const numbers = [1, 2, 3, -4, 5, -6];

// const check = numbers.find((num) => num < 0);
// console.log(check);

//31.
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const order = numbers.sort((a, b) => a - b);
// console.log(order);

//32.
// const strts = ["בננה", "תפוחון", "דובדבן", "תפוח", "תמר"];
// const orderStr = strts.sort();
// console.log(orderStr);

//33.
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const orderReverse = numbers.sort((a, b) => b - a);
// console.log(orderReverse);

//34.
// const fruits = ["בננה", "דובדבן", "תפוח", "תמר"];
// const sorto = fruits.sort((a, b) => a.length - b.length);
// console.log(sorto);

//35.
// const students = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
// ];
// const sorto = students.sort((a, b) => a.age - b.age);
// console.log(sorto);

//36.
// const arrayNeasted = [1, [2, 3], [4, [5, 6]]];
// const oredrArray = arrayNeasted.flat(2);
// console.log(oredrArray);

//37.
// const array = [1, [2, [3, [4]]]];
// const order = array.flat(2);
// console.log(order);

//38.
// const numbers = [1, 2, , 4, 5];
// const cleanNumbers = numbers.flat();
// console.log(cleanNumbers);

//39.
// const letters = ["א", ["ב", "ג"], "ד"];
// const order = letters.flat().sort();
// console.log(order);

//40.
// const numbers = [1, [2, [3, [4, [5]]]]];
// const cleanNumbers = numbers.flat(Infinity);
// console.log(cleanNumbers);

//41.
// const letters = ["א", "ב", "ג", "ד"];
// const counterLettert = letters.forEach((char, index) =>
//   console.log(char + "index:" + index)
// );

//42.
// const numbers = [10, 20, 30, 40];
// const order = numbers.map(
//   (number, index) => "value: " + number + " index: " + index
// );
// const numbers = [10, 20, 30, 40];
// const order = numbers.map(
//   (number, index) => `value: ${number} index: ${index}`
// );
// console.log(order);

// //43////////////////////////
// const fruits = ["תפוח", "בננה", "אבטיח", "תמר"];
// const justWithA = fruits.filter((str) => {
//   return str.includes("א");
// });
// console.log(justWithA);

//44.
// const chrs = ["א", "ב", "א", "ג", "ב", "א"];
// const createObj = chrs.reduce((calc, char) => {
//   return calc[char] ? calc[char]++ : (calc[char] = 1), calc;
// }, {});
// console.log(createObj);
// const order = chrs.reduce((calc, char) => {
//   return calc[char] ? calc[char]++ : (calc[char] = 1), calc;
// }, {});
// console.log(order);

//45.
// const strs = ["שלום", "עולם", "גאווה", "סקריפט"];
// const check = strs.some((str) => {
//   return str.includes("ז");
// });
// console.log(check);

//46.
// const numbers = [2, 4, 6, 8];
// const checkAll = numbers.every((num) => {
//   return num % 2 === 0;
// });
// console.log(checkAll);

//47.
// const accounts = [
//   { id: 1, status: "לא פעיל" },
//   { id: 2, status: "פעיל" },
//   { id: 2, status: "פעיל" },
//   { id: 2, status: "פעיל" },
//   { id: 2, status: "פעיל" },
// ];
// const checkActive = accounts.find((account) => {
//   return account.status === "פעיל";
// });
// console.log(checkActive);

//48.
// const numbers = [3, 7, 2, 9, -5];
// const found = numbers.findIndex((num, index) => {
//   return index % 2 === 0 ? num < 0 : num < 0;
// });
// console.log(found);

//49.
// const strts = ["JavaScript", "Python", "Ruby", "Java"];
// const order = strts.sort((a, b) => {
//   return a.length - b.length;
// });
// console.log(order);

//50.
// const arraysodinmantinal = [1, [2, [3]], [4, [5]]];
// const clean = arraysodinmantinal.flat();
// console.log(clean);

//51.

// const chars = ["ש", "ל", "ו", "ם"];
// let string = "";
// const strFun = chars.forEach((str) => {
//   string += str;
// });
// console.log(string);

//52.
// const numbers = [1, 2, 3, 4, 5];
// const AddToNum = numbers.map((num) => {
//   return num + 10;
// });
// console.log(AddToNum);

//53.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chek = numbers.filter((num) => num % 3 === 0);
// console.log(chek);

//54.
// const strs = ["קצר", "בינוני", "הכי ארוך", "ארוך יותר"];
// const longest = strs.reduce((calc, str) => {
//   return calc.length < str.length ? str : calc;
// }, "");
// console.log(longest);

//55.
// const numbers = [1, 3, 5, 7, 9];
// const check = numbers.some((num) => {
//   return num % 2 === 0;
// });
// console.log(check);

//56.
// const strs = ["תפוח", "תפ", "תפוז"];
// const check = strs.every((str) => {
// return str[0] === "ת" && str[1] === "פ";
// });
// console.log(check);

// const strs = ["תפוח", "תפ", "תפוז"];
// const check = strs.every((str) => {
//   return str.startsWith("תפ");
// });
// console.log(check);

//57.
// const toDoLIst = [
//   { id: 1, completed: false },
//   { id: 2, completed: true },
// ];
// const check = toDoLIst.find((toDo) => {
//   return toDo.completed === true;
// });
// console.log(check);

//58.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const check = fruits.findIndex((fruit) => fruit === "בננה");
// console.log(check);

//59.
// const students = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
// ];
// const checks = students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(checks);
// const create = students.map((student) => student.name);
// console.log(create);
// const orderCreat = create.sort();
// console.log(orderCreat);

//60.
// const array4Diomen = [1, [2, 3], [4, [5, 6]]];
// const order = array4Diomen.flat(2);
// console.log(order);

//61.
// let str = "שלום";
// [...str].forEach((char) => console.log(char));
// str.split("").forEach((char) => console.log(char));

//62.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const firstLetter = fruits.map((fruit) => fruit[0]);
// console.log(firstLetter.sort());

//63.
// const letters = ["א", "אב", "אבג", "אבגד"];
// const fustThreeLetters = letters.filter((str) => str.length >= 3);
// console.log(fustThreeLetters);

//64.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const sum = fruits.reduce((calc, str) => calc + str.length, 0);
// console.log(sum);

//65.
// const greeting = ["שלום", "עולם", "גאווהסקריפט"];
// const check = greeting.some((str) => str.length > 10);
// console.log(check);

//66.
// const someNumbers = [10, 20, 30, 40, 50];
// const check = someNumbers.every((num) => num > 5);
// console.log(check);

//67.
// const words = ["ספר", "דלת", "חלוון"];
// const find = words.find((str) => str.includes("וו"));
// console.log(find);

//68.
// const numbers = [5, 10, 15, 20];
// const found = numbers.findIndex((num) => num >= 10);
// console.log(found);

//69.
// const letters = ["אאא", "בב", "ג", "א"];
// const order = letters.sort();
// console.log(order);

//70.
// const arrayDiomentional = [1, [2, [3, [4]]]];
// const order = arrayDiomentional.flat(3);
// console.log(order);

//71.
// const numbers = [1, 4, 9, 16];
// const newA = [];
// numbers.forEach((num) => newA.push(Math.sqrt(num)));
// console.log(newA);

//72.
// const letters = ["א", "ב", "ג"];
// const newLetters = letters.map((char) => char + char);
// const newLetters = letters.map((char) => char.repeat(2));
// const newLetters = letters.map((char) => [char, char]).flat(2);
// console.log(newLetters);

//73.
// const numbers = [5, 10, 15, 20, 25];
// const newArray = numbers.filter((num) => num <= 20 && num >= 10);
// console.log(newArray);

//74.
// const lettChar = [{ א: 1 }, { ב: 2 }, { ג: 3 }];
// const newObj = lettChar.reduce((calc, current) => {
//   return { ...calc, ...current };
// });
// console.log(newObj);

//75.
// const charNum = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const check = charNum.some((obj) => obj.y);
// console.log(check);

//76.
// const englishLetters = "אבגדהוזחטיכלמנסעפצקרשתףץךם";
// const numbers = "0123456789";
// const charNum = ["א1", "ב2", "ג3"];
// const check = charNum.every((str) => {
//   const charOn = str[0];
//   const charse = str[1];
//   console.log(charOn);

//   return numbers.includes(charse) && englishLetters.includes(charOn);
// });
// console.log(check);

//77.
// const objects = [{ מחיר: 60 }, { מחיר: 40 }, { מחיר: 70 }];
// const findPricw = objects.find((obj) => obj.מחיר < 50);
// console.log(findPricw);

//78.
// const str = [1, "", true, 0, null, "שלום"];
// const found = str.findIndex((some) => !some);
// console.log(found);

//79.
// const numbers = [3.14, 2.71, 1.41, 1.73];

// const newN = numbers.map((num) => Math.round(num));
// console.log(newN.sort());

// const order = numbers.sort((a, b) => Math.round(a) - Math.round(b));
// console.log(order);

//80.
// const strs = ["א", ["ב", ["ג"]]];
// const clesn = strs.flat(Infinity);
// console.log(clesn);

//81.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArrNum = numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);
// console.log(newArrNum);

//82.//////////////////////////////////////////
// const stusents = [
//   { שם: "אליס", גיל: 25 },
//   { שם: "בוב", גיל: 30 },
//   { שם: "צרלי", גיל: 25 },
// ];

// const shdbf = stusents.reduce((calc, obCurrent) => {
//   !calc[obCurrent.גיל]
//     ? (calc[obCurrent.גיל] = [obCurrent])
//     : calc[obCurrent.גיל].push(obCurrent);
//   return calc;
// }, {});
// console.log(shdbf);

//83.
// function debounce(fn, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// function greeting() {
//   console.log("hi");
// }
// function bye() {
//   console.log("bi");
// }
// const arrays = [greeting, bye];
// arrays.forEach((arr, index) => {
//   if (index === 0) {
//     const play = debounce(arr, 1000);
//     play();
//   }
//   if (index === 1) {
//     const play = debounce(arr, 2000);
//     play();
//   }
// });

//84.
