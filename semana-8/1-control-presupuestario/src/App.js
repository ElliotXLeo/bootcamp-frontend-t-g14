
import { useState } from 'react';
import Footer from './components/Footer';
import FormPresupuesto from './components/FormPresupuesto';
import Header from './components/Header';

function App() {

  const [presupuesto, setPresupuesto] = useState('0');
  const [showPresupuestoForm, setShowPresupuestoForm] = useState(true);

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
                  showPresupuestoForm
                    ?
                    (
                      <FormPresupuesto
                        setPresupuesto={setPresupuesto}
                        setShowPresupuestoForm={setShowPresupuestoForm}
                      />
                    )
                    :
                    (
                      <h2>{presupuesto}</h2>
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
