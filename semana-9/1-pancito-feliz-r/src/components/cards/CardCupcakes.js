import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import CardCupcake from './CardCupcake';

const CardCupcakes = ({ title, filter }) => {
  const [cupcakes, setCupcakes] = useState([]);

  const recurso = `/cupcakes${filter}`;

  useEffect(() => {
    const apiCupcakes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_API}${recurso}`);
        const data = response.data;
        setCupcakes(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Se consultó a la API');
      }
    };
    apiCupcakes();
  }, [recurso]);

  return (
    <section className={`cupcakes ${filter ? '' : 'cupcakes--pt-4'} animate__animated animate__fadeIn`}>
      <div className="cupcakes-container">
        <h1 className="cupcakes__title">{title}</h1>
        {
          cupcakes.length === 0
            ?
            (
              <Spinner />
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