//data

let listToDoArray = [
  {
    id: makeId(),
    toDO: "clean table",
    statusComplet: false,
  },
  {
    id: makeId(),
    toDO: "clean window",
    statusComplet: false,
  },
  {
    id: makeId(),
    toDO: "do laundry",
    statusComplet: false,
  },
];

//
//

//
//
//

const btnAdd = document.getElementById("addToDoList");
const inputAddList = document.getElementById("addInput1");
btnAdd.addEventListener("click", addItem);
function addItem() {
  const templetObject = {
    id: makeId(),
    toDO: inputAddList.value,
    statusComplet: false,
  };
  listToDoArray.push(templetObject);
  renderToDoList();
  inputAddList.value = "";

  console.log(listToDoArray);
}

//
//
//
//
//
// //
// //

function renderToDoList(list = listToDoArray) {
  const elToDoList = document.getElementById("toDoList");
  elToDoList.innerHTML = "";

  // for(const li of elToDoList) {
  //}
  for (let i = 0; i < list.length; i++) {
    const oneFromList = list[i];
    const eloneFromList = document.createElement("li");
    eloneFromList.setAttribute("id", "ID" + oneFromList.id);
    eloneFromList.textContent = oneFromList.toDO;

    //
    //
    eloneFromList.addEventListener("click", function (ev) {
      eloneFromList.classList.toggle("complete");
      changStatus(ev, oneFromList);
      console.log(oneFromList);
    });

    //
    //

    //
    //
    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("class", "btn-remove");
    btnRemove.textContent = "delet is here";
    btnRemove.addEventListener("click", function () {
      remoClick(oneFromList.id);
    });

    const wrapDiv = document.createElement("div");
    wrapDiv.setAttribute("id", "wrap");
    wrapDiv.appendChild(eloneFromList);
    wrapDiv.appendChild(btnRemove);
    elToDoList.appendChild(wrapDiv);
  }
}

//
//
//

function remoClick(id) {
  listToDoArray = listToDoArray.filter((oneFromList) => oneFromList.id !== id);

  renderToDoList();
}
renderToDoList();

function changStatus(ev, item) {
  if (item.statusComplet === false) {
    item.statusComplet = true;
    alert("You deserve a blessing");
  } else {
    item.statusComplet = false;
  }
}

//
///
const divNewButton = document.querySelector(".newButtons");
////
const buttonAll = document.createElement("button");
buttonAll.setAttribute("class", "all");
buttonAll.textContent = "All";
buttonAll.addEventListener("click", function (ev) {
  ev.preventDefault();
  filterList("all");
});
//
//
const buttonCompleted = document.createElement("button");
buttonCompleted.setAttribute("class", "completed");
buttonCompleted.textContent = "completed";
buttonCompleted.addEventListener("click", function (ev) {
  ev.preventDefault();
  filterList("completed");
});
//
//
const uncomplete = document.createElement("button");
uncomplete.setAttribute("class", "incomplete");
uncomplete.textContent = "incomplete";
uncomplete.addEventListener("click", function (ev) {
  ev.preventDefault();
  filterList("incomplete");
});
divNewButton.appendChild(buttonAll);
divNewButton.appendChild(buttonCompleted);
divNewButton.appendChild(uncomplete);

//
function filterList(filter) {
  let filterTheList;
  if (filter === "all") {
    filterTheList = listToDoArray;
  } else if (filter === "completed") {
    filterTheList = listToDoArray.filter((item) => item.statusComplet);
  } else if (filter === "incomplete") {
    filterTheList = listToDoArray.filter((item) => !item.statusComplet);
  }
  renderToDoList(filterTheList);
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}
