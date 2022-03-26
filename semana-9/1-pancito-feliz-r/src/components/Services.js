import axios from 'axios';
import { useState, useEffect } from 'react';

const Services = ({ title, filter }) => {
  const [services, setServices] = useState([]);

  const recurso = `/servicios${filter}`;

  useEffect(() => {
    const apiCupcakes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_API}${recurso}`);
        const data = response.data;
        setServices(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Se consultó a la API');
      }
    };
    apiCupcakes();
  }, [recurso]);

  return (
    <section className="services">
      <div className="services-container">
        <h1 className="services__title">{title}</h1>
        {
          services.length === 0
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
              <div className="services__services">
                {
                  services.map(({ id, nombre, descripcion }) => {
                    return (
                      <article className="services__service" key={id}>
                        <div className="services__service-data">
                          <h2 className="services__service-data-nombre">Nombre: {nombre}</h2>
                          <p className="services__service-data-about">{id}: {descripcion}</p>
                        </div>
                        <div className="services__service-button-container">
                          <button className="services__service-button services__service-button--active">Ver</button>
                          <button className="services__service-button">Comprar</button>
                        </div>
                      </article>
                    );
                  })
                }
              </div>
            )
        }
      </div>
    </section>
  );
}

export default Services;