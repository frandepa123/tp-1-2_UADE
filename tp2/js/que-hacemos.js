const pista = document.querySelector("#pista");
const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const contenedorPuntos = document.querySelector("#puntos");

let indiceActual = 0;
const totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const punto = document.createElement("button");
  punto.classList.add("punto");
  if (i === 0) {
    punto.classList.add("activo");
  }
  punto.addEventListener("click", function () {
    indiceActual = i;
    actualizarCarrousel();
  });
  contenedorPuntos.appendChild(punto);
}

const puntos = document.querySelectorAll(".punto");

function actualizarCarrousel() {
  pista.style.transform = "translateX(-" + indiceActual * 100 + "%)";

  puntos.forEach(function (punto, i) {
    if (i === indiceActual) {
      punto.classList.add("activo");
    } else {
      punto.classList.remove("activo");
    }
  });
}

btnNext.addEventListener("click", function () {
  indiceActual++;
  if (indiceActual >= totalSlides) {
    indiceActual = 0;
  }
  actualizarCarrousel();
});

btnPrev.addEventListener("click", function () {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = totalSlides - 1;
  }
  actualizarCarrousel();
});

setInterval(function () {
  indiceActual++;
  if (indiceActual >= totalSlides) {
    indiceActual = 0;
  }
  actualizarCarrousel();
}, 5000);
