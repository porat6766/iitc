//Note: that it takes a few seconds for the information to arrive

const elapiInfo = document.querySelector(".api-info");

fetch(`https://coronavirus.m.pipedream.net`)
  .then((data) => data.json())
  .then((info) => {
    showData(info.dataSource.publishedBy);
    console.log(info);
  });

const showData = (data) => {
  const para = document.createElement("p");
  para.style.color = "brown";
  para.innerText = `The info come from: ${data}`;
  elapiInfo.appendChild(para);
};
