import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importo BrowserRouter dhe Routes një herë

import App from './App';
import Linjat from './components/Linjat/linjat'; // Sigurohu që komponenti Linjat është importuar
import Airport from './components/Airport/airport';
import KutiaAnkesave from './components/KutiaAnkesave/kutiaankesave';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />  {/* Rruga për faqen kryesore */}
        <Route path="/linjat" element={<Linjat />} />  {/* Rruga për faqen e linjave */}
        <Route path="/airport" element={<Airport />} /> 
        <Route path="/kutiaankesave" element={<KutiaAnkesave />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
