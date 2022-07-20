// Função que sorteia novamente os filmes no mesmo espaço.

export function resort(movieElement, div) {
  let moviesGrid = document.getElementsByClassName("movie");
  let sectionOfMovies = document.getElementById("MovieByGenreList");

  sectionOfMovies.replaceChild(movieElement, moviesGrid[div]);
}
