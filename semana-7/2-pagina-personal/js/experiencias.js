'use strict';

const experiencias = (experiences) => {
  const experienciasExperiencias = document.getElementById('experienciasExperiencias');

  [...experiences].reverse().forEach((element) => {
    if (element.main === 1) {
      const { period, company, position, activities } = element;
      experienciasExperiencias.innerHTML += `
        <section class="experiencias__experience">
          <h4 class="experiencias__date">${period}</h4>
          <h3 class="experiencias__company">${company}</h3>
          <h4 class="experiencias__role">${position}</h4>
          <ul class="experiencias__activities">
            <li class="experiencias__activity">${activities[0]}</li>
            <li class="experiencias__activity">${activities[1]}</li>
          </ul>
        </section>
      `;
    }
  });
}

export default experiencias;