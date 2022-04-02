import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import PokemonsProducts from './components/pokemons/PokemonsProducts';
import SearchPokemon from './components/search/SearchPokemon';
import SearchResult from './components/search/SearchResult';

function App() {
  return (
    <Provider store={store}>
      <section className='container'>
        <h1 className='text-center'>Game Store Redux React</h1>
        <div className="row">
          <section className="col-md-12 my-2">
            <PokemonsProducts />
          </section>
        </div>
        <div className="row">
          <section className="col-md-12 my-2">
            <SearchPokemon />
          </section>
        </div>
        <div className="row">
          <section className="col-md-12 my-2">
            <SearchResult />
          </section>
        </div>
      </section>
    </Provider>
  );
}

export default App;
