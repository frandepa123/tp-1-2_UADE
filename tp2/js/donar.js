const PRECIO_PLATO = 100;

const inputMonto = document.querySelector("#monto");
const cantidadPlatos = document.querySelector("#cantidadPlatos");
const detalleMonto = document.querySelector("#detalleMonto");
const botonesMonto = document.querySelectorAll(".monto-btn");
const btnDonar = document.querySelector("#btnDonar");

const modal = document.querySelector("#modal");
const modalTexto = document.querySelector("#modalTexto");
const cerrarModal = document.querySelector("#cerrarModal");
const cerrarModal2 = document.querySelector("#cerrarModal2");

function formatear(numero) {
  return numero.toLocaleString("es-AR");
}

function calcularImpacto() {
  let monto = parseInt(inputMonto.value);

  if (isNaN(monto) || monto < 0) {
    monto = 0;
  }

  const platos = Math.floor(monto / PRECIO_PLATO);

  cantidadPlatos.innerText = formatear(platos);
  detalleMonto.innerText = "Estás donando $" + formatear(monto);
}

inputMonto.addEventListener("input", calcularImpacto);

botonesMonto.forEach(function (boton) {
  boton.addEventListener("click", function () {
    botonesMonto.forEach(function (b) {
      b.classList.remove("activo");
    });
    boton.classList.add("activo");

    inputMonto.value = boton.dataset.monto;
    calcularImpacto();
  });
});

btnDonar.addEventListener("click", function () {
  const monto = parseInt(inputMonto.value) || 0;
  const platos = Math.floor(monto / PRECIO_PLATO);

  if (monto <= 0) {
    modalTexto.innerText = "Ingresá un monto para poder donar.";
  } else {
    modalTexto.innerText =
      "Con tu donación de $" + formatear(monto) + " ayudás a repartir " +
      formatear(platos) + " platos de comida. ¡Gracias!";
  }
  modal.classList.add("abierto");
});

function ocultarModal() {
  modal.classList.remove("abierto");
}
cerrarModal.addEventListener("click", ocultarModal);
cerrarModal2.addEventListener("click", ocultarModal);
modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    ocultarModal();
  }
});

calcularImpacto();
