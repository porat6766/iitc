products_STORAGE_KEY = "productsData";
let products = getDatLocalStorage();
const productsFixed = [
  { id: "1", name: "Laptop", price: 1000 },
  { id: "2", name: "Smartphone", price: 600 },
  { id: "3", name: "Headphones", price: 100 },
  { id: "4", name: "Keyboard", price: 50 },
  { id: "5", name: "Mouse", price: 30 },
  { id: "6", name: "Monitor", price: 300 },
  { id: "7", name: "Printer", price: 150 },
  { id: "8", name: "Webcam", price: 80 },
  { id: "9", name: "USB Cable", price: 10 },
  { id: "10", name: "External Hard Drive", price: 120 },
];
const _productsFixed = document.getElementById("fixedProduct");
function renderProductsFixed() {
  for (let i = 0; i < productsFixed.length; i++) {
    const productFixed = productsFixed[i];
    const ElproductFixed = document.createElement("li");
    ElproductFixed.textContent = ` name:${productFixed.name},   price: ${productFixed.price} `;
    const btnAddFromFixed = document.createElement("button");
    btnAddFromFixed.setAttribute("class", "buttons-Add");
    btnAddFromFixed.addEventListener("click", function () {
      addFixedProduct(productFixed.id);
    });
    btnAddFromFixed.textContent = "Add";
    ElproductFixed.appendChild(btnAddFromFixed);
    _productsFixed.appendChild(ElproductFixed);
  }
}
renderProductsFixed();
function addFixedProduct(id) {
  for (let i = 0; i < productsFixed.length; i++) {
    const productFixedo = productsFixed[i];
    if (productFixedo.id === id) {
      let productExists = false;
      for (let j = 0; j < products.length; j++) {
        if (products[j].id === productFixedo.id) {
          products[j].amount++;
          productExists = true;
          break;
        }
      }
      if (!productExists) {
        productFixedo.amount = 1;
        productFixedo.total = productFixedo.price * productFixedo.amount;
        products.push(productFixedo);
      }

      break;
    }
  }
  saveInlocalStorage();
  renderProducts();
}

const _form_Products = document.getElementById("product-form");

_form_Products.addEventListener("submit", function (event) {
  event.preventDefault();

  const _inputName = document.getElementById("name-product");
  const _inputPrice = document.getElementById("price-product");
  const _inputAmount = document.getElementById("amount-product");

  addProduct(_inputName.value, _inputPrice.value, _inputAmount.value);
  _inputName.value = "";
  _inputPrice.value = "";
  _inputAmount.value = "";
});

function remoProduct(id) {
  products = products.filter((product) => product.id !== id);
  saveInlocalStorage();
  renderProducts();
}

function addProduct(nameInput, priceInput, amountInput) {
  if (!nameInput || !priceInput || !amountInput) {
    alert("Please put all the details first!!");
    return;
  }
  let NewProduct = {
    id: makeId(),
    name: nameInput,
    price: priceInput,
    amount: amountInput,
  };
  products.push(NewProduct);
  saveInlocalStorage();
  renderProducts();
}

function renderProducts() {
  const _body_table_products = document.getElementById("body-table");
  _body_table_products.innerHTML = "";
  let totalProductS = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const elTrBigProduct = document.createElement("tr");
    totalProductS += parseInt(product.amount) * parseInt(product.price);
    elTrBigProduct.innerHTML = `
    <td></td>
    <td>${product.name}</td>
    <td>${parseInt(product.price)}</td>
    <td>${parseInt(product.amount)}</td>
    <td>${parseInt(product.amount) * parseInt(product.price)}</td>
    <button onclick="remoProduct('${
      product.id
    }')" type="button" id="remove-product">remove</button>
    `;
    _body_table_products.append(elTrBigProduct);
  }
  const _bigTotal = document.getElementById("big-total");
  _bigTotal.innerHTML = `Total prices:  ${totalProductS}`;
}

function getDatLocalStorage() {
  let dataProducts = JSON.parse(localStorage.getItem(products_STORAGE_KEY));
  if (!dataProducts) {
    dataProducts = [];
  }
  return dataProducts;
}

function saveInlocalStorage() {
  localStorage.setItem(products_STORAGE_KEY, JSON.stringify(products));
}

renderProducts();
