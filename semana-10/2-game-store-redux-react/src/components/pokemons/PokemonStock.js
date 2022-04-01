import { connect } from "react-redux";

const PokemonStock = ({ gamesReducer }) => {
  return (
    <p className="card-text">Stock: {gamesReducer.pokemon}</p>
  );
}

const mapStateToProps = (state) => {
  return {
    gamesReducer: state.gamesReducer
  }
};

export default connect(mapStateToProps)(PokemonStock);