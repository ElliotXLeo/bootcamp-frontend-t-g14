import axios from 'axios';
import { useState, useEffect } from 'react';
import Service from './Service';
import Spinner from './Spinner';

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
              <Spinner />
            )
            :
            (
              <div className="services__services">
                {
                  services.map((service) => {
                    return (
                      <Service
                        key={service.id}
                        service={service}
                      />
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