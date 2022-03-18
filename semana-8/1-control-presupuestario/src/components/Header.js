const Header = ({ company }) => {
  const { name, slogan } = company;

  return (
    <header className="header animate__animated animate__fadeIn">
      <h1 className>{name}</h1>
      <h2 className="header__slogan">{slogan}</h2>
    </header>
  );
};

export default Header;