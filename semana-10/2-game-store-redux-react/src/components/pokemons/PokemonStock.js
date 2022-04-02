import { Component } from "react";
import { connect } from "react-redux";

class PokemonStock extends Component {
  render() {
    return (
      <p className="card-text">Stock: {this.props.gamesReducer.pokemon}</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gamesReducer: state.gamesReducer
  }
};

export default connect(mapStateToProps)(PokemonStock);