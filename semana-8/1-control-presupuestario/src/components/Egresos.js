const Egresos = ({ presupuesto, restante, egresos }) => {

  const formatoMonedaSoles = (valor) => {
    return valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 });
  }

  return (
    <div className="egresos gastos-realizados"> 
      <h2>💰Listado de egresos💰</h2>
      <div className="alert alert-primary" role="alert">
        Presupuesto: {formatoMonedaSoles(presupuesto)}
      </div>
      <div className="alert alert-success" role="alert">
        Restante: {formatoMonedaSoles(restante)}
      </div>
      <ul className="egresos__lista-egresos">
        {egresos.map((element) => {
          const { id, descripcion, valor } = element;
          return (
            <li className="gastos animate__animated animate__fadeIn" key={id}>
              <p>
                {descripcion}
                <span className="gasto">
                  {valor}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Egresos;