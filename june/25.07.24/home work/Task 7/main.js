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


//11.
let password = "secret123";
let isLoggedIn;

if (password === "secret123") {
isLoggedIn = true;
}else{
    isLoggedIn = false;
}

console.log(isLoggedIn);

//12.
let month = 9;
let season;

if (month >= 1 && month <= 3){
    season = "winter";
}else if (month > 3 && month <= 6){
season = "spring";
}else if (month > 6 && month <= 9){
    season = "summer";
}else if (month > 9 && month <= 12){
    season = "fall";
}
console.log(season);

//13.
let income = 500000;
let creditScore = 701;
let loanApproved;

if (income > 50000 && creditScore > 700) {
    loanApproved = true;  
}
console.log(loanApproved);

//14.
let age1 = 220;
let discount;

 if (age1 < 18 || age1 > 65){
discount = 0.2;    
 }else{
discount = 0;
 }
 
 console.log(discount);

 //15.
 let number1 =123;
 let inRange;
 
 if (number1 > 1 && number1 < 10){ 
    inRange = true;
 }else{
    inRange = false;
 }

 console.log(inRange);

 //16.
 let dayNamber1 = 4;
 let dayName1;

 switch (dayNamber1) {
    case 1: dayName1 = "sunday";
    break;
    case 2: dayName1 = "monday";
    break;
    case 3: dayName1 = "tuseday"; 
    break;
    case 4: dayName1 = "wednesday";
    break;
    case 5: dayName1 = "thursday";
    break;
    case 6: dayName1 = "friday";
    break;
    case 7: dayName1 = "saterday";
    break;
    default: dayName1 = "invalid day";
        break;
 }
console.log(dayName1);

17.
let grade1 = d;
let description1;

switch (grade1) {
    case a: description1 = "very very good";
    break;
    case b: description1 = "very good";
    break;
    case c: description1 = "good";
    break;
    case d: description1 = "okay"
    break;
    case f: description1 = "not good";
    break;
    default: 
    description1 = "not grade";
        break;
}

console.log(description1);