// let mazda = {
//   inginer: "JAPAN",
// //   color: ["red", "yellow"],
// //   Numberdor: 5,
// // };
// console.log(mazda);

// //1.
// let person = {
//   name: "david",
//   age: 19,
//   isStudent: true,
// };
// console.log(person);

// console.log(person.name, person.age);
// person.isStudent = false;
// console.log(person);

// //2.

// //.create object
// let car = {
//   //function name
//   make: "sevrolet", //let key num and value
//   model: "spark",
//   year: 2017,
// // };
// // console.log(car);
// // console.log(car.make, car.model);
// // car.year = 2018;
// // console.log(car);

// //3.
// let fruit ={
//     name: "banana",
//     color: "yellow",
//     sweetnes: 10,
// };

// // console.log(fruit.name, fruit.sweetnes);

// //4.
// let book = {
//   tittle: "rings of kings",
//   author: "david.strisyain",
//   pages: 435,
// };
// console.log(book);
// console.log(book.tittle, book.author);
// // book.pages += 50;
// // console.log(book);

// //5.
// let animall = {
//   species: "zibera",
//   sound: "nak nak",
//   isWild: true,
// };
// console.log(animall);
// console.log(animall.species, animall.sound);
// animall.isWild = false;
// console.log(animall);

//6.

let car = {
  make: "toyota",
  model: "corola",
  year: 2016,

  clickDetails: function () {
    console.log(
      "detailsCar -",
      "make",
      this.make,
      "model",
      this.model,
      "year",
      this.year
    );
  },
};
car.clickDetails();

console.log(car.model);

car.year = 2017;

// car.dorNumb = 4;
console.log(car);

let bestCar = Object.values(car);
let bestCarsetails = Object.keys(car);

console.log(bestCar);

for (let i = 0; i < bestCarsetails.length; i++) {
  console.log(bestCarsetails[i]);
  console.log(car[bestCarsetails[i]]);
}
