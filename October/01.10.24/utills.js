function getDatLocalStorage(key) {
  let data = JSON.parse(localStorage.getItem(key)) || [];
  return data;
}
function saveInlocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function getCurrentDateInYYYYMMDD() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

export const utillModul = {
  getCurrentDateInYYYYMMDD,
  makeId,
  saveInlocalStorage,
  getDatLocalStorage,
};
