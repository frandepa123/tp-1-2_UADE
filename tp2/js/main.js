const botonKebab = document.querySelector(".kebab");
const menuLinks = document.querySelector(".nav-links");

if (botonKebab && menuLinks) {
  botonKebab.addEventListener("click", function () {
    menuLinks.classList.toggle("abierto");
  });

  const links = menuLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuLinks.classList.remove("abierto");
    });
  });
}
