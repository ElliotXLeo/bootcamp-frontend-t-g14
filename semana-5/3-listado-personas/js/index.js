'use strict';
const documentReady = () => {
  const dataPersonas = [
    {
      nombre: 'Elliot',
      apellido: 'Garamendi'
    },
    {
      nombre: 'Writhney',
      apellido: 'Lazo'
    }
  ];

  const botonAgregar = document.getElementById('botonAgregar');

  const getHtmlPersonas = (data) => {
    let html = '';
    data.forEach((element) => {
      html += `
        <p class="persona">
          ${element.nombre} ${element.apellido}
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
      dataPersonas.push(
        {
          nombre,
          apellido
        }
      );
      formularioPersona['nombre'].value = '';
      formularioPersona['apellido'].value = '';

      const personasHtml = getHtmlPersonas(dataPersonas);
      renderHtml(personasHtml, document.getElementById('personas'));
    }
  }

  const personasHtml = getHtmlPersonas(dataPersonas);
  renderHtml(personasHtml, document.getElementById('personas'));

  botonAgregar.addEventListener('click', agregarPersona);
};

document.addEventListener('DOMContentLoaded', documentReady);