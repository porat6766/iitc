//
//
//
//
//
//
//
//
// //
// //
// //
// let student = [
//   { id: "1", name: "omer", grade: 100 },
//   { id: "2", name: "avi", grade: 70 },
//   { id: "3", name: "gaga", grade: 80 },
// ];

// // function dataFromKeys(array, key) {
// //   let newArray = [];
// //   for (let i = 0; i < array.length; i++) {
// //     newArray[i] = array[i][key] + " ";
// //   }
// //   console.log(newArray);
// // }
// // dataFromKeys(student, "id");
// // dataFromKeys(student, "name");

// // function getPassStudents(array, grade) {
// //   let newArray = [];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i]["grade"] > grade) {
// //       newArray.push(array[i]);
// //     }
// //   }
// //   return newArray;
// // }
// // console.log(getPassStudents(student, 50));
// // console.log(getPassStudents(student, 70));
// // ///my

// let personsNames = ["yossi", "liraz", "baba"];

// function createPersons(names) {
//   let persons = [];
//   for (let i = 0; i < names.length; i++) {
//     person = names[i];
//     persons.push({ id: i, person_name: person });
//   }
//   return persons;
// }

// console.log(createPersons(personsNames));

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

// function groupBy(array, key) {  ///// MY
//   let group = {
//     oneGroup: [],
//     towGroup: [],
//   };
//   for (let i = 0; i < array.length; i++) {
//     correntKey = array[i];
//     if (correntKey === correntKey[key]) {
//       group.oneGroup.push(array[i]);
//     }
//     if (correntKey === correntKey[key]) {
//       group.towGroup.push(array[i]);
//     }
//   }
//   return group;
// }
// console.log(groupBy(employees, "department"));

function groupBy(array, key) {
  /// class
  let groups = {};
  for (let i = 0; i < array.length; i++) {
    let newKey = array[i][key];
    let deatailsPerson = array[i];
    if (groups[newKey] === undefined) {
      groups[newKey] = [];
    }
    groups[newKey].push(deatailsPerson);
  }
  return groups;
}

console.log(groupBy(employees, "department"));

/*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */
