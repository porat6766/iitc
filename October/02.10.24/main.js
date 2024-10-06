//
// sort
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
