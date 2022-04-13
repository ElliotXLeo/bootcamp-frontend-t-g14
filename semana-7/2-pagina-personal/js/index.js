'use strict';
import header from './header.js';
import profile from './profile.js';
import experiences from './experiences.js';
// import proyectos from './proyectos.js';
// import skills from './skills.js';
// import footer from './footer.js';
import portafolio from './portafolio-elliot.js';

// const { profile, technologies, experiences, projects, skills, contacts } = portafolio;

const documentReady = () => {
  header();
  profile(portafolio.profile, portafolio.technologies);
  experiences(portafolio.experiences);
  // projects(projects);
  // skills(skills);
  // footer(contacts, profile);
};

document.addEventListener('DOMContentLoaded', documentReady);