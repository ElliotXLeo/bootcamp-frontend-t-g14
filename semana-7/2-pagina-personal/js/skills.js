'use strict';

const skills = (habilidades) => {
  const habilidadesHabilidadesList = document.getElementById('habilidadesHabilidadesList');

  const datosPrincipales = habilidades.filter((element) => {
    return (element.main === 1);
  });

  datosPrincipales.forEach((element) => {
    habilidadesHabilidadesList.innerHTML += `
      <li class="habilidades__habilidad">${element.name}</li>
    `;
  });
};

export default skills;