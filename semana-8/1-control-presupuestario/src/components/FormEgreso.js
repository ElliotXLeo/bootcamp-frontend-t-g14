import { useState } from "react";
import shortid from "shortid";

const FormEgreso = ({ setEgreso }) => {

  const [descripcion, setDescripcion] = useState('');
  const [valor, setValor] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim() === '' || valor <= 0) {
      setError(true);
      return;
    }
    setError(false);

    const egreso = {
      id: shortid.generate(),
      descripcion,
      valor
    };

    setEgreso(egreso);

    setDescripcion('');
    setValor('');
  };

  return (
    <>
      <h2>💸Registre sus egresos💸</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-3"
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formEgresoDescripcion"
            name="form-egreso-descripcion"
            required
            placeholder="Descripción del egreso"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <label htmlFor="numero1">Descripción del egreso</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="formEgresoCantidad"
            name="form-egreso-valor"
            required
            placeholder="Cantidad del egreso"
            value={valor}
            onChange={(e) => setValor(parseInt(e.target.value))}
          />
          <label htmlFor="numero1">Cantidad del egreso</label>
        </div>
        {
          error
            ?
            (
              <div className="alert alert-danger" role="alert">
                Debe agregar una descripción y/o ingresar egresos mayores a 0
              </div>
            )
            :
            (
              null
            )
        }
        <button className="btn btn-primary w-100">💸 Registrar egreso 💸</button>
      </form>
    </>
  );
};

export default FormEgreso;