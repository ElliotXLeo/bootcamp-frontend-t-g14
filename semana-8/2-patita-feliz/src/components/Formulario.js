import { nanoid } from "nanoid";
import { useState } from "react";


const Formulario = ({ registrarCita }) => {

  const [cita, setCita] = useState({
    formCitaNombreMascota: '',
    formCitaNombrePropietario: '',
    formCitaFecha: '',
    formCitaHora: '',
    formCitaSintomas: ''
  });
  const [error, setError] = useState(false);

  const { formCitaNombreMascota, formCitaNombrePropietario, formCitaFecha, formCitaHora, formCitaSintomas } = cita;

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formCitaNombreMascota.trim() === '' || formCitaNombrePropietario.trim() === '' || formCitaFecha.trim() === '' || formCitaHora.trim() === '' || formCitaSintomas.trim() === '') {
      setError(true);
    } else {
      cita.id = nanoid();
      registrarCita(cita);
      setError(false);

      setCita({
        formCitaNombreMascota: '',
        formCitaNombrePropietario: '',
        formCitaFecha: '',
        formCitaHora: '',
        formCitaSintomas: ''
      });
    }
  };

  return (
    <>
      <h3>🐱Registrar Cita🐱</h3>
      <form onSubmit={handleSubmit} className="my-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaNombreMascota"
            name="form-cita-nombre-mascota"
            required
            placeholder="Nombre de la mascota"
            value={formCitaNombreMascota}
            onChange={handleChange}
          />
          <label htmlFor="">Nombre de la mascota</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaNombrePropietario"
            name="form-cita-nombre-propietario"
            required
            placeholder="Nombre del propietario"
            value={formCitaNombrePropietario}
            onChange={handleChange}
          />
          <label htmlFor="">Nombre del propietario</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="formCitaFecha"
            name="form-cita-fecha"
            required
            placeholder="Fecha"
            value={formCitaFecha}
            onChange={handleChange}
          />
          <label htmlFor="">Fecha</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="time"
            className="form-control"
            id="formCitaHora"
            name="form-cita-hora"
            required
            placeholder="Hora"
            value={formCitaHora}
            onChange={handleChange}
          />
          <label htmlFor="">Hora</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaSintomas"
            name="form-cita-sintomas"
            required
            placeholder="Síntomas"
            value={formCitaSintomas}
            onChange={handleChange}
          />
          <label htmlFor="">Síntomas</label>
        </div>
        {
          error
            ?
            (
              <div className="alert alert-danger" role="alert">
                Todos los campos son obligatorios
              </div>
            )
            :
            (
              null
            )
        }
        <button className="btn btn-warning rimary w-100">🐰 Registrar Cita 🐰</button>
      </form>
    </>
  );
}

export default Formulario;