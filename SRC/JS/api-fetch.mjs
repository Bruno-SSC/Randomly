import * as keys from "./keys.mjs";

export function getMovies(request, page) {
  let url = keys.BASE_URL + request + keys.API_KEY + page;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
      // se eu retornar data.results eu vou receber apenas a primeira página
    });
}
