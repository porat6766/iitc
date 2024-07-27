//1.
let age = 20;
let canVote;
if (age >= 18) {
    canVote = true;
}else{
    canVote = false;
}

console.log(canVote); 

//2.
let temperature = -5;
let weather;
if (temperature < 0) {
    weather = "freezing";
}else{
    weather = "not freezing";
}

console.log(weather);

//3.
let score = 70;
let result;

if (score >= 60) {
    result = "pass";
}else{"fail"}

console.log(result);

//4.
let grade = 90;
let letterGrade;

if (grade >= 90) {
    letterGrade = "a";
}else if (grade >= 80){
    letterGrade ="b";
}else{
letterGrade = "c";
}
 console.log(letterGrade);

 //5.
 let number = 8;
 let isEven;

 if (number % 2 === 0) {
    isEven = true;
    
 }else{
    isEven = false;
 }
  console.log(isEven);

  //6.
  let year = 2028;
  let isLeapYear;

  if (year % 4 === 0) {
    isLeapYear = true;
  }else{
    isLeapYear = false;
  }

   console.log(isLeapYear);

   //7.
   let hour = 10;
   let period;

if (hour < 12) {
    period = "am";
}else{
    period = "pm";
}

console.log(period);

//8.
let dayNamber = 1;
let dayName;

if (dayNamber === 1) {
    dayName = "sunday"
}else if(dayNamber === 2) {
dayName = "monday";
}else if(dayNamber === 3) {
dayName = "Tuesday";
}else if(dayNamber === 4) {
dayName = "wednesady"
}else if(dayNamber === 5) {
    dayName = " thursday"
}else if(dayNamber === 6) {
    dayName = "friday";
}else if(dayNamber === 7) {
    dayName ="saturday";
}else{
dayName = "Day does not exist";
}

console.log(dayName);

//9.
let name = "";
let hasName;

if (name === "") {
    hasName = false;
}else{
    hasName = true;
}

console.log(hasName);

//10.
let amount = 1001;
let shipping;

if (amount > 1000) {
    shipping = 0;
}else{
    shipping = 5;
}

console.log(shipping);


