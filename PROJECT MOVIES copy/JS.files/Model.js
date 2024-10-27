import { secret } from "./secret.js";
import { utills } from "./utills.js";

//favorite movie save in storage
let favoriteMovie = utills.getFromStorage(secret.key_storage);

//types popular
const TrendingWeek = `https://api.themoviedb.org/3/trending/movie/week?api_key=${secret.key_Movie}`;
const TrendingDay = `https://api.themoviedb.org/3/trending/movie/day?api_key=${secret.key_Movie}`;
const apiUrlFor20PopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${secret.key_Movie}&page=1`;

//current url(to choose type popular(in the first run het get popular in all time))
let currentUrl = apiUrlFor20PopularMovies;

//function that do new placement to current url(leistener DOM)
const updateUrl = (newUrl) => {
  currentUrl = newUrl;
  getPopularMovies();
};
//API request for popular movie
const getPopularMovies = async () => {
  try {
    const response = await axios.get(currentUrl);
    const movies = response.data.results;

    return movies;
  } catch (error) {
    const elDescribesTypePopular = document.querySelector(
      ".Describes-type-popular"
    );
    elDescribesTypePopular.textContent =
      "Sorry, the movie could not be found. Please check your internet connection and try again.";
    console.error("Error fetching movies:", error);
    return [];
  }
};

//API get movie bi ID
function getMovieById(inputId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${inputId}?api_key=${secret.key_Movie}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching movie by ID:", error);
      throw error;
    });
}

//get data movie(details)
function getMovieData(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${secret.key_Movie}&append_to_response=credits`
    )
    .then((response) => {
      console.log("Movie details:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching movie by ID:", error);
      throw error;
    });
}

//handel with FAVORITE MOVIE
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

//in case fav li clicked remove function
const removeFromFav = (id, item) => {
  model.favoriteMovie = model.favoriteMovie.filter((movie) => {
    return movie.id !== Number(id);
  });
  utills.saveToStorage(secret.key_storage, model.favoriteMovie);
};

getPopularMovies();
//export mainly for controller and views
export const model = {
  getPopularMovies,
  updateUrl,
  getMovieData,
  getMovieById,
  TrendingDay,
  TrendingWeek,
  apiUrlFor20PopularMovies,
  favoriteMovie,
  filterAndSaveToLocalStorage,
};
