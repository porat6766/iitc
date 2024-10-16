import { model } from "./Model.js";
import { views } from "./view.js";

//filter by id elements
const elcontainerSearchBiId = document.querySelector(".container-search-byId");
const elbtnSearchIdOpenId = document.querySelector("#btn-search-id");
const elinputId = document.querySelector("#input-id");
const elBtnId = document.querySelector("#btn-id");
const elcontainerSearchById = document.querySelector(".container-search-byId");

//brings all connect to filter by search
const elBtnSearch = document.querySelector("#btn-search-name");
const elinputSearch = document.querySelector("#input-search");

//bring ul movies
const elmovieList = document.querySelector(".movie-list");

//bring el Describes-type-popular
const elDescribesTypePopular = document.querySelector(
  ".Describes-type-popular"
);

//bring popular option
const elselectTypePopular = document.querySelector("#select-popular");

//change url and rending again
elselectTypePopular.addEventListener("change", (ev) => {
  elDescribesTypePopular.textContent = "";
  if (ev.target.value === "today") {
    model.updateUrl(model.TrendingDay);
    elDescribesTypePopular.textContent = "Today's Trending";
    elinputSearch.value = "";
  } else if (ev.target.value === "week") {
    model.updateUrl(model.TrendingWeek);
    elDescribesTypePopular.textContent = "Week's Popular";
    elinputSearch.value = "";
  } else if ((ev.target.value = "all")) {
    model.updateUrl(model.apiUrlFor20PopularMovies);
    elDescribesTypePopular.textContent = "";
    elinputSearch.value = "";
  }
  model.getPopularMovies().then((res) => {
    views.renderMovie(res);
  });
});

model.getPopularMovies().then((res) => {
  views.renderMovie(res);
});

//input add listhner by "change"
elinputSearch.addEventListener("input", () => {
  views
    .searchMovieByName(
      elinputSearch.value,
      model.getPopularMovies,
      elDescribesTypePopular
    )
    .then((res) => {
      views.renderMovie(res);
    });
});

//btn Search add lishner
elBtnSearch.addEventListener("click", () => {
  if (elinputSearch.value === "") {
    alert("❌ Please enter a movie name!");
  }
  elinputSearch.value = "";
});

//
elbtnSearchIdOpenId.addEventListener("click", () => {
  elcontainerSearchBiId.classList.toggle("hide");
});

elBtnId.addEventListener("click", () => {
  elDescribesTypePopular.textContent = "";
  if (elinputId.value === "") {
    alert("❌ Please enter a movie id!");
  } else {
    model
      .getMovieById(elinputId.value)
      .then((res) => {
        views.renderMovie([res]);
      })
      .catch(() => {
        views.renderMovie([]);
        elDescribesTypePopular.textContent = "Movie not found!";
      });
    elinputId.value = "";
    elcontainerSearchById.classList.add("hide");
  }
});

export const controller = { elmovieList };
