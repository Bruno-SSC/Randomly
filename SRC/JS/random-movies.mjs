import { showMovies } from "./show-movies.mjs";
import { getMovies } from "./api-fetch.mjs";

var array = [];
var equal = false;

export function grid() {
  let i = Math.ceil(Math.random() * 500);
  for (var num of array) {
    if (i == num) {
      equal = true;
    }
  }

  if (equal != true) {
    var promise = getMovies("/discover/movie/", `&page=${i}`);
    showMovies(promise);
    array.push(i);
  }
  equal = false;
}

grid();