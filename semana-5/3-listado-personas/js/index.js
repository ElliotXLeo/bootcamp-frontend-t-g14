'use strict';
const documentReady = () => {
  const dataPersonas = [
    new Persona('Diego', 'Huaman'),
    new Persona('Moises', 'Arrieta')
  ];

  // {
  //   nombre: 'Elliot',
  //   apellido: 'Garamendi'
  // },
  // {
  //   nombre: 'Writhney',
  //   apellido: 'Lazo'
  // }

  const formularioPersona = document.getElementById('formularioPersona');

  const getHtmlPersonas = (data) => {
    let html = '';
    data.forEach((element) => {
      html += `
        <p class="persona">
          ${element.id}: ${element.nombre} ${element.apellido}
          <button class="boton-eliminar" onclick='eliminarPersona()'>Eliminar</button>
        </p>
      `;
    });
    return html;
  };

  const renderHtml = (html, elemento) => {
    elemento.innerHTML = html;
  };

  const agregarPersona = (e) => {
    e.preventDefault();
    const formularioPersona = document.forms['formularioPersona'];
    const nombre = formularioPersona['nombre'].value;
    const apellido = formularioPersona['apellido'].value;

    if (nombre === '' || apellido === '') {
      alert('Completar campos');
    } else {
      const personaAgrega = new Persona(nombre, apellido);
      dataPersonas.push(personaAgrega);
      
      formularioPersona['nombre'].value = '';
      formularioPersona['apellido'].value = '';

      const personasHtml = getHtmlPersonas(dataPersonas);
      renderHtml(personasHtml, document.getElementById('personas'));
    }
  }

  const personasHtml = getHtmlPersonas(dataPersonas);
  renderHtml(personasHtml, document.getElementById('personas'));

  formularioPersona.addEventListener('submit', agregarPersona);
};

document.addEventListener('DOMContentLoaded', documentReady);