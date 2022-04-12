'use strict';
import header from './header.js';
import perfil from './perfil.js';
import experiencia from './experiencia.js';
import projects from './projects.js';
import portafolio from './portafolio-elliot.js';

const { profile, technologies, experiencias, proyectos, habilidades, contactos } = portafolio;

const documentReady = () => {
  header();
  perfil(profile, technologies);
  experiencia(experiencias);
  projects(proyectos);

  const habilidadesHabilidadesList = document.getElementById('habilidadesHabilidadesList');

  const getHtmlHabilidades = (datos) => {
    const datosPrincipales = datos.filter((element) => {
      return (element.main === 1);
    });
    let html = '';
    datosPrincipales.forEach((element) => {
      html += `
        <li class="habilidades__habilidad">${element.name}</li>
      `;
    });
    return html;
  };

  let habilidadesHtml = getHtmlHabilidades(habilidades);
  habilidadesHabilidadesList.innerHTML = habilidadesHtml;

  const getHtmlContactos = (datos) => {
    let html = '';

    const datosPrincipales = datos.filter((element) => {
      return (element.main === 1);
    });

    datosPrincipales.forEach((element) => {
      html += `
        <li class="footer-nav__link-item">
          <a href="${element.urlContact}" class="footer-nav__link">
            <img src="${element.urlImage}" alt="${element.name}"
              class="footer-nav__link-image" />
          </a>
        </li>
      `;
    });
    return html;
  };

  const renderHtmlFooterNavLinkList = (contactosHtml) => {
    const footerNavLinkList = document.getElementById('footerNavLinkList');
    footerNavLinkList.innerHTML = contactosHtml;
  };

  const contactosHtml = getHtmlContactos(contactos);
  renderHtmlFooterNavLinkList(contactosHtml);

  const renderHtmlFooterNavCredits = () => {
    const footerNavCredits = document.getElementById('footerNavCredits');
    footerNavCredits.innerHTML = `
    🦄Copyright &copy; ${new Date().getFullYear()}
    <a href="${profile.urlLinkedin}" target="_blank" class="footer-nav__credits-author">${profile.shortName}.</a>
    Todos los derechos reservados.🦄
    `;
  };
  renderHtmlFooterNavCredits();
};

document.addEventListener('DOMContentLoaded', documentReady);