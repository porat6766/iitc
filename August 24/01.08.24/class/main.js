// let freqcbject = {one: "sdvs"};

// function countfreq(str) {
//   for (let i = 0; i < str.length; i++) {
//     //console.log("scaning letter *" + str[i] + "*");
//     if (!freqcbject[str[i]]) {
//       for (let j = 0; j < str.length; j++) {
//         //console.log(`scaning letter ${str[i]} on ${str[j]}`);
//         if (str[i] === str[j]) {
//           if (!freqcbject[str[i]]) {
//             freqcbject[str[i]] = 1;
//           } else {
//             freqcbject[str[i]]++;
//           }
//         }
//       }
//     }
//   }
//   console.log(freqcbject);
// // }
// // countfreq("hefvdeverfefd");

// let objectSameCheck = {};

// function checkChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!objectSameCheck[str[i]]) {
//       for (let j = 0; j < str.length; j++) {
//         if (str[i] === str[j]) {
//           if (!objectSameCheck[str[i]]) {
//             objectSameCheck[str[i]] = 1;
//           } else {
//             objectSameCheck[str[i]]++;
//           }
//         }
//       }
//     }
//   }
// //   console.log(objectSameCheck);
// // }
// // checkChar("hello");

// let checkCountObject = {};

// function checkChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!checkCountObject[str[i]]) {
//       for (let j = 0; j < str.length; j++) {
//         if (str[i] === str[j]) {
//           if (!checkCountObject[str[i]]) {
//             checkCountObject[str[i]] = 1;
//           } else {
//             checkCountObject[str[i]]++;
//           }
//         }
//       }
//     }
//   }
//   console.log(checkCountObject);
// }
// checkChar("sason");

let checkPoint = {};
function funChek(str) {
  for (let i = 0; i < str.length; i++) {
    if (!checkPoint[str[i]]) {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          if (!checkPoint[str[i]]) {
            checkPoint[str[i]] = 1;
          } else {
            checkPoint[str[i]]++;
          }
        }
      }
    }
  }
  console.log(checkPoint);
}
funChek("sason");
