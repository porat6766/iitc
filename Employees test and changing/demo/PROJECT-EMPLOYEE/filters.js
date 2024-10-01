import { dataFunctionModel } from "./model.js";
import { utillsvarieble } from "./utills.js";
////

// let filterData = [...dataFunctionModel.gEmployees];

///////////////////////////////////////////////////////function filter
///firstName
function filterByFirstName(firstName) {
  let gEmployees = utillsvarieble.getDatLocalStorage(
    dataFunctionModel.employees_STORAGE_KEY
  );
  const fakeEmployees = gEmployees.filter(
    (employee) => employee.firstName.toUpperCase() === firstName.toUpperCase()
  );
  return fakeEmployees;
}
///lastName
function filterByLastName(inputLast) {
  let gEmployees = utillsvarieble.getDatLocalStorage(
    dataFunctionModel.employees_STORAGE_KEY
  );
  const fakeEmployees = gEmployees.filter(
    (employee) => employee.LastName.toUpperCase() === inputLast.toUpperCase()
  );
  return fakeEmployees;
}
///Age
function filterByAge(from, to) {
  if (from === "" || to === "") {
    alert("Please type a value/s");
  } else {
    let gEmployees = utillsvarieble.getDatLocalStorage(
      dataFunctionModel.employees_STORAGE_KEY
    );
    const fakeEmployees = gEmployees.filter(
      (employee) =>
        Number(employee.age) >= Number(from) &&
        Number(employee.age) <= Number(to)
    );
    return fakeEmployees;
  }
}
///Date
function filterDate(fromDate, ToDate) {
  if (fromDate === "" || ToDate === "") {
    alert("Please type a value/s");
  } else {
    let gEmployees = utillsvarieble.getDatLocalStorage(
      dataFunctionModel.employees_STORAGE_KEY
    );
    const filterData = gEmployees.filter(
      (employee) =>
        fromDate <= employee.startDate && employee.startDate <= ToDate
    );
    return filterData;
  }
}
//department
function filterDepartment(department) {
  if (department === "Select a department" || !department) {
    alert("Please select a department before filtering.");
    return;
  } else {
    let gEmployees = utillsvarieble.getDatLocalStorage(
      dataFunctionModel.employees_STORAGE_KEY
    );
    const fakeEmployees = gEmployees.filter(
      (employee) =>
        employee.department.toUpperCase() === department.toUpperCase()
    );
    return fakeEmployees;
  }
}

//salary
function filterBySalary(from, to) {
  if (from === "" || to === "" || !from || !to) {
    alert("Please type a value/s");
    return;
  }
  let gEmployees = utillsvarieble.getDatLocalStorage(
    dataFunctionModel.employees_STORAGE_KEY
  );
  const fakeEmployees = gEmployees.filter(
    (employee) =>
      Number(employee.salary) >= Number(from) &&
      Number(employee.salary) <= Number(to)
  );

  return fakeEmployees;
}

//////////////////clear inputs of filter in case all
function clearAllInputs() {
  inputsAddAndEditAndFunctionMain.inputs.forEach((input) => {
    input.value = "";
  });
}

////////////////////////////////////////function edit

export const viewDataAndFunction = {
  filterByFirstName,
  filterByLastName,
  filterByAge,
  filterDate,
  filterDepartment,
  filterBySalary,
  clearAllInputs,
};
