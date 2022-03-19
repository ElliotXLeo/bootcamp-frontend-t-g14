
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import FormEgreso from './components/FormEgreso';
import FormPresupuesto from './components/FormPresupuesto';
import Header from './components/Header';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [showFormPresupuesto, setShowFormPresupuesto] = useState(true);
  const [egreso, setEgreso] = useState({});
  const [egresos, setEgresos] = useState([]);

  useEffect(() => {
    if (Object.keys(egreso).length > 0) {
      setEgresos([
        ...egresos,
        egreso
      ]);
    }
  }, [egreso]);

  const company = {
    name: '💸Monederito Estofado 2022💸',
    slogan: '💰Si quieres ser estofado, paga por adelantado💰'
  };

  const credits = {
    author: 'Elliot Garamendi',
    currentYear: new Date().getFullYear()
  };

  return (
    <>
      <Header
        company={company}
      />

      <main className='main'>
        <section className='container'>
          <div className='row'>
            <section className='col-md-12'>
              <div className='contenido-principal animate__animated animate__fadeIn'>
                {
                  showFormPresupuesto
                    ?
                    (
                      <FormPresupuesto
                        setPresupuesto={setPresupuesto}
                        setShowFormPresupuesto={setShowFormPresupuesto}
                      />
                    )
                    :
                    (
                      <>
                        <FormEgreso
                          setEgreso={setEgreso}
                        />
                        <h2>{presupuesto}</h2>
                        <ul>
                          {egresos.map((element) => {
                            return (
                              <li key={element.id}>Descripción: {element.descripcion}, Valor: {element.valor}</li>
                            );
                          })}
                        </ul>
                      </>
                    )
                }
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer
        credits={credits}
      />
    </>
  );
}

export default App;
