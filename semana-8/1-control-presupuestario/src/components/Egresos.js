import Egreso from "./Egreso";

const Egresos = ({ presupuesto, restante, egresos, eliminarEgreso }) => {

  const titulo = egresos.length === 0 ? <h2>💰Registra tu egreso💰</h2> : <h2>💰Administrar egresos💰</h2>;
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
      {titulo}
      <div className="alert alert-primary" role="alert">
        Presupuesto: {formatoMonedaSoles(presupuesto)}
      </div>
      <div className={`alert ${claseRestante}`} role="alert">
        Restante: {formatoMonedaSoles(restante)}
      </div>
      <ul className="egresos__lista-egresos">
        {egresos.map((egreso) => {
          return (
            <Egreso
              key={egreso.id}
              egreso={egreso}
              eliminarEgreso={eliminarEgreso}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Egresos;