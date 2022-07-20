import * as keys from "./keys.mjs";
var test = false;

export function movieInfo(i, movieElement, movie) {
  if (test == false) {
    let { title } = movie;

    movieElement.innerHTML += `
      <p>${title}</p>
      `;

    test = true;
  } else {
    let { poster_path } = movie;

    movieElement.innerHTML = `<img id="img${i}" src="${
      keys.IMG_BASE_URL + poster_path
    }" alt="MovieImg"></img>`;

    test = false;
  }
}
