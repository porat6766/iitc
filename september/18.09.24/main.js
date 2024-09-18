//data

let listToDoArray = [
  {
    id: makeId(),
    firstName: "ron",
    lastName: "choen",
    toDO: "clean table",
    statusComplet: false,
  },
  {
    id: makeId(),
    firstName: "dan",
    lastName: "haim",
    toDO: "clean window",
    statusComplet: false,
  },
  {
    id: makeId(),
    firstName: "david",
    lastName: "avraham",
    toDO: "do laundry",
    statusComplet: false,
  },
];
// console.log(listToDoArray);

//
//

//"NVvW0"
//"mFK8S"
//"DmzBr"

const btnAdd = document.getElementById("addToDoList");
btnAdd.addEventListener("click", function (ev) {
  ev.preventDefault();
  function addItem() {
    const elToDoList = document.getElementById("toDoList");
    const newToDo = document.createElement("li");
    const inputAddList = document.getElementById("addInput1");
    newToDo.textContent = inputAddList.value;
    const templetObject = {
      id: makeId(),
      firstName: "dan",
      lastName: "haim",
      toDO: newToDo.textContent,
      statusComplet: false,
    };
    newToDo.setAttribute("id", "ID" + templetObject.id);
    listToDoArray.push(templetObject);
    console.log(listToDoArray);
    //
    //

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "delete is here baby";
    btnRemove.setAttribute("class", "btn-remove");
    btnRemove.addEventListener("click", function () {
      remoClick(templetObject.id);
    });
    //
    //

    const wrapDiv = document.createElement("div");
    wrapDiv.setAttribute("id", "wrap");
    wrapDiv.appendChild(newToDo);
    wrapDiv.appendChild(btnRemove);
    elToDoList.appendChild(wrapDiv);
    inputAddList.value = "";
  }
  addItem();
});
//
//
//
//
//
//
//

function renderToDoList() {
  const elToDoList = document.getElementById("toDoList");
  elToDoList.innerHTML = "";
  for (let i = 0; i < listToDoArray.length; i++) {
    const oneFromList = listToDoArray[i];
    const eloneFromList = document.createElement("li");
    eloneFromList.setAttribute("id", "ID" + oneFromList.id);
    eloneFromList.textContent = oneFromList.toDO;

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
function remoClick(id) {
  const getData = document.getElementById("ID" + id);
  getData?.parentElement.remove();
}
// btnRemove.addEventListener("click", removeNow);
// function removeNow() {}
renderToDoList();
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
