const CardCupcake = ({ cupcake }) => {
  const { id, sabor, color, descripcion, precio, imagen } = cupcake;
  return (
    <article className="cupcakes__cupcake" key={id}>
      <figure className="cupcakes__cupcake-image-container">
        <img
          src={imagen}
          alt={descripcion}
          className="cupcakes__cupcake-image-container" />
      </figure>

      <div className="cupcakes__cupcake-data">
        <h2 className="cupcakes__cupcake-data-sabor">Sabor: {sabor}</h2>
        <h3 className="cupcakes__cupcake-data-precio">Precio: {precio}</h3>
        <h4 className="cupcakes__cupcake-data-color">Color: {color}</h4>
        <p className="cupcakes__cupcake-data-about">{id}: {descripcion}</p>
      </div>

      <div className="cupcakes__cupcake-button-container">
        <button className="cupcakes__cupcake-button cupcakes__cupcake-button--active">Ver</button>
        <button className="cupcakes__cupcake-button">Comprar</button>
      </div>
    </article>
  );
}

export default CardCupcake;