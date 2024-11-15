const getAllBooks = async () => {
  const getBook = await fetch(`http://localhost:3000/api/books/getAll`, {
    method: "GET",
  });
  const res = await getBook.json();
  return res.data;
};

const getMyBooks = async (userId) => {
  const getBook = await fetch(
    `http://localhost:3000/api/books/getMyBook/${userId}`,
    {
      method: "GET",
    }
  );
  const res = await getBook.json();
  console.log(res);

  return res.data;
};

const renderBooks = (data, el) => {
  el.innerHTML = "";
  data.forEach((book) => {
    const elLi = document.createElement("li");
    elLi.classList.add("li-book");
    elLi.innerHTML = `
        <p class="descreption" >${book["full-data"]}</p>
        <img class="poster" src="https://static.vecteezy.com/system/resources/thumbnails/009/384/332/small_2x/old-vintage-book-clipart-design-illustration-free-png.png" alt="Book Image" style="width:100px; height:auto;">
      `;
    el.appendChild(elLi);
  });
};

export default { getAllBooks, getMyBooks, renderBooks };
