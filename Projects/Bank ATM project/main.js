const maxAttempts = 3;
let attempts = 0;
let currentClientGeneral = null;
let transactions = [];

let bankClients = [
  {
    name: "John Doe",
    password: "1234",
    bankAccountValue: 5000,
  },
  {
    name: "Jane Smith",
    password: "5678",
    bankAccountValue: 10000,
  },
  {
    name: "Michael Brown",
    password: "4321",
    bankAccountValue: 7500,
  },
  {
    name: "Emily White",
    password: "8765",
    bankAccountValue: 15000,
  },
  {
    name: "David Green",
    password: "2468",
    bankAccountValue: 2000,
  },
];
//greeting
const elgreet = document.querySelector(".greet");
const elexit = document.querySelector(".exit");
//
const elcontainerOfLogin = document.querySelector("#form-to-hidden");
// bring elements for authorization
const inputCode = document.querySelector(".LoginInput");
const inputBtn = document.querySelector(".Login");
//el for represent status of login
const elstatusPin = document.querySelector(".status-pin");
//event to play function checkAuthorization
inputBtn.addEventListener("click", () => {
  checkAuthorization(inputCode);
});

//btn transection
const elwithdrawsBtn = document.querySelector("#withdrawsbtn");
const eldepositeBtn = document.querySelector("#depositebtn");
const elBalanceBtn = document.querySelector("#balancebtn");
const ellasttransctionBtn = document.querySelector("#last-transctionbtn");
//info for all one transection
const elwithdraws = document.querySelector("#withdraws");
const eldeposite = document.querySelector("#deposite");
const elBalance = document.querySelector("#balance");
const ellasttransction = document.querySelector("#last-transction");

//
const btnTransection = document.querySelector("#transections");
const elList = document.querySelector("#list-transection");
//reset default
const elForm = document.querySelector(".form");
elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

//check Authorization
function checkAuthorization() {
  if (maxAttempts > attempts) {
    let autorize = false;
    for (let i = 0; i < bankClients.length; i++) {
      const currentClient = bankClients[i];

      if (inputCode.value === currentClient.password) {
        elstatusPin.textContent = "your in,transaction:";
        currentClientGeneral = currentClient;
        btnTransection.classList.remove("hidden");
        alert("We got you👌");
        autorize = true;
        elcontainerOfLogin.classList.add("hidden");
        elgreet.classList.add("hidden");
        elexit.classList.remove("hidden");

        break;
      }
    }
    if (!autorize) {
      elstatusPin.textContent = "Try again";
      attempts++;
      alert(`Incorrect PIN. Attempts remaining: ${maxAttempts - attempts}`);
    }
  } else {
    alert("Maximum attempts reached. Please try again later.");
  }
  inputCode.value = "";
}

//display transections
btnTransection.addEventListener("click", function () {
  elList.classList.toggle("hidden");
  hideAll();
});

//function to make all div of transection disaperd
function hideAll() {
  elwithdraws.classList.add("hidden");
  eldeposite.classList.add("hidden");
  elBalance.classList.add("hidden");
  ellasttransction.classList.add("hidden");
}
//choose one option transection
elwithdrawsBtn.addEventListener("click", function () {
  hideAll();
  elwithdraws.classList.toggle("hidden");
});
eldepositeBtn.addEventListener("click", function () {
  hideAll();
  eldeposite.classList.toggle("hidden");
});
elBalanceBtn.addEventListener("click", function () {
  hideAll();
  elBalance.classList.toggle("hidden");
  showBalance();
});
ellasttransctionBtn.addEventListener("click", function () {
  hideAll();
  ellasttransction.classList.toggle("hidden");
  showLastAction();
});

//refresh to page
function refreshPage() {
  location.reload();
}
// button refresh
elexit.addEventListener("click", refreshPage);

//event for pull money
const elbtnPull = document.querySelector("#pull");
const elinputToPull = document.querySelector("#inputPull");
const eldisplayPull = document.querySelector(".displayPull");
elbtnPull.addEventListener("click", pullmoney);
//function pull money
function pullmoney() {
  if (elinputToPull.value === "") {
    alert("you need to put valie first");
    return;
  } else cleanLines();
  const valueToPull = elinputToPull.value;
  if (valueToPull > currentClientGeneral.bankAccountValue) {
    alert("Sorry, but you are currently not authorized for this amount");
  } else {
    currentClientGeneral.bankAccountValue =
      currentClientGeneral.bankAccountValue - valueToPull;
    eldisplayPull.textContent = ` you have now${currentClientGeneral.bankAccountValue}$`;
  }
  transactions.push({ key: "pull money", value: valueToPull });
  elinputToPull.value = "";
}

// event for insert money
const elBtnInsurtBtn = document.querySelector("#insert");
const elInputToInsurt = document.querySelector("#inputDeposite");
const eldisplayInsert = document.querySelector(".displayinsert");
elBtnInsurtBtn.addEventListener("click", insertMoney);

//function insert money

function insertMoney() {
  if (elInputToInsurt.value === "") {
    alert("you need to put valie first");
    return;
  } else cleanLines();
  const valueToInsert = elInputToInsurt.value;
  currentClientGeneral.bankAccountValue += +valueToInsert;
  eldisplayInsert.textContent = ` you have now${currentClientGeneral.bankAccountValue}$`;
  transactions.push({ key: "insert money", value: valueToInsert });
  elInputToInsurt.value = "";
}

//function to display balance in h3
function showBalance() {
  cleanLines();
  const elShowBalance = document.querySelector("#showBalance");
  elShowBalance.textContent = `Your transit status is: ${currentClientGeneral.bankAccountValue.toLocaleString()}$`;
  transactions.push({
    key: "show balance acount:",
    value: currentClientGeneral.bankAccountValue,
  });
}

// function to show last action{last transection}
const elshowLastTransction = document.querySelector("#showLatTransction");
function showLastAction() {
  cleanLines();
  const lastTransaction = transactions[transactions.length - 1];

  if (transactions.length === 0) {
    alert("You should take action first");
    return;
  } else
    elshowLastTransction.textContent = `Last action: ${lastTransaction.key} of ${lastTransaction.value}$`;
}

//function to clean diffrent div when we push on buttton for transection
function cleanLines() {
  const elcontaineroptionsdives = document.querySelectorAll(
    ".container-options-dives h3"
  );
  elcontaineroptionsdives.forEach((el) => (el.textContent = ""));
}

/////////////////////////before the connect to array of clients

// const storedPIN = "1234";
// const maxAttempts = 3;
// let attempts = 0;
// let bankAccountValue = 10000;
// let isAuthorization = false;
// let transactions = [];

// // bring elements for authorization
// const inputCode = document.querySelector(".LoginInput");
// const inputBtn = document.querySelector(".Login");
// //el for represent status of login
// const elstatusPin = document.querySelector(".status-pin");
// //event to play function checkAuthorization
// inputBtn.addEventListener("click", () => {
//   checkAuthorization(inputCode);
// });

// //btn transection
// const elwithdrawsBtn = document.querySelector("#withdrawsbtn");
// const eldepositeBtn = document.querySelector("#depositebtn");
// const elBalanceBtn = document.querySelector("#balancebtn");
// const ellasttransctionBtn = document.querySelector("#last-transctionbtn");
// //info for all one transection
// const elwithdraws = document.querySelector("#withdraws");
// const eldeposite = document.querySelector("#deposite");
// const elBalance = document.querySelector("#balance");
// const ellasttransction = document.querySelector("#last-transction");

// //
// const btnTransection = document.querySelector("#transections");
// const elList = document.querySelector("#list-transection");
// //reset default
// const elForm = document.querySelector(".form");
// elForm.addEventListener("submit", function (ev) {
//   ev.preventDefault();
// });

// //check Authorization
// function checkAuthorization() {
//   if (maxAttempts > attempts) {
//     if (inputCode.value === storedPIN) {
//       elstatusPin.textContent = "your in,transection:";
//       isAuthorization = true;
//       btnTransection.classList.remove("hidden");
//       alert("you get premision");
//     } else {
//       elstatusPin.textContent = "Try again";
//       attempts++;
//       alert(`Incorrect PIN. Attempts remaining: ${maxAttempts - attempts}`);
//       if (attempts == maxAttempts) {
//         alert("Card retained due to too many incorrect attempts.");
//       }
//     }
//   } else {
//     alert("Maximum attempts reached. Please try again later.");
//   }
//   inputCode.value = "";
// }
// //display transections
// btnTransection.addEventListener("click", function () {
//   if (isAuthorization) {
//     elList.classList.toggle("hidden");
//     hideAll();
//   }
// });

// //function to make all div of transection disaperd
// function hideAll() {
//   elwithdraws.classList.add("hidden");
//   eldeposite.classList.add("hidden");
//   elBalance.classList.add("hidden");
//   ellasttransction.classList.add("hidden");
// }
// //choose one option transection
// elwithdrawsBtn.addEventListener("click", function () {
//   hideAll();
//   elwithdraws.classList.toggle("hidden");
// });
// eldepositeBtn.addEventListener("click", function () {
//   hideAll();
//   eldeposite.classList.toggle("hidden");
// });
// elBalanceBtn.addEventListener("click", function () {
//   hideAll();
//   elBalance.classList.toggle("hidden");
//   showBalance();
// });
// ellasttransctionBtn.addEventListener("click", function () {
//   hideAll();
//   ellasttransction.classList.toggle("hidden");
//   showLastAction();
// });

// //refresh to page
// function refreshPage() {
//   location.reload();
// }

// //event for pull money
// const elbtnPull = document.querySelector("#pull");
// const elinputToPull = document.querySelector("#inputPull");
// const eldisplayPull = document.querySelector(".displayPull");
// elbtnPull.addEventListener("click", pullmoney);
// //function pull money
// function pullmoney() {
//   if (elinputToPull.value === "") {
//     alert("you need to put valie first");
//     return;
//   } else cleanLines();
//   const valueToPull = elinputToPull.value;
//   if (valueToPull > bankAccountValue) {
//     alert("Sorry, but you are currently not authorized for this amount");
//   } else {
//     bankAccountValue = bankAccountValue - valueToPull;
//     eldisplayPull.textContent = ` you have now${bankAccountValue}`;
//   }
//   transactions.push({ key: "pull money", value: valueToPull });
//   elinputToPull.value = "";
// }

// // event for insert money
// const elBtnInsurtBtn = document.querySelector("#insert");
// const elInputToInsurt = document.querySelector("#inputDeposite");
// const eldisplayInsert = document.querySelector(".displayinsert");
// elBtnInsurtBtn.addEventListener("click", insertMoney);

// //function insert money

// function insertMoney() {
//   if (elInputToInsurt.value === "") {
//     alert("you need to put valie first");
//     return;
//   } else cleanLines();
//   const valueToInsert = elInputToInsurt.value;
//   bankAccountValue += +valueToInsert;
//   eldisplayInsert.textContent = ` you have now${bankAccountValue}`;
//   transactions.push({ key: "insert money", value: valueToInsert });
//   elInputToInsurt.value = "";
// }

// //function to display balance in h3
// function showBalance() {
//   cleanLines();
//   const elShowBalance = document.querySelector("#showBalance");
//   elShowBalance.textContent = `Your transit status is: ${bankAccountValue.toLocaleString()}$`;
//   transactions.push({ key: "show balance", value: elShowBalance.textContent });
// }

// // function to show last action{last transection}
// const elshowLastTransction = document.querySelector("#showLatTransction");
// function showLastAction() {
//   cleanLines();
//   const lastTransaction = transactions[transactions.length - 1];
//   console.log(lastTransaction);

//   if (transactions.length === 0) {
//     alert("You should take action first");
//     return;
//   } else
//     elshowLastTransction.textContent = `Last action: ${lastTransaction.key} of ${lastTransaction.value}$`;
// }

// //function to clean diffrent div when we push on buttton for transection
// function cleanLines() {
//   const elcontaineroptionsdives = document.querySelectorAll(
//     ".container-options-dives h3"
//   );
//   elcontaineroptionsdives.forEach((el) => (el.textContent = ""));
// }
