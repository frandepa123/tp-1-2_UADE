const formulario = document.querySelector("#formContacto");
const modal = document.querySelector("#modal");
const cerrarModal = document.querySelector("#cerrarModal");
const cerrarModal2 = document.querySelector("#cerrarModal2");
const modalTexto = document.querySelector("#modalTexto");

const campoNombre = document.querySelector("#nombre");
const campoEmail = document.querySelector("#email");
const campoMotivo = document.querySelector("#motivo");
const campoMensaje = document.querySelector("#mensaje");

function marcar(campo, esValido) {
  const grupo = campo.parentElement;
  if (esValido) {
    grupo.classList.remove("invalido");
  } else {
    grupo.classList.add("invalido");
  }
  return esValido;
}

function emailValido(valor) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(valor);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let todoOk = true;

  if (!marcar(campoNombre, campoNombre.value.trim() !== "")) todoOk = false;
  if (!marcar(campoEmail, emailValido(campoEmail.value.trim()))) todoOk = false;
  if (!marcar(campoMotivo, campoMotivo.value !== "")) todoOk = false;
  if (!marcar(campoMensaje, campoMensaje.value.trim().length >= 10)) todoOk = false;

  if (todoOk) {
    modalTexto.innerText =
      "Gracias " + campoNombre.value.trim() + ", recibimos tu mensaje. Te vamos a responder muy pronto.";
    modal.classList.add("abierto");
    formulario.reset();
  }
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
