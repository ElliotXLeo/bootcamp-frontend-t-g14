'use strict';
import header from './header.js';
import perfil from './perfil.js';
import experiencia from './experiencia.js';
import projects from './projects.js';
import skills from './skills.js';
import footer from './footer.js';
import portafolio from './portafolio-elliot.js';

const { profile, technologies, experiencias, proyectos, habilidades, contactos } = portafolio;

const documentReady = () => {
  header();
  perfil(profile, technologies);
  experiencia(experiencias);
  projects(proyectos);
  skills(habilidades);
  footer(contactos, profile);
};

document.addEventListener('DOMContentLoaded', documentReady);