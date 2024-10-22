import { model } from "./Model.js";

//bring ul movies just for render
const elmovieList = document.querySelector(".movie-list");

//render to all type of popular movie include fav(also if one movie)
//always get array empty/movies objects
const renderMovie = (data) => {
  ////////
  const elDaetailsMoviePage = document.querySelector(".daetails-movie-page");
  clearTextContent(elDaetailsMoviePage);
  ////////

  const elul = elmovieList;
  elul.innerHTML = "";

  data.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("movie-item");
    li.setAttribute("id", movie.id);

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

    const elFavorite = document.createElement("div");
    elFavorite.classList.add("favorite");
    elFavorite.setAttribute("id", movie.id);
    const isFavorite = model.favoriteMovie.some((fav) => fav.id === movie.id);
    elFavorite.textContent = isFavorite ? "❤️" : "🤍";

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(elFavorite);

    elul.appendChild(li);
  });
};

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

//////////// clean elements child and grandchild   for render fav move and not
//reset them (השיטה של הפעלת פונקציב בתוף פונקציה נקראת-רקורסיה)
const clearTextContent = (element) => {
  Array.from(element.children).forEach((child) => {
    clearTextContent(child);
    child.textContent = "";
  });
};

//render details movie by click on li(card movie)
const renserDetails = (movieDetails) => {
  ////////////////
  const elhomePage = document.querySelector(".home-page");
  //check what better reset all or do like i do
  //clean the textcontent -- elhomePage.innerHTML = "";
  console.log(elhomePage);

  clearTextContent(elhomePage);
  console.log(elhomePage);
  ///////////
  const elcontainerPosterDetails = document.querySelector(".poster-details");
  const elContainerImgSCast = document.querySelector(".container-img-cast");

  //new date order, just year
  const dateRealeseMovie = new Date(movieDetails.release_date);
  const dateMovieUpdate = dateRealeseMovie.getFullYear();

  //found director
  const founddirect =
    movieDetails.credits.crew.find((worker) => {
      return worker.job === "Director";
    }) || "";
  console.log(founddirect);

  elcontainerPosterDetails.innerHTML = `
  <div class="container-poster">
  <img class="poster-movie" src= https://image.tmdb.org/t/p/w500${
    movieDetails.poster_path
  } alt="${movieDetails.title} poster">
  </div>
  <div class="details">
  <h2 class="title-movie-page2">${movieDetails.title}</h2>
  <h5 class="year"><span>Release date:</span> ${
    dateMovieUpdate || "Information is missing. Apologies."
  }</h5>
  <div class="genres-container">
<h5 class="genres-page2">
  <span>genres:</span> ${
    movieDetails.genres.length > 0
      ? movieDetails.genres.map((genre) => genre.name).join(", ")
      : "No genres available"
  }
</h5>
  </div>
  <h5 class="Runtime"><span>Runtime:</span> ${movieDetails.runtime} minutes</h5>
  <div class="score"><span>Users Rating:</span> ${
    movieDetails.vote_average
  } 🌟</div>
  <p class="tagline"><span>Tagline:</span> ${
    movieDetails.tagline || "Information is missing. Apologies."
  }</p>
  <p class="overview"><span>Overview:</span> ${
    movieDetails.overview || "Information is missing. Apologies."
  }</p>
  <p class="director"><span>Director:</span>${
    founddirect.name || "Information is missing. Apologies."
  }</p>
  </div>
  `;

  //array method to get all cast(players)
  movieDetails.credits.cast.forEach((player) => {
    if (movieDetails.credits.cast.length === 0) {
      return;
    }
    const elContainerImgTitle = document.createElement("div");
    elContainerImgTitle.classList.add("Container-Img-Title");
    const elCharacterName = document.createElement("label");
    elCharacterName.classList.add("title-img");
    const elCharacter = document.createElement("h4");
    elCharacter.classList.add("character");
    const elCharacterImg = document.createElement("img");
    elCharacterImg.classList.add("img-cast");

    elCharacterName.textContent = player.name;
    elCharacter.textContent = player.character;
    elCharacterImg.src = `https://image.tmdb.org/t/p/w500${player.profile_path}`;
    elCharacterImg.alt = `${player.name} photo`;
    elCharacterImg.onerror = () => {
      elCharacterImg.src = `https://robohash.org/unique.png?set=set3
`;
    };

    elCharacterName.appendChild(elCharacter);
    elContainerImgTitle.appendChild(elCharacterName);
    elContainerImgTitle.appendChild(elCharacterImg);
    elContainerImgSCast.appendChild(elContainerImgTitle);
  });
};

//export data mainly for controller
export const views = {
  renderMovie,
  searchMovieByName,
  renserDetails,
  elmovieList,
};
