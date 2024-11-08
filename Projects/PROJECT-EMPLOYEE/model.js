import { utillsvarieble } from "./utills.js";
//

const employees_STORAGE_KEY = "dataEmployeeStorage";

///demo data

///function handle with data

function UpdateEmplyee(id, firstName, LastName, age, department, salary) {
  let gEmployees = utillsvarieble.getDatLocalStorage(employees_STORAGE_KEY);
  const employeeIndex = gEmployees.findIndex((employee) => employee.id === id);
  gEmployees[employeeIndex] = {
    id,
    firstName,
    LastName,
    age,
    startDate: gEmployees[employeeIndex].startDate,
    department,
    salary,
  };
  utillsvarieble.saveInlocalStorage(employees_STORAGE_KEY, gEmployees);
}

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

// function removeEmployee(id) {
//   gEmployees = gEmployees.filter((employee) => employee.id !== id);
//   utillsvarieble.saveInlocalStorage(employees_STORAGE_KEY, gEmployees);
//   inputsAddAndEditAndFunctionMain.renderDataEmployees();
// }

function removeEmployee(id) {
  let gEmployees = utillsvarieble.getDatLocalStorage(employees_STORAGE_KEY);

  gEmployees = gEmployees.filter((employee) => employee.id !== id);

  utillsvarieble.saveInlocalStorage(employees_STORAGE_KEY, gEmployees);
}

export const dataFunctionModel = {
  employees_STORAGE_KEY,
  removeEmployee,
  addTogEmployee,
  UpdateEmplyee,
};
