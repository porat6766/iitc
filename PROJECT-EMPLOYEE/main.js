const employees_STORAGE_KEY = "dataEmployeeStorage";
const GelForm = document.querySelector(".form-add");
///demo data
let gEmployee = getDatLocalStorage();

// const demo = [
//   {
//     id: "A1b2C",
//     firstName: "Alice",
//     lastName: "Smith",
//     age: 28,
//     startDate: "2020-06-15",
//     department: "Marketing",
//     salary: 50000,
//   },
//   {
//     id: "Xy8K7",
//     firstName: "John",
//     lastName: "Doe",
//     age: 35,
//     startDate: "2018-01-25",
//     department: "Sales",
//     salary: 60000,
//   },
//   {
//     id: "P5sD9",
//     firstName: "Emma",
//     lastName: "Johnson",
//     age: 42,
//     startDate: "2015-03-12",
//     department: "IT",
//     salary: 70000,
//   },
//   {
//     id: "Q7rM1",
//     firstName: "Michael",
//     lastName: "Brown",
//     age: 30,
//     startDate: "2019-07-01",
//     department: "Finance",
//     salary: 55000,
//   },
//   {
//     id: "T9vL6",
//     firstName: "Sophia",
//     lastName: "Williams",
//     age: 26,
//     startDate: "2021-05-20",
//     department: "HR",
//     salary: 45000,
//   },
//   {
//     id: "K3pJ8",
//     firstName: "David",
//     lastName: "Taylor",
//     age: 39,
//     startDate: "2017-09-14",
//     department: "Operations",
//     salary: 64000,
//   },
//   {
//     id: "V6xQ2",
//     firstName: "Laura",
//     lastName: "White",
//     age: 32,
//     startDate: "2016-11-03",
//     department: "Logistics",
//     salary: 50000,
//   },
// ];

function renderDataEmployees() {
  const _tBodyEmployee = document.querySelector(".tbody-data-employees");
  _tBodyEmployee.textContent = "";
  for (let i = 0; i < gEmployee.length; i++) {
    const oneEmployee = gEmployee[i];
    const elTrEmployee = document.createElement("tr");
    elTrEmployee.innerHTML = `
    <td>${oneEmployee.firstName}</td>
    <td>${oneEmployee.lastName}</td>
    <td>${oneEmployee.age}</td>
    <td>${oneEmployee.startDate}</td>
    <td>${oneEmployee.department}</td>
    <td>${oneEmployee.salary}</td>
    <td><button onclick="removeEmployee('${oneEmployee.id}')" class="deleteBtn">Delete</button><button>Edit</button></td>
    `;
    _tBodyEmployee.appendChild(elTrEmployee);
  }
}

GelForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

const btnAdd = document.querySelector(".clickAdd");
btnAdd.addEventListener("click", addTogEmployee);

function addTogEmployee() {
  const _inputFirstName = document.querySelector(".first-name");
  const _inputLastName = document.querySelector(".last-name");
  const _inputAge = document.querySelector(".age");
  const _inputDepartment = document.querySelector(".Department");
  const _inputsalary = document.querySelector(".salary");
  const newEmployee = {
    id: makeId(),
    firstName: _inputFirstName.value,
    lastName: _inputLastName.value,
    age: _inputAge.value,
    startDate: getCurrentDateInYYYYMMDD(),
    department: _inputDepartment.value,
    salary: _inputsalary.value,
  };
  gEmployee.push(newEmployee);
  renderDataEmployees();
  saveInlocalStorage();
  _inputFirstName.value = "";
  _inputLastName.value = "";
  _inputAge.value = "";
  _inputDepartment.value = "";
  _inputsalary.value = "";
}

function removeEmployee(id) {
  gEmployee = gEmployee.filter((employee) => employee.id !== id);
  saveInlocalStorage();
  renderDataEmployees();
}

///////////////////////////////////////////////////////
function getDatLocalStorage() {
  let data = JSON.parse(localStorage.getItem(employees_STORAGE_KEY)) || [];
  return data;
}

function saveInlocalStorage() {
  localStorage.setItem(employees_STORAGE_KEY, JSON.stringify(gEmployee));
}

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function getCurrentDateInYYYYMMDD() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

renderDataEmployees();
