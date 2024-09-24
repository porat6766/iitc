let products = [];

//
//
//
const fixedProducts = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 600 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Keyboard", price: 50 },
  { id: 5, name: "Mouse", price: 30 },
  { id: 6, name: "Monitor", price: 300 },
  { id: 7, name: "Printer", price: 150 },
  { id: 8, name: "Webcam", price: 80 },
  { id: 9, name: "USB Cable", price: 10 },
  { id: 10, name: "External Hard Drive", price: 120 },
];

//
//
function addProduct(event) {
  event.preventDefault();
  const inputName = document.querySelector(".nameProduct");
  const inputPrice = document.querySelector(".price");
  const inputamount = document.querySelector(".amount");

  if (!inputName.value || !inputPrice.value || !inputamount.value) {
    alert("you probably miss field");
    return;
  }

  let templetProduct = {
    id: makeId(),
    nameProduct: inputName.value,
    Price: parseFloat(inputPrice.value),
    amount: parseInt(inputamount.value),
    total: parseFloat(inputamount.value) * parseInt(inputPrice.value),
  };
  products.push(templetProduct);
  inputName.value = "";
  inputPrice.value = "";
  inputamount.value = "";
  console.log(products);
  renderToDoList(products);
}

///
///
///

function renderToDoList() {
  const listsUl = document.getElementById("productsElement");
  listsUl.innerHTML = "";
  let totalProducts = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    totalProducts += product.total;
    listsUl.innerHTML += `
    <li class="elOneOfTheList">
    product name: ${product.nameProduct} 
    product price: ${product.Price} 
    amount: ${product.amount} 
    total: ${product.total}
    <button type ="button" onclick="remoProduct('${product.id}')" class="removeButton">remove</button>
    <button type ="button" onclick="addAmount('${product.id}')" class="addAmount">AMOUNT</button>
    </li>
    `;
  }
  listsUl.innerHTML += `<div class="totalProduct">total prices: ${totalProducts}</div>
`;
}

function remoProduct(id) {
  products = products.filter((product) => product.id !== id);
  renderToDoList(products);
}
//
//
//
//
//
//
function renderFixedProducts(fixedProducts) {
  const UlfixedProducts = document.querySelector(".UlfixedProducts");
  UlfixedProducts.innerHTML = "";
  for (let i = 0; i < fixedProducts.length; i++) {
    const elOneFixedProducts = fixedProducts[i];
    UlfixedProducts.innerHTML += `
        <li class="elOneFixedProducts">
        product name: ${elOneFixedProducts.name},    
        price: ${parseInt(elOneFixedProducts.price)}
        <button class="addProductToMainList" data-id="${
          elOneFixedProducts.id
        }">Add</button>
        </li>
        `;
  }
  const btnSAddMain = document.querySelectorAll(".addProductToMainList");
  btnSAddMain.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      const productFixed = fixedProducts.find(
        (product) => product.id === productId
      );
      addToTheMainList(productFixed);
    });
  });
}

//
//
function addToTheMainList(productFixed) {
  const existingProduct = products.find(
    (product) =>
      product.nameProduct === productFixed.name &&
      product.Price === productFixed.price
  );

  if (existingProduct) {
    existingProduct.amount += 1;
    existingProduct.total = existingProduct.amount * productFixed.price;
  } else {
    products.push({
      id: makeId(),
      nameProduct: productFixed.name,
      Price: productFixed.price,
      amount: 1,
      total: productFixed.price,
    });
  }
  renderToDoList(products);
}

//
//
//
function addAmount(id) {
  const product = products.find((product) => product.id === id);
  if (product) {
    product.amount += 1; // הגברת הכמות ב-1
    product.total = product.amount * product.Price; // חישוב הסכום החדש
    renderToDoList(products); // עדכון התצוגה
  }
}
//
//
//
renderFixedProducts(fixedProducts);
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
