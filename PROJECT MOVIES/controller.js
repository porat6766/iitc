import { model } from "./JS.files/Model.js";
import { utills } from "./JS.files/utills.js";
import { views } from "./JS.files/view.js";
let ifSearchPopularOrFavorite = false;
//bring dark-mode
const eltoggleSwitch = document.getElementById("toggle-dark-mode");
const eltogglkljeSwitch = document.getElementById("navbar");

//filter by id elements
const elcontainerSearchBiId = document.querySelector(".container-search-byId");
const elbtnSearchIdOpenId = document.querySelector("#btn-search-id");
const elinputId = document.querySelector("#input-id");
const elBtnId = document.querySelector("#btn-id");
const elcontainerSearchById = document.querySelector(".container-search-byId");

//brings all connect to filter by search
const elBtnSearch = document.querySelector("#btn-search-name");
const elinputSearch = document.querySelector("#input-search");

//bring el Describes-type-popular
const elDescribesTypePopular = document.querySelector(
  ".Describes-type-popular"
);

//bring popular option
const elselectTypePopular = document.querySelector("#select-popular");

// my movie el and event listener
const elfavoriteMovies = document.querySelector(".favorite-movies");

elfavoriteMovies.addEventListener("click", () => {
  console.log(model.favoriteMovie);

  views.renderMovie(model.favoriteMovie);
  getAllLiMovies();
  addToFav();
  elDescribesTypePopular.textContent = "MY MOVIES";
});

//change url and rending again and changung describe type popular and reset to input
// and display functions to do event listener after exist
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
  model
    .getPopularMovies()
    .then((res) => {
      views.renderMovie(res);
      getAllLiMovies();
    })
    .then(() => {
      addToFav();
    });
  ifSearchPopularOrFavorite = false;
});

// //bring all li per one movie for make render data on movie and render
const getAllLiMovies = () => {
  const elAllMovies = document.querySelectorAll(".movie-item");
  elAllMovies.forEach((movieLi) => {
    movieLi.addEventListener("click", () => {
      model.getMovieData(movieLi.id).then((res) => {
        views.renserDetails(res);
        console.log(res);
      });
    });
  });
};

//add event to search by name INPUT
elinputSearch.addEventListener("input", () => {
  let datamovie;
  if (ifSearchPopularOrFavorite) {
    datamovie = model.favoriteMovie;
  } else {
    datamovie = model.getPopularMovies;
  }
  views
    .searchMovieByName(elinputSearch.value, datamovie, elDescribesTypePopular)
    .then((res) => {
      views.renderMovie(res);
      getAllLiMovies();
      addToFav();
    });
});

//add event to search by name BUTTON
elBtnSearch.addEventListener("click", () => {
  if (elinputSearch.value === "") {
    alert("❌ Please enter a movie name!");
  }
  elinputSearch.value = "";
});

// event to open box (search by id)
elbtnSearchIdOpenId.addEventListener("click", () => {
  elcontainerSearchBiId.classList.toggle("hidden");
});

//add event listener to search by ID BUTTON and add function
//to bring option to more option on element(like get data movie and add FAV)
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
      .then(() => {
        getAllLiMovies();
        addToFav();
      })
      .catch(() => {
        views.elmovieList.textContent = "";
        elDescribesTypePopular.textContent = "Movie not found!";
      });
    elinputId.value = "";
    elcontainerSearchById.classList.add("hidden");
    elinputSearch.value = "";
  }
});

//function to bring all fave option li and make them
// to have listener to add to fav, and stop event dad to
//move to deatail page
const addToFav = () => {
  const elFavorites = document.querySelectorAll(".favorite");
  elFavorites.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      model.filterAndSaveToLocalStorage(item.id, item);
    });
  });
};

//dark-mode listener anf function
const checkMode = utills.getFromStorage("Dark-Mode-Status") === true;
console.log(checkMode);

if (checkMode) {
  document.body.style.backgroundImage =
    "url('./logo/Screenshot 2024-10-20 191830.png')";
  eltoggleSwitch.checked = true;
  eltogglkljeSwitch.style.backgroundColor = "black";
}

eltoggleSwitch.addEventListener("change", () => {
  if (eltoggleSwitch.checked) {
    document.body.style.backgroundImage =
      "url('./logo/Screenshot 2024-10-20 191830.png')";
    eltogglkljeSwitch.style.backgroundColor = "black";
    utills.saveToStorage("Dark-Mode-Status", true);
  } else {
    document.body.style.backgroundImage =
      "url('./logo/Screenshot 2024-10-20 125132.png')";
    eltogglkljeSwitch.style.backgroundColor = " rgb(127, 51, 51)";
    utills.saveToStorage("Dark-Mode-Status", false);
  }
});

//render home page
model
  .getPopularMovies()
  .then((res) => {
    views.renderMovie(res);
  })
  .then(() => {
    getAllLiMovies();
  })
  .then(() => {
    addToFav();
  });
