
// funções que mostram a imagem do usuário e a logo da página

var sectionOfHeader = document.getElementById("headerMenu");

export function headerLogo() {
  let imgLogo = document.createElement("h1");
  imgLogo.innerText = "Randomly";
  sectionOfHeader.appendChild(imgLogo);
}
export function userImage() {
  let userImage = document.createElement("img");
  userImage.src = "../SRC/CSS/assets/logo.svg";
  // o source é o que vai mudar se o usuário quiser mudar a foto de perfil
  sectionOfHeader.appendChild(userImage);
}

userImage();
headerLogo();
