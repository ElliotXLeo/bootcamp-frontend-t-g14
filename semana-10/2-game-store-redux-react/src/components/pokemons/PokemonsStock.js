import { useSelector } from "react-redux";

const PokemonStock = () => {

  const gamesReducer = useSelector((state) => {
    return (state.gamesReducer);
  });

  return (
    <p className="card-text">Stock: {gamesReducer.pokemon}</p>
  );
}

export default PokemonStock;