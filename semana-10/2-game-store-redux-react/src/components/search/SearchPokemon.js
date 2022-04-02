const SearchPokemon = () => {

  const handleChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="text-dark">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="formBuscadorPokemon"
          name="form-buscador-pokemon"
          required
          placeholder="Nombre del Pokémon"
          value='pikachu'
          onChange={handleChange}
        />
        <label htmlFor="">Nombre del Pokémon</label>
      </div>
      <button className="btn btn-warning rimary w-100">Buscar Pokémon</button>
    </form>
  );
}

export default SearchPokemon;