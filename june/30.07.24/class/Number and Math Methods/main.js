// 1. Use `toFixed()` to format the number 3.14159 to 2 decimal places.
//    Hint: `number.toFixed(2)` will round to 2 decimal places.
//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp

//1.
let number = 3.14159;
console.log(number.toFixed(2));

// 2. Convert the number 42 to a string using `toString()`.
//    Hint: `number.toString()` converts a number to a string.
//    [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

//2.
let number1 = 42;
let nhumberNumberToString = number1.toString();
console.log(nhumberNumberToString);

// 3. Use `toPrecision()` to format the number 123.456789 to 5 significant digits.
//    Hint: `number.toPrecision(5)` will format to 5 significant digits.
//    [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)

//3.
let numu = 123.456789;
let newNum = numu.toPrecision(5);
console.log(newNum);

// 4. Parse the string "10" into an integer using `parseInt()`.
//    Hint: `parseInt(string)` converts a string to an integer.
//    [Learn more about parseInt()](https://www.w3schools.com/jsref/jsref_parseint.asp)

//4.
let str = "10";
let StrToNumber = parseInt(str);
console.log(StrToNumber);

// 5. Parse the string "3.14" into a float using `parseFloat()`.
//    Hint: `parseFloat(string)` converts a string to a floating-point number.
//    [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

let str1 = "3.14";
let strToNumber1 = parseFloat(str1);
console.log(strToNumber1);

// 6. Check if the value "Hello" is NaN using `isNaN()`.
//    Hint: `isNaN(value)` returns true if the value is Not-a-Number.
//    [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)

//6.
let dataTypeCheckValue = "hello";
let dataTypeCheck = isNaN(dataTypeCheckValue);
console.log(dataTypeCheck);

// 7. Determine if 100 is a finite number using `isFinite()`.
//    Hint: `isFinite(value)` returns true if the value is a finite number.
//    [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)

//7.
let checkNum = 100;
let checkDo = isFinite(checkNum);
console.log(checkDo);

// 8. Convert the number 255 to a hexadecimal string using `toString()`.
//    Hint: `number.toString(16)` converts to hexadecimal.
//    [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

//8.
let num = 255;
let numToString = num.toString();
console.log(numToString);

// 9. Use `toFixed()` to format the number 0.000001 to 7 decimal places.
//    Hint: `number.toFixed(7)` will show 7 decimal places.
//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

//9.
let numnu = 0.000001;
let newStyleNum = numnu.toFixed();
console.log(newStyleNum);
// 10. Convert the binary string "1010" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 2)` parses a binary string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)

//10.
let str2 = "1010";
let newNum2 = parseInt(str2, 2);
console.log(newNum2);
// 11. Use `toPrecision()` to format the number 0.000123456 to 3 significant digits.
//     Hint: `number.toPrecision(3)` will format to 3 significant digits.
//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)

//11.
let numm = 0.000123456;
let newnumm = numm.toPrecision(3);
console.log(newnumm);

// 12. Check if the result of 0/0 is NaN using `isNaN()`.
//     Hint: Division by zero may result in NaN.
//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)

//12.
let numcheck = 0;
let numcheck1 = 0;
let checkNumber = isNaN(numcheck / numcheck1);
console.log(checkNumber);
// 13. Convert the number 1000000 to exponential notation with 2 decimal places using `toExponential()`.
//     Hint: `number.toExponential(2)` formats to exponential notation.
//     [Learn more about toExponential()](https://www.w3schools.com/jsref/jsref_toexponential.asp)

//13.

// 14. Parse the string "3.14some" into a float using `parseFloat()`.
//     Hint: `parseFloat()` parses until it encounters a non-numeric character.
//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

// 15. Use `toString()` to convert the number 16 to its binary representation.
//     Hint: `number.toString(2)` converts to binary.
//     [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

// 16. Check if Infinity is a finite number using `isFinite()`.
//     Hint: Infinity is not considered a finite number.
//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)

// 17. Use `toFixed()` to format the number 1.23e-5 to 8 decimal places.
//     Hint: `toFixed()` works with very small numbers too.
//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

// 18. Convert the octal string "777" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 8)` parses an octal string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)

// 19. Use `toPrecision()` to format the number 123456.789 to 4 significant digits.
//     Hint: This will result in exponential notation.
//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)

// 20. Check if the string "NaN" is NaN using `isNaN()`.
//     Hint: The string "NaN" is not the same as the value NaN.
//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)

// 21. Convert the number -10 to a string using `toString()`.
//     Hint: `toString()` works with negative numbers too.
//     [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

//21.
let numbConvert = -10;
let newSrt11 = numbConvert.toString();
console.log(newSrt11);

// 22. Use `parseFloat()` to parse the string "1.2e-3" into a number.
//     Hint: `parseFloat()` can handle scientific notation.
//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

//22.
let str4 = "1.2e-3";
let newNum75 = parseFloat(str4);
console.log(newNum75);

// 23. Format the number 1234.5678 to 2 decimal places using `toFixed()`.
//     Hint: This will round the number.
//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

//23.
let numFix = 1234.5678;
let fixNum = numFix.toFixed();
console.log(fixNum);

// 24. Use `isFinite()` to check if the result of 1/0 is finite.
//     Hint: Division by zero results in Infinity.
//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)

//24.
let checnum = 1;
let checnum1 = 0;
let checkk = isFinite(checnum / checnum1);
console.log(checkk);

// 25. Convert the hexadecimal string "FF" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 16)` parses a hexadecimal string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)

//25.
let KindStr = "ff";
let newValue = parseInt(KindStr, 16);
console.log(newValue);
// Remember to test your solutions and experiment with different inputs!
