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

//17.
let grade1 = "d";
let description1;

switch (grade1) {
    case "a": 
    description1 = "very very good";
    break;
    case "b":
    description1 = "very good";
    break;
    case "c": 
    description1 = "good";
    break;
    case "d": 
    description1 = "okay"
    break;
    case "f": 
    description1 = "not good";
    break;
    default: 
    description1 = "not grade";
        break;
}

console.log(description1);

//18.
let number2 = 2;
let Sighn;

if (number > 0) {
Sighn = "positive";    
}else if(number = 0){
Sighn = "zero";
}else if(number < 0){
Sighn = "negative";
}else{
    Sighn = "num not exist";
}

console.log("kind number", Sighn);

//19.
let yearCen = 2100;
let isCenturyLeapYear;

if (yearCen % 400 === 0 && yearCen % 100 === 0) {
isCenturyLeapYear = true;
}else{
    isCenturyLeapYear = false;
}

console.log("its", isCenturyLeapYear, "that this is century year");

//20.
let month5 = 4;
let daysinMonth;

switch (month5) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysinMonth = 31
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysinMonth = 30
    break;
    case 2:
        daysinMonth =28
    break;

    default: daysinMonth = "month dosnt exist";
        break;
}

console.log(daysinMonth);

//21.
let number11 = -2;
let kindnum;
let evorodNumb;
 if (number11 > 0) {
    kindnum = "positive";
 }else if(number11 < 0){ 
    kindnum = "negetive";
 }else{
    kindnum = "zero";
}
 console.log(kindnum);

 if (kindnum === "negetive" || kindnum === "positive" ) {
   if (number11 % 2 === 0){
    evorodNumb = "even";
   }    
 } else {
    evorodNumb = "odd";
 }
 console.log("number:", number11);
 console.log("kind:", kindnum);
 console.log("even or odd:",evorodNumb);

 //22
 let score1 = 100;
 let attenDance = 70;
 let grade2;

 if (score1 >= 80) {
    grade2 = "a";
 } else if(score1 >= 70){
    grade2 = "b";
 }else if(score >= 60){
    grade2 = "c";
 }else if(score1 >= 50){
    grade2 = "d";
 }else{
    grade2 = "f";
 }

if (attenDance < 80) 
    if (grade2 === "a") {
    grade2 = "b";        
    }else if(grade2 === "b"){
        grade2 ="c";
    }else if(grade2 = "c"){
        grade2 = "d";
    }else if(grade2 = "d"){
        grade2 = "f";
    } else {
        "You have to come talk to the manager";
}

console.log("your final grade", grade2);

//23.
let year10 = 2023;
let leapYear;

if (year10 % 400 === 0) {  // i have option to do restriction with opeartor && || 
    leapYear = true;
} else if(year10 % 100 === 0){
    leapYear = false;
}else if(year10 % 4 === 0){
    leapYear = true;
}else{
    leapYear = false;
}
if (leapYear) {
    console.log(year10, "this is leap year");
} else {
    console.log(year10, "this is not leap year");
}

//24.
let age40 = 71;
let isEmployed;

if (age40 >= 70) {
    isEmployed = "retiree";
} else if(age40 < 70 && age40 > 40){
    isEmployed = "Unemployed Adult";
}else if(age40 >= 30 && age40 <= 40){
    isEmployed = "Employed Adult";
}else if(age40 >= 18 && age40 < 30){
    isEmployed = "student";
}else{
    isEmployed = "you live too much";
}
console.log("You are defined as a", isEmployed);
