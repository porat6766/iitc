function pla(baseNumber) {
  return (number) => {
    baseNumber + number;
  };
}

const add_4 = pla(4);

add_4(14);
