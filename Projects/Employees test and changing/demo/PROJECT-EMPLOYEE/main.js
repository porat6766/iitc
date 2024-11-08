import { dataFunctionModel } from "./model.js";
import { utillsvarieble } from "./utills.js";
import { viewDataAndFunction } from "./filters.js";
////
let filterDataF = viewDataAndFunction.filterData;
const GelForm = document.querySelector(".form-add");
///
const elSearchinput = document.querySelector(".inputFirstName");
const elSearchinputLast = document.querySelector(".inputLastName");
const elSearchinputFromAge = document.querySelector(".inputAgeFrom");
const elSearchinputToAge = document.querySelector(".inputAgeTo");
const elSearchinputFromDate = document.querySelector(".fromDate");
const elSearchinputToDate = document.querySelector(".toDate");
const elSearchdepartment = document.querySelector(".Departmento");
const elSearchinputFromSalary = document.querySelector(".inputSalaryfrom");
const elSearchinputToSalary = document.querySelector(".inputSalaryTo");
///
const inputs = document.querySelectorAll(
  ".inputFirstName, .inputLastName, .inputAgeFrom, .inputAgeTo, .fromDate, .toDate, .Departmento, .inputSalaryfrom, .inputSalaryTo"
);

///////////represent input uppdate= true/false
let isIdEdit = false;
////////////input add and edit
const _inputFirstName = document.querySelector(".first-name");
const _inputLastName = document.querySelector(".last-name");
const _inputAge = document.querySelector(".age");
const _inputDepartment = document.querySelector(".Department");
const _inputsalary = document.querySelector(".salary");
///

///
const btnAdd = document.querySelector(".clickAdd");
////
const btnSort = document.querySelector(".sortBtn");
////
const listenLisss = document.querySelectorAll("#sortUl li");
//
const ElfilterWhriting = document.querySelector(".filterWhriting");
//
function getToInputForEdit(id) {
  let gEmployees = utillsvarieble.getDatLocalStorage("dataEmployeeStorage");
  const employeeEdit = gEmployees.find((employee) => employee.id === id);
  _inputFirstName.value = employeeEdit.firstName;
  _inputLastName.value = employeeEdit.LastName;
  _inputAge.value = employeeEdit.age;
  _inputDepartment.value = employeeEdit.department;
  _inputsalary.value = employeeEdit.salary;
  isIdEdit = id;
  btnAdd.textContent = "Update";
}

function renderDataEmployees(fakeEmployees) {
  filterDataF =
    fakeEmployees || utillsvarieble.getDatLocalStorage("dataEmployeeStorage");

  // const _tBodyEmployee = document.querySelector(".tbody-data-employees");
  const table = document.querySelector(".render-table");
  // _tBodyEmployee.textContent = "";
  table.innerHTML = `<thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Delete/Edit</th>
            </tr>
          </thead>`;

  for (let i = 0; i < filterDataF.length; i++) {
    const oneEmployee = filterDataF[i];
    const elTrEmployee = document.createElement("tr");
    elTrEmployee.innerHTML = `
      <td>${oneEmployee.firstName}</td>
      <td>${oneEmployee.LastName}</td>
      <td>${oneEmployee.age}</td>
      <td>${oneEmployee.startDate}</td>
      <td>${oneEmployee.department}</td>
      <td>${oneEmployee.salary.toLocaleString()}</td>
      <td>
        <button class="deleteBtn">Delete</button>
        <button class="edit" >Edit</button>
      </td>
    `;
    // _tBodyEmployee.appendChild(elTrEmployee);
    table.appendChild(elTrEmployee);

    const deleteButton = elTrEmployee.querySelector(".deleteBtn");
    deleteButton.addEventListener("click", function (ev) {
      dataFunctionModel.removeEmployee(oneEmployee.id);
      renderDataEmployees();
    });
    const editButtons = elTrEmployee.querySelector(".edit");
    editButtons.addEventListener("click", function (ev) {
      getToInputForEdit(oneEmployee.id);
      renderDataEmployees();
    });
  }
}

GelForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

btnAdd.addEventListener("click", HandleAddOrUpdateogEmployee);

function HandleAddOrUpdateogEmployee() {
  if (
    _inputFirstName.value === "" ||
    _inputLastName.value === "" ||
    _inputAge.value === "" ||
    _inputDepartment.value === "" ||
    _inputsalary.value === ""
  ) {
    alert("Is there a situation where you have to fill in a field?");
    return;
  }
  if (isIdEdit) {
    function addTogEmployee(firstName, LastName, age, department, salary) {
      let gEmployees = utillsvarieble.getDatLocalStorage(employees_STORAGE_KEY);
      const newEmployee = {
        id: utillsvarieble.makeId(),
        firstName,
        LastName,
        age,
        startDate: utillsvarieble.getCurrentDateInYYYYMMDD(),
        department,
        salary,
      };
      gEmployees.push(newEmployee);
      utillsvarieble.saveInlocalStorage(employees_STORAGE_KEY, gEmployees);
    }
    isIdEdit = false;
    btnAdd.textContent = "Add";
  } else {
    dataFunctionModel.addTogEmployee(
      _inputFirstName.value,
      _inputLastName.value,
      _inputAge.value,
      _inputDepartment.value,
      _inputsalary.value
    );
  }
  renderDataEmployees();
  _inputFirstName.value = "";
  _inputLastName.value = "";
  _inputAge.value = "";
  _inputDepartment.value = "";
  _inputsalary.value = "";
}

btnSort.addEventListener("click", toggleBtnSort);
function toggleBtnSort() {
  const ulSort = document.querySelector("#sortUl");
  ulSort.classList.toggle("hidden");
}

listenLisss.forEach((li) => {
  li.addEventListener("click", function () {
    switch (li.textContent.trim()) {
      case "First Name":
        ElfilterWhriting.innerHTML = `<input class="inputFirstName" placeholder="First name" />
        <button class="SearchfirstName">Search</button>
        <button class="AllList" >ALL</button>
        `;
        ///////////////
        // const cleanClick = document.querySelector(".AllList");
        // cleanClick.addEventListener("click", function () {
        //   renderDataEmployees();
        //   viewDataAndFunction.clearAllInputs();
        // });
        ///
        const elSearchfirstName = document.querySelector(".SearchfirstName");
        const inputFirstName = document.querySelector(".inputFirstName");
        elSearchfirstName.addEventListener("click", function () {
          renderDataEmployees(
            viewDataAndFunction.filterByFirstName(inputFirstName.value)
          );
        });
        //////////////////
        break;
      case "Last Name":
        ElfilterWhriting.innerHTML = `<input class="inputLastName" placeholder="Last name" />
          <button  class="SearchlastName">Search</button>
          <button class="AllList" >ALL</button>
        `;
        const elSearchLastName = document.querySelector(".SearchlastName");
        const inputLastName = document.querySelector(".inputLastName");
        elSearchLastName.addEventListener("click", function () {
          renderDataEmployees(
            viewDataAndFunction.filterByLastName(inputLastName.value)
          );
        });
        break;
      case "Age":
        ElfilterWhriting.innerHTML = `
                <label>from:</label>
        <input type="number" class="inputAgeFrom" placeholder="From Age" />
        <label>to:</label>
        <input type="number" class="inputAgeTo" placeholder="To Age" />
        <button class="SearchAge">Search</button>
        <button class="AllList" >ALL</button>
        `;
        const inputFromAge = document.querySelector(".inputAgeFrom");
        const inputToAge = document.querySelector(".inputAgeTo");
        const elSearchiAge = document.querySelector(".SearchAge");
        elSearchiAge.addEventListener("click", function () {
          renderDataEmployees(
            viewDataAndFunction.filterByAge(
              inputFromAge.value,
              inputToAge.value
            )
          );
        });
        break;
      case "Date":
        ElfilterWhriting.innerHTML = `
        <label>from:</label>
        <input type="date" class="fromDate" placeholder="Start date" />
        <label>to:</label>
        <input type="date" class="toDate" placeholder="end date" />
        <button class="SearchStartDate">Search</button>
        <button class="AllList" >ALL</button>
        `;
        const elSearchinputDate = document.querySelector(".SearchStartDate");
        const inputFromDate = document.querySelector(".fromDate");
        const inputToDate = document.querySelector(".toDate");
        elSearchinputDate.addEventListener("click", function () {
          renderDataEmployees(
            viewDataAndFunction.filterDate(
              inputFromDate.value,
              inputToDate.value
            )
          );
        });
        break;
      case "Department":
        ElfilterWhriting.innerHTML = `
           <select name="Department" class="Departmento">
        <option selected disabled>Select a department</option>
        <option value="it">IT</option>
        <option value="hr">Human Resources</option>
        <option value="finance">Finance</option>
        <option value="marketing">Marketing</option>
        <option value="sales">Sales</option>
        <option value="customer_service">Customer Service</option>
        <option value="legal">Legal</option>
        <option value="operations">Operations</option>
        <option value="research_and_development">
          Research and Development
        </option>
        <option value="procurement">Procurement</option>
      </select>
        <button class="SearchDepartment">Search</button>
        <button class="AllList" >ALL</button>
        `;
        const elSearchinputDepartment =
          document.querySelector(".SearchDepartment");
        const inputDepartment = document.querySelector(".Departmento");
        elSearchinputDepartment.addEventListener("click", function () {
          renderDataEmployees(
            viewDataAndFunction.filterDepartment(inputDepartment.value)
          );
        });

        break;
      case "Salary":
        ElfilterWhriting.innerHTML = `
        <label>from:</label>
        <input type="number" class="inputSalaryfrom" placeholder="from salary" />
        <label>to:</label>
        <input type="number" class="inputSalaryTo" placeholder="To salary" />
       <button class="SearchSalary">Search</button>
        <button class="AllList" >ALL</button>
                                `;
        const elSearchinputsalary = document.querySelector(".SearchSalary");
        const elInputinputFromsalary =
          document.querySelector(".inputSalaryfrom");
        const elInputinputTosalary = document.querySelector(".inputSalaryTo");
        elSearchinputsalary.addEventListener("click", function () {
          renderDataEmployees(
            viewDataAndFunction.filterBySalary(
              elInputinputFromsalary.value,
              elInputinputTosalary.value
            )
          );
        });
        break;
      default:
        ElfilterWhriting.innerHTML = "";
        break;
    }
    const allButtons = document.querySelectorAll(".AllList");
    allButtons.forEach((button) => {
      button.addEventListener("click", function () {
        location.reload(true);
        ElfilterWhriting.innerHTML = "";
      });
    });

    toggleBtnSort();
    renderDataEmployees();
  });
});

///////////////////////////////////////////////////////utill function

renderDataEmployees();

export const inputsAddAndEditAndFunctionMain = {
  renderDataEmployees,
  _inputFirstName,
  _inputLastName,
  _inputAge,
  _inputDepartment,
  _inputsalary,
  btnAdd,
  elSearchinput,
  elSearchinputLast,
  elSearchinputFromAge,
  elSearchinputToAge,
  elSearchinputFromDate,
  elSearchinputToDate,
  elSearchdepartment,
  elSearchinputFromSalary,
  elSearchinputToSalary,
  inputs,
};
//The project before the division to MVC
// const employees_STORAGE_KEY = "dataEmployeeStorage";
// const GelForm = document.querySelector(".form-add");
// ///demo data
// let gEmployees = getDatLocalStorage();
// let filterData = [...gEmployees];
// ///////////
// let isIdEdit = false;

// ////////////input add and edit
// const _inputFirstName = document.querySelector(".first-name");
// const _inputLastName = document.querySelector(".last-name");
// const _inputAge = document.querySelector(".age");
// const _inputDepartment = document.querySelector(".Department");
// const _inputsalary = document.querySelector(".salary");
// ////////
// // const demo = [
// //   {
// //     id: "A1b2C",
// //     firstName: "Alice",
// //     lastName: "Smith",
// //     age: 28,
// //     startDate: "2020-06-15",
// //     department: "Marketing",
// //     salary: 50000,
// //   },
// //   {
// //     id: "Xy8K7",
// //     firstName: "John",
// //     lastName: "Doe",
// //     age: 35,
// //     startDate: "2018-01-25",
// //     department: "Sales",
// //     salary: 60000,
// //   },
// //   {
// //     id: "P5sD9",
// //     firstName: "Emma",
// //     lastName: "Johnson",
// //     age: 42,
// //     startDate: "2015-03-12",
// //     department: "IT",
// //     salary: 70000,
// //   },
// //   {
// //     id: "Q7rM1",
// //     firstName: "Michael",
// //     lastName: "Brown",
// //     age: 30,
// //     startDate: "2019-07-01",
// //     department: "Finance",
// //     salary: 55000,
// //   },
// //   {
// //     id: "T9vL6",
// //     firstName: "Sophia",
// //     lastName: "Williams",
// //     age: 26,
// //     startDate: "2021-05-20",
// //     department: "HR",
// //     salary: 45000,
// //   },
// //   {
// //     id: "K3pJ8",
// //     firstName: "David",
// //     lastName: "Taylor",
// //     age: 39,
// //     startDate: "2017-09-14",
// //     department: "Operations",
// //     salary: 64000,
// //   },
// //   {
// //     id: "V6xQ2",
// //     firstName: "Laura",
// //     lastName: "White",
// //     age: 32,
// //     startDate: "2016-11-03",
// //     department: "Logistics",
// //     salary: 50000,
// //   },
// // ];

// function renderDataEmployees(filterData = gEmployees) {
//   const _tBodyEmployee = document.querySelector(".tbody-data-employees");
//   _tBodyEmployee.textContent = "";
//   for (let i = 0; i < filterData.length; i++) {
//     const oneEmployee = filterData[i];
//     const elTrEmployee = document.createElement("tr");
//     elTrEmployee.innerHTML = `
//     <td>${oneEmployee.firstName}</td>
//     <td>${oneEmployee.lastName}</td>
//     <td>${oneEmployee.age}</td>
//     <td>${oneEmployee.startDate}</td>
//     <td>${oneEmployee.department}</td>
//     <td>${oneEmployee.salary.toLocaleString()}</td>
//     <td><button onclick="removeEmployee('${
//       oneEmployee.id
//     }')" class="deleteBtn">Delete</button><button onclick="getToInputForEdit('${
//       oneEmployee.id
//     }')" class="edit">Edit</button></td>
//     `;
//     _tBodyEmployee.appendChild(elTrEmployee);
//   }
// }

// GelForm.addEventListener("submit", function (ev) {
//   ev.preventDefault();
// });

// const btnAdd = document.querySelector(".clickAdd");
// btnAdd.addEventListener("click", HandleAddOrUpdateogEmployee);

// function UpdateEmplyee() {
//   const employeeIndex = gEmployees.findIndex(
//     (employee) => employee.id === isIdEdit
//   );
//   gEmployees[employeeIndex] = {
//     id: gEmployees[employeeIndex].id,
//     firstName: _inputFirstName.value,
//     lastName: _inputLastName.value,
//     age: Number(_inputAge.value),
//     startDate: gEmployees[employeeIndex].startDate,
//     department: _inputDepartment.value,
//     salary: Number(_inputsalary.value),
//   };
// }

// function addTogEmployee() {
//   const newEmployee = {
//     id: makeId(),
//     firstName: _inputFirstName.value,
//     lastName: _inputLastName.value,
//     age: Number(_inputAge.value),
//     startDate: getCurrentDateInYYYYMMDD(),
//     department: _inputDepartment.value,
//     salary: Number(_inputsalary.value),
//   };
//   gEmployees.push(newEmployee);
// }

// function HandleAddOrUpdateogEmployee() {
//   if (isIdEdit) {
//     UpdateEmplyee();

//     isIdEdit = false;
//     btnAdd.textContent = "Add";
//   } else {
//     addTogEmployee();
//   }
//   saveInlocalStorage();
//   renderDataEmployees();
// }

// function removeEmployee(id) {
//   gEmployees = gEmployees.filter((employee) => employee.id !== id);
//   saveInlocalStorage();
//   renderDataEmployees();
// }

// const btnSort = document.querySelector(".sortBtn");
// btnSort.addEventListener("click", toggleBtnSort);
// function toggleBtnSort() {
//   const ulSort = document.querySelector("#sortUl");
//   ulSort.classList.toggle("hidden");
// }

// const listenLisss = document.querySelectorAll("#sortUl li");

// const ElfilterWhriting = document.querySelector(".filterWhriting");

// listenLisss.forEach((li) => {
//   li.addEventListener("click", function () {
//     switch (li.textContent.trim()) {
//       case "First Name":
//         ElfilterWhriting.innerHTML = `<input class="inputFirstName" placeholder="First name" />
//         <button onclick="filterByFirstName()" class="SearchfirstName">Search</button>
//         <button onclick="renderDataEmployees(); clearAllInputs();" class="AllList" >ALL</button>
//         `;
//         break;
//       case "Last Name":
//         ElfilterWhriting.innerHTML = `<input class="inputLastName" placeholder="Last name" />
//           <button onclick="filterByLastName()" class="SearchlastName">Search</button>
//           <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

//         `;
//         break;
//       case "Age":
//         ElfilterWhriting.innerHTML = `
//                 <label>from:</label>
//         <input type="number" class="inputAgeFrom" placeholder="From Age" />
//         <label>to:</label>
//         <input type="number" class="inputAgeTo" placeholder="To Age" />
//         <button onclick="filterByAge()" class="SearchAge">Search</button>
//         <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

//         `;
//         break;
//       case "Date":
//         ElfilterWhriting.innerHTML = `
//         <label>from:</label>
//         <input type="date" class="fromDate" placeholder="Start date" />
//         <label>to:</label>
//         <input type="date" class="toDate" placeholder="end date" />
//         <button onclick="filterDate()" class="SearchStartDate">Search</button>
//         <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

//         `;
//         break;
//       case "Department":
//         ElfilterWhriting.innerHTML = `
//            <select name="Department" class="Departmento">
//         <option selected disabled>Select a department</option>
//         <option value="it">IT</option>
//         <option value="hr">Human Resources</option>
//         <option value="finance">Finance</option>
//         <option value="marketing">Marketing</option>
//         <option value="sales">Sales</option>
//         <option value="customer_service">Customer Service</option>
//         <option value="legal">Legal</option>
//         <option value="operations">Operations</option>
//         <option value="research_and_development">
//           Research and Development
//         </option>
//         <option value="procurement">Procurement</option>
//       </select>
//         <button onclick="filterDepartment()" class="SearchDepartment">Search</button>
//         <button onclick="renderDataEmployees()" class="AllList" >ALL</button>
//         `;
//         break;
//       case "Salary":
//         ElfilterWhriting.innerHTML = `
//         <label>from:</label>
//         <input type="number" class="inputSalaryfrom" placeholder="from salary" />
//         <label>to:</label>
//         <input type="number" class="inputSalaryTo" placeholder="To salary" />
//        <button onclick="filterBySalary()" class="SearchSalary">Search</button>
//         <button onclick="renderDataEmployees()" class="AllList" >ALL</button>
//                                 `;
//         break;
//       default:
//         ElfilterWhriting.innerHTML = "";
//         break;
//     }
//     toggleBtnSort();
//     renderDataEmployees();
//   });
// });

// ////////////////////////////////////////function edit

// function getToInputForEdit(id) {
//   const employeeEdit = gEmployees.find((employee) => employee.id === id);
//   _inputFirstName.value = employeeEdit.firstName;
//   _inputLastName.value = employeeEdit.lastName;
//   _inputAge.value = employeeEdit.age;
//   _inputDepartment.value = employeeEdit.department;
//   _inputsalary.value = employeeEdit.salary;
//   isIdEdit = id;
//   btnAdd.textContent = "Update";
// }

// ///////////////////////////////////////////////////////function filter
// ///firstName
// function filterByFirstName() {
//   const elSearchinput = document.querySelector(".inputFirstName");
//   filterData = gEmployees.filter(
//     (employee) =>
//       employee.firstName.toUpperCase() === elSearchinput.value.toUpperCase()
//   );

//   renderDataEmployees(filterData);
// }
// ///lastName
// function filterByLastName() {
//   const elSearchinput = document.querySelector(".inputLastName");
//   if (elSearchinput.value === "") {
//     alert("Please type a value");
//   } else {
//     filterData = gEmployees.filter(
//       (employee) =>
//         employee.lastName.toUpperCase() === elSearchinput.value.toUpperCase()
//     );
//   }

//   renderDataEmployees(filterData);
// }
// ///Age
// function filterByAge() {
//   const elSearchinputFrom = document.querySelector(".inputAgeFrom");
//   const elSearchinputTo = document.querySelector(".inputAgeTo");
//   if (elSearchinputTo.value === "" || elSearchinputFrom === "") {
//     alert("Please type a value/s");
//   } else {
//     filterData = gEmployees.filter(
//       (employee) =>
//         Number(employee.age) > Number(elSearchinputFrom.value) &&
//         Number(employee.age) < Number(elSearchinputTo.value)
//     );
//   }

//   renderDataEmployees(filterData);
// }
// ///Date
// function filterDate() {
//   const elSearchinputFrom = document.querySelector(".fromDate");
//   const elSearchinputTo = document.querySelector(".toDate");
//   if (elSearchinputTo.value === "" || elSearchinputFrom.value === "") {
//     alert("Please type a value/s");
//   } else {
//     filterData = gEmployees.filter(
//       (employee) =>
//         new Date(employee.startDate) >= new Date(elSearchinputFrom.value) &&
//         new Date(employee.startDate) <= new Date(elSearchinputTo.value)
//     );
//   }

//   renderDataEmployees(filterData);
// }
// //department
// function filterDepartment() {
//   const elSearchdepartment = document.querySelector(".Departmento");
//   const select = elSearchdepartment.value;
//   if (select === "Select a department" || !select) {
//     alert("Please select a department before filtering.");
//     return;
//   }
//   filterData = gEmployees.filter(
//     (employee) => employee.department.toUpperCase() === select.toUpperCase()
//   );

//   renderDataEmployees(filterData);
// }
// //salary
// function filterBySalary() {
//   const elSearchinputFrom = document.querySelector(".inputSalaryfrom");
//   const elSearchinputTo = document.querySelector(".inputSalaryTo");
//   if (
//     elSearchinputTo.value === "" ||
//     elSearchinputFrom === "" ||
//     !elSearchinputTo.value ||
//     !elSearchinputFrom
//   ) {
//     alert("Please type a value/s");
//     return;
//   }
//   filterData = gEmployees.filter(
//     (employee) =>
//       Number(employee.salary) >= Number(elSearchinputFrom.value) &&
//       Number(employee.salary) <= Number(elSearchinputTo.value)
//   );

//   renderDataEmployees(filterData);
// }
// //////////////////clear inputs of filter in case all
// function clearAllInputs() {
//   const inputs = document.querySelectorAll(
//     ".inputFirstName, .inputLastName, .inputAgeFrom, .inputAgeTo, .fromDate, .toDate, .Departmento, .inputSalaryfrom, .inputSalaryTo"
//   );

//   inputs.forEach((input) => {
//     input.value = "";
//   });
// }

// ///////////////////////////////////////////////////////utill function
// function getDatLocalStorage() {
//   let data = JSON.parse(localStorage.getItem(employees_STORAGE_KEY)) || [];
//   return data;
// }

// function saveInlocalStorage() {
//   localStorage.setItem(employees_STORAGE_KEY, JSON.stringify(gEmployees));
// }

// function makeId() {
//   let id = "";
//   const possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < 5; i++) {
//     id += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return id;
// }

// function getCurrentDateInYYYYMMDD() {
//   const date = new Date();
//   return date.toISOString().split("T")[0];
// }

// renderDataEmployees();
