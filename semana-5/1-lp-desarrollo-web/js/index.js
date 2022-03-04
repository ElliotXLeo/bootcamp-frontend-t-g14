'use strict';
const documentReady = () => {

  // Start header
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');
  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuIcon = document.querySelector('.header-nav__menu-icon');
  const headerNavCloseIconContainer = document.getElementById('headerNavCloseIconContainer');
  const headerNavLinkList = document.querySelector('.header-nav__link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__link')];

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
    headerNavMenuIcon.classList.toggle('header-nav__menu-icon--scroll', window.scrollY > 0);
    headerNavLinks.forEach((element) => {
      element.classList.toggle('header-nav__link--scroll', window.scrollY > 0);
    });
  };

  const openMenu = () => {
    headerNavLinkList.classList.add('header-nav__link-list--open');
  };

  const closeMenu = () => {
    headerNavLinkList.classList.remove('header-nav__link-list--open');
  };

  document.addEventListener('scroll', documentScroll);
  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavCloseIconContainer.addEventListener('click', closeMenu);
  headerNavLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
  // End header

  // Start modal
  const heroMessageButton = document.getElementById('heroMessageButton');
  const modalButton = document.getElementById('modalButton');
  const modal = document.getElementById('modal');

  const openModal = () => {
    modal.classList.add('modal--show');
  };

  const claseModal = () => {
    modal.classList.remove('modal--show');
  };

  heroMessageButton.addEventListener('click', openModal);
  modalButton.addEventListener('click', claseModal);
  // End modal
}
document.addEventListener('DOMContentLoaded', documentReady);