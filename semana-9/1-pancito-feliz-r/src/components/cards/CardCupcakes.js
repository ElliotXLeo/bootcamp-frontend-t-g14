import { useState, useEffect } from 'react';
import CardCupcake from './CardCupcake';

const CardCupcakes = () => {
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