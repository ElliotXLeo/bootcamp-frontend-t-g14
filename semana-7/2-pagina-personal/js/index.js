'use strict';
import header from './header.js';
import profile from './profile.js';
import experiences from './experiences.js';
import projects from './projects.js';
import skills from './skills.js';
import footer from './footer.js';
import portafolio from './portafolio-elliot.js';

const documentReady = () => {
  header();
  profile(portafolio.profile, portafolio.technologies);
  experiences(portafolio.experiences);
  projects(portafolio.projects);
  skills(portafolio.skills);
  footer(portafolio.contacts, portafolio.profile);
};

document.addEventListener('DOMContentLoaded', documentReady);