import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./component/Footer";
import Formulario from "./component/Formulario";
import Header from "./component/Header";

function App() {

  const company = {
    name: '🐶PATITA FELIZ🐶',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  const credits = {
    author: 'Elliot Garamendi',
    currentYear: new Date().getFullYear()
  };

  const [citas, setCitas] = useState([]);

  const registrarCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ]);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Cita registrada!',
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  return (
    <>
      <Header
        company={company}
      />
      <main>
        <section className="container">
          <div className="row gap-3 justify-content-around">
            <section className="col-md-5">
              <Formulario
                registrarCita={registrarCita}
              />
            </section>
            <section className="col-md-5">
              <h3>🐤Registra tu cita🐤</h3>
              {citas.map((element) => {
                return (
                  <div key={element.id}>
                    <h6>Mascota: {element.formCitaNombreMascota}</h6>
                    <h6>Propietario: {element.formCitaNombrePropietario}</h6>
                    <h6>Fecha: {element.formCitaFecha}</h6>
                    <h6>Horario: {element.formCitaHora}</h6>
                    <h6>Síntomas: {element.formCitaSintomas}</h6>
                  </div>
                );;
              })}
            </section>
          </div>
        </section>
      </main>
      <Footer
        credits={credits}
      />
    </>
  );
}

export default App;