//import files js
import { modelModule } from "./model.js";
import { utillModul } from "./utills.js";
import { viewsModule } from "./view.js";
//check if thebutton is edit
const isEdit = false;

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

//addEmployee addeventlisthner
const _addOrEditButton = document.getElementById("add");
_addOrEditButton.addEventListener("click", handleAddOrEdit);

// handleAddOrEdit
function handleAddOrEdit() {
  if (isEdit) {
    editEmployee();
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

//btn-delete
const _tbody = document.getElementById("table");
_tbody.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-delete")) {
    const id = event.target.getAttribute("data-id");
    modelModule.deleteEmployee(id);
  }
});

viewsModule.renderEmployees(modelModule.dataStorage);
