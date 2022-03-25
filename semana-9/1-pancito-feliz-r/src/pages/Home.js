import {
  Link
} from 'react-router-dom';
import heroImg from '../assets/img/hero.jpg';
import riseImg from '../assets/img/rise.svg';
import arrowImg from '../assets/img/arrow.svg';
import bubblesImg from '../assets/img/bubbles.svg';
import blobImg from '../assets/img/blob.svg';
import asteriskImg from '../assets/img/asterisk.svg';
import '../styles/scss/Home.scss';

const Home = () => {
  return (
    <article className="hero animate__animated animate__fadeIn">
      <div className="hero-container">
        <div className="hero__message">
          <h2 className="hero__message-title">
            Pancito feliz, La mejor de los panes
          </h2>
          <h1 className="hero__message-subtitle">
            La mejor panadería peruana
          </h1>
          <p className="hero__message-paragraph">
            🧁 El verdadero lugar con las 4B. Bueno, Bonito, Barato y Bastante. Siempre con fe y humildad 🧁
          </p>
          <div className="hero__message-shopping-container">
            <div className="hero__message-cheapest-price-container">
              <span className="hero__message-cheapest-price">Desde:</span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--normal">S/ 0.50</span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--offer">S/ 0.20</span>
            </div>
            <Link to="/cupcakes" className="hero__message-buy-button">
              Productos
            </Link>
          </div>
        </div>
        <div className="hero__figure">
          <figure className="hero__figure-image-container">
            <img src={heroImg} alt="Imagen de portada" className="hero__figure-image" />
          </figure>
        </div>
      </div>
      <figure className="hero__rise-container">
        <img src={riseImg} alt="Rise de adorno" className="hero__rise" />
      </figure>
      <figure className="hero__arrow-container">
        <img src={arrowImg} alt="Arrow de adorno" className="hero__arrow" />
      </figure>
      <figure className="hero__bubbles-container">
        <img src={bubblesImg} alt="Bubbles de adorno" className="hero__bubbles" />
      </figure>
      <figure className="hero__blob-container">
        <img src={blobImg} alt="Blob de adorno" className="hero__blob" />
      </figure>
      <figure className="hero__asterisk-container">
        <img src={asteriskImg} alt="Asterisk de adorno" className="hero__asterisk" />
      </figure>
    </article>
  );
}

export default Home;