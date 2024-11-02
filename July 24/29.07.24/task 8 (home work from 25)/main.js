//1.
function greet(massage) {
  console.log(massage);
}
greet("are you learn? ");

//2.
function square(number) {
  console.log((square = number * number));
}
square(4);

//3.
function isEven(number) {
  console.log(number % 2 === 0);
}
isEven(4);

//4.
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("yakov ", "mizrahi"));

//5.
function sumTwo(number1, number2) {
  return number1 + number2;
}
console.log(sumTwo(10, 15));

//6.
function multiply(number1, number2) {
  return number1 * number2;
}
console.log(multiply(6, 5));

//7.
function greetPerson(namePerson) {
  return "Hello, " + namePerson + "!";
}
console.log(greetPerson("david"));

//8.
function getAbsoluteValue(number) {
  if (number < 0) {
    return -number;
  } else {
    return number;
  }
}
console.log(getAbsoluteValue(-62));

//9.

function calculateAverage(number6, number7) {
  return (number6 + number7) / 2;
}
console.log(calculateAverage(6, 4));

//10.
function convertToUppercase(params) {
  return params.toUpperCase();
}
console.log(convertToUppercase("params"));

//11.
function isPositive(numb) {
  if (numb > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(0));

//12.
function getFirstChar(str) {
  return str.charAt(0);
}
console.log(getFirstChar("david"));

//13.
function areaOfRectangle(height, width) {
  return height * width;
}
console.log(areaOfRectangle(3, 76));

//14.
function remainderDivision(numb1, numb2) {
  return numb1 % numb2;
}
console.log(remainderDivision(90, 30));

//15.
function logType(kindType) {
  return typeof kindType;
}
console.log(logType(23));

//16.
function invertBoolean(boole) {
  return !boole;
}
console.log("you are a men -");
console.log(invertBoolean(false));

//17.
function concatenateStrings(str1, str2) {
  return str1 + str2;
}
console.log(concatenateStrings("Hello ", "David"));

//18.
function findSmaller(number1, number2) {
  if (number1 > number2) {
    return number2;
  } else if (number1 < number2) {
    return number1;
  }
}
console.log(findSmaller(1, 3));

//19.
function greetWithDefault(name = "Guest") {
  if (name === "") {
    name = "Guest";
  }
  return "HELLO " + name;
}

console.log(greetWithDefault(""));
console.log(greetWithDefault("ISRAEL"));

//20.
function isLongString(str) {
  if (str.length > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isLongString("popcorenitsgoos"));
