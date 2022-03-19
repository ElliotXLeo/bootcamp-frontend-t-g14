import Egreso from "./Egreso";

const Egresos = ({ presupuesto, restante, egresos }) => {
  let claseRestante = '';

  const formatoMonedaSoles = (valor) => {
    return valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 });
  }

  if (restante >= presupuesto * 0.75) {
    claseRestante = 'alert-success';
  } else if (restante >= presupuesto * 0.5) {
    claseRestante = 'alert-warning';
  } else if (restante >= presupuesto * 0.25) {
    claseRestante = 'alert-danger';
  } else {
    claseRestante = 'alert-dark';
  }

  return (
    <div className="egresos gastos-realizados">
      <h2>💰Listado de egresos💰</h2>
      <div className="alert alert-primary" role="alert">
        Presupuesto: {formatoMonedaSoles(presupuesto)}
      </div>
      <div className={`alert ${claseRestante}`} role="alert">
        Restante: {formatoMonedaSoles(restante)}
      </div>
      <ul className="egresos__lista-egresos">
        {egresos.map((element) => {
          const { id, descripcion, valor } = element;
          return (
            <Egreso
              id={id}
              descripcion={descripcion}
              valor={valor}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Egresos;