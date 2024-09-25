const employees_STORAGE_KEY = "dataEmployeeStorage";
const GelForm = document.querySelector(".form-add");
///demo data
let gEmployee = getDatLocalStorage();
let filterData = [...gEmployee];

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

function renderDataEmployees(filterData = gEmployee) {
  const _tBodyEmployee = document.querySelector(".tbody-data-employees");
  _tBodyEmployee.textContent = "";
  for (let i = 0; i < filterData.length; i++) {
    const oneEmployee = filterData[i];
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
  if (
    !_inputFirstName.value ||
    !_inputLastName.value ||
    !_inputAge.value ||
    !_inputDepartment.value ||
    !_inputsalary.value
  ) {
    alert(
      "Is there a situation where you forgot a field? (happens to everyone)"
    );
    return;
  }

  const newEmployee = {
    id: makeId(),
    firstName: _inputFirstName.value,
    lastName: _inputLastName.value,
    age: _inputAge.value,
    startDate: getCurrentDateInYYYYMMDD(),
    department: _inputDepartment.value.toUpperCase(),
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

const btnSort = document.querySelector(".sortBtn");
btnSort.addEventListener("click", toggleBtnSort);
function toggleBtnSort() {
  const ulSort = document.querySelector("#sortUl");
  ulSort.classList.toggle("hidden");
}

const listenLisss = document.querySelectorAll("#sortUl li");

const ElfilterWhriting = document.querySelector(".filterWhriting");

listenLisss.forEach((li) => {
  li.addEventListener("click", function () {
    switch (li.textContent.trim()) {
      case "First Name":
        ElfilterWhriting.innerHTML = `<input class="inputFirstName" placeholder="First name" />
        <button onclick="filterByFirstName()" class="SearchfirstName">Search</button>
        <button onclick="renderDataEmployees()" class="AllList" >ALL</button>
        `;
        break;
      case "Last Name":
        ElfilterWhriting.innerHTML = `<input class="inputLastName" placeholder="Last name" />
          <button onclick="filterByLastName()" class="SearchlastName">Search</button>
          <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

        `;
        break;
      case "Age":
        ElfilterWhriting.innerHTML = `<input type="number" class="inputAgeFrom" placeholder="From" />
        <input type="number" class="inputAgeTo" placeholder="To" />
        <button onclick="filterByAge()" class="SearchAge">Search</button>
        <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

        `;
        break;
      case "Date":
        ElfilterWhriting.innerHTML = `<input type="date" class="fromDate" placeholder="Start date" />
        <input type="date" class="toDate" placeholder="end date" />
        <button onclick="filterDate()" class="SearchStartDate">Search</button>
        <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

        `;
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
        <button onclick="filterDepartment()" class="SearchDepartment">Search</button>
        <button onclick="renderDataEmployees()" class="AllList" >ALL</button>
        `;
        break;
      case "Salary":
        ElfilterWhriting.innerHTML = `<input type="number" class="inputSalaryfrom" placeholder="from" />
                <input type="number" class="inputSalaryTo" placeholder="To" />
         <button onclick="filterBySalary()" class="SearchSalary">Search</button>
        <button onclick="renderDataEmployees()" class="AllList" >ALL</button>

                                `;
        break;
      default:
        ElfilterWhriting.innerHTML = "";
        break;
    }
    toggleBtnSort();
    renderDataEmployees();
  });
});
///////////////////////////////////////////////////////function filter

///firstName
function filterByFirstName() {
  const elSearchinput = document.querySelector(".inputFirstName");
  filterData = gEmployee.filter(
    (employee) => employee.firstName === elSearchinput.value
  );

  renderDataEmployees(filterData);
}
///lastName
function filterByLastName() {
  const elSearchinput = document.querySelector(".inputLastName");
  if (elSearchinput.value === "") {
    alert("Please type a value");
  } else {
    filterData = gEmployee.filter(
      (employee) => employee.lastName === elSearchinput.value
    );
  }

  renderDataEmployees(filterData);
}
///Age
function filterByAge() {
  const elSearchinputFrom = document.querySelector(".inputAgeFrom");
  const elSearchinputTo = document.querySelector(".inputAgeTo");
  if (elSearchinputTo.value === "" || elSearchinputFrom === "") {
    alert("Please type a value/s");
  } else {
    filterData = gEmployee.filter(
      (employee) =>
        employee.age > elSearchinputFrom.value &&
        employee.age < elSearchinputTo.value
    );
  }

  renderDataEmployees(filterData);
}
///Date
function filterDate() {
  const elSearchinputFrom = document.querySelector(".fromDate");
  const elSearchinputTo = document.querySelector(".toDate");
  if (elSearchinputTo.value === "" || elSearchinputFrom.value === "") {
    alert("Please type a value/s");
  } else {
    filterData = gEmployee.filter(
      (employee) =>
        employee.startDate >= elSearchinputFrom.value &&
        employee.startDate <= elSearchinputTo.value
    );
  }

  renderDataEmployees(filterData);
}
//department
function filterDepartment() {
  const elSearchdepartment = document.querySelector(".Departmento");
  const select = elSearchdepartment.value;
  if (select === "Select a department" || !select) {
    alert("Please select a department before filtering.");
    return;
  }
  filterData = gEmployee.filter(
    (employee) => employee.department.toUpperCase() === select.toUpperCase()
  );

  renderDataEmployees(filterData);
}
//salary
function filterBySalary() {
  const elSearchinputFrom = document.querySelector(".inputSalaryfrom");
  const elSearchinputTo = document.querySelector(".inputSalaryTo");
  if (elSearchinputTo.value === "" || elSearchinputFrom === "") {
    alert("Please type a value/s");
    return;
  }
  filterData = gEmployee.filter(
    (employee) =>
      Number(employee.salary) >= Number(elSearchinputFrom.value) &&
      Number(employee.salary) <= Number(elSearchinputTo.value)
  );

  renderDataEmployees(filterData);
}

///////////////////////////////////////////////////////utill function
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

// const elBtnSort = document.querySelector(".sortBtn");
// elBtnSort.addEventListener("click", toggleFilter);
// function toggleFilter() {
//   const divfiltered = document.querySelector(".filtered");
//   divfiltered.innerHTML = `
//   <input placeholder="Put name"/>
//   <input placeholder="last name"/>
//   <input placeholder="age"/>
//   <input placeholder=" from date"/>
//   <input placeholder="department"/>
//   <input placeholder="salary"/>
//   `;
// }
