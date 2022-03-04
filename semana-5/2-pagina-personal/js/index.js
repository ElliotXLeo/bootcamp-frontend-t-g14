'use strict';
const documentReady = () => {

  const perfil = [
    'Elliot Garamendi',
    'Elliot Garamendi Desarrollador de tus sueños',
    'Estudiante de Ingeniería de Software perteneciente a los primeros puestos. Apasionado del autoaprendizaje con el sueño de crecer en el Desarrollo Web Frontend con la biblioteca React. Asimismo, amo compartir los conocimientos adquiridos día a día mediante la docencia.',
    'https://1drv.ms/u/s!As5U-bd3F-a6gYsmbbG-Dybk88biRQ?e=Rifl4V',
    'https://i.postimg.cc/bvJLLgZd/perfil-elliotgaramendi.jpg'
  ];

  // Start header
  const headerNavMenu = document.getElementById('headerNavMenu');
  const headerNavLinkItems = [...document.querySelectorAll('.header-nav__link-item')];

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

  const toggleMenu = () => {
    const headerNavLinkList = document.getElementById('headerNavLinkList');
    headerNavLinkList.classList.toggle('header-nav__link-list--left-0');
  };

  window.addEventListener('scroll', headerScroll);
  headerNavMenu.addEventListener('click', toggleMenu);
  headerNavLinkItems.map((element) => {
    element.addEventListener('click', toggleMenu);
  });
  // End header

  // Start perfil
  const getInfoPerfil = () => {
    const perfilInfoTitle = document.getElementById('perfilInfoTitle');
    const perfilInfoDescription = document.getElementById('perfilInfoDescription');
    const perfilInfoLinkCv = document.getElementById('perfilInfoLinkCv');
    const perfilImage = document.getElementById('perfilImage');

    perfilInfoTitle.innerHTML = perfil[1];
    perfilInfoDescription.innerHTML = perfil[2];
    perfilInfoLinkCv.href = perfil[3];
    perfilImage.src = perfil[4];
    perfilImage.alt = perfil[0];
  }
  getInfoPerfil();
  // End perfil
};

document.addEventListener('DOMContentLoaded', documentReady);
