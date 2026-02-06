import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./assets/css/stylos.css"
import  AuthProvider  from '../src/context/AuthProvider.jsx';
import { CarritoProvider } from "../src/context/CarritoContext.jsx";

createRoot(document.getElementById('root')).render(
 
  
  <BrowserRouter>
  <StrictMode>
     <AuthProvider>
<CarritoProvider>

    <App />
</CarritoProvider>
    </AuthProvider>
  </StrictMode>
  </BrowserRouter>
  
)
