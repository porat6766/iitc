function init() {
  const name = "moz";
  function display() {
    console.log(name);
  }
  display();
}

function creatCounter() {
  let count = 0;
  function counter() {
    count++;
    return count;
  }
  return counter;
}

const counter_1 = creatCounter();
const counter_2 = creatCounter();
