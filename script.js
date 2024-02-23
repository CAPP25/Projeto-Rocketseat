function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver a imagem light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar - copia.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
