import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/css/index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
);
