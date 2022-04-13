'use strict';

const projects = (projects) => {
  const projectsProjects = document.getElementById('projectsProjects');

  const projectsPrincipales = projects.filter((element) => {
    return (element.main === 1);
  });

  projectsPrincipales.reverse().forEach((element) => {
    const { image, title, mainTechnology, technologies, about, urlDemo, urlCode } = element;
    projectsProjects.innerHTML += `
        <article class="projects__project">
          <figure class="projects__project-image-container">
            <img src="${image}" alt="${title}" class="projects__project-image" />
          </figure>
          <div class="projects__project-data">
            <h2 class="projects__project-data-title">${title}</h2>
            <h3 class="projects__project-data-core-technology">Core: ${mainTechnology}</h3>
            <h4 class="projects__project-data-technologies">Tecnologías: ${technologies}</h4>
            <p class="projects__project-data-about">${about}</p>
          </div>
          <div class="projects__project-button-container">
            <a href="${urlDemo}" class="projects__project-button projects__project-button--bg-gold">Demo</a>
            <a href="${urlCode}" class="projects__project-button">Código</a>
          </div>
        </article>
      `;
  });
};

export default projects;