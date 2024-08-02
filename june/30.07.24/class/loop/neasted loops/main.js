// // ////1.

// // function asterrisks(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let line = "";
// //     for (let j = 1; j <= g; j++) {
// //       line += i * j;
// //     }
// //     console.log(line);
// //   }
// // }
// // asterrisks(2);

// // ////2.

// // let count = 1;
// // function counter(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let line = "";
// //     for (let j = 1; j <= g; j++) {
// //       line += count + " ";
// //       count++;
// //     }
// //     console.log(line);
// //   }
// // // }
// // // counter(2);
// // //

// // function asterisks(g) {
// //   for (let i = 1; i <= g; i++) {
// //     let row = "";
// //     for (let j = 1; j <= g; j++) {
// //       row += "* ";
// //     }
// //     console.log(row);
// //   }
// // }
// // asterisks(2);

// let count = 1;
// function numbersFollow(g) {
//   for (let i = 1; i <= g; i++) {
//     let newLine = "";
// //     for (let j = 1; j <= g; j++) {
// //       newLine += count + "  ";
// //       count++;
// //     }
// //     console.log(newLine);
// //   }
// // }
// // numbersFollow(2);

// function triangle(g) {
//   for (let i = 1; i <= g; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }
// triangle(3);

// // //4.

// function indexes(g, f) {
//   for (let i = 0; i < g; i++) {
//     let line = "";
//     for (let j = 0; j < f; j++) {
//       line += i + j;
//     }
//     console.log(line);
//   }
// }
// indexes(3, 3);

//5.

function multiplication(g) {
  for (let i = 1; i <= g; i++) {
    let row = "";
    for (let j = 1; j <= g; j++) {
      row += i * j;
    }
    console.log(row);
  }
}
multiplication(3);
