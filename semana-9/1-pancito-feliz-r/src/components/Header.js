import {
  NavLink
} from 'react-router-dom';
import '../styles/css/Header.css';
import logo from '../assets/img/logo.png';

const documentReady = () => {
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
};
document.addEventListener('DOMContentLoaded', documentReady);


const Header = () => {
  return (
    <header className="header animate__animated animate__fadeIn">
      <nav className="header-nav">
        <div className="header-nav-container">
          <NavLink to="/" className="header-nav__logo-container">
            <img src={logo} alt="Logo Web" className="header-nav__logo" />
          </NavLink>
          <figure className="header-nav__menu-icon-container" id="headerNavMenuIconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="header-nav__menu-icon">
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </figure>
          <ul className="header-nav__link-list">
            <li className="header-nav__link-item">
              <NavLink to="/cupcakes" className="header-nav__link">Cupcakes</NavLink>
            </li>
            <li className="header-nav__link-item">
              <NavLink to="/nosotros" className="header-nav__link">Nosotros</NavLink>
            </li>
            <li className="header-nav__link-item">
              <a href="https://www.linkedin.com/in/elliotgaramendi/" className="header-nav__link header-nav__link--active" target="_blank" rel="noreferrer">Elliot</a>
            </li>
            <li className="header-nav__link-item header-nav__link-item--close-icon-container"
              id="headerNavCloseIconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                style={{ fill: '#fff' }} className="header-nav__close-icon" >
                <path
                  d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z">
                </path>
                <path
                  d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z">
                </path>
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;