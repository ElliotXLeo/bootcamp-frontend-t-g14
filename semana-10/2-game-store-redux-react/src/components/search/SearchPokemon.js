import { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/searchActions";

const SearchPokemon = () => {

  const dispatch = useDispatch();

  const [formPokemon, setFormPokemon] = useState({
    formName: ''
  });

  const handleChange = (e) => {
    setFormPokemon({
      ...formPokemon,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(formPokemon.formName));
  };

  return (
    <form onSubmit={handleSubmit} className="text-dark">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="formName"
          name="form-bame"
          required
          placeholder="Nombre del Pokémon"
          value={formPokemon.formName}
          onChange={handleChange}
        />
        <label htmlFor="">Nombre del Pokémon</label>
      </div>
      <button className="btn btn-warning rimary w-100">Buscar Pokémon</button>
    </form>
  );
}

export default SearchPokemon;