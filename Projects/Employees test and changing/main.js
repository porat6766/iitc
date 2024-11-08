///utills
function getDatLocalStorage(key) {
  try {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    return data;
  } catch (e) {
    console.error("Error parsing JSON from localStorage:", e);
    return [];
  }
}
function saveInlocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
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
//////Data ANd general varieble
const isEdit = false;
const ketData = "CodeOfData";

let dataBase = getDatLocalStorage(ketData) || [];
//////reset the form
const form = document.querySelector("#form");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
});
//////provide input value
const inputFirstName = document.querySelector(".FirstName");
const inputLastName = document.querySelector(".LastName");
const inputAge = document.querySelector(".Age");
const inputDate = document.querySelector(".startDate");
const inputSalary = document.querySelector(".Salary");
const inputDepartment = document.querySelector(".Department");
//provide btn Add Edit
const bytAddEdit = document.querySelector(".AddEdit");
bytAddEdit.addEventListener("click", handleAddOrEdit);
/////

function handleAddOrEdit() {
  if (!isEdit) {
    AddEmployee(
      inputFirstName.value,
      inputLastName.value,
      inputAge.value,
      inputDate.value,
      inputSalary.value,
      inputDepartment.value
    );
  } else {
    EditEmployee();
  }
  saveInlocalStorage(ketData, dataBase);
}

///
function AddEmployee(FirstName, LastName, Age, startDate, salary, department) {
  const newEmployee = {
    id: makeId(),
    First: FirstName,
    last: LastName,
    age: Age,
    Date: startDate,
    salary: salary,
    department: department,
  };
  console.log("kjhds");

  dataBase.push(newEmployee);
}

/////

///
function rendering() {
  const elBody = document.querySelector(".grid");
  for (let i = 0; i < dataBase.length; i++) {
    const TbodyOneEmployee = document.createElement("tr");
    const Employee = dataBase[i];
    TbodyOneEmployee.innerHTML = `
    <td>${Employee.First}</td>
    <td>${Employee.last}</td>
    <td>${Employee.age}</td>
    <td>${Employee.Date}</td>
    <td>${Employee.department}</td>
    <td>${Employee.salary}</td>
    <td>
    <button>Delete</button>
    <button>Edit</button>
    </td>
    `;
    elBody.appendChild(TbodyOneEmployee);
  }
}
rendering();
