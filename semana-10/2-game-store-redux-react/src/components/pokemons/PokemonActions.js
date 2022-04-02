import { Component } from "react";
import { connect } from "react-redux";
import { gamesPokemonBuyAction, gamesPokemonReturnAction } from "../../redux/actions/gameStoreActions";

class PokemonActions extends Component {
  render() {
    return (
      <div className="btn-group mb-3" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            { this.props.gamesPokemonBuyAction(1) };
          }}
        >
          Comprar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            { this.props.gamesPokemonReturnAction(1) };
          }}
        >
          Retornar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  gamesPokemonBuyAction,
  gamesPokemonReturnAction
};

export default connect(null, mapDispatchToProps)(PokemonActions);