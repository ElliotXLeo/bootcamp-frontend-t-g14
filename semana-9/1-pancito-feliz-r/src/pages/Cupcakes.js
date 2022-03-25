import '../styles/css/Cupcakes.css';

const Cupcakes = () => {

  return (
    <section className="cupcakes cupcakes--pt-4">
      <div className="cupcakes-container">
        <h1 className="cupcakes__title">🧁 Cupcakes 🧁</h1>
        {
          false
            ?
            (
              <section className="spinner">
                <div className="spinner-container">
                  <div className="spinner__double-bounce1"></div>
                  <div className="spinner__double-bounce2"></div>
                </div>
              </section>
            )
            :
            (
              <div className="cupcakes__cupcakes">
                <article className="cupcakes__cupcake">
                  <figure className="cupcakes__cupcake-image-container">
                    <img
                      src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/04/como-hacer-cupcakes-de-vainilla-para-vender.jpg"
                      alt="Foto de cupcake"
                      className="cupcakes__cupcake-image-container" />
                  </figure>

                  <div className="cupcakes__cupcake-data">
                    <h2 className="cupcakes__cupcake-data-sabor">Sabor: Vainilla</h2>
                    <h3 className="cupcakes__cupcake-data-precio">Precio: 10</h3>
                    <h4 className="cupcakes__cupcake-data-color">Color: amarillo</h4>
                    <p className="cupcakes__cupcake-data-about">1: Gran cupcake sabor vainilla clásica</p>
                  </div>

                  <div className="cupcakes__cupcake-button-container">
                    <a className="cupcakes__cupcake-button cupcakes__cupcake-button--active">Ver</a>
                    <a className="cupcakes__cupcake-button">Comprar</a>
                  </div>
                </article>
              </div>
            )
        }
      </div>
    </section>
  );
}

export default Cupcakes;