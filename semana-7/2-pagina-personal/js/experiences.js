'use strict';

const experiences = (experiences) => {
  const experiencesExperiences = document.getElementById('experiencesExperiences');

  [...experiences].reverse().forEach((element) => {
    if (element.main === 1) {
      const { period, company, position, activities } = element;
      experiencesExperiences.innerHTML += `
        <section class="experiences__experience">
          <h4 class="experiences__date">${period}</h4>
          <h3 class="experiences__company">${company}</h3>
          <h4 class="experiences__role">${position}</h4>
          <ul class="experiences__activities">
            <li class="experiences__activity">${activities[0]}</li>
            <li class="experiences__activity">${activities[1]}</li>
          </ul>
        </section>
      `;
    }
  });
}

export default experiences;