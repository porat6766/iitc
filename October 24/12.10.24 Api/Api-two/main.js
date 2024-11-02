const eldataApi = document.querySelector(".data-api");

fetch(`https://api.fbi.gov/wanted/v1/list`)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    showNames(data);
  });

const showNames = (data) => {
  console.log(data.items);

  data.items.forEach((prisoner) => {
    names = prisoner.aliases;
    names.forEach((name) => {
      const elLi = document.createElement("li");
      elLi.textContent = name;
      eldataApi.appendChild(elLi);
    });
  });
};
