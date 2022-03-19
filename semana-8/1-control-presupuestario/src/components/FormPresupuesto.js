import { useState } from 'react';
import Swal from 'sweetalert2';

const FormPresupuesto = ({ setPresupuesto, setShowPresupuestoForm }) => {

  const [valueInput, setValueInput] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValueInput(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueInput > 0) {
      setPresupuesto(valueInput);
      setShowPresupuestoForm(false);
      // setError(false);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Registrado!',
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h2>Presupuesto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="presupuesto"
            name="input-presupuesto"
            required
            placeholder="Ingrese su presupuesto"
            onChange={handleChange}
          />
          <label htmlFor="numero1">Ingrese su presupuesto</label>
        </div>
        {
          error
            ?
            (
              <div class="alert alert-danger" role="alert">
                El presupuesto debe mayor a 0.
              </div>
            )
            :
            (
              null
            )
        }
        <button className="btn btn-primary w-100">💸 Registrar presupuesto 💸</button>
      </form>
    </>
  );
}

export default FormPresupuesto;