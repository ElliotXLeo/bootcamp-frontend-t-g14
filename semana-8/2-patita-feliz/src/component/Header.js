const Header = ({ company }) => {
  const { name, slogan } = company;

  return (
    <header className="header animate__animated animate__fadeIn">
      <h1 className="header__name">{name}</h1>
      <h3>{slogan}</h3>
    </header>
  );
};

export default Header;