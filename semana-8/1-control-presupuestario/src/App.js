import Swal from 'sweetalert2';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const company = {
    name: '💸Monederito Estofado 2022💸',
    slogan: '💰Si quieres ser estofado, paga por adelantado💰'
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
    </>
  );
}

export default App;
