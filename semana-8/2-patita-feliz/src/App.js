import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {

  const company = {
    name: '🐶PATITA FELIZ🐶',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  const credits = {
    author: 'Elliot Garamendi',
    currentYear: new Date().getFullYear()
  };

  return (
    <>
      <Header
        company={company}
      />
      <h2>🐱Registre su cita🐱</h2>
      <Footer
        credits={credits}
      />
    </>
  );
}

export default App;
