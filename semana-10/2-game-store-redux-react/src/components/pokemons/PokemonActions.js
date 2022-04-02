import { useDispatch } from "react-redux";
import { gamesPokemonBuyAction, gamesPokemonReturnAction } from "../../redux/actions/gameStoreActions";

const PokemonActions = () => {

  const dispatch = useDispatch();

  return (
    <div className="btn-group mb-3" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          dispatch(gamesPokemonBuyAction(1));
        }}
      >
        Comprar
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          dispatch(gamesPokemonReturnAction(1));
        }}
      >
        Retornar
      </button>
    </div>
  );
}

export default PokemonActions;