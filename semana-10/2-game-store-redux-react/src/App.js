import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import PokemonProducts from './components/pokemons/PokemonProducts';

function App() {
  return (
    <Provider store={store}>
      <section className='container'>
        <h1 className='text-center'>Redux Learning R</h1>
        <PokemonProducts />
      </section>
    </Provider>
  );
}

export default App;
