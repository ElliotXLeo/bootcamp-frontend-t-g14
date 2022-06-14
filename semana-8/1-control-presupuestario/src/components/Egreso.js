const Egreso = ({ egreso, eliminarEgreso }) => {
  const { id, descripcion, valor } = egreso;
  return (
    <li className="gastos animate__animated animate__fadeIn">
      <p>
        {descripcion}
        <span className="gasto">
          {valor}
          <span
            className="btn btn-danger mx-1"
            onClick={() => eliminarEgreso(id)}
          >
            Eliminar
          </span>
        </span>
      </p>
    </li>
  );
}

export default Egreso;