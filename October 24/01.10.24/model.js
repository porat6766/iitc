import { utillModul } from "./utills.js";
import { viewsModule } from "./view.js";
//key for data
const keyData = "ljdjbkJBjL76";
//data from storage
let dataStorage = utillModul.getDatLocalStorage(keyData) || [];

//function that add employee
function addEnployee(firstName, lastName, age, department, salary) {
  const newEmployee = {
    id: utillModul.makeId(),
    FirstName: firstName,
    LastName: lastName,
    Age: age,
    Department: department,
    Salary: salary,
    startDate: utillModul.getCurrentDateInYYYYMMDD(),
  };
  dataStorage.push(newEmployee);
}

//edit
function editEmployee(
  _firstName,
  _lastName,
  _age,
  _department,
  _salary,
  isEdit
) {
  const employeeToEdit = dataStorage.findIndex(
    (employee) => employee.id === isEdit
  );
  dataStorage[employeeToEdit] = {
    FirstName: _firstName,
    LastName: _lastName,
    Age: _age,
    Department: _department,
    Salary: _salary,
    id: isEdit,
    startDate: dataStorage[employeeToEdit].startDate,
  };
}

//function delete
function deleteEmployee(id) {
  dataStorage = dataStorage.filter((employe) => employe.id !== id);
  utillModul.saveInlocalStorage(keyData, dataStorage);
  viewsModule.renderEmployees(dataStorage);
}

//export
export const modelModule = {
  editEmployee,
  addEnployee,
  keyData,
  dataStorage,
  deleteEmployee,
};
