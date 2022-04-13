'use strict';

const skills = (habilidades) => {
  const habilidadesHabilidadesList = document.getElementById('habilidadesHabilidadesList');

  habilidades.forEach((element) => {
    if (element.main === 1) {
      habilidadesHabilidadesList.innerHTML += `
      <li class="habilidades__habilidad">${element.name}</li>
    `;
    }
  });
};

export default skills;