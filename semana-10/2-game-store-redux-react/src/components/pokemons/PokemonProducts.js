import pokemonRojo from '../../assets/img/pokemon-rojo.jpg'
import PokemonStock from './PokemonStock';
import PokemonActions from './PokemonActions';
import { Component } from 'react';

class PokemonProducts extends Component {
  render() {
    return (
      <div className="row">
        <section className="col-md-12">
          <div className="card mb-3 text-dark" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pokemonRojo} className="img-fluid rounded-start w-100" alt="Pokemon Rojo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Pokemon Rojo</h5>
                  <PokemonStock />
                  <PokemonActions />
                  <p className="card-text"><small className="text-muted">Última compra: Hace 3 minutos</small></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PokemonProducts;