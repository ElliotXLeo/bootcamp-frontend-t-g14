const SearchResult = () => {
  return (
    <div className="card text-dark text-center" style={{ width: '18rem' }}>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" className="card-img-top" alt="Pikachu" />
      <div className="card-body">
        <h5 className="card-title">Pikachu</h5>
        <p className="card-text">electric</p>
        <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" className="btn btn-primary" target='_blank' rel="noreferrer">Ver</a>
      </div>
    </div>
  );
}

export default SearchResult;