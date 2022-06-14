'use strict';

const footer = (contactos, profile) => {
  const footerNavLinkList = document.querySelector('.footer-nav__link-list');
  contactos.forEach((element) => {
    if (element.main === 1) {
      footerNavLinkList.innerHTML += `
        <li class="footer-nav__link-item">
          <a href="${element.urlContact}" class="footer-nav__link">
            <img src="${element.urlImage}" alt="${element.name}"
              class="footer-nav__link-image" />
          </a>
        </li>
      `;
    }
  });

  const footerNavCredits = document.querySelector('.footer-nav__credits');
  footerNavCredits.innerHTML = `
    🦄Copyright &copy; ${new Date().getFullYear()} <a href="${profile.urlLinkedin}" target="_blank" rel="noopener noreferrer" class="footer-nav__credits-author">${profile.shortName}.</a> Todos los derechos reservados.🦄
  `;
};

export default footer;