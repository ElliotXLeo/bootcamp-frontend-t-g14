'use strict';

const skills = (skills) => {
  const skillsSkillsList = document.getElementById('skillsSkillsList');

  skills.forEach((element) => {
    if (element.main === 1) {
      skillsSkillsList.innerHTML += `
      <li class="skills__skill">${element.name}</li>
    `;
    }
  });
};

export default skills;