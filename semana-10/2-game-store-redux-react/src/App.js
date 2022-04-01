import { Provider } from 'react-redux';
import './App.css';
import PokemonProducts from './components/pokemons/PokemonProducts';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <main className="main">
        <section className="py-3">
          <div className="container">
            <h1 className="text-center mb-3">Game Store Redux React</h1>
            <PokemonProducts />
          </div>
        </section>
      </main>
    </Provider>
  );
}

export default App;
