//////promise practice

// 1. Create a new Promise that resolves with the value "Hello, World!".
// console.log("start");
// const promise = new Promise((resolve) => resolve("hello world"));
// promise.then((res) => console.log(res));

// 2. Create a new Promise that rejects with the value "Error occurred".
// const erPromise = new Promise((_, reject) => reject("dont get"));
// const er = "kjdcnjkn";
// erPromise.catch((err) => console.error("error:", err));

// 3. Write a Promise that resolves after 2 seconds with the value "Resolved!".
// const q3 = new Promise((resolves, reject) =>
//   setTimeout(() => {
//     resolves("resolved");
//   }, 2000)
// );
// q3.then((res) => console.log(res));
// 4. Write a Promise that rejects after 1 second with the value "Rejected!".
// const q4 = new Promise((resolve, reject) =>
//   setTimeout(() => {
//     reject("Rejected!");
//   }, 1000)
// );
// q4.catch((res) => console.error(res));

// 5. Create a Promise that resolves with a given value and log the resolved value using .then().

// const q5 = new Promise((resolve, reject) => {
//   resolve("value");
// });

// q5.then((res) => console.log(res));

// 6. Create a Promise that rejects with a given value and handle the rejection using .catch().

// const q6 = new Promise((resolve, reject) => {
//   reject("ERROR");
// });

// q6.catch((res) => console.error(res));

// 7. Write a Promise that resolves with the value "Hello, World!" and logs "Promise Resolved!" after it resolves.

// const q7 = new Promise((resolve, reject) => {
//   resolve("Hello, World!");
// });

// q7.then((res) => {
//   console.log(res);
//   console.log("Promise Resolved!");
// });

// 8. Write a function that returns a resolved Promise with a given message.
// const FNRandom = (message) => {
//   return new Promise((resolve, reject) => {
//     resolve(message);
//   });
// };
// FNRandom("Hello, World!").then((res) => console.log(res));

// 9. Write a function that returns a rejected Promise with a given error message.

// const FNReject = (errorMessage) => {
//   return new Promise((resolve, reject) => {
//     reject(errorMessage);
//   });
// };

// FNReject("server erroe").catch((res) => console.error(res));

// 10. Create a Promise that resolves after 3 seconds and logs the value "3 seconds passed".
// const q10 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("3 seconds passed");
//   }, 3000);
// });
// q10.then((res) => console.log(res));

// 11. Chain two Promises together where the second Promise resolves with the value of the first Promise plus " and then some".
// const q11 = new Promise((resolve, reject) => {
//   resolve("i come ");
// }).then((res) => {
//   return new Promise((resolve, reject) => {
//     resolve(res + "and then some");
//   });
// });

// q11.then((res) => console.log(res));

// 12. Write a Promise that resolves with an array of numbers and logs the sum of those numbers using .then().
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const q12 = new Promise((resolve, reject) => {
//   resolve(
//     numbers.reduce((calc, num) => {
//       return calc + num;
//     })
//   );
// });

// q12.then((res) => console.log(res));
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const q12 = new Promise((resolve, reject) => {
//   const sum = numbers.reduce((calc, num) => {
//     return calc + num;
//   }, 0);
//   resolve(sum);
// });

// q12.then((res) => console.log(res));

// 13. Create a Promise that rejects if a given number is less than 10 and resolves if it's 10 or greater.
// let number = Math.round(Math.random() * 15);
// console.log(number);

// const q13 = new Promise((resolve, reject) => {
//   if (number >= 10) {
//     resolve("resolve");
//   }
//   reject("reject");
// });

// q13.then((res) => console.log(res)).catch((error) => console.error(error));

// 14. Write a function that returns a Promise which resolves after a given number of milliseconds.
// const fnPromise = (answer, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(answer);
//     }, delay);
//   });
// };

// fnPromise("kjhgf", 4000).then((res) => {
//   console.log(res);
// });

// 15. Write a Promise that resolves with the current date and time.

// const fnPromise = () => {
//   return new Promise((resolve, reject) => {
//     const date = new Date();
//     resolve(date);
//   });
// };

// fnPromise("Hii", 0).then((res) => {
//   console.log(res);
// });

// 16. Use Promise.all() to wait for two Promises to resolve and then log their results.

// const resoP1 = new Promise((resolve) => {
//   resolve("one");
// });
// const resoP2 = new Promise((resolve) => {
//   resolve("two");
// });

// Promise.all([resoP1, resoP2]).then((res) => console.log(res[0] + " " + res[1]));

// 17. Create a Promise that resolves with a user's name and another that resolves with the user's age. Use Promise.all() to wait for both and then log a message "Name: [name], Age: [age]".

// const pro1 = new Promise((resolve, reject) => {
//   resolve("DAVID");
// });

// const pro2 = new Promise((resolve, reject) => {
//   resolve(51);
// });

// Promise.all([pro1, pro2]).then((res) => {
//   console.log(`Name: ${res[0]}, Age: ${res[1]}`);
// });

// 18. Write a function that returns a Promise which resolves with a random number after 1 second.
// let number = Math.round(Math.random() * 100);

// const q18 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(number);
//   }, 3000);
// });

// q18.then((res) => console.log(res));

// 19. Create a Promise that rejects with a specific error message and handle it using .catch() and log the error.
// let message = "you probably have problem server";
// const q19 = new Promise((resolve, reject) => {
//   reject(message);
// });
// q19.catch((res) => console.error(res));

// message = "kjhgfhg";
// console.log(message);

// 20. Write a Promise that resolves with "Success!" and logs "Operation was successful!" using .then().
// const q20 = new Promise((resolve, reject) => {
//   resolve("Success!");
// });

// q20.then((res) => {
//   if (res) {
//     console.log("Operation was successful!");
//   }
// });

// 21. Write a Promise that resolves with "Done!" and always logs "Finished!" using .finally().
// const q21 = new Promise((resoolve, reject) => {
//   resoolve("Done");
// });

// q21
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((er) => {
//     console.error("ERROR", er);
//   })
//   .finally(() => console.log("Finished"));

// 22. Write a function that returns a Promise which resolves with "Data received" after simulating a 2-second network request using setTimeout.
// const proFnc = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Data received");
//   });
// };

// setTimeout(() => {
//   proFnc().then((res) => {
//     console.log(res);
//   });
// }, 3000);

// 23. Write a function that uses Promise.all() to wait for three Promises that resolve with different values and logs all the values once all Promises are resolved.
// const Pone = new Promise((resolve, reject) => {
//   resolve("one");
// });
// const Ptwo = new Promise((resolve, reject) => {
//   resolve("two");
// });
// const PThree = new Promise((resolve, reject) => {
//   resolve("three");
// });
// console.log(Pone);
// console.log(Ptwo);
// console.log(PThree);

// const printAll = () => {
//   Promise.all([Pone, Ptwo, PThree]).then((res) => {
//     res.forEach((r) => {
//       console.log(r);
//     });
//   });
// };
// printAll();

// 24. Write a function that returns a Promise which rejects if a given string is empty and resolves if it is not empty.
// const fun = (message) => {
//   return new Promise((resolve, reject) => {
//     if (message) {
//       resolve(message);
//     } else {
//       reject(message);
//     }
//   });
// };

// fun("baba")
//   .then((res) => {
//     console.log("you good", res);
//   })
//   .catch((er) => {
//     console.error("you empty");
//   });

// 25. Write a Promise that resolves with the square of a given number.
// let number = 100;
// const q25 = new Promise((resolve, reject) => {
//   resolve(Math.sqrt(number));
// });

// q25.then((res) => {
//   console.log(res);
// });

// 26. Create a Promise that resolves with the value of a given number multiplied by 2 after 2 seconds.
// const randomNumber = Math.round(Math.random() * 10);
// console.log(randomNumber);

// const q25P = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(randomNumber * 2);
//   }, 2000);
// });
// q25P.then((res) => {
//   console.log(res);
// });
// 27. Write a function that returns a Promise which resolves with a greeting message for a given name.

// const fnP = (name) => {
//   return new Promise((resolve, reject) => {
//     resolve("Hello" + " " + name);
//   });
// };

// fnP("David").then((res) => {
//   console.log(res);
// });

// 28. Write a Promise that resolves with "File downloaded" after simulating a file download with setTimeout.

// const q28P = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("File downloaded");
//   }, 0);
// });

// q28P.then((res) => {
//   console.log(res);
// });

// // 29. Write a Promise that rejects with "Network error" if a given boolean is false and resolves with "Network success" if true.
// let boolean = false;

// const q29 = new Promise((resolve, reject) => {
//   if (boolean === true) {
//     resolve("Network success");
//   } else {
//     reject("Network success");
//   }
// });

// q29
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((er) => {
//     console.error(er);
//   });

// 30. Write a function that returns a Promise which resolves with "API call successful" after simulating an API call with setTimeout.

// const pFn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("API call successful");
//     });
//   });
// };

// pFn().then((res) => {
//   console.log(res);
// });
