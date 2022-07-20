// mostra um filme em recomendação

import * as keys from "./keys.mjs";
import { getMovies } from "./api-fetch.mjs";

function showMovieRecommend(promise) {
  promise.then((movies) => {
    let { poster_path, title, overview } = movies.results[0];

    let sectionRecommend = document.getElementById("MovieRecommend");

    let movieImage = document.createElement("div");
    let movieInfo = document.createElement("div");

    movieInfo.setAttribute("id", "movieInfo");
    movieImage.setAttribute("id", "movieImage");

    movieInfo.innerHTML = `
    <h3>${title}</h3>
    <p> ${overview} </p>
    `;

    movieImage.innerHTML = `
        <img src="${keys.IMG_BASE_URL + poster_path}" alt="MovieImg"></img>
        `;

    sectionRecommend.appendChild(movieInfo);
    sectionRecommend.appendChild(movieImage);
  });
}

// Mostra um filme recomendado do dia

var promise = getMovies("/trending/movie/day", "&page=1");
showMovieRecommend(promise);
