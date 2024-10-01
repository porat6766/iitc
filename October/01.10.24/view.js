function renderEmployees(dataStorage) {
  //import tbody for render
  const _tbody = document.getElementById("body-table");
  _tbody.innerHTML = "";

  for (let i = 0; i < dataStorage.length; i++) {
    const employee = dataStorage[i];
    const _trCreate = document.createElement("tr");
    _trCreate.innerHTML = `
    <td>${employee.FirstName + employee.LastName}</td>
    <td>${employee.Age}</td>
    <td>${employee.Department}</td>
    <td>${employee.Salary}</td>
    <td>${employee.startDate}</td>
    <td><button>Edit</button><button class="btn-delete" data-id="${
      employee.id
    }">Delete</button></td>
    `;
    _tbody.appendChild(_trCreate);
  }
}
export const viewsModule = { renderEmployees };
