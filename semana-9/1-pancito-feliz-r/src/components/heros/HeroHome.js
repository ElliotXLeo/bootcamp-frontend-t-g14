import {
  Link
} from 'react-router-dom';
import PropTypes from "prop-types";
import heroImg from '../../assets/img/hero.jpg';
import riseImg from '../../assets/img/rise.svg';
import arrowImg from '../../assets/img/arrow.svg';
import bubblesImg from '../../assets/img/bubbles.svg';
import blobImg from '../../assets/img/blob.svg';
import asteriskImg from '../../assets/img/asterisk.svg';

const HeroHome = ({ company }) => {

  const { title, subtitle, slogan, priceNormal, priceOffer } = company;

  return (
    <article className="hero animate__animated animate__fadeIn">
      <div className="hero-container">
        <div className="hero__message">
          <h2 className="hero__message-title">
            {title}
          </h2>
          <h1 className="hero__message-subtitle">
            {subtitle}
          </h1>
          <p className="hero__message-paragraph">
            {slogan}
          </p>
          <div className="hero__message-shopping-container">
            <div className="hero__message-cheapest-price-container">
              <span className="hero__message-cheapest-price">Desde:</span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--normal">
                {priceNormal}
              </span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--offer">
                {priceOffer}
              </span>
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

HeroHome.propTypes = {
  company: PropTypes.object
}

export default HeroHome;