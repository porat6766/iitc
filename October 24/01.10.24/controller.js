//import files js
import { modelModule } from "./model.js";
import { utillModul } from "./utills.js";
import { viewsModule } from "./view.js";
//check if thebutton is edit
let isEdit = false;

//import btn and list Filter
const _filterlist = document.getElementById("ulFilter");
const _filterBtn = document.getElementById("filter");
//import input Add
const _firstName = document.getElementById("first-name");
const _lastName = document.getElementById("last-name");
const _age = document.getElementById("age");
const _department = document.getElementById("department");
const _salary = document.getElementById("salary");
//reset reload from
const _from = document.getElementById("form");
_from.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
///event listhner to filter

//addEmployee addeventlisthner
const _addOrEditButton = document.getElementById("add");
_addOrEditButton.addEventListener("click", handleAddOrEdit);

// handleAddOrEdit
function handleAddOrEdit() {
  if (isEdit) {
    modelModule.editEmployee(
      _firstName.value,
      _lastName.value,
      _age.value,
      _department.value,
      _salary.value,
      isEdit
    );
    isEdit = false;
    _addOrEditButton.textContent = "Add";
  } else {
    modelModule.addEnployee(
      _firstName.value,
      _lastName.value,
      _age.value,
      _department.value,
      _salary.value
    );
  }
  utillModul.saveInlocalStorage(modelModule.keyData, modelModule.dataStorage);
  viewsModule.renderEmployees(modelModule.dataStorage);
  (_firstName.value = ""),
    (_lastName.value = ""),
    (_age.value = ""),
    (_department.value = ""),
    (_salary.value = "");
}
//brings data to inputs EDIT
function getDataToInputs(id) {
  const employee = modelModule.dataStorage.find((employe) => employe.id === id);
  _firstName.value = employee.FirstName;
  _lastName.value = employee.LastName;
  _age.value = employee.Age;
  _department.value = employee.Department;
  _salary.value = employee.Salary;
  isEdit = id;
  _addOrEditButton.textContent = "Update";
}

//btn-delete
const _tbody = document.getElementById("table");
_tbody.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-delete")) {
    const id = event.target.getAttribute("data-id");
    modelModule.deleteEmployee(id);
  } else if (event.target.classList.contains("btn-edit")) {
    const id = event.target.getAttribute("data-id");
    getDataToInputs(id);
  }
});

viewsModule.renderEmployees(modelModule.dataStorage);

//filter
_filterBtn.addEventListener("click", () => {
  viewsModule.toggleToFilter(_filterlist);
});
