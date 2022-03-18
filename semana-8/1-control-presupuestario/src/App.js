import logo from './logo.svg';
import Swal from 'sweetalert2';

function App() {

  Swal.fire({
    title: 'Control Presupuestario',
    icon: 'success',
    title: 'Instalación correcta',
    text: 'Bienvenidos a Control Presupuestario',
    footer: '<a href="#">Conocer más</a>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo animate__animated animate__fadeIn" alt="logo" />
        <p>
          Control Presupuestario
        </p>
      </header>
    </div>
  );
}

export default App;
