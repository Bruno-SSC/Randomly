import * as keys from "./keys.mjs";
import { resort } from "./resort.mjs";
import { movieInfo } from "./movie-info.mjs";
var test = false;

export function showMovies(promise) {
  promise.then((movies) => {
    for (let i = 0; i < 14; i++) {
      let movie = movies.results[i];

      let { poster_path } = movie;

      let sectionOfMovies = document.getElementById("MovieByGenreList");

      let movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      movieElement.innerHTML = `
      <img id="img${i}" src="${
        keys.IMG_BASE_URL + poster_path
      }" alt="MovieImg"></img>
      `;
      movieElement.addEventListener("click", function () {
        movieInfo(i, movieElement, movie);
      });

      if (test == false) {
        sectionOfMovies.insertBefore(movieElement, sectionOfMovies.firstChild);
      } else if (test == true) {
        resort(movieElement, i);
      }
      if (i == 13) {
        test = true;
      }
    }
  });
}
