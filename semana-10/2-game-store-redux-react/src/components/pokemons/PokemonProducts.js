import pokemonRojo from '../../assets/img/pokemon-rojo.jpg';

const PokemonProducts = () => {
  return (
    <div className="row">
      <section className="col-md-12">
        <div class="card mb-3 text-dark" style={{ maxWidth: '540px' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={pokemonRojo} class="img-fluid rounded-start w-100" alt="Pokemon" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Pokemon Rojo</h5>
                <p class="card-text">Stock: 30</p>
                <p class="card-text"><small class="text-muted">Última compra: Hace 3 minutos</small></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PokemonProducts;