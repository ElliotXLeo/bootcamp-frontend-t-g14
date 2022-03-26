import useApi from '../../hooks/useApi';
import Spinner from '../Spinner';
import CardCupcake from './CardCupcake';

const CardCupcakes = ({ title, filter }) => {

  const recurso = `/cupcakes${filter}`;

  const [cupcakes, error] = useApi(recurso);

  if (error) {
    return <h2>Error</h2>
  } else {
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
}
export default CardCupcakes;