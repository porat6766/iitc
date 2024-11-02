// const type = "sfw";
// const category = "smile";

// fetch(`https://api.waifu.pics/${type}/${category}`, { method: "GET" })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.url);
//     const img = document.createElement("img");
//     img.src = data.url;
//     document.body.appendChild(img);
//   })
//   .catch((error) => console.error("Error:", error));

// let ur;
// fetch(`https://api.waifu.pics/many/${type}/${category}`, {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({}),
// }).then((res) => {
//   ur = res.url;
//   console.log(ur);
// });

//get by post 30 photo
const type = "sfw";
const category = "bonk";
const elGrid = document.querySelector(".elGrid");
fetch(`https://api.waifu.pics/many/${type}/${category}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    exclude: [],
  }),
})
  .then((response) => response.json())
  .then((data) => {
    data.files.slice(0, 10).forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      elGrid.appendChild(img);
    });
  })
  .catch((error) => console.error("Error:", error));
