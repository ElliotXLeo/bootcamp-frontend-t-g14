import { useSelector } from "react-redux";

const SearchResult = () => {

  const searchReducers = useSelector((state) => {
    return state.searchReducers
  });

  const { loading, pokemon, error } = searchReducers;
  const { name, sprites, types } = pokemon;

  return (
    <>
      {
        loading
        &&
        <div className="row" >
          <section className="col-md-12 text-center py-3">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
        </div>
      }
      {
        Object.keys(pokemon).length > 0
        &&
        <div className="card text-dark text-center mx-auto" style={{ width: '15rem' }}>
          <img src={sprites.front_default} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{types[0].type.name}</p>
            <a href={sprites.front_default} className="btn btn-primary" target='_blank' rel="noreferrer">Ver</a>
          </div>
        </div>
      }
      {
        error
        &&
        <div className="alert alert-danger" role="alert">
          Pokémon no encontrado
        </div>
      }
    </>
  );
}

export default SearchResult;