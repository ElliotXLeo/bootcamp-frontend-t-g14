'use strict';
import header from './header.js';
import profile from './profile.js';
import experiences from './experiences.js';
import projects from './projects.js';
import skills from './skills.js';
import footer from './footer.js';

const documentReady = () => {

  const method = 'GET';
  const url = 'https://elliotxleo.github.io/api-publica/json/portafolio-elliot.json';

  const fetchApi = async () => {
    try {
      const options = {
        method,
        url
      };
      const response = await axios(options);
      const portafolio = response.data;
      header();
      profile(portafolio.profile, portafolio.technologies);
      experiences(portafolio.experiences);
      projects(portafolio.projects);
      skills(portafolio.skills);
      footer(portafolio.contacts, portafolio.profile);
    } catch (error) {
      console.log(error);
    }
  };
  fetchApi();

};

document.addEventListener('DOMContentLoaded', documentReady);