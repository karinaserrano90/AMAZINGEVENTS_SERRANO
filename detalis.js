const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const contenedor = document.getElementById('contenedor');

const id = params.get("id");

let eventos = data.events;
let evento = eventos.find(ev => ev._id == id);
mostrarCardDetalles(evento, contenedor);