import { secret } from "./secret.js";

//types popular
const TrendingWeek = `https://api.themoviedb.org/3/trending/movie/week?api_key=${secret.key_Movie}`;
const TrendingDay = `https://api.themoviedb.org/3/trending/movie/day?api_key=${secret.key_Movie}`;
const apiUrlFor20PopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${secret.key_Movie}&page=1`;

//current url
let currentUrl = apiUrlFor20PopularMovies;

const updateUrl = (newUrl) => {
  currentUrl = newUrl;
  getPopularMovies();
};
//api request for popular movie
const getPopularMovies = async () => {
  try {
    const response = await axios.get(currentUrl);
    const movies = response.data.results;
    console.log("Popular Movies:", movies);

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

//get data movie
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

getPopularMovies();
export const model = {
  getPopularMovies,
  updateUrl,
  getMovieData,
  getMovieById,
  TrendingDay,
  TrendingWeek,
  apiUrlFor20PopularMovies,
};
