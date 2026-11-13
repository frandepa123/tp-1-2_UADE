const equipo = [
  {
    nombre: "Laura Gómez",
    rol: "Fundadora y Directora",
    desc: "Arrancó Mesa Abierta en 2018 con una camioneta prestada.",
  },
  {
    nombre: "Martín Díaz",
    rol: "Coordinador de Logística",
    desc: "Organiza las rutas de rescate y reparto de alimentos.",
  },
  {
    nombre: "Sofía Pérez",
    rol: "Responsable de Voluntarios",
    desc: "Capacita y acompaña a los más de 300 voluntarios.",
  },
  {
    nombre: "Juan Torres",
    rol: "Alianzas con Empresas",
    desc: "Suma supermercados y empresas que donan alimentos.",
  },
];

const contenedorEquipo = document.querySelector("#equipo");

equipo.forEach(function (persona) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("miembro");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  const iniciales = persona.nombre
    .split(" ")
    .map(function (palabra) {
      return palabra.charAt(0);
    })
    .join("");
  avatar.innerText = iniciales;

  const titulo = document.createElement("h3");
  titulo.innerText = persona.nombre;

  const rol = document.createElement("p");
  rol.classList.add("rol");
  rol.innerText = persona.rol;

  const descripcion = document.createElement("p");
  descripcion.innerText = persona.desc;

  tarjeta.appendChild(avatar);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(rol);
  tarjeta.appendChild(descripcion);

  contenedorEquipo.appendChild(tarjeta);
});
