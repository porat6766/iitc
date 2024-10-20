import { model } from "./Model.js";
import { secret } from "./secret.js";
import { utills } from "./utills.js";
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

const elfavoriteMovies = document.querySelector(".favorite-movies");

elfavoriteMovies.addEventListener("click", () => {
  views.renderMovie(model.favoriteMovie);
  getAllLiMovies();
  addToFav();
  elDescribesTypePopular.textContent = "MY MOVIES";
});

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
  model
    .getPopularMovies()
    .then((res) => {
      views.renderMovie(res);
      getAllLiMovies();
    })
    .then(() => {
      addToFav();
    });
});

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

// //bring all li per one movie
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

//btn Search add listener
elBtnSearch.addEventListener("click", () => {
  if (elinputSearch.value === "") {
    alert("❌ Please enter a movie name!");
  }
  elinputSearch.value = "";
});

//
elbtnSearchIdOpenId.addEventListener("click", () => {
  elcontainerSearchBiId.classList.toggle("hidden");
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
        elmovieList.textContent = "";
        elDescribesTypePopular.textContent = "Movie not found!";
      });
    elinputId.value = "";
    elcontainerSearchById.classList.add("hidden");
  }
});

const addToFav = () => {
  const elFavorites = document.querySelectorAll(".favorite");
  elFavorites.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      filterAndSaveToLocalStorage(item.id, item);
    });
  });
};

const filterAndSaveToLocalStorage = (id, item) => {
  model.getPopularMovies().then((res) => {
    const checkIfExists = model.favoriteMovie.some((movie) => {
      return movie.id === Number(id);
    });
    if (checkIfExists) {
      item.textContent = "🤍";
      removeFromFav(id, item);
      return;
    } else {
      const filteredMovies = res.filter((movie) => movie.id === Number(id));
      model.favoriteMovie.push(...filteredMovies);
      item.textContent = "❤️";
      utills.saveToStorage(secret.key_storage, model.favoriteMovie);
    }
  });
};

const removeFromFav = (id, item) => {
  model.favoriteMovie = model.favoriteMovie.filter((movie) => {
    return movie.id !== Number(id);
  });
  utills.saveToStorage(secret.key_storage, model.favoriteMovie);
};

export const controller = { elmovieList };
