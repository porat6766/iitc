//1.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//2.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//3.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//4.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//5.
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//6.
for (let i = 0; i <= 15; i += 3) {
  console.log(i);
}

//7.
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

//8.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//9.
for (i = 10; i >= 0; i -= 2) {
  console.log(i);
}

//10.
for (let i = 5; i <= 25; i += 5) {
  console.log(i);
}

//11.
let sighn = "";
for (let i = 0; i < 5; i++) {
  sighn = "*";
  console.log(sighn);
}

//12.
let greet;
for (let i = 0; i <= 2; i++) {
  greet = "Hello";
  console.log(greet);
}

//13.
let sighn1;
for (let i = 1; i <= 3; i++) {
  sighn1 = ` ${i} ! `;
  console.log(sighn1);
}

//14.
let char = ["a", "b", "c", "d", "e"];
for (let i = 0; i < char.length; i++) {
  console.log(char[i]);
}

//15.
let prints = " ";
for (let i = 1; i <= 4; i++) {
  prints += 2;
  if (i < 4) {
    prints += " ";
  }
}
console.log(prints);

//16.
let num = [1, 2, 3, 4, 5];
for (let i = 0; i <= 4; i++) {
  console.log(num[i]);
}

//17.
let array = ["a", "b", "c", "d"];
for (let i = 0; i <= 3; i++) {
  console.log(array[i]);
}

//18.
let array1 = [10, 20, 30, 40, 50];
for (let i = 0; i <= 4; i++) {
  console.log(array1[i]);
}

//19.
let array3 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i <= 5; i += 2) {
  console.log(array3[i]);
}

//20.
let array4 = ["red", "green", "blue"];
for (let i = 0; i < array4.length; i++) {
  console.log(`color : ${array4[i]}`);
}

//21.
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

//22.
let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(`the product is : ${product}`);

//23.
let array5 = [1, 2, 3, 4, 5, 6, 7, 8];
let enenNumber = 0;
for (let i = 0; i < array5.length; i++) {
  if (array5[i] % 2 === 0) {
    enenNumber++;
  }
}
console.log(enenNumber);

//23.
let array6 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount1 = 0;
for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 === 0) {
    evenCount1++;
  }
}
console.log(`numb of even number; ${evenCount1}`);

//24.
let arra = [10, 5, 8, 12, 3];
let largest = arra[0];
for (let i = 1; i < arra.length; i++) {
  if (arra[i] > largest) {
    largest = arra[i];
  }
}
console.log(largest);

//25.
let sum33 = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum33 += i;
  }
}

//26.
let l = 3;

for (let i = 1; i <= l; i++) {
  let line = "";

  for (let k = 1; k <= l - i; k++) {
    line += " ";
  }
  for (let f = 1; f <= i; f++) {
    line += "*";
  }
  console.log(line);
}

// let l = 3;

// for (let i = 1; i <= l; i++) {
//   let line = "";

//   // הוספת רווחים
//   for (let k = 1; k <= l - i; k++) {
//     line += " ";
//   }

//   // הוספת כוכבים
//   for (let f = 1; f <= i; f++) {
//     line += "*";
//   }

//   // הדפסת השורה
//   console.log(line);
// // }

//27.
let lin = 3;
for (let i = 0; i < lin; i++) {
  let spaceLine = "";
  for (let s = 0; s < 3; s++) {
    spaceLine += "*";
  }
  console.log(spaceLine);
}

// // Number of rows and columns in the grid
// const size = 3;

// // Outer loop for each row
// for (let i = 0; i < size; i++) {
//   let row = '';

//   // Inner loop for each column
//   for (let j = 0; j < size; j++) {
//     row += '*'; // Add an asterisk to the current row
//   }

//   // Print the constructed row
//   console.log(row);
// }

//28.
let linSp = 3;

for (let i = 0; i <= linSp; i++) {
  discrLine = "";
  for (let n = 1; n <= i; n++) {
    discrLine += n;
  }
  console.log(discrLine);
}

//29.
let linMul = 4;

for (let i = 1; i <= linMul; i++) {
  let lineMult = "";
  for (let n = 1; n <= linMul; n++) {
    lineMult += i * n + "\t";
  }
  console.log(lineMult);
}

//30.
let lineun = 3;

for (let i = 1; i <= lineun; i++) {
  let discrLine1 = "";
  for (let n = 1; n <= i; n++) {
    discrLine1 += n;
  }
  console.log(discrLine1);
}
