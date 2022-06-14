import pokemonRojo from '../../assets/img/pokemon-rojo.jpg'
import PokemonsStock from './PokemonsStock';
import PokemonsActions from './PokemonsActions';

const PokemonProducts = () => {
  return (
    <div className="card text-dark mx-auto" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={pokemonRojo} className="img-fluid rounded-start w-100" alt="Pokemon Rojo" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Pokemon Rojo</h5>
            <PokemonsStock />
            <PokemonsActions />
            <p className="card-text"><small className="text-muted">Última compra: Hace 3 minutos</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonProducts;