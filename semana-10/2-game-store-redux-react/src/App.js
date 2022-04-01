import './App.css';
import PokemonProducts from './components/pokemons/PokemonProducts';

function App() {
  return (
    <>
      <main className="main">
        <section className="py-3">
          <div className="container">
            <h1 className="text-center mb-3">Game Store Redux React</h1>
            <PokemonProducts />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
