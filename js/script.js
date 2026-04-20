function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("ligth")) {
    //se tiver ligth mode, addicionar a imagem ligth
    img.setAttribute("src", "/assets/avatar-ligth.png");
  } else {
    //se não tiver ligth mode,adicionar a imagem dark
    img.setAttribute("src", "/assets/avatar.png");
  }
}
