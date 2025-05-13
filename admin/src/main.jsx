import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';  // ✅ fixed line
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
