import Header from "./Components/Header";

function App() {

  const company = {
    name: '🐶PATITA FELIZ🐶',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  return (
    <Header
      company={company}
    />
  );
}

export default App;
