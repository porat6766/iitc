//1.
// console.log("Start");
// console.log("Middle");
// console.log("End");

//2.
// console.log("Start");
// setTimeout(() => console.log("End"), 2000);

//3.
// setTimeout(() => console.log("Waiting..."), 2000);

//4.
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

//5.
// for (let i = 1; i <= 3; i++) {
//   let time = 1000 * i;
//   setTimeout(() => {
//     console.log(i);
//   }, time);
// }

//6.

//////////////
//////////////////callback function
//////////////

//2.
// const excutgreet = (name, cb) => {
//   cb(name);
// };
// const cbGreeting = (name) => {
//   console.log("Hello " + name);
// };
// excutgreet("Porat", cbGreeting);

//3.
// console.log("lkhkjg");
// // console.error("lkhkjg");
