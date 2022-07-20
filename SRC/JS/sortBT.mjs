import {grid} from "./random-movies.mjs";

let sectionOfMovies = document.getElementById("MovieByGenreList");

let moreMovie = document.createElement("button");
moreMovie.classList.add("button");
moreMovie.innerText = "Show me movies!"
sectionOfMovies.appendChild(moreMovie);

moreMovie.addEventListener("click", grid);

// ideia de mudança de projeto:
// App que mostra 14 filmes aleatórios. 
// Fazer daquele botão um banner com o nome Randomly ou algo assim