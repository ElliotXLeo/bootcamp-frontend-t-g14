'use strict';
const documentReady = () => {
  // Start header
  const headerScroll = () => {
    const header = document.getElementById('header');
    const headerNavMenuIcon = document.querySelector('.header-nav__menu-icon');
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNavMenuIcon.classList.toggle('header-nav__menu-icon--scroll', window.scrollY > 0);

    const headerNavLink = [...document.querySelectorAll('.header-nav__link')];
    headerNavLink.map((element) => {
      element.classList.toggle('header-nav__link--scroll', window.scrollY > 0);
    });
  };
  window.addEventListener('scroll', headerScroll);

  const toggleMenu = () => {
    const headerNavLinkList = document.getElementById('headerNavLinkList');
    headerNavLinkList.classList.toggle('header-nav__link-list--left-0');
  };
  const headerNavMenu = document.getElementById('headerNavMenu');
  headerNavMenu.addEventListener('click', toggleMenu);

  const headerNavLinkItems = [...document.querySelectorAll('.header-nav__link-item')];
  headerNavLinkItems.map((element) => {
    element.addEventListener('click', toggleMenu);
  });
  // End header
};

document.addEventListener('DOMContentLoaded', documentReady);
