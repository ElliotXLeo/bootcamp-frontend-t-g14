'use strict';
const documentReady = () => {
  // Start header
  // headerNavMenu

  const headerNavMenu = document.getElementById('headerNavMenu');
  
  const toggleMenu = () => {
    const headerNavLinkList = document.getElementById('headerNavLinkList');
    headerNavLinkList.classList.toggle('header-nav__link-list--left-0');
  }
  headerNavMenu.addEventListener('click', toggleMenu);
  // End header
};

document.addEventListener('DOMContentLoaded', documentReady);
