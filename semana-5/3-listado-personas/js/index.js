'use strict';
const dataPersonas = [
  new Persona('Diego', 'Huaman'),
  new Persona('Moises', 'Arrieta'),
  new Persona('Claudia', 'Rejas'),
  new Persona('Jeanfranco', 'Lazarinos'),
  new Persona('Writhney', 'Lazo'),
  new Persona('Febe', 'Chacón')
];

// Create
const agregarPersona = (e) => {
  e.preventDefault();
  const formularioPersona = document.forms['formularioPersona'];
  const nombre = formularioPersona['nombre'].value;
  const apellido = formularioPersona['apellido'].value;

  if (nombre === '' || apellido === '') {
    alert('Completar campos');
  } else {
    const personaAgregada = new Persona(nombre, apellido);
    dataPersonas.push(personaAgregada);

    formularioPersona['nombre'].value = '';
    formularioPersona['apellido'].value = '';

    const personasHtml = getHtmlPersonas(dataPersonas);
    renderHtml(personasHtml, document.getElementById('personas'));
  }
}

// Read
const getHtmlPersonas = (data) => {
  let html = '';
  data.forEach((element) => {
    html += `
      <p class="persona">
        ${element.id}: ${element.nombre} ${element.apellido}
        <button type="button" class="boton-eliminar" onclick='actualizarPersona(${element.id})'>✏</button>
        <button type="button" class="boton-eliminar" onclick='eliminarPersona(${element.id})'>🗑</button>
      </p>
    `;
  });
  return html;
};

const renderHtml = (html, elemento) => {
  elemento.innerHTML = html;
};

// Update
const actualizarPersona = (id) => {
  const persona = dataPersonas.find((element) => {
    return element.id === id;
  });

  const formularioPersona = document.forms['formularioPersona'];
  formularioPersona['nombre'].value = persona.nombre;
  formularioPersona['apellido'].value = persona.apellido;
  // const personasHtml = getHtmlPersonas(dataPersonas);
  // renderHtml(personasHtml, document.getElementById('personas'));
};

// Delete
const eliminarPersona = (id) => {
  const indexPersona = dataPersonas.findIndex((element) => {
    return element.id === id;
  });
  dataPersonas.splice(indexPersona, 1);
  const personasHtml = getHtmlPersonas(dataPersonas);
  renderHtml(personasHtml, document.getElementById('personas'));
};

const documentReady = () => {

  const title = document.getElementById('title');
  // if (sessionStorage.getItem('usuario') === null) {
  if (localStorage.getItem('usuario') === null) {
    const usuario = prompt('Iniciar sesión');
    // sessionStorage.setItem('usuario', usuario);
    localStorage.setItem('usuario', usuario);
    title.innerHTML += ` (${usuario})`;
  } else {
    // const usuario = sessionStorage.getItem('usuario');
    const usuario = localStorage.getItem('usuario');
    title.innerHTML += ` (${usuario})`;
  }

  const formularioPersona = document.getElementById('formularioPersona');
  const botonNuevoListado = document.getElementById('botonNuevoListado');

  const nuevoListado = () => {
    const respuesta = confirm('¿Desea realizar un nuevo listado?');
    if (respuesta) {
      dataPersonas.splice(0, dataPersonas.length);
    }
    const personasHtml = getHtmlPersonas(dataPersonas);
    renderHtml(personasHtml, document.getElementById('personas'));
  };

  const personasHtml = getHtmlPersonas(dataPersonas);
  renderHtml(personasHtml, document.getElementById('personas'));

  formularioPersona.addEventListener('submit', agregarPersona);
  botonNuevoListado.addEventListener('click', nuevoListado);
};

document.addEventListener('DOMContentLoaded', documentReady);