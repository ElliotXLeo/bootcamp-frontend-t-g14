import { useState, useEffect } from 'react';
import CardCupcake from './CardCupcake';

const CardCupcakes = ({ title, filter }) => {
  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    const apiCupcakes = async () => {
      try {
        const api = await fetch(`http://localhost:2050/cupcakes${filter}`);
        const data = await api.json();
        setCupcakes(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Se consultó a la API');
      }
    };
    apiCupcakes();
  }, [filter]);

  return (
    <section className="cupcakes cupcakes--pt-4 animate__animated animate__fadeIn">
      <div className="cupcakes-container">
        <h1 className="cupcakes__title">{title}</h1>
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
                {cupcakes.map((cupcake) => {
                  return (
                    <CardCupcake
                      key={cupcake.id}
                      cupcake={cupcake}
                    />
                  );
                })}
              </div>
            )
        }
      </div>
    </section>
  );
}

export default CardCupcakes;