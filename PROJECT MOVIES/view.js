import { controller } from "./controller.js";
import { model } from "./Model.js";

function render(data) {
  const elul = controller.elmovieList;
  elul.innerHTML = "";

  data.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("movie-item");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = movie.title;
    img.classList.add("movie-poster");

    const title = document.createElement("h3");
    title.textContent = movie.title;
    title.classList.add("movie-title");

    const description = document.createElement("p");
    description.textContent = movie.overview;
    description.classList.add("movie-description");
    description.classList.add("hidden");

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(description);

    elul.appendChild(li);
  });
}

//function search movie by chart and bring array movies filtered
function searchMovieByName(input, allMovies, elDiscribeNotFound) {
  return allMovies().then((movies) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(input.toLowerCase())
    );
    if (filteredMovies.length === 0) {
      elDiscribeNotFound.textContent = "Movie not found";
    } else {
      elDiscribeNotFound.textContent = "";
    }
    return filteredMovies;
  });
}

export const views = { renderMovie: render, searchMovieByName };
