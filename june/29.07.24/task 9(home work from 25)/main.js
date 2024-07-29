//1.
function getstringlength(str) {
  return str.length;
}

console.log(getstringlength("fridam"));

//2.
function bigUpper(str) {
  return str.toUpperCase();
}
console.log(bigUpper("salomon"));

//3.
function smallupper(str) {
  return str.toLowerCase();
}
console.log(smallupper("DAVID"));

//4.
function charactersPlace(str, index) {
  return str.charAt(index);
}
console.log(charactersPlace("slomo", 3));

//5.
function cutWord(str, index, index1) {
  return str.substring(index, index1);
}
console.log(cutWord("drakulla", 1, 4));

//6.
function rep(str, str1, relaceWord) {
  return str.replace(str1, relaceWord);
}
console.log(rep("visit microsoft", "m", "dar"));

//7.
function placeWhiteSpace(str1) {
  return str1.trim();
}
console.log(placeWhiteSpace("    david   "));

//8.
function chekCaracters(str, value) {
  return str.startsWith(value);
}
console.log(chekCaracters("david salom", "david"));

//9.
function chekCaracters1(str, value) {
  return str.endsWith(value);
}
console.log(chekCaracters1("ma nisma", "nisma"));

//10.
function strPlace(str, index) {
  return str.indexOf(index);
}
console.log(strPlace("men its like", "like"));

//11.
function splitString(str, partCat) {
  return str.split(partCat);
}
console.log(splitString("hello, david, world", ","));

//12.
function reapetStr(str, numBack) {
  return str.repeat(numBack);
}
console.log(reapetStr("salomon ", 3));

//13.
function conectString(str, str1) {
  return str.concat(str1);
}
console.log(conectString("haim ", "yameleh"));

//14.
function padsString(str, lenegh, char = "") {
  return str.padEnd(lenegh, char);
}
console.log(padsString("hello brother", 25, "@"));

//15.
function extractFirstNChars(inputString, n) {
  return inputString.slice(0, n);
}
console.log(extractFirstNChars("string", 4));

//16.
function SWITH1(str, str1, str2) {
  return str.replace(str1, str2);
}
console.log(SWITH1("hellosmall world", "hello", "big/"));

//17
function chekSearch(str, value) {
  return str.includes(value);
}
console.log(chekSearch("david haham", "s"));

//18.
function lengthStr(str) {
  return str.length;
}
console.log(lengthStr("baby sitter"));

//19.
function chekLong(str) {
  return str.length === 0;
}
console.log(chekLong(""));

//20.
function sliceString(str, index) {
  return str.slice(index);
}
console.log(sliceString("salam halikom", 2));
