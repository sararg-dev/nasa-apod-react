import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from  'react-router-dom' ; 
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fontsource/b612-mono';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/nasa-apod-react">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
