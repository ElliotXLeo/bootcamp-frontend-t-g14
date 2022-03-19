const Egreso = ({ id, descripcion, valor }) => {
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
}

export default Egreso;