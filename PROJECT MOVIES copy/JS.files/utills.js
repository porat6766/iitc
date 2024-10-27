//util function to get data from storage
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

//util function to save data from storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//export data
export const utills = { getFromStorage, saveToStorage };
