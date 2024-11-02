//
// sort
const students = [
  { name: "Clara", average: 80 },
  { name: "jenna", average: 92 },
  { name: "Ben", average: 85 },
  { name: "Daniel", average: 85 },
];
students.sort((a, b) => {
  if (b.average === a.average) {
    return a.name.localeCompare(b.name);
  } else {
    return b.average - a.average;
  }
});

console.log(students);
////////

//flat
const numbers = [1, [2, [3, [4, [5]]]]];
//
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);

const sum = flatNumbers.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(sum);

const peoples = [
  { שם: "אליס", גיל: 25 },
  { שם: "בוב", גיל: 30 },
  { שם: "צרלי", גיל: 25 },
];
const peoplesReducing = peoples.reduce((newObj, currentPerson) => {
  if (newObj[currentPerson.גיל]) {
    newObj[currentPerson.גיל].push(currentPerson.שם);
  } else {
    newObj[currentPerson.גיל] = [currentPerson.שם];
  }
  return newObj;
}, {});
console.log(peoplesReducing);
