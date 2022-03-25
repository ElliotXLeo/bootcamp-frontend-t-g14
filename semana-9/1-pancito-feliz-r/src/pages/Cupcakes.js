import { useState, useEffect } from 'react';
import '../styles/css/Cupcakes.css';

const Cupcakes = () => {

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    const apiCupcakes = async () => {
      try {
        const api = await fetch('http://localhost:5500/cupcakes');
        const data = await api.json();
        setCupcakes(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Se consultó a la API');
      }
    };
    apiCupcakes();
  }, []);

  return (
    <section className="cupcakes cupcakes--pt-4">
      <div className="cupcakes-container">
        <h1 className="cupcakes__title">🧁 Cupcakes 🧁</h1>
        {
          cupcakes.length === 0
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
                {cupcakes.map(({ id, sabor, color, descripcion, precio, imagen }) => {
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
                })}
              </div>
            )
        }
      </div>
    </section>
  );
}

export default Cupcakes;