'use strict';

const experiencia = (experiencias) => {
  const experienciaExperiencias = document.getElementById('experienciaExperiencias');

  [...experiencias].reverse().forEach((element) => {
    if (element.main === 1) {
      const { period, company, position, activities } = element;
      experienciaExperiencias.innerHTML += `
        <section class="experiencia__experience">
          <h4 class="experiencia__date">${period}</h4>
          <h3 class="experiencia__company">${company}</h3>
          <h4 class="experiencia__role">${position}</h4>
          <ul class="experiencia__activities">
            <li class="experiencia__activity">${activities[0]}</li>
            <li class="experiencia__activity">${activities[1]}</li>
          </ul>
        </section>
      `;
    }
  });
}

export default experiencia;