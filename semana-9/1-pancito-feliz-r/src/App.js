import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Cupcakes from './pages/Cupcakes';

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/nosotros" element={<section className="section animate__animated animate__fadeIn">Nosotros</section>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
