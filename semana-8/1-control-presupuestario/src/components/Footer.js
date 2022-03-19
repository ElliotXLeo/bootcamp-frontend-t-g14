const Footer = ({ credits }) => {
  const { author, currentYear } = credits;

  return (
    <footer className="footer animate__animated animate__fadeIn">
      <div className="footer-container">
        <h2 className="footer__credits">🦄Copyright &copy; {currentYear} {author}. Todos los derechos reservados.🦄</h2>
      </div>
    </footer>
  );
}

export default Footer;